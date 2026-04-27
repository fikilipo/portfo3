export default function TVWindow({ seed }: { seed: number }) {
  const hue = (seed * 47) % 360;
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#06060a]">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 60%, hsla(${hue},80%,55%,0.55), transparent 65%)`,
          animation: "channel-shift 6s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0 opacity-50 mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-conic-gradient(from 0deg at 30% 40%, rgba(255,255,255,0.08) 0deg 4deg, transparent 4deg 8deg), repeating-conic-gradient(from 0deg at 70% 60%, rgba(255,255,255,0.06) 0deg 6deg, transparent 6deg 12deg)",
          backgroundSize: "120% 120%",
          animation: "static-noise 0.6s steps(8) infinite",
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent 0 2px, rgba(255,255,255,0.08) 2px 3px)",
        }}
      />
      <div className="absolute bottom-1 right-1 text-[7px] font-bold uppercase tracking-widest text-white/80">ОРТ</div>
    </div>
  );
}
