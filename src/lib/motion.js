export const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
}

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
