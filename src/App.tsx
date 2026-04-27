import { useEffect, useRef, useState } from "react";
import Building from "./Building";

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

export default function App() {
  const [time, setTime] = useState<Time>(pickInitialTime);
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.dataset.time = time;
    window.localStorage.setItem(STORAGE_KEY, time);
  }, [time]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.target instanceof HTMLInputElement) return;
      const k = e.key.toLowerCase();
      if (k === "n") setTime("night");
      else if (k === "d") setTime("day");
      else if (k === "v") setTime("dusk");
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const node = sceneRef.current;
    if (!node) return;
    function onMove(e: PointerEvent) {
      const rect = node!.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      node!.style.setProperty("--mx", px.toFixed(3));
      node!.style.setProperty("--my", py.toFixed(3));
    }
    function onLeave() {
      node!.style.setProperty("--mx", "0");
      node!.style.setProperty("--my", "0");
    }
    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);
    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
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
                onClick={() => setTime(o.id)}
                aria-pressed={time === o.id}
              >
                <span>{o.label}</span>
                <kbd>{o.key}</kbd>
              </button>
            ))}
          </div>
        </div>

        <div className="stage">
          <Building />
        </div>
      </div>

      <Manifesto />
      <Footer />
    </>
  );
}

function Manifesto() {
  return (
    <section className="manifesto">
      <div className="manifesto__inner">
        <div className="manifesto__head">
          <p className="manifesto__kicker">Манифест</p>
          <h2 className="manifesto__title">
            Город — это сетка.
            <br />
            Сетка — это дом.
          </h2>
          <p className="manifesto__lead">
            Мы выросли в дворах между девятиэтажками, где ритм окон задавал ритм дня. Эти панельки —
            не серый фон ностальгии, а готовый учебник по композиции. Здесь живёт CSS Grid, только
            без браузера.
          </p>
        </div>
        <ol className="manifesto__cards">
          <li>
            <h3>Ритм</h3>
            <p>
              Пять окон в ряд, шесть этажей в высоту. Между ними — швы, по которым стекает дождь и
              крепится кондиционер. На сайте за ритм отвечает grid-template-areas.
            </p>
          </li>
          <li>
            <h3>Свет</h3>
            <p>
              Днём окна серые. К вечеру в них зажигается жизнь: кухонный жёлтый, синий мерцающий
              телевизор, неоновая гирлянда у тех, кто застрял в декабре.
            </p>
          </li>
          <li>
            <h3>Ткань</h3>
            <p>
              Бетон, штукатурка, рамы, отливы — собрано из градиентов и теней. Ни одной картинки и
              ни одной иконки. Только разметка и стиль.
            </p>
          </li>
          <li>
            <h3>Жильцы</h3>
            <p>
              За каждым окном своя история: кот, аквариум, бегущая строка, заколоченные доски.
              Кликните по окну — створка приоткроется. Подёргайте мышью шторы.
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
          <span>клик по окну — открыть</span>
          <span>наведение — раздвинуть шторы</span>
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
          <p className="site-foot__brand">Панельный Код</p>
          <p className="site-foot__sub">
            Манифест CSS-сетки. Один HTML, один CSS, ни одной картинки.
          </p>
        </div>
        <ul className="site-foot__meta">
          <li>2026</li>
          <li>React · CSS Grid</li>
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
