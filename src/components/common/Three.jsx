import * as THREE from "three"
import { useMemo, useRef } from "react"
import { Canvas, extend, useFrame } from "@react-three/fiber"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { shaderMaterial } from "@react-three/drei"
import { useReducedMotion } from "../../hooks/useReducedMotion"

const HorizonMaterial = shaderMaterial(
  {
    uTime: 0,
    uResolution: new THREE.Vector2(1, 1),
    uBg: new THREE.Color("#000000"),
    uGlow: new THREE.Color("#c20203"),
    uSun: new THREE.Color("#c20203"),
  },
  /* glsl */ `
    varying vec2 vUv;
    void main(){
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,
  /* glsl */ `
    precision highp float;
    uniform float uTime;
    uniform vec2 uResolution;
    uniform vec3 uBg;
    uniform vec3 uGlow;
    uniform vec3 uSun;
    varying vec2 vUv;

    float hash21(vec2 p){
      p = fract(p*vec2(123.34, 345.45));
      p += dot(p, p+34.345);
      return fract(p.x*p.y);
    }

    float valueNoise(vec2 p){
      vec2 i = floor(p);
      vec2 f = fract(p);
      float a = hash21(i);
      float b = hash21(i + vec2(1.0, 0.0));
      float c = hash21(i + vec2(0.0, 1.0));
      float d = hash21(i + vec2(1.0, 1.0));
      vec2 u = f*f*(3.0 - 2.0*f);
      return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
    }

    float fbm(vec2 p){
      float v = 0.0;
      float a = 0.5;
      mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
      for(int i=0;i<5;i++){
        v += a * valueNoise(p);
        p = m * p;
        a *= 0.55;
      }
      return v;
    }

    void main(){
      // Usar vUv evita desalineaciones en resize/DPR (se mantiene centrado en el mesh)
      vec2 uv = vUv;
      vec2 p = uv * 2.0 - 1.0;
      p.x *= uResolution.x / max(uResolution.y, 1.0);

      // Geometría del “planeta” (círculo desplazado hacia abajo)
      vec2 c = vec2(0.0, -0.62);
      float r = 1.28;

      // Render aditivo: solo emitimos luz (el fondo viene del layout)
      vec3 col = vec3(0.0);

      // Horizonte: y del círculo para un x dado
      float under = r*r - p.x*p.x;
      float hasArc = step(0.0, under);
      float yCircle = c.y + sqrt(max(under, 0.0));

      // Distancia vertical al arco y altura por encima del horizonte
      float distArc = abs(p.y - yCircle);
      float above = p.y - yCircle;
      float aaH = max(fwidth(above) * 1.25, 0.0005);
      float isAbove = smoothstep(-aaH, aaH, above);

      // Línea del horizonte anti-aliased (evita “dientes” / pixelado)
      float aa = max(fwidth(distArc) * 1.75, 0.0005);
      float line = smoothstep(0.012 + aa, 0.0 + aa, distArc) * hasArc;
      line *= smoothstep(1.05, 0.38, abs(p.x));

      // Atmósfera: “scattering” por encima del horizonte
      float atm = exp(-above * 4.3) * isAbove * hasArc;
      atm *= exp(-abs(p.x) * 1.25);

      // Textura suave (sin ruido por-píxel para evitar aspecto “granulado/pixeleado”)
      float texture = fbm(p * 2.15 + vec2(uTime * 0.015, -uTime * 0.012));
      atm *= (0.90 + texture * 0.16);
      line *= (0.95 + texture * 0.08);

      // “Sol” detrás del planeta: core cálido + halo
      vec2 sunPos = vec2(0.0, c.y + r);
      float sd = length(p - sunPos);
      float sunCore = exp(-sd * 38.0);
      float sunHalo = exp(-sd * 9.5);
      sunHalo *= smoothstep(0.9, 0.1, p.y - (sunPos.y - 0.12));

      // Mezcla de color: glow frío + núcleo cálido del sol (paleta)
      vec3 glowCol = uGlow;
      vec3 sunCol = mix(uSun, vec3(1.0), 0.35);
      col += glowCol * (atm * 0.85 + line * 1.35);
      col += sunCol * (sunCore * 0.14 + sunHalo * 0.12);
      col += glowCol * (sunHalo * 0.20);

      // Vignette (oscurece bordes) + micro-grain
      float vig = smoothstep(1.45, 0.45, length(p));
      col *= vig;
      // Grain desactivado aquí: ya existe textura/grano en CSS del layout.

      col = max(col, vec3(0.0));
      float a = clamp((atm * 0.9 + line * 1.4 + sunHalo * 0.45 + sunCore * 0.2) * vig, 0.0, 1.0);
      gl_FragColor = vec4(col, a);
    }
  `
)

extend({ HorizonMaterial })

function Horizon({ bg, glow, sun }) {
  const reduced = useReducedMotion()
  const materialRef = useRef()

  useFrame(({ clock, size }) => {
    if (!materialRef.current) return
    materialRef.current.uResolution.set(size.width, size.height)
    materialRef.current.uTime = reduced ? 0 : clock.getElapsedTime()
  })

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <horizonMaterial
        ref={materialRef}
        uBg={bg}
        uGlow={glow}
        uSun={sun}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  )
}

function usePaletteColors() {
  return useMemo(() => {
    const css = typeof window !== "undefined" ? getComputedStyle(document.documentElement) : null
    const bg = new THREE.Color(css?.getPropertyValue("--color-bg")?.trim() || "#000000")
    const red = new THREE.Color(css?.getPropertyValue("--color-red")?.trim() || "#c20203")

    // Glow rojo (paleta del proyecto): rojo + un toque de blanco para brillo
    const glow = red.clone().lerp(new THREE.Color("#ffffff"), 0.14)

    return { bg, red, glow }
  }, [])
}

export default function Three() {
  const { bg, red, glow } = usePaletteColors()

  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas
        orthographic
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 1], zoom: 1 }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0)
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.toneMappingExposure = 1.15
          gl.outputColorSpace = THREE.SRGBColorSpace
        }}
      >
        <Horizon bg={bg} glow={glow} sun={red} />

        <EffectComposer>
          <Bloom luminanceThreshold={0.12} luminanceSmoothing={0.28} intensity={1.35} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
