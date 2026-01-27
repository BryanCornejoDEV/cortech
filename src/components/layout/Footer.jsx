import Container from "../ui/Container"
import { site } from "../../config/site"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30">
      <Container className="py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-sm font-extrabold tracking-[0.18em]">{site.brand}</div>
            <div className="mt-2 text-sm text-white/60">{site.address}</div>
            <div className="mt-1 text-sm text-white/60">{site.phone}</div>
          </div>

          <div className="text-xs tracking-[0.22em] text-white/50">
            © {new Date().getFullYear()} {site.brand}. Todos los derechos reservados.
          </div>
        </div>
      </Container>
    </footer>
  )
}
