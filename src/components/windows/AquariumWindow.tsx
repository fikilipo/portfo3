export default function AquariumWindow({ seed }: { seed: number }) {
  const fish = Array.from({ length: 4 }, (_, i) => ({
    top: 20 + ((i * 23 + seed * 7) % 60),
    delay: ((i * 1.13 + seed * 0.5) % 5).toFixed(2),
    duration: 7 + (i % 3) * 2,
    color: i % 2 === 0 ? "#ffb86c" : "#f1fa8c",
  }));
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #1a4a5a 0%, #0a2030 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-50 mix-blend-screen"
        style={{
          background:
            "repeating-linear-gradient(180deg, transparent 0 6px, rgba(255,255,255,0.05) 6px 7px)",
        }}
      />
      {fish.map((f, i) => (
        <span
          key={i}
          className="absolute h-1.5 w-2 rounded-full"
          style={{
            top: `${f.top}%`,
            left: 0,
            background: f.color,
            boxShadow: `0 0 4px ${f.color}`,
            animation: `fish-drift ${f.duration}s ease-in-out ${f.delay}s infinite`,
          }}
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 h-2 bg-[#3a2a1a]" />
      <div className="absolute bottom-1 left-3 h-2 w-1 rounded-full bg-emerald-700" />
      <div className="absolute bottom-1 left-6 h-3 w-1 rounded-full bg-emerald-600" />
      <div className="absolute bottom-1 right-4 h-2 w-1 rounded-full bg-emerald-700" />
    </div>
  );
}
