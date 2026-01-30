import { motion as Motion } from "framer-motion"
import { Link } from "react-router-dom"
import Container from "../components/ui/Container"
import Button from "../components/ui/Button"
import Divider from "../components/ui/Divider"
import SectionTitle from "../components/ui/SectionTitle"
import GlowBackdrop from "../components/common/GlowBackdrop"
import Reveal from "../components/common/Reveal"
import MarqueeGhost from "../components/common/MarqueeGhost"
import DeviceMock from "../components/common/DeviceMock"
import Three from "../components/common/Three"
import { site } from "../config/site"

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] tracking-[0.22em] text-white/70 shadow-[inset_0_0_0_1px_rgba(255,255,255,.10)]">
      {children}
    </span>
  )
}

function Accordion({ items }) {
  return (
    <div className="divide-y divide-white/10 rounded-[24px] border border-white/10 bg-black/40 backdrop-blur-xl">
      {items.map((it, idx) => (
        <details key={it.title} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
            <div className="text-sm font-semibold tracking-wide">
              {String(idx + 1).padStart(2, "0")}. {it.title}
            </div>
            <span className="text-white/60 transition group-open:rotate-45">+</span>
          </summary>
          <div className="mt-3 text-sm leading-relaxed text-white/60">{it.desc}</div>
        </details>
      ))}
    </div>
  )
}

