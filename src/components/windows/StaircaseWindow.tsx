export default function StaircaseWindow({ seed }: { seed: number }) {
  const dur = 5 + (seed % 4);
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0c0e10]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(190,220,235,0.18) 0%, transparent 50%, rgba(190,220,235,0.15) 50%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-x-2 top-[24%] h-[2px] rounded-full bg-cyan-100/80 shadow-[0_0_10px_rgba(180,220,255,0.7)]"
        style={{ animation: `flicker ${dur}s steps(2) infinite` }}
      />
      <div
        className="absolute inset-x-2 bottom-[24%] h-[2px] rounded-full bg-cyan-100/80 shadow-[0_0_10px_rgba(180,220,255,0.7)]"
        style={{ animation: `flicker ${dur + 1}s steps(2) infinite`, animationDelay: "0.4s" }}
      />
      <div className="absolute left-1/2 top-[51%] h-[1px] w-[80%] -translate-x-1/2 bg-[#1a1a14]" />
      <div className="absolute inset-0 mix-blend-overlay opacity-60" style={{ background: "repeating-linear-gradient(0deg, transparent 0 6px, rgba(255,255,255,0.04) 6px 7px)" }} />
    </div>
  );
}
