import type { TimeOfDay } from "../types";

const OPTIONS: { id: TimeOfDay; label: string; hint: string }[] = [
  { id: "day", label: "День", hint: "D" },
  { id: "dusk", label: "Вечер", hint: "V" },
  { id: "night", label: "Ночь", hint: "N" },
];

type Props = {
  value: TimeOfDay;
  onChange: (next: TimeOfDay) => void;
};

export default function TimeToggle({ value, onChange }: Props) {
  return (
    <div className="absolute right-4 top-4 z-30 flex gap-1 rounded-full border border-black/30 bg-black/35 p-1 backdrop-blur-md sm:right-6 sm:top-6">
      {OPTIONS.map((opt) => {
        const active = opt.id === value;
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={
              "rounded-full px-3 py-1 text-xs uppercase tracking-[0.18em] transition " +
              (active
                ? "bg-[#f3eee2] text-[#1a1814] shadow-[inset_0_-1px_0_rgba(0,0,0,0.2)]"
                : "text-white/70 hover:text-white")
            }
            aria-pressed={active}
          >
            {opt.label}
            <kbd className="ml-1 hidden text-[9px] opacity-50 sm:inline">{opt.hint}</kbd>
          </button>
        );
      })}
    </div>
  );
}
