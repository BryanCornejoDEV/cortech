import { cn } from "../../utils/cn"

export default function DeviceMock({ children, className }) {
  return (
    <div className={cn("relative rounded-[36px] border border-white/10 bg-black/60 shadow-[0_40px_120px_rgba(0,0,0,.65)]", className)}>
      <div className="absolute left-1/2 top-3 h-6 w-24 -translate-x-1/2 rounded-full bg-white/10" />
      <div className="p-4 pt-12">
        <div className="rounded-2xl border border-white/10 bg-black/50 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  )
}
