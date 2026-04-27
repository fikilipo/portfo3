export default function CarpetWindow({ seed }: { seed: number }) {
  const hueShift = (seed * 23) % 40;
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            `linear-gradient(180deg, #2a1a14 0%, #1a100a 100%)`,
          filter: `hue-rotate(${hueShift}deg)`,
        }}
      />
      <div
        className="absolute inset-1"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, #c44a3a 0 8%, transparent 9%),
            radial-gradient(circle at 80% 30%, #c44a3a 0 8%, transparent 9%),
            radial-gradient(circle at 20% 70%, #c44a3a 0 8%, transparent 9%),
            radial-gradient(circle at 80% 70%, #c44a3a 0 8%, transparent 9%),
            radial-gradient(circle at 50% 50%, #e6c34a 0 6%, transparent 7%),
            repeating-linear-gradient(45deg, rgba(0,0,0,0.2) 0 3px, transparent 3px 6px),
            linear-gradient(180deg, #6a2a1a 0%, #3a1410 100%)`,
          border: "1px solid #8a4a3a",
        }}
      />
      <div className="absolute inset-1 border border-[#8a4a3a]" />
      <div className="absolute left-2 right-2 top-1 h-[2px] rounded-full bg-[#3a1a14]" />
    </div>
  );
}
