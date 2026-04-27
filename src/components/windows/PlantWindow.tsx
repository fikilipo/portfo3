export default function PlantWindow({ seed }: { seed: number }) {
  const tilt = seed % 2 === 0 ? -2 : 2;
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #d6cfa8 0%, #8a8456 100%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-2 bg-[color:var(--frame-inner)]" />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
        <div
          className="relative h-6 w-8 origin-bottom rounded-b-md bg-gradient-to-b from-[#7a3a25] to-[#3a1a10] shadow-[inset_0_-2px_0_rgba(0,0,0,0.4)]"
          style={{ transform: `rotate(${tilt}deg)` }}
        >
          <div className="absolute inset-x-0 -top-[6px] h-2 rounded-sm bg-[#7a3a25]" />
        </div>
        <div
          className="absolute -top-7 left-1/2 -translate-x-1/2"
          style={{ animation: "sway 6s ease-in-out infinite", transformOrigin: "bottom center" }}
        >
          <span className="absolute -left-3 top-2 block h-3 w-5 rotate-[-30deg] rounded-full bg-[#3a6a2a]" />
          <span className="absolute left-2 top-1 block h-3 w-5 rotate-[30deg] rounded-full bg-[#4a7a35]" />
          <span className="absolute left-0 -top-1 block h-4 w-4 rounded-full bg-[#56913a]" />
        </div>
      </div>
    </div>
  );
}
