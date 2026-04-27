const LINES = [
  "ЦЕНТР ЗАНЯТ. СПАЛЬНЫЙ РАЙОН СВОБОДЕН.",
  "СЕТКА ДЕРЖИТ ГОРОД. ГОРОД ДЕРЖИТ ЛЮДЕЙ.",
  "ВТОРНИК. ОКНО НА КУХНЕ. ЧАЙ.",
];

export default function MarqueeWindow({ seed }: { seed: number }) {
  const text = LINES[seed % LINES.length];
  const duration = 18 + (seed % 5) * 2;
  return (
    <div className="absolute inset-0 flex items-center overflow-hidden">
      <div
        className="flex shrink-0 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.2em]"
        style={{
          animation: `marquee ${duration}s linear infinite`,
          color: "color-mix(in srgb, var(--frame-inner) 80%, white 20%)",
          textShadow: "0 0 6px rgba(255,200,120,0.6)",
        }}
      >
        <span className="px-2">{text}</span>
        <span className="px-2">·</span>
        <span className="px-2">{text}</span>
        <span className="px-2">·</span>
        <span className="px-2">{text}</span>
        <span className="px-2">·</span>
        <span className="px-2">{text}</span>
        <span className="px-2">·</span>
      </div>
    </div>
  );
}
