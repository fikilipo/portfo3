export default function BoardedWindow({ seed }: { seed: number }) {
  const tilt = seed % 2 === 0 ? 28 : -32;
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0a0907]">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 6px), linear-gradient(45deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 8px)",
        }}
      />
      <div
        className="absolute left-[-10%] top-[40%] h-3 w-[120%] rounded-sm bg-gradient-to-b from-[#5a4530] to-[#2a1c14] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-2px_0_rgba(0,0,0,0.4)]"
        style={{ transform: `rotate(${tilt / 8}deg)` }}
      />
      <div
        className="absolute left-[-5%] top-[20%] h-3 w-[110%] rotate-[6deg] rounded-sm bg-gradient-to-b from-[#5a4530] to-[#2a1c14] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-2px_0_rgba(0,0,0,0.4)]"
        style={{ transform: `rotate(${tilt}deg)` }}
      />
      <div
        className="absolute left-[-5%] top-[20%] h-3 w-[110%] rotate-[-6deg] rounded-sm bg-gradient-to-b from-[#5a4530] to-[#2a1c14] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-2px_0_rgba(0,0,0,0.4)]"
        style={{ transform: `rotate(${-tilt}deg)` }}
      />
    </div>
  );
}
