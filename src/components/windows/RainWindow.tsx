export default function RainWindow({ seed }: { seed: number }) {
  const drops = Array.from({ length: 14 }, (_, i) => ({
    left: ((i * 73 + seed * 11) % 100),
    delay: ((i * 0.31 + seed * 0.11) % 2.4).toFixed(2),
    duration: (1.6 + ((i * 7 + seed) % 8) * 0.18).toFixed(2),
    width: 1 + (i % 2),
    opacity: (0.4 + ((i * 3) % 10) * 0.05).toFixed(2),
  }));
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #1f2a3a 0%, #0c1320 100%)",
        }}
      />
      <div className="absolute inset-0">
        {drops.map((d, i) => (
          <span
            key={i}
            className="absolute top-0 h-4 rounded-full bg-cyan-200/70"
            style={{
              left: `${d.left}%`,
              width: `${d.width}px`,
              opacity: d.opacity,
              animation: `rain-fall ${d.duration}s linear ${d.delay}s infinite`,
            }}
          />
        ))}
      </div>
      <div
        className="absolute inset-0 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(circle at 30% 60%, rgba(255,255,255,0.15) 0 1px, transparent 2px), radial-gradient(circle at 70% 40%, rgba(255,255,255,0.1) 0 1px, transparent 2px), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.12) 0 1.5px, transparent 2.5px)",
        }}
      />
    </div>
  );
}
