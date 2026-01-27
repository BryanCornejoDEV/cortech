import { motion as Motion } from "framer-motion"
import { Link } from "react-router-dom"
import Container from "../components/ui/Container"
import Button from "../components/ui/Button"
import SectionTitle from "../components/ui/SectionTitle"
import Divider from "../components/ui/Divider"
import GlowBackdrop from "../components/common/GlowBackdrop"
import Reveal from "../components/common/Reveal"
import { fadeUp, stagger } from "../lib/motion"
import { useReducedMotion } from "../hooks/useReducedMotion"

const products = [
  {
    id: "ct-001",
    name: "Producto 01",
    tag: "Equipo / Accesorio",
    desc: "Consulta disponibilidad y opciones de configuración.",
    image: "/catalogo/1.png",
  },
  {
    id: "ct-002",
    name: "Producto 02",
    tag: "Equipo / Accesorio",
    desc: "Rendimiento real para trabajo o juegos.",
    image: "/catalogo/2.png",
  },
  {
    id: "ct-003",
    name: "Producto 03",
    tag: "Equipo / Accesorio",
    desc: "Te recomendamos la mejor alternativa según tu uso.",
    image: "/catalogo/3.png",
  },
  {
    id: "ct-004",
    name: "Producto 04",
    tag: "Equipo / Accesorio",
    desc: "Cotización rápida con soporte directo.",
    image: "/catalogo/4.png",
  },
  {
    id: "ct-005",
    name: "Producto 05",
    tag: "Equipo / Accesorio",
    desc: "Opciones por unidad o por volumen.",
    image: "/catalogo/5.png",
  },
  {
    id: "ct-006",
    name: "Producto 06",
    tag: "Equipo / Accesorio",
    desc: "Entrega ágil y garantía por marca.",
    image: "/catalogo/6.png",
  },
  {
    id: "ct-007",
    name: "Producto 07",
    tag: "Equipo / Accesorio",
    desc: "Dinos tu presupuesto y te armamos opciones.",
    image: "/catalogo/7.png",
  },
]

function ProductCard({ product, reducedMotion }) {
  return (
    <Motion.article
      variants={fadeUp}
      whileHover={reducedMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={
        "group relative overflow-hidden rounded-[24px] border border-white/10 bg-black/40 backdrop-blur-xl"
      }
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(194,2,3,.30),transparent_55%)]" />
      </div>

      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover opacity-95 transition duration-300 group-hover:scale-[1.03]"
        />
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,.75))]" />
        <div className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-[11px] tracking-[0.22em] text-white/70 shadow-[inset_0_0_0_1px_rgba(255,255,255,.12)]">
          {product.id.toUpperCase()}
        </div>
      </div>

      <div className="relative p-5">
        <div className="text-xs tracking-[0.28em] text-[--color-red]">[{product.tag}]</div>
        <h3 className="mt-2 text-lg font-extrabold tracking-tight text-white">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/65">{product.desc}</p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="text-xs tracking-[0.22em] text-white/55">[ CONSULTAR PRECIO ]</div>
          <Button
            as="a"
            href="#contact"
            className="h-10 px-4 py-0 text-xs"
          >
            COTIZAR <span className="text-white/80">↗</span>
          </Button>
        </div>
      </div>
    </Motion.article>
  )
}

export default function Catalogo() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="relative min-h-screen bg-black">
      <GlowBackdrop intensity={1} />

      <header className="relative isolate">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_20%,rgba(194,2,3,.35),transparent_55%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.35),rgba(0,0,0,.90))]"
        />

        <Container className="relative z-10 py-10 sm:py-12">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-xs tracking-[0.28em] text-white/60">[ CATÁLOGO ]</div>
                <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  Productos disponibles
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65">
                  Explora el catálogo. Si quieres precio exacto o variantes (RAM/SSD/GPU, etc.),
                  envíanos tu requerimiento y te cotizamos.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button as={Link} to="/" variant="ghost" className="h-10 px-4 py-0 text-xs">
                  VOLVER <span className="text-white/80">↩</span>
                </Button>
                <Button as="a" href="#grid" className="h-10 px-4 py-0 text-xs">
                  VER PRODUCTOS <span className="text-white/80">↘</span>
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="mt-8">
            <Divider />
          </div>
        </Container>
      </header>

      <main className="relative pb-16 sm:pb-20">
        <Container>
          <SectionTitle
            kicker="CATÁLOGO"
            title="Cards por producto"
            right="Mismo estilo, animaciones suaves y enfoque a conversión."
          />

          <Motion.div
            id="grid"
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial={reducedMotion ? false : "hidden"}
            whileInView={reducedMotion ? undefined : "show"}
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {products.map((p) => (
              <ProductCard key={p.id} product={p} reducedMotion={reducedMotion} />
            ))}
          </Motion.div>

          <Reveal delay={0.08}>
            <div className="mt-12 rounded-[24px] border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
              <div className="text-xs tracking-[0.28em] text-white/60">[ NOTA ]</div>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Si quieres que cada card tenga nombre/precio real, pásame la lista (o un CSV/Excel) y
                lo dejamos dinámico. Por ahora usa las imágenes de <span className="text-white/80">/public/catalogo</span>.
              </p>
            </div>
          </Reveal>
        </Container>
      </main>
    </div>
  )
}
