export default function DarkWindow({ seed }: { seed: number }) {
  const blink = (seed * 17) % 11 === 0;
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#06080c]">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "linear-gradient(135deg, rgba(120,160,200,0.06) 0 30%, transparent 30% 100%)",
        }}
      />
      {blink && (
        <span
          className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-yellow-200/80"
          style={{ animation: "flicker 7s steps(2) infinite" }}
        />
      )}
    </div>
  );
}
