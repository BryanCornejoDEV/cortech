import { motion as Motion } from "framer-motion"
import { cn } from "../../utils/cn"

export default function MarqueeGhost({ text = "EFICIENCIA RAPIDEZ PRODUCTIVIDAD", className }) {
  return (
    <div className={cn("relative overflow-hidden", className)} aria-hidden>
      <Motion.div
        className="whitespace-nowrap text-[64px] sm:text-[90px] md:text-[120px] font-extrabold tracking-tight ghost"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, ease: "linear", repeat: Infinity }}
      >
        {text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;{text}&nbsp;&nbsp;
      </Motion.div>
    </div>
  )
}
