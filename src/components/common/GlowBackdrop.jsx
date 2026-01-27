export default function GlowBackdrop({ intensity = 1 }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -left-40 top-[-180px] h-[560px] w-[560px] rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(194,2,3,.55), transparent 60%)",
          filter: "blur(10px)",
          opacity: 0.55 * intensity,
        }}
      />
      <div
        className="absolute -right-40 bottom-[-220px] h-[720px] w-[720px] rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(194,2,3,.45), transparent 60%)",
          filter: "blur(14px)",
          opacity: 0.45 * intensity,
        }}
      />
      <div className="absolute inset-0 specks" />
    </div>
  )
}
