export default function CRTWindow({ seed }: { seed: number }) {
  const dur = 2 + (seed % 3);
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#020a14]">
      <div
        className="absolute inset-1 rounded-[3px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(80,200,255,0.25), transparent 70%), linear-gradient(180deg, #042038 0%, #021022 100%)",
          boxShadow: "inset 0 0 12px rgba(0,0,0,0.6)",
        }}
      />
      <div
        className="absolute inset-1 rounded-[3px] opacity-60"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent 0 2px, rgba(120,200,255,0.12) 2px 3px)",
        }}
      />
      <div
        className="absolute inset-x-1 h-3 rounded-sm bg-[rgba(120,220,255,0.12)]"
        style={{ animation: `scan ${dur}s linear infinite` }}
      />
      <div
        className="absolute left-2 top-2 font-mono text-[7px] leading-tight text-cyan-200/90"
        style={{ animation: "flicker 4s infinite" }}
      >
        &gt; ping<br />
        64 bytes...<br />
        time=18.2 ms
      </div>
    </div>
  );
}
