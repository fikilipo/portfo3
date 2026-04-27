import type { Slot, WindowKind, GlowName } from "./data";
import { SLOTS } from "./data";

const LABEL: Record<WindowKind, string> = {
  tv: "телевизор",
  marquee: "бегущая строка",
  dark: "тёмное окно",
  cat: "кот на подоконнике",
  neon: "неоновая вывеска",
  curtains: "шторы",
  rain: "дождь за стеклом",
  plant: "комнатное растение",
  garland: "гирлянда",
  bulb: "лампочка на проводе",
  aquarium: "аквариум",
  smoke: "сигарета у окна",
  disco: "дискошар",
  carpet: "ковёр на стене",
  crt: "старый монитор",
  boarded: "заколоченное окно",
  staircase: "лестничная клетка",
  minibalcony: "балкон с цветами",
};

const MARQUEE_LINES = [
  "АРЕНДА КОМНАТЫ +7 999 123-45-67",
  "ГРУЗОПЕРЕВОЗКИ ПО ГОРОДУ КРУГЛОСУТОЧНО",
  "НАТЯЖНЫЕ ПОТОЛКИ ОТ 350 ЗА КВАДРАТ",
  "СОБИРАЕМ МЕБЕЛЬ — НЕДОРОГО",
];

const NEON_WORDS = ["WI-FI", "АРЕНДА", "САЛОН", "БАР"];

function pane(kind: WindowKind, seed: number) {
  switch (kind) {
    case "tv":
      return (
        <div className="pane pane--tv">
          <div className="tv-glow" />
          <div className="tv-static" />
          <div className="tv-scan" />
          <div className="tv-logo">{seed % 2 === 0 ? "ОРТ" : "1×1"}</div>
        </div>
      );
    case "marquee": {
      const text = MARQUEE_LINES[seed % MARQUEE_LINES.length] + " · ";
      return (
        <div className="pane pane--marquee">
          <div className="marquee-track">
            <span>{text}</span>
            <span>{text}</span>
            <span>{text}</span>
            <span>{text}</span>
          </div>
        </div>
      );
    }
    case "dark":
      return <div className="pane pane--dark" />;
    case "cat":
      return (
        <div className={"pane pane--cat" + (seed % 2 === 0 ? " is-flipped" : "")}>
          <div className="cat">
            <span className="cat__ear cat__ear--l" />
            <span className="cat__ear cat__ear--r" />
            <span className="cat__head" />
            <span className="cat__eye cat__eye--l" />
            <span className="cat__eye cat__eye--r" />
            <span className="cat__nose" />
            <span className="cat__tail" />
          </div>
          <div className="sill-shelf" />
        </div>
      );
    case "neon": {
      const word = NEON_WORDS[seed % NEON_WORDS.length];
      return (
        <div className="pane pane--neon">
          <span className="neon-word">{word}</span>
        </div>
      );
    }
    case "curtains":
      return (
        <div className="pane pane--curtains">
          <div className="curtain-bg" />
          <div className="curtain curtain--l" />
          <div className="curtain curtain--r" />
          <div className="curtain-rod" />
        </div>
      );
    case "rain":
      return (
        <div className="pane pane--rain">
          {Array.from({ length: 10 }, (_, i) => (
            <span key={i} className={`drop drop--${(i % 7) + 1}`} />
          ))}
          <div className="streaks" />
        </div>
      );
    case "plant":
      return (
        <div className="pane pane--plant">
          <div className="plant">
            <div className="plant__leaves">
              <span className="leaf leaf--1" />
              <span className="leaf leaf--2" />
              <span className="leaf leaf--3" />
              <span className="leaf leaf--4" />
              <span className="leaf leaf--5" />
            </div>
            <div className="plant__pot" />
          </div>
          <div className="sill-shelf" />
        </div>
      );
    case "garland":
      return (
        <div className="pane pane--garland">
          <div className="garland-row garland-row--top">
            {Array.from({ length: 6 }, (_, i) => (
              <span key={i} className={`gbulb g${(i % 5) + 1}`} />
            ))}
          </div>
          <div className="garland-row garland-row--bottom">
            {Array.from({ length: 6 }, (_, i) => (
              <span key={i} className={`gbulb g${((i + 2) % 5) + 1}`} />
            ))}
          </div>
        </div>
      );
    case "bulb":
      return (
        <div className="pane pane--bulb">
          <div className="bulb">
            <span className="bulb__cord" />
            <span className="bulb__shape" />
            <span className="bulb__halo" />
          </div>
        </div>
      );
    case "aquarium":
      return (
        <div className="pane pane--aquarium">
          <div className="water" />
          {Array.from({ length: 4 }, (_, i) => (
            <span key={i} className={`fish fish--${i + 1}`} />
          ))}
          <div className="seabed">
            <span className="weed weed--1" />
            <span className="weed weed--2" />
            <span className="weed weed--3" />
          </div>
        </div>
      );
    case "smoke":
      return (
        <div className="pane pane--smoke">
          <div className="cig">
            <span className="cig__body" />
            <span className="cig__ember" />
          </div>
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`puff puff--${i + 1}`} />
          ))}
        </div>
      );
    case "disco":
      return (
        <div className="pane pane--disco">
          <span className="disco__cord" />
          <span className="disco__ball" />
          <span className="disco__halo" />
        </div>
      );
    case "carpet":
      return (
        <div className="pane pane--carpet">
          <div className="carpet" />
        </div>
      );
    case "crt":
      return (
        <div className="pane pane--crt">
          <div className="crt-screen">
            <div className="crt-text">
              &gt; ping ya.ru
              <br />
              64 bytes from 87.250.250.242
              <br />
              time=18.2 ms ttl=54
              <br />
              &gt; _
            </div>
            <div className="crt-scan" />
          </div>
        </div>
      );
    case "boarded":
      return (
        <div className="pane pane--boarded">
          <div className="boarded-bg" />
          <span className="board board--a" />
          <span className="board board--b" />
          <span className="board board--c" />
        </div>
      );
    case "staircase":
      return (
        <div className="pane pane--staircase">
          <div className="stair-light stair-light--top" />
          <div className="stair-light stair-light--bot" />
          <div className="stair-divider" />
        </div>
      );
    case "minibalcony":
      return (
        <div className="pane pane--minibalc">
          <div className="minibalc__back" />
          <div className="minibalc__rail" />
          <div className="minibalc__pot minibalc__pot--l" />
          <div className="minibalc__pot minibalc__pot--r" />
          <div className="minibalc__floor" />
        </div>
      );
  }
}


