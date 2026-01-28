import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useReducedMotion } from "../../hooks/useReducedMotion"
import { cn } from "../../utils/cn"

const SECTION_KEYS = ["about", "services", "cases", "process", "faq", "contact"]

function HomeIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function InfoIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M12 10.5V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 7.5h.01" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}

function WrenchIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M14.7 6.3a4.8 4.8 0 0 0-6.4 6.4L3.7 17.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l4.6-4.6a4.8 4.8 0 0 0 6.4-6.4l-2.1 2.1-2.8-2.8 1.9-2.3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M9 7V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4 9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M4 13h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function ListIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M8 6h13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 12h13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 18h13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M3.5 6h.01" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M3.5 12h.01" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M3.5 18h.01" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}

function QuestionIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M10.6 9.3a1.9 1.9 0 0 1 3.2 1.3c0 1.3-1.1 1.7-1.7 2.1-.5.3-.7.6-.7 1.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M12 17.5h.01" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}

function MailIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="m4 8 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )
}

function GridIcon(props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Navbar() {
  const reducedMotion = useReducedMotion()
  const location = useLocation()
  const navigate = useNavigate()

  const barRef = useRef(null)
  const itemRefs = useRef({})
  const [scrollKey, setScrollKey] = useState("home")
  const [spotX, setSpotX] = useState(null)

  const items = useMemo(
    () => [
      { key: "home", label: "Inicio", to: "/", icon: HomeIcon },
      { key: "about", label: "Nosotros", to: "/#about", icon: InfoIcon },
      { key: "services", label: "Servicios", to: "/#services", icon: WrenchIcon },
      { key: "cases", label: "Casos", to: "/#cases", icon: BriefcaseIcon },
      { key: "process", label: "Proceso", to: "/#process", icon: ListIcon },
      { key: "faq", label: "Preguntas", to: "/#faq", icon: QuestionIcon },
      { key: "contact", label: "Contacto", to: "/#contact", icon: MailIcon },
      { key: "catalogo", label: "Catálogo", to: "/catalogo", icon: GridIcon },
    ],
    []
  )

  const activeKey = useMemo(() => {
    if (location.pathname === "/catalogo") return "catalogo"
    if (location.pathname !== "/") return "home"

    const hash = (location.hash || "").replace("#", "")
    const hashKey = SECTION_KEYS.includes(hash) ? hash : null
    return scrollKey || hashKey || "home"
  }, [location.pathname, location.hash, scrollKey])

  // Scroll into view when landing with hash (e.g., from /catalogo -> /#contact)
  useEffect(() => {
    if (location.pathname !== "/") return
    if (!location.hash) return
    const id = location.hash.replace("#", "")
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" })
  }, [location.pathname, location.hash, reducedMotion])

  // Move active key by scroll position (Landing only)
  useEffect(() => {
    if (location.pathname !== "/") return

    const els = SECTION_KEYS.map((id) => document.getElementById(id)).filter(Boolean)
    if (els.length === 0) return

    let raf = 0

    const onScrollTop = () => {
      if (raf) return
      raf = window.requestAnimationFrame(() => {
        raf = 0
        if ((window.scrollY || 0) < 40) setScrollKey("home")
      })
    }

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))
        if (visible.length === 0) return
        const id = visible[0].target.id
        if (SECTION_KEYS.includes(id)) setScrollKey(id)
      },
      {
        root: null,
        threshold: [0.18, 0.28, 0.38, 0.5],
        rootMargin: "-20% 0px -55% 0px",
      }
    )

    els.forEach((el) => io.observe(el))
    window.addEventListener("scroll", onScrollTop, { passive: true })

    return () => {
      if (raf) window.cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener("scroll", onScrollTop)
    }
  }, [location.pathname])

  // Compute spotlight X position.
  useLayoutEffect(() => {
    const bar = barRef.current
    const activeEl = itemRefs.current?.[activeKey]
    if (!bar || !activeEl) return

    const compute = () => {
      const barRect = bar.getBoundingClientRect()
      const itemRect = activeEl.getBoundingClientRect()
      const x = itemRect.left - barRect.left + itemRect.width / 2
      setSpotX(x)
    }

    compute()
    window.addEventListener("resize", compute)
    return () => window.removeEventListener("resize", compute)
  }, [activeKey])

  const go = (to) => {
    if (!to) return
    if (to === "/") {
      navigate("/")
      return
    }

    if (to.startsWith("/#")) {
      const hash = to.slice(1) // '#about'
      if (location.pathname !== "/") {
        navigate(to)
        return
      }
      window.history.pushState(null, "", hash)
      const id = hash.replace("#", "")
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" })
      return
    }

    navigate(to)
  }

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-40",
        "pt-[calc(env(safe-area-inset-top)+12px)]",
        "will-change-transform"
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-4">
        <div
          ref={barRef}
          className={cn(
            "relative isolate",
            "rounded-full border border-white/10 bg-black/70 backdrop-blur-xl",
            "shadow-[0_30px_90px_rgba(0,0,0,.70)]"
          )}
        >
          {/* Spotlight */}
          <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
            <div
              className={cn(
                "absolute top-0 h-full w-24 sm:w-40 -translate-x-1/2",
                "transition-[left] ease-out",
                reducedMotion ? "duration-0" : "duration-300"
              )}
              style={{ left: spotX ?? "50%" }}
            >
              {/* small red cap */}
              <div className="absolute left-1/2 top-0 h-1.5 w-10 sm:w-14 -translate-x-1/2 rounded-b-full bg-[--color-red] shadow-[0_8px_22px_rgba(194,2,3,.55)]" />
              {/* cone */}
              <div className="absolute left-1/2 top-1.5 h-12 sm:h-16 w-24 sm:w-40 -translate-x-1/2 [clip-path:polygon(50%_0,0_100%,100%_100%)] bg-[linear-gradient(to_bottom,rgba(194,2,3,.55),transparent)]" />
              {/* glow blur */}
              <div className="absolute left-1/2 top-2.5 h-14 sm:h-20 w-28 sm:w-44 -translate-x-1/2 [clip-path:polygon(50%_0,0_100%,100%_100%)] bg-[linear-gradient(to_bottom,rgba(194,2,3,.22),transparent)] blur-md" />
            </div>
          </div>

          {/* Items */}
          <nav
            className={cn(
              "relative z-10 flex items-center gap-1 px-2 py-2",
              "overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]",
              "[&::-webkit-scrollbar]:hidden"
            )}
            aria-label="Navegación"
          >
            {items.map((it) => {
              const active = it.key === activeKey
              const IconCmp = it.icon
              return (
                <button
                  key={it.key}
                  ref={(el) => {
                    if (!el) return
                    itemRefs.current[it.key] = el
                  }}
                  type="button"
                  onClick={() => go(it.to)}
                  className={cn(
                    "group relative flex shrink-0 items-center justify-center",
                    "rounded-full px-2 py-1.5 sm:px-3 sm:py-2",
                    "text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-red]/60"
                  )}
                  aria-label={it.label}
                  aria-current={active ? "page" : undefined}
                >
                  <span
                    className={cn(
                      "relative flex items-center gap-2",
                      active ? "text-white" : "text-white/55 group-hover:text-white/80"
                    )}
                  >
                    <span className={cn("sm:hidden", active ? "text-[--color-red]" : "text-white/55")}
                      aria-hidden
                    >
                      <IconCmp />
                    </span>
                    <span className="hidden sm:block">{it.label}</span>
                  </span>
                  <span className="sr-only">{it.label}</span>
                </button>
              )
            })}
          </nav>
        </div>
      </div>
    </div>
  )
}
