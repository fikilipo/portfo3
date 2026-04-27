import { useEffect, useMemo, useRef, useState } from "react";
import Building from "./Building";
import { type Slot, SLOTS, RESIDENTS } from "./data";

type Time = "day" | "dusk" | "night";

const STORAGE_KEY = "panelka:time";

function pickInitialTime(): Time {
  if (typeof window === "undefined") return "day";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "day" || saved === "dusk" || saved === "night") return saved;
  const h = new Date().getHours();
  if (h >= 21 || h < 6) return "night";
  if (h >= 18) return "dusk";
  return "day";
}

const OPTIONS: { id: Time; label: string; key: string }[] = [
  { id: "day", label: "День", key: "D" },
  { id: "dusk", label: "Вечер", key: "V" },
  { id: "night", label: "Ночь", key: "N" },
];

const NEXT: Record<Time, Time> = { day: "dusk", dusk: "night", night: "day" };

export default function App() {
  const [time, setTime] = useState<Time>(pickInitialTime);
  const [auto, setAuto] = useState(false);
  const [selected, setSelected] = useState<Slot | null>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.dataset.time = time;
    window.localStorage.setItem(STORAGE_KEY, time);
  }, [time]);

  useEffect(() => {
    if (!auto) return;
    const id = window.setInterval(() => setTime((t) => NEXT[t]), 5500);
    return () => window.clearInterval(id);
  }, [auto]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.target instanceof HTMLInputElement) return;
      const k = e.key.toLowerCase();
      if (k === "n") setTime("night");
      else if (k === "d") setTime("day");
      else if (k === "v") setTime("dusk");
      else if (k === "a") setAuto((x) => !x);
      else if (k === "escape") setSelected(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const node = sceneRef.current;
    if (!node) return;
    let frame = 0;
    let nextX = 0;
    let nextY = 0;
    const apply = () => {
      frame = 0;
      node.style.setProperty("--mx", nextX.toFixed(3));
      node.style.setProperty("--my", nextY.toFixed(3));
    };
    function onMove(e: PointerEvent) {
      const rect = node!.getBoundingClientRect();
      nextX = (e.clientX - rect.left) / rect.width - 0.5;
      nextY = (e.clientY - rect.top) / rect.height - 0.5;
      if (!frame) frame = window.requestAnimationFrame(apply);
    }
    function onLeave() {
      nextX = 0;
      nextY = 0;
      if (!frame) frame = window.requestAnimationFrame(apply);
    }
    node.addEventListener("pointermove", onMove, { passive: true });
    node.addEventListener("pointerleave", onLeave);
    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="scene" ref={sceneRef}>
        <div className="sky">
          <div className="stars" />
          <div className="sun" />
          <div className="moon" />
          <div className="cloud cloud--a" />
          <div className="cloud cloud--b" />
          <div className="cloud cloud--c" />
          <div className="far-city" />
          <div className="neighbor neighbor--left" />
          <div className="neighbor neighbor--right" />
        </div>

        <div className="weather" aria-hidden />
        <div className="vignette" aria-hidden />

        <div className="controls">
          <div className="control-pill" role="radiogroup" aria-label="Время суток">
            {OPTIONS.map((o) => (
              <button
                key={o.id}
                type="button"
                className={"control-btn" + (time === o.id ? " is-active" : "")}
                onClick={() => {
                  setAuto(false);
                  setTime(o.id);
                }}
                aria-pressed={time === o.id}
              >
                <span>{o.label}</span>
                <kbd>{o.key}</kbd>
              </button>
            ))}
          </div>
          <button
            type="button"
            className={"auto-btn" + (auto ? " is-on" : "")}
            onClick={() => setAuto((x) => !x)}
            aria-pressed={auto}
            aria-label="Авто-смена времени"
            title="Авто-смена времени (A)"
          >
            <span className="auto-btn__dot" />
            <span className="auto-btn__label">{auto ? "АВТО" : "АВТО"}</span>
            <kbd>A</kbd>
          </button>
        </div>

        <div className="stage">
          <Building onSelect={setSelected} />
        </div>

        <div className="ground" aria-hidden>
          <div className="ground__walk" />
          <div className="ground__curb" />
          <div className="ground__road" />
          <div className="ground__lane" />
          <div className="ground__manhole" />
          <div className="ground__puddle" />
          <div className="ground__puddle ground__puddle--right" />
          <div className="signpost" />
          <div className="tree">
            <div className="tree__crown" />
            <div className="tree__trunk" />
          </div>
          <div className="car">
            <div className="car__beam" />
            <div className="car__cabin" />
            <div className="car__body" />
            <div className="car__wheel car__wheel--front" />
            <div className="car__wheel car__wheel--rear" />
            <div className="car__plate">А777ТТ</div>
            <div className="car__light car__light--head" />
            <div className="car__light car__light--tail" />
          </div>
          <div className="road-glow" />
        </div>

        <KvartiraToast slot={selected} onClose={() => setSelected(null)} />
      </div>

      <Manifesto residents={RESIDENTS} totalSlots={SLOTS.length} />
      <Footer />
    </>
  );
}

