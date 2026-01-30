import Container from "../ui/Container"
import Button from "../ui/Button"
import { site } from "../../config/site"
import { cn } from "../../utils/cn"

function IconSparkle(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2l1.3 4.1L17.5 7.5l-4.2 1.4L12 13l-1.3-4.1L6.5 7.5l4.2-1.4L12 2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M19 12l.8 2.5 2.2.7-2.2.7L19 18l-.8-2.5-2.2-.7 2.2-.7L19 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconCube(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2 21 7v10l-9 5-9-5V7l9-5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M12 2v20" stroke="currentColor" strokeWidth="1.8" opacity=".7" />
      <path d="M3 7l9 5 9-5" stroke="currentColor" strokeWidth="1.8" opacity=".7" />
    </svg>
  )
}

function IconShield(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2 20 6v6c0 5.2-3.4 9.7-8 10-4.6-.3-8-4.8-8-10V6l8-4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M9.5 12.2 11 13.7l3.6-3.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity=".7" />
    </svg>
  )
}

function IconChat(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20 15a4 4 0 0 1-4 4H9l-5 3V7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M8 8h8M8 12h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity=".7" />
    </svg>
  )
}

const links = [
  { href: "#about", label: "Nosotros", Icon: IconSparkle, mobile: true },
  { href: "#services", label: "Servicios", Icon: IconCube, mobile: true },
  { href: "#cases", label: "Casos", Icon: IconShield, mobile: false },
  { href: "#process", label: "Proceso", Icon: IconCube, mobile: false },
  { href: "#faq", label: "Preguntas", Icon: IconChat, mobile: false },
  { href: "#contact", label: "Contacto", Icon: IconChat, mobile: true },
]

function NavLink({ href, label, Icon, className }) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-[999px] px-3 py-2 text-[11px] tracking-[0.22em]",
        "text-white/80 transition",
        "hover:text-white hover:bg-white/5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-red]/60 focus-visible:ring-offset-0",
        className
      )}
    >
      <span
        className={cn(
          "grid size-7 place-items-center rounded-full",
          "bg-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,.10)]",
          "text-white/75 transition",
          "group-hover:text-white",
          "group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,.14),0_10px_30px_rgba(194,2,3,.18)]"
        )}
      >
        <Icon className="size-4" />
      </span>
      <span className="hidden sm:inline">{label}</span>
      <span className="sr-only">{label}</span>
    </a>
  )
}

export default function Navbar() {
  return (
    <div
      className={cn(
        "fixed inset-x-0 top-5 z-50"
      )}
    >
      <Container className="flex justify-center">
        <div className="pointer-events-auto relative w-full max-w-300">
          {/* red glow */}
          <div
            aria-hidden="true"
            className={cn(
              "absolute -inset-6 -z-10 rounded-[999px] blur-2xl",
              "bg-[radial-gradient(60%_80%_at_50%_50%,color-mix(in_oklab,var(--color-red)_55%,transparent)_0%,transparent_60%)]"
            )}
          />

          <div
            className={cn(
              "relative flex items-center justify-between gap-3",
              "rounded-[999px] px-2 py-2 sm:px-3",
              "bg-black/35 backdrop-blur-2xl",
              "shadow-[0_0_0_1px_rgba(255,255,255,.10),0_22px_70px_rgba(0,0,0,.70),0_18px_55px_rgba(194,2,3,.16)]"
            )}
          >
            {/* subtle red edge */}
            <div
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute inset-0 rounded-[999px]",
                "bg-[linear-gradient(180deg,rgba(255,255,255,.10),rgba(255,255,255,0))]",
                "opacity-70"
              )}
            />
            <div
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute inset-0 rounded-[999px]",
                "shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--color-red)_22%,rgba(255,255,255,.10))]"
              )}
            />

            {/* Brand */}
            <a
              className={cn(
                "hidden lg:inline-flex h-15 w-44 overflow-hidden rounded-[999px] p-0 shrink-0 -ml-1",
                "text-xs font-extrabold tracking-[0.22em] text-white/90",
                "hover:bg-white/5 transition",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-red]/60"
              )}
              href="/"
            >
              <img
                src="/LogoNegro.png"
                alt={site.brand}
                className="block h-full w-full object-cover object-left"
                loading="eager"
                decoding="async"
              />
            </a>

            {/* Links */}
            <nav className="flex min-w-0 flex-1 items-center justify-center gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.href}
                  href={l.href}
                  label={l.label}
                  Icon={l.Icon}
                  className={cn(l.mobile ? "inline-flex" : "hidden lg:inline-flex")}
                />
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-2">
              <Button as="a" href="#contact" className="h-10 px-4 py-0 text-[11px] tracking-[0.22em]">
                CONSULTA <span className="text-white/80">↗</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