const GLOW_VAR: Record<GlowName, string> = {
  warm: "var(--glow-warm)",
  cold: "var(--glow-cold)",
  pink: "var(--glow-pink)",
  green: "var(--glow-green)",
  violet: "var(--glow-violet)",
  blue: "var(--glow-blue)",
  amber: "var(--glow-amber)",
  off: "0 0 0",
};

function Window({ slot, onSelect }: { slot: Slot; onSelect: (s: Slot) => void }) {
  const cssVars = {
    gridArea: slot.area,
    ["--glow" as string]: GLOW_VAR[slot.glow],
  } as React.CSSProperties;
  const isOff = slot.glow === "off";
  return (
    <button
      type="button"
      className={"window" + (isOff ? " is-off" : "") + " window--" + slot.kind}
      style={cssVars}
      aria-label={LABEL[slot.kind]}
      onClick={(e) => {
        e.currentTarget.classList.toggle("is-open");
        onSelect(slot);
      }}
    >
      <div className="frame">
        {pane(slot.kind, slot.seed)}
        {!isOff && <div className="halo" aria-hidden />}
        <div className="glass-glare" aria-hidden />
        <div className="cross" aria-hidden />
      </div>
      <div className="sill" aria-hidden />
    </button>
  );
}

export default function Building({ onSelect }: { onSelect: (s: Slot) => void }) {
  return (
    <div className="building">
      <div className="building__roof">
        <div className="roof-edge" />
        <span className="antenna antenna--a" />
        <span className="antenna antenna--b" />
        <span className="antenna antenna--c" />
        <span className="dish" />
        <span className="chimney">
          <span className="smoke-puff smoke-puff--1" />
          <span className="smoke-puff smoke-puff--2" />
          <span className="smoke-puff smoke-puff--3" />
        </span>
        <div className="roof-sign">Дом 12</div>
      </div>

      <div className="building__wall">
        <div className="wall-grid">
          {SLOTS.map((slot) =>
            slot.area === "balc" ? (
              <Balcony
                key="balc"
                slot={slot}
                onClick={() => onSelect(slot)}
              />
            ) : (
              <Window key={slot.area} slot={slot} onSelect={onSelect} />
            )
          )}
        </div>
      </div>

      <div className="building__plinth">
        <div className="entrance">
          <div className="entrance__arch">
            <span className="entrance__num">№ 1</span>
          </div>
          <div className="entrance__door" />
          <span className="entrance__lamp" />
        </div>
        <div className="bench">
          <span className="bench__seat" />
          <span className="bench__leg bench__leg--l" />
          <span className="bench__leg bench__leg--r" />
        </div>
        <div className="bin" />
        <div className="shop">
          <div className="shop__sign">
            <span className="shop__sign-text">Продукты</span>
            <span className="shop__sign-hours">24</span>
          </div>
          <div className="shop__glass">
            <div className="shop__door" />
          </div>
        </div>
        <div className="streetlight">
          <span className="streetlight__pole" />
          <span className="streetlight__head" />
          <span className="streetlight__glow" />
        </div>
      </div>
    </div>
  );
}

function Balcony({ slot, onClick }: { slot: Slot; onClick: () => void }) {
  return (
    <button
      type="button"
      className="balcony"
      style={{ gridArea: slot.area }}
      aria-label="балкон с бельём"
      onClick={onClick}
    >
      <div className="balcony__rail" />
      <div className="balcony__back" />
      <div className="balcony__line" />
      <div className="balcony__laundry">
        <span className="laund laund--1" />
        <span className="laund laund--2" />
        <span className="laund laund--3" />
        <span className="laund laund--4" />
        <span className="laund laund--5" />
        <span className="laund laund--6" />
      </div>
      <div className="balcony__floor" />
    </button>
  );
}
