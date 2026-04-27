export default function Manifesto() {
  return (
    <section className="bg-[color:var(--paper)] text-[color:var(--ink)]">
      <div className="mx-auto grid max-w-[1080px] gap-10 px-4 py-16 sm:px-8 sm:py-24 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">Манифест</p>
          <h2 className="mt-3 font-[var(--font-display)] text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl">
            Город — это сетка.<br />
            Сетка — это дом.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[color:var(--ink-soft)]">
            Мы выросли в дворах между девятиэтажками, где ритм окон задавал ритм дня. Эти панельки — не серый фон
            постсоветской ностальгии, а готовый учебник по композиции. Здесь живёт CSS Grid, только без браузера.
          </p>
        </div>

        <div className="grid gap-6 md:col-span-7 md:grid-cols-2">
          <div className="border-l-2 border-[color:var(--ink)] pl-4">
            <p className="text-sm font-semibold uppercase tracking-widest">Ритм</p>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">
              Пять окон в ряд, шесть этажей в высоту. Между ними — швы, по которым стекает дождь и крепится
              кондиционер. На сайте за ритм отвечает grid-template-areas: каждое окно знает своё место.
            </p>
          </div>
          <div className="border-l-2 border-[color:var(--ink)] pl-4">
            <p className="text-sm font-semibold uppercase tracking-widest">Свет</p>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">
              Днём окна выглядят серыми. К вечеру в них зажигается жизнь: тёплый кухонный жёлтый,
              синий мерцающий телевизор, неоновые гирлянды у тех, кто застрял в декабре.
            </p>
          </div>
          <div className="border-l-2 border-[color:var(--ink)] pl-4">
            <p className="text-sm font-semibold uppercase tracking-widest">Ткань</p>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">
              Бетон, штукатурка, рамы, отливы — всё собрано из градиентов, теней и псевдоэлементов.
              Ни одной картинки. Ни одной иконки. Только разметка и стиль.
            </p>
          </div>
          <div className="border-l-2 border-[color:var(--ink)] pl-4">
            <p className="text-sm font-semibold uppercase tracking-widest">Жильцы</p>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">
              За каждым окном — своя история. Кот, аквариум, бегущая строка, лампа Ильича, заколоченные доски.
              Кликните на окно — створка приоткроется. Подёргайте мышью шторы.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[color:var(--ink)]/10">
        <div className="mx-auto flex max-w-[1080px] flex-wrap gap-x-10 gap-y-3 px-4 py-6 text-xs uppercase tracking-[0.25em] text-[color:var(--ink-soft)] sm:px-8">
          <span><b className="text-[color:var(--ink)]">D</b> — день</span>
          <span><b className="text-[color:var(--ink)]">V</b> — вечер</span>
          <span><b className="text-[color:var(--ink)]">N</b> — ночь</span>
          <span>клик по окну — открыть створку</span>
          <span>наведение — раздвинуть шторы</span>
        </div>
      </div>
    </section>
  );
}
