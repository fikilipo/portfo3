const COLORS = ["#ff6b6b", "#ffd166", "#06d6a0", "#118ab2", "#c084fc", "#f97316"];

export default function GarlandWindow({ seed }: { seed: number }) {
  const bulbs = Array.from({ length: 10 }, (_, i) => ({
    color: COLORS[(i + seed) % COLORS.length],
    delay: ((i * 0.27 + seed * 0.13) % 2).toFixed(2),
  }));
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0e0a14]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        <path d="M2 22 Q 25 38, 50 26 T 98 28" fill="none" stroke="#3a342a" strokeWidth="0.8" />
        <path d="M2 60 Q 30 76, 55 64 T 98 70" fill="none" stroke="#3a342a" strokeWidth="0.8" />
      </svg>
      {bulbs.slice(0, 5).map((b, i) => (
        <span
          key={`a${i}`}
          className="absolute h-2 w-2 rounded-full"
          style={{
            background: b.color,
            top: `${22 + Math.sin(i) * 6}%`,
            left: `${10 + i * 18}%`,
            boxShadow: `0 0 10px ${b.color}`,
            animation: `garland-pulse 1.4s ease-in-out ${b.delay}s infinite`,
          }}
        />
      ))}
      {bulbs.slice(5).map((b, i) => (
        <span
          key={`b${i}`}
          className="absolute h-2 w-2 rounded-full"
          style={{
            background: b.color,
            top: `${62 + Math.cos(i) * 6}%`,
            left: `${8 + i * 20}%`,
            boxShadow: `0 0 10px ${b.color}`,
            animation: `garland-pulse 1.7s ease-in-out ${b.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
