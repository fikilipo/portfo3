const ITEMS = [
  { color: "#d6d0c2", w: 12, h: 16, type: "shirt" },
  { color: "#c44a3a", w: 10, h: 14, type: "shirt" },
  { color: "#3a4a6a", w: 14, h: 16, type: "trousers" },
  { color: "#e8d36a", w: 9, h: 12, type: "shirt" },
  { color: "#2a3a2a", w: 11, h: 13, type: "sock" },
];

export default function LaundryWindow({ seed }: { seed: number }) {
  const items = ITEMS.map((it, i) => ({ ...it, delay: ((i + seed) * 0.4) % 3 }));
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg,
            color-mix(in srgb, var(--wall-top) 80%, black 0%) 0%,
            color-mix(in srgb, var(--wall-bottom) 80%, black 0%) 100%)`,
        }}
      />
      <div
        className="absolute inset-x-1 top-1 bottom-2"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.4) 0 1px, transparent 1px 7px)",
        }}
      />
      <div className="absolute inset-x-2 top-2 h-[1px] bg-[#3a3024]" />
      <div className="absolute inset-x-1 bottom-1 flex justify-around items-end">
        {items.map((it, i) => (
          <span
            key={i}
            className="block origin-top rounded-b-md"
            style={{
              width: `${it.w}px`,
              height: `${it.h}px`,
              background: `linear-gradient(180deg, ${it.color}, color-mix(in srgb, ${it.color} 70%, black))`,
              boxShadow: "inset 0 -2px 0 rgba(0,0,0,0.25)",
              animation: `laundry-sway 4.2s ease-in-out ${it.delay}s infinite`,
            }}
          />
        ))}
      </div>
      <div
        className="absolute inset-x-1 bottom-0 h-1 rounded-sm"
        style={{ background: "linear-gradient(180deg, #3a3024, #1a140f)" }}
      />
    </div>
  );
}
