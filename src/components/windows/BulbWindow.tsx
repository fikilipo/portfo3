export default function BulbWindow({ seed }: { seed: number }) {
  const dur = 4 + (seed % 3);
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#1a1410]">
      <div
        className="absolute left-1/2 top-0 h-7 w-[1px] -translate-x-1/2 bg-[#3a342a]"
        style={{ transformOrigin: "top center", animation: `pendulum ${dur}s ease-in-out infinite` }}
      >
        <div className="absolute left-1/2 top-7 h-4 w-4 -translate-x-1/2 rounded-full bg-yellow-200/95 shadow-[0_0_24px_rgba(255,210,140,0.95)]">
          <div className="absolute left-1/2 top-3 h-1 w-2 -translate-x-1/2 rounded-sm bg-[#3a342a]" />
        </div>
      </div>
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(255,210,140,0.45), transparent 70%)",
        }}
      />
    </div>
  );
}
