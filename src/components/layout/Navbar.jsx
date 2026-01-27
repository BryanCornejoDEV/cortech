import { useEffect, useRef, useState } from "react"
import Container from "../ui/Container"
import Button from "../ui/Button"
import { site } from "../../config/site"
import { useReducedMotion } from "../../hooks/useReducedMotion"
import { cn } from "../../utils/cn"

const links = [
  { href: "#about", label: "Nosotros" },
  { href: "#services", label: "Servicios" },
  { href: "#cases", label: "Casos" },
  { href: "#process", label: "Proceso" },
  { href: "#faq", label: "Preguntas" },
  { href: "#contact", label: "Contacto" },
]

export default function Navbar() {
  const reducedMotion = useReducedMotion()
  const [hidden, setHidden] = useState(false)
  const hiddenRef = useRef(hidden)

  useEffect(() => {
    hiddenRef.current = hidden
  }, [hidden])

  useEffect(() => {
    const HIDE_AFTER_Y = 96
    const SHOW_ON_UP_PX = 18
    const SHOW_NEAR_TOP_Y = 8

    let lastY = window.scrollY || 0
    let upSinceHidden = 0
    let ticking = false

    const update = () => {
      const y = window.scrollY || 0
      const delta = y - lastY

      if (y <= SHOW_NEAR_TOP_Y) {
        upSinceHidden = 0
        if (hiddenRef.current) setHidden(false)
        lastY = y
        ticking = false
        return
      }

      if (delta > 0) {
        // Scrolling down
        upSinceHidden = 0
        if (!hiddenRef.current && y > HIDE_AFTER_Y) setHidden(true)
      } else if (delta < 0) {
        // Scrolling up
        if (hiddenRef.current) {
          upSinceHidden += -delta
          if (upSinceHidden >= SHOW_ON_UP_PX) {
            setHidden(false)
            upSinceHidden = 0
          }
        }
      }

      lastY = y
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(update)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur-xl",
        "will-change-transform transition-transform ease-out",
        reducedMotion ? "duration-0" : "duration-200",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <a className="text-sm font-extrabold tracking-[0.18em]" href="/">
            {site.brand}
            <span className="text-white/50">®</span>
          </a>
          <div className="hidden text-xs tracking-[0.28em] text-white/50 lg:block">[TIENDA DE TECNOLOGÍA]</div>
        </div>

        <nav className="hidden items-center gap-6 text-xs tracking-[0.22em] text-white/70 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a className="hidden text-xs text-white/60 sm:block" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <Button as="a" href="#contact" className="h-10 px-4 py-0 text-xs">
            CONSULTA GRATIS <span className="text-white/80">↗</span>
          </Button>
        </div>
      </Container>
    </div>
  )
}