export default function Landing() {
  return (
    <div className="relative min-h-screen bg-black">
      <GlowBackdrop intensity={1} />

      {/* HEROE */}
      <header className="relative isolate">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${site.images.hero})` }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_20%,rgba(194,2,3,.35),transparent_55%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.35),rgba(0,0,0,.80))]"
        />
        <Container className="relative z-10 py-16 sm:py-20 md:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <Reveal>
                <div className="flex flex-wrap items-center gap-3">
                  <Pill>[ PÁGINA DE INICIO ]</Pill>
                  <Pill>[ TIENDA DE TECNOLOGÍA ]</Pill>
                  <Pill>[ 2026 ]</Pill>
                </div>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 className="mt-8 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
                  <span className="text-white">{site.heroTitleA}</span>{" "}
                  <span className="text-white/85">{site.heroTitleB}</span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/65">
                  Cortech es una empresa de venta de tecnología enfocada en rendimiento real:
                  equipos, componentes y soluciones para trabajo y juegos, con asesoría directa,
                  cotización rápida y soporte.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button as="a" href="#contact">{site.ctaPrimary} <span>↗</span></Button>
                  <Button as={Link} to="/catalogo" variant="ghost">{site.ctaSecondary}</Button>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-wrap items-center gap-3 text-xs text-white/60">
                  <span className="tracking-[0.22em]">[ CON LA CONFIANZA DE EQUIPOS ]</span>
                  <span className="opacity-40">—</span>
                  <span className="font-semibold">DESARROLLO</span>
                  <span className="font-semibold">CREADORES</span>
                  <span className="font-semibold">EMPRESAS</span>
                  <span className="font-semibold">JUGADORES</span>
                </div>
              </Reveal>
            </div>

            {/* Visual del héroe (estilo capa roja -> silueta tech) */}
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_50%_20%,rgba(194,2,3,.55),transparent_55%)] blur-2xl" />
              <Motion.div
                className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/50 shadow-[0_60px_180px_rgba(0,0,0,.75)]"
                initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative h-[320px] sm:h-[420px]">
                  {/* Fondo/atmósfera */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,.06),transparent_60%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_35%,color-mix(in_oklab,var(--color-red)_55%,transparent)_0%,transparent_60%)] opacity-70" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.18),rgba(0,0,0,.55),rgba(0,0,0,.88))]" />
                  <div className="absolute inset-0 specks" />

                  {/* Logo 3D (Three.js) */}
                  <Three />
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-white/10 p-5">
                  <div className="text-xs tracking-[0.22em] text-white/60">
                    TRABAJAMOS EN LA INTERSECCIÓN DE RENDIMIENTO Y CONFIABILIDAD
                  </div>
                  <a href="#contact" className="text-xs text-white/80 hover:text-white">
                    COMPRA AHORA ↗
                  </a>
                </div>
              </Motion.div>
            </div>
          </div>
        </Container>
      </header>

      {/* Fantasma de EFICIENCIA RAPIDEZ PRODUCTIVIDAD */}
      <section className="relative py-10">
        <Container>
          <MarqueeGhost text="EFICIENCIA RAPIDEZ PRODUCTIVIDAD" className="opacity-80" />
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-[24px] border border-white/10 bg-black/45 p-6 backdrop-blur-xl">
                <div className="text-xs tracking-[0.28em] text-white/60">[ RETO ] / 01</div>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  Crear una landing de alto impacto para Cortech, enfocada en confianza, rendimiento
                  y conversión: cotización rápida, catálogo y soporte.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="rounded-[24px] border border-white/10 bg-black/45 p-6 backdrop-blur-xl">
                <div className="text-xs tracking-[0.28em] text-white/60">[ SOLUCIÓN ] / 02</div>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  Diseño oscuro con acento rojo, tipografía masiva, grano/cinemático y módulos
                  claros: servicios, casos, equipo, proceso y preguntas frecuentes, con animaciones suaves.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* NOSOTROS */}
      <section id="about" className="relative py-16 sm:py-20">
        <Container>
          <SectionTitle
            kicker="QUIÉNES SOMOS"
            title="Cortech es una tienda de tecnología diseñada para el rendimiento."
            right="Claridad, rapidez y resultados medibles — de la especificación a la entrega."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {site.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="rounded-[24px] border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
                  <div className="text-xs tracking-[0.28em] text-[--color-red]">[{v.title}]</div>
                  <div className="mt-3 text-sm text-white/70">{v.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* SERVICIOS (acordeón similar al mock) */}
      <section id="services" className="relative isolate py-16 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-[0.12]"
          style={{ backgroundImage: `url(${site.images.services})` }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.78),rgba(0,0,0,.92))]"
        />
        <Container className="relative z-10">
          <SectionTitle kicker="NUESTROS SERVICIOS" title="¿Qué hacemos?" right="Todo lo que necesitas — de partes a compras." />
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_.9fr]">
            <Reveal>
              <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(to_bottom,rgba(194,2,3,.25),rgba(0,0,0,.65))] p-7">
                <div className="text-5xl font-extrabold tracking-tight sm:text-6xl">
                  TENEMOS SOLUCIONES PARA <span className="text-white/70">CUALQUIER TIPO</span> DE NEGOCIO
                </div>
                <div className="mt-6 text-sm text-white/65">
                  Oficina, ingeniería, creadores, comercio, educación y juegos. Cotiza por unidad o por volumen.
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Pill>portátiles</Pill>
                  <Pill>estaciones de trabajo</Pill>
                  <Pill>juegos</Pill>
                  <Pill>red</Pill>
                  <Pill>soporte</Pill>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <Accordion items={site.services} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* CASOS */}
      <section id="cases" className="relative isolate py-16 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-[0.12]"
          style={{ backgroundImage: `url(${site.images.cases})` }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.78),rgba(0,0,0,.92))]"
        />
        <Container className="relative z-10">
          <SectionTitle kicker="VENTAJAS Y CASOS" title="Casos que hablan por nosotros" right="Resultados reales, configuraciones reales." />
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-[24px] border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div className="text-xs tracking-[0.28em] text-white/60">Objetivo del cliente</div>
                  <Pill>Compras</Pill>
                </div>
                <div className="mt-4 text-xl font-bold">Equipar equipo de desarrollo (15 portátiles)</div>
                <Divider />
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-white/70">
                  <div><span className="text-white/50">Presupuesto:</span> $18,900</div>
                  <div><span className="text-white/50">Entrega:</span> 72h</div>
                  <div><span className="text-white/50">Configuración:</span> Preconfigurado</div>
                  <div><span className="text-white/50">Resultado:</span> Listo para usar</div>
                </div>
                <a href="#contact" className="mt-6 inline-flex text-xs tracking-[0.22em] text-white/80 hover:text-white">
                  HABLEMOS DEL PROYECTO ↗
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="rounded-[24px] border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div className="text-xs tracking-[0.28em] text-white/60">Objetivo del cliente</div>
                  <Pill>Rendimiento</Pill>
                </div>
                <div className="mt-4 text-xl font-bold">Armar juegos + transmisión (RTX + captura)</div>
                <Divider />
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-white/70">
                  <div><span className="text-white/50">Presupuesto:</span> $2,450</div>
                  <div><span className="text-white/50">Entrega:</span> 48h</div>
                  <div><span className="text-white/50">Ajuste:</span> OC estable</div>
                  <div><span className="text-white/50">Resultado:</span> 1440p fluido</div>
                </div>
                <a href="#contact" className="mt-6 inline-flex text-xs tracking-[0.22em] text-white/80 hover:text-white">
                  HABLEMOS DE MI PROYECTO ↗
                </a>
              </div>
            </Reveal>
          </div>

          {/* Fila estilo mock móvil */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Reveal>
              <DeviceMock className="mx-auto w-full max-w-[360px]">
                <div className="bg-[linear-gradient(to_bottom,rgba(194,2,3,.35),rgba(0,0,0,.85))] p-6">
                  <div className="text-xs tracking-[0.28em] text-white/60">¿QUÉ OBTENDRÁS?</div>
                  <div className="mt-4 text-2xl font-extrabold">Rendimiento estimado y especificaciones reales</div>
                  <div className="mt-6">
                    <Button as="a" href="#contact" className="w-full">HABLEMOS ↗</Button>
                  </div>
                </div>
              </DeviceMock>
            </Reveal>
            <Reveal delay={0.06}>
              <DeviceMock className="mx-auto w-full max-w-[360px]">
                <div className="p-6">
                  <div className="text-xs tracking-[0.28em] text-white/60">(CASOS)</div>
                  <div className="mt-3 text-2xl font-extrabold">Configuraciones que hablan por nosotros</div>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                    + 200+ entregas<br />+ compras empresariales<br />+ gestión de garantías
                  </div>
                </div>
              </DeviceMock>
            </Reveal>
            <Reveal delay={0.12}>
              <DeviceMock className="mx-auto w-full max-w-[360px]">
                <div className="p-6">
                  <div className="text-xs tracking-[0.28em] text-white/60">CORTECH</div>
                  <div className="mt-3 text-2xl font-extrabold">
                    Resultados <span className="text-[--color-red]">medibles</span> para empresas
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/70">
                    <div className="rounded-xl bg-white/5 p-3">Cotizaciones rápidas</div>
                    <div className="rounded-xl bg-white/5 p-3">Soporte</div>
                    <div className="rounded-xl bg-white/5 p-3">Entrega</div>
                    <div className="rounded-xl bg-white/5 p-3">Garantía</div>
                  </div>
                </div>
              </DeviceMock>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* PROCESO */}
      <section id="process" className="relative py-16 sm:py-20">
        <Container>
          <SectionTitle kicker="PROCESO" title="Cómo trabajamos" right="Pasos simples, sin fricción." />
          <div className="mt-10 rounded-[24px] border border-white/10 bg-black/40 backdrop-blur-xl">
            {[
              {
                t: "LEVANTAMIENTO",
                d: "Entendemos tu necesidad, presupuesto y fecha. Te proponemos 2–3 configuraciones.",
              },
              {
                t: "ANÁLISIS DE REQUERIMIENTOS",
                d: "Revisamos compatibilidad, rendimiento, garantías y disponibilidad real.",
              },
              {
                t: "PROPUESTA",
                d: "Cotización clara con alternativas (mejor / balance / económico).",
              },
              {
                t: "ENTREGA Y CONFIGURACIÓN",
                d: "Entregamos y, si aplica, dejamos equipos listos: cuentas, drivers y pruebas.",
              },
              {
                t: "SOPORTE",
                d: "Soporte post-venta y gestión de garantía rápida.",
              },
            ].map((row, i) => (
              <div key={row.t} className="grid grid-cols-1 gap-4 border-b border-white/10 p-6 last:border-b-0 md:grid-cols-[260px_1fr_auto] md:items-center">
                <div className="text-sm font-extrabold tracking-wide">
                  <span className="text-[--color-red]">[{String(i + 1).padStart(2, "0")}]</span>{" "}
                  {row.t}
                </div>
                <div className="text-sm text-white/60">{row.d}</div>
                <div className="text-white/60">↗</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section id="faq" className="relative py-16 sm:py-20">
        <Container>
          <SectionTitle kicker="PREGUNTAS FRECUENTES" title="Preguntas respondidas." right="Respuestas rápidas. Expectativas claras." />
          <div className="mt-10 divide-y divide-white/10 rounded-[24px] border border-white/10 bg-black/40 backdrop-blur-xl">
            {site.faqs.map((f) => (
              <details key={f.q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <div className="text-sm font-semibold">{f.q}</div>
                  <span className="text-white/60 transition group-open:rotate-45">+</span>
                </summary>
                <div className="mt-3 text-sm text-white/60">{f.a}</div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* CONTACTO */}
      <section id="contact" className="relative py-16 sm:py-20">
        <Container>
          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(to_bottom,rgba(194,2,3,.28),rgba(0,0,0,.80))] p-8 sm:p-10">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
              <div>
                <div className="text-xs tracking-[0.28em] text-white/60">[ OFERTA ]</div>
                <h3 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                  ¿CANSADO DE COMPRAS TECNOLÓGICAS LENTAS? <span className="text-[--color-red]">LO SOLUCIONAMOS</span>
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65">
                  Cuéntanos qué necesitas y te enviamos una cotización con opciones claras (mejor, balance, económico).
                </p>
                <div className="mt-6 text-sm text-white/70">
                  <div className="tracking-[0.22em] text-white/60">EMAIL</div>
                  <div className="mt-1 text-2xl font-extrabold">{site.email}</div>
                </div>
              </div>

              <form
                className="rounded-[24px] border border-white/10 bg-black/40 p-6 backdrop-blur-xl"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid gap-4">
                  <label className="grid gap-2">
                    <span className="text-xs tracking-[0.22em] text-white/60">NOMBRE</span>
                    <input
                      className="h-12 rounded-2xl border border-white/10 bg-black/40 px-4 text-sm outline-none focus:border-white/25"
                      placeholder="Tu nombre"
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-xs tracking-[0.22em] text-white/60">TELÉFONO</span>
                    <input
                      className="h-12 rounded-2xl border border-white/10 bg-black/40 px-4 text-sm outline-none focus:border-white/25"
                      placeholder="Tu número"
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-xs tracking-[0.22em] text-white/60">EMAIL</span>
                    <input
                      className="h-12 rounded-2xl border border-white/10 bg-black/40 px-4 text-sm outline-none focus:border-white/25"
                      placeholder="you@email.com"
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-xs tracking-[0.22em] text-white/60">¿QUÉ NECESITAS?</span>
                    <textarea
                      className="min-h-[120px] rounded-2xl border border-white/10 bg-black/40 p-4 text-sm outline-none focus:border-white/25"
                      placeholder="Especificaciones, cantidad, presupuesto, fecha límite..."
                    />
                  </label>

                  <Button type="submit" className="h-12">
                    OBTENER COTIZACIÓN ↗
                  </Button>

                  <div className="text-[11px] leading-relaxed text-white/50">
                    Al hacer clic en el botón, aceptas el procesamiento de tus datos personales.
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
