const PHRASES = ["РУССКИЙ ДИЗАЙН", "ПАНЕЛЬНЫЙ КОД", "СПАЛЬНЫЙ РАЙОН"];

export default function GlitchWindow({ seed }: { seed: number }) {
  const text = PHRASES[seed % PHRASES.length];
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#0c0a14]">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent 0 2px, rgba(255,255,255,0.05) 2px 3px)",
        }}
      />
      <div className="relative">
        <span
          className="absolute inset-0 text-[11px] font-black tracking-[0.05em] text-cyan-300"
          style={{ animation: "glitch-x 1.6s steps(2) infinite", transform: "translate(-2px, 0)" }}
        >
          {text}
        </span>
        <span
          className="absolute inset-0 text-[11px] font-black tracking-[0.05em] text-pink-400"
          style={{ animation: "glitch-x 1.4s steps(2) infinite reverse", transform: "translate(2px, 0)" }}
        >
          {text}
        </span>
        <span className="relative text-[11px] font-black tracking-[0.05em] text-white">{text}</span>
      </div>
    </div>
  );
}
