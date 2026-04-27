export default function CatWindow({ seed }: { seed: number }) {
  const flipped = seed % 2 === 0;
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(255,210,140,0.55), transparent 70%), linear-gradient(180deg, #3a3022 0%, #1a1610 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-2 bg-[color:var(--frame-inner)]"
        style={{ boxShadow: "0 -1px 0 rgba(0,0,0,0.6)" }}
      />
      <div
        className="absolute bottom-2"
        style={{
          right: flipped ? "auto" : "8%",
          left: flipped ? "8%" : "auto",
          transform: flipped ? "scaleX(-1)" : undefined,
        }}
      >
        <div
          className="relative h-7 w-9 rounded-[60%_60%_55%_55%/70%_70%_45%_45%] bg-[#0a0908]"
          style={{ boxShadow: "inset -3px -2px 0 rgba(255,255,255,0.06)" }}
        >
          <span className="absolute -left-1 -top-2 h-3 w-3 rotate-[-30deg] rounded-[50%_50%_50%_0] bg-[#0a0908]" />
          <span className="absolute -right-1 -top-2 h-3 w-3 rotate-[30deg] rounded-[50%_50%_0_50%] bg-[#0a0908]" />
          <span
            className="absolute left-1.5 top-2 h-1.5 w-1 rounded-full bg-yellow-200"
            style={{ animation: "blink-eyes 4s infinite", transformOrigin: "center" }}
          />
          <span
            className="absolute right-1.5 top-2 h-1.5 w-1 rounded-full bg-yellow-200"
            style={{ animation: "blink-eyes 4s infinite", transformOrigin: "center", animationDelay: "0.05s" }}
          />
          <span className="absolute -right-3 bottom-1 h-1 w-4 origin-left rounded-full bg-[#0a0908]" style={{ animation: "sway 5s ease-in-out infinite" }} />
        </div>
      </div>
    </div>
  );
}
