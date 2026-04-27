export default function SmokeWindow({ seed }: { seed: number }) {
  const puffs = Array.from({ length: 4 }, (_, i) => ({
    delay: ((i * 1.1 + seed * 0.3) % 4).toFixed(2),
    duration: 3 + (i % 3),
  }));
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#1a1610]">
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(circle at 50% 70%, rgba(255,160,80,0.45), transparent 60%)",
        }}
      />
      <div className="absolute bottom-3 left-[42%] h-1 w-3 rounded-full bg-[#4a3a2a]" />
      <div
        className="absolute bottom-3 left-[55%] h-2 w-2 rounded-full"
        style={{ animation: "ember 1.4s ease-in-out infinite" }}
      />
      {puffs.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-5 left-[52%] h-3 w-3 rounded-full bg-white/20 blur-[3px]"
          style={{ animation: `smoke-rise ${p.duration}s ease-out ${p.delay}s infinite` }}
        />
      ))}
    </div>
  );
}
