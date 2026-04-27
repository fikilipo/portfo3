export default function CurtainsWindow({ seed }: { seed: number }) {
  const tone = seed % 2 === 0 ? "#6a3a3a" : "#3a4a6a";
  return (
    <div className="group absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 90%, rgba(255,210,140,0.4), transparent 60%), linear-gradient(180deg, #3a3429 0%, #1a1814 100%)",
        }}
      >
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-200/70 blur-[2px]" />
      </div>

      <div
        className="absolute inset-y-0 left-0 origin-left transition-[clip-path,transform] duration-700 ease-out group-hover:[clip-path:polygon(0_0,30%_0,30%_100%,0_100%)]"
        style={{
          width: "52%",
          background: `repeating-linear-gradient(90deg,
            color-mix(in srgb, ${tone} 100%, white 8%) 0 4px,
            color-mix(in srgb, ${tone} 100%, black 18%) 4px 8px)`,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          boxShadow: "inset -6px 0 12px rgba(0,0,0,0.4)",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 origin-right transition-[clip-path,transform] duration-700 ease-out group-hover:[clip-path:polygon(70%_0,100%_0,100%_100%,70%_100%)]"
        style={{
          width: "52%",
          background: `repeating-linear-gradient(90deg,
            color-mix(in srgb, ${tone} 100%, white 8%) 0 4px,
            color-mix(in srgb, ${tone} 100%, black 18%) 4px 8px)`,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          boxShadow: "inset 6px 0 12px rgba(0,0,0,0.4)",
        }}
      />
    </div>
  );
}
