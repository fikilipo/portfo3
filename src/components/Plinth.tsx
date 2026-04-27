export default function Plinth() {
  return (
    <div className="relative mx-auto mt-[2px] h-32 w-full max-w-[960px] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `repeating-linear-gradient(0deg,
            color-mix(in srgb, var(--plinth-base) 100%, black 0%) 0 8px,
            color-mix(in srgb, var(--plinth-stripe) 100%, black 0%) 8px 16px),
            linear-gradient(180deg, color-mix(in srgb, var(--plinth-base) 100%, black 0%), color-mix(in srgb, var(--plinth-stripe) 100%, black 12%))`,
          boxShadow: "inset 0 4px 14px rgba(0,0,0,.4), inset 0 -2px 0 rgba(0,0,0,.5)",
        }}
      />

      <div className="absolute bottom-0 left-[12%] flex h-[78px] w-[58px] flex-col">
        <div className="relative flex-1 rounded-t-md border-x-2 border-t-2 border-[color:var(--frame-outer)] bg-[color:var(--frame-inner)]/30 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
          <div className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-yellow-300/90 shadow-[0_0_10px_rgba(255,215,0,0.7)]" style={{ opacity: "var(--window-glow)" }} />
          <div className="absolute bottom-2 right-2 h-1 w-1 rounded-full bg-yellow-200" />
        </div>
        <div className="text-center text-[8px] uppercase tracking-widest text-white/70">Подъезд №1</div>
      </div>

      <div className="absolute bottom-2 left-[36%] h-12 w-20">
        <div className="absolute bottom-0 h-3 w-full rounded-sm bg-[#3a3329] shadow-[inset_0_-2px_0_rgba(0,0,0,0.5)]" />
        <div className="absolute bottom-3 left-2 h-9 w-3 rounded-t-sm bg-[#3a3329]" />
        <div className="absolute bottom-3 right-2 h-9 w-3 rounded-t-sm bg-[#3a3329]" />
        <div className="absolute bottom-9 left-2 right-2 h-1 rounded-sm bg-[#3a3329]" />
      </div>

      <div className="absolute bottom-3 left-[58%] h-10 w-7 rounded-sm bg-[#2a251c] shadow-[inset_0_-2px_0_rgba(0,0,0,0.4)]">
        <div className="mx-auto mt-1 h-1 w-5 rounded-sm bg-[#5a5042]" />
        <div className="mx-auto mt-1 h-6 w-5 rounded-sm bg-[#3a342a]" />
      </div>

      <div className="absolute bottom-2 right-[14%] h-20 w-2 bg-[#2a251c]">
        <div className="absolute -top-2 left-1/2 h-3 w-6 -translate-x-1/2 rounded-full bg-[#2a251c]" />
        <div
          className="absolute -top-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-yellow-200/90 blur-[2px]"
          style={{ opacity: "var(--window-glow)" }}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#1a1610]" />
    </div>
  );
}
