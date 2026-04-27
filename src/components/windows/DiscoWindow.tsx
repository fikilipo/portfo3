export default function DiscoWindow({ seed }: { seed: number }) {
  const dur = 6 + (seed % 4);
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#120a18]">
      <div
        className="absolute inset-0 opacity-70 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,110,200,0.4), transparent 60%), radial-gradient(circle at 70% 70%, rgba(120,180,255,0.4), transparent 60%)",
        }}
      />
      <div className="absolute left-1/2 top-1 h-3 w-[2px] -translate-x-1/2 bg-white/40" />
      <div
        className="absolute left-1/2 top-4 h-10 w-10 -translate-x-1/2 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, #fff, #aaf, #faf, #aff, #fff, #ffa, #fff)",
          filter: "blur(0.5px)",
          boxShadow: "0 0 22px rgba(255,200,255,0.55)",
          animation: `spin-slow ${dur}s linear infinite`,
          backgroundSize: "100% 100%",
        }}
      />
      <div
        className="absolute left-1/2 top-4 h-10 w-10 -translate-x-1/2 rounded-full opacity-60 mix-blend-overlay"
        style={{
          background:
            "repeating-conic-gradient(from 0deg, rgba(255,255,255,0.4) 0 6deg, transparent 6deg 12deg), repeating-radial-gradient(circle, transparent 0 4px, rgba(0,0,0,0.3) 4px 5px)",
        }}
      />
    </div>
  );
}
