import { motion as Motion } from "framer-motion"
import { fadeUp } from "../../lib/motion"
import { useReducedMotion } from "../../hooks/useReducedMotion"

export default function Reveal({ children, delay = 0, className }) {
  const reduced = useReducedMotion()
  return (
    <Motion.div
      className={className}
      initial={reduced ? false : "hidden"}
      whileInView={reduced ? undefined : "show"}
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Motion.div>
  )
}
