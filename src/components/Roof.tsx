export default function Roof() {
  return (
    <div className="relative mx-auto h-20 w-full max-w-[960px]">
      <div className="absolute bottom-0 left-0 right-0 h-3 rounded-t-sm bg-[color:var(--frame-outer)] shadow-[0_-1px_0_rgba(255,255,255,0.07),inset_0_1px_0_rgba(255,255,255,0.1)]" />

      <div
        className="absolute bottom-3 left-[8%] origin-bottom"
        style={{ animation: "antenna-creak 7s ease-in-out infinite" }}
      >
        <div className="h-12 w-[2px] bg-[color:var(--frame-outer)]" />
        <div className="absolute -top-1 left-[-6px] h-[2px] w-[14px] bg-[color:var(--frame-outer)]" />
        <div className="absolute top-2 left-[-9px] h-[2px] w-[20px] bg-[color:var(--frame-outer)]" />
        <div className="absolute top-5 left-[-7px] h-[2px] w-[16px] bg-[color:var(--frame-outer)]" />
      </div>

      <div className="absolute bottom-3 left-[28%]">
        <div className="h-10 w-[2px] bg-[color:var(--frame-outer)]" />
        <div className="absolute -top-3 left-[-12px] h-3 w-[26px] rounded-t-full border border-[color:var(--frame-outer)] bg-[color:var(--frame-outer)]/40" />
      </div>

      <div
        className="absolute bottom-3 left-[52%] origin-bottom"
        style={{ animation: "antenna-creak 9s ease-in-out infinite reverse" }}
      >
        <div className="h-16 w-[2px] bg-[color:var(--frame-outer)]" />
        <div className="absolute top-1 left-[-10px] h-[2px] w-[22px] bg-[color:var(--frame-outer)]" />
        <div className="absolute top-4 left-[-8px] h-[2px] w-[18px] bg-[color:var(--frame-outer)]" />
        <div className="absolute -top-1 left-[-3px] h-2 w-2 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(255,80,80,0.8)]" />
      </div>

      <div className="absolute bottom-3 right-[18%] flex items-end gap-1">
        <div className="h-7 w-3 rounded-sm bg-[color:var(--frame-outer)] shadow-[inset_0_-2px_0_rgba(0,0,0,0.4)]" />
        <div className="h-9 w-3 rounded-sm bg-[color:var(--frame-outer)] shadow-[inset_0_-2px_0_rgba(0,0,0,0.4)]" />
        <div className="relative h-12 w-3 rounded-sm bg-[color:var(--frame-outer)] shadow-[inset_0_-2px_0_rgba(0,0,0,0.4)]">
          <span
            className="absolute -top-3 left-1 h-3 w-3 rounded-full bg-white/40 blur-[3px]"
            style={{ animation: "smoke-rise 5s ease-out infinite" }}
          />
        </div>
      </div>
    </div>
  );
}