function KvartiraToast({ slot, onClose }: { slot: Slot | null; onClose: () => void }) {
  const data = useMemo(() => {
    if (!slot) return null;
    return RESIDENTS[slot.area];
  }, [slot]);
  if (!slot || !data) return null;
  return (
    <div className="kvartira" role="dialog" aria-label="Информация о квартире">
      <button className="kvartira__close" onClick={onClose} aria-label="Закрыть">
        ✕
      </button>
      <div className="kvartira__row">
        <span className="kvartira__num">№ {data.num}</span>
        <span className="kvartira__floor">эт. {data.floor}</span>
      </div>
      <p className="kvartira__title">{data.title}</p>
      <p className="kvartira__sub">{data.sub}</p>
      <div className="kvartira__meta">
        <span>{data.area}</span>
        <span>•</span>
        <span>{data.kind}</span>
      </div>
    </div>
  );
}

function Manifesto({ residents, totalSlots }: { residents: typeof RESIDENTS; totalSlots: number }) {
  const lit = Object.values(residents).filter((r) => r.lit).length;
  return (
    <section className="manifesto">
      <div className="manifesto__inner">
        <div className="manifesto__head">
          <p className="manifesto__kicker">Двенадцатый микрорайон</p>
          <h2 className="manifesto__title">
            Девятиэтажка.
            <br />
            Будний вечер.
          </h2>
          <p className="manifesto__lead">
            Один дом, один HTML, один CSS. Сетка 5×6, лестничная клетка на двух этажах,
            один балкон на четвёртом, магазин «Продукты 24» на цоколе и ржавая «копейка»
            у бордюра. Всё нарисовано вручную — ни одной картинки и ни одной иконки.
          </p>
        </div>
        <ol className="manifesto__cards">
          <li>
            <h3>Сетка</h3>
            <p>
              {totalSlots} окон расставлены через <code>grid-template-areas</code>. Лестничная
              клетка занимает две строки, балкон — три колонки. Респонсивный размер строк через
              <code> clamp()</code>.
            </p>
          </li>
          <li>
            <h3>Свет</h3>
            <p>
              Время суток — это пара CSS-переменных и <code>@property</code>. Стёкла днём
              отражают небо, вечером ловят закат, ночью пропускают тёплый свет лампы и
              синий мерцающий ТВ.
            </p>
          </li>
          <li>
            <h3>Слой</h3>
            <p>
              Каскад собран в <code>@layer base, scene, building, windows, weather, ui, type</code>.
              Каждый слой отвечает за один кусок сцены — от дальнего города до подоконника.
            </p>
          </li>
          <li>
            <h3>Жизнь</h3>
            <p>
              {lit} окон светятся прямо сейчас. Кликните по любому — расскажу, кто там живёт.
              Шторы раздвигаются при наведении, лампочка-маятник раскачивается, кот моргает.
            </p>
          </li>
        </ol>
        <div className="manifesto__hot">
          <span>
            <kbd>D</kbd> день
          </span>
          <span>
            <kbd>V</kbd> вечер
          </span>
          <span>
            <kbd>N</kbd> ночь
          </span>
          <span>
            <kbd>A</kbd> авто-смена
          </span>
          <span>клик по окну — карточка квартиры</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-foot">
      <div className="site-foot__inner">
        <div>
          <p className="site-foot__brand">Дом 12</p>
          <p className="site-foot__sub">
            CSS-этюд: один HTML, один CSS, ноль картинок. Шесть этажей, один подъезд.
          </p>
        </div>
        <ul className="site-foot__meta">
          <li>2026</li>
          <li>React · CSS Grid · @layer</li>
          <li>
            <a href="https://github.com/fikilipo/portfo3" target="_blank" rel="noreferrer">
              Исходник
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
