import { cn } from "../../utils/cn"

export default function SectionTitle({ kicker, title, right, className }) {
  return (
    <div className={cn("grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto] lg:items-end", className)}>
      <div>
        {kicker ? (
          <div className="mb-2 text-xs tracking-[0.28em] text-white/60">[{kicker}]</div>
        ) : null}
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      </div>
      {right ? <div className="text-sm text-white/60">{right}</div> : null}
    </div>
  )
}
