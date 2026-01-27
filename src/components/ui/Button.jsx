import { cn } from "../../utils/cn"

export default function Button({ as: Comp = "button", variant = "primary", className, ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[999px] px-5 py-3 text-sm tracking-wide transition will-change-transform"
  const variants = {
    primary:
      "bg-[--color-red] text-white shadow-[0_0_0_1px_rgba(255,255,255,.08),0_18px_50px_rgba(194,2,3,.25)] hover:brightness-110 active:scale-[.99]",
    ghost:
      "bg-transparent text-white/90 shadow-[inset_0_0_0_1px_rgba(255,255,255,.14)] hover:bg-white/5",
  }
  return <Comp className={cn(base, variants[variant], className)} {...props} />
}
