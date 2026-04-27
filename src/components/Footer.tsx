export default function Footer() {
  return (
    <footer className="bg-[#1a1814] text-[color:var(--paper)]">
      <div className="mx-auto flex max-w-[1080px] flex-col gap-6 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-[var(--font-display)] text-2xl font-black tracking-tight">Панельный Код</p>
          <p className="mt-1 text-sm text-white/60">
            Манифест CSS-сетки. Ни одной картинки, только разметка.
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.25em] text-white/60">
          <li>2026</li>
          <li>React · CSS Grid</li>
          <li>Framer Motion</li>
          <li>
            <a
              className="underline decoration-white/30 underline-offset-4 hover:decoration-white"
              href="https://github.com/fikilipo/portfo3"
              target="_blank"
              rel="noreferrer"
            >
              Исходник
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
