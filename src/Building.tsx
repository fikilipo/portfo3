type WindowKind =
  | "tv"
  | "marquee"
  | "dark"
  | "cat"
  | "glitch"
  | "curtains"
  | "rain"
  | "plant"
  | "garland"
  | "bulb"
  | "aquarium"
  | "smoke"
  | "disco"
  | "carpet"
  | "crt"
  | "boarded"
  | "staircase";

type GlowName = "warm" | "cold" | "pink" | "green" | "violet" | "blue" | "amber" | "off";

const LABEL: Record<WindowKind, string> = {
  tv: "телевизор",
  marquee: "бегущая строка",
  dark: "тёмное окно",
  cat: "кот на подоконнике",
  glitch: "глитч-надпись",
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
};

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
    case "marquee":
      return (
        <div className="pane pane--marquee">
          <div className="marquee-track">
            <span>{seed % 2 === 0 ? "СПАЛЬНЫЙ РАЙОН СВОБОДЕН · ЦЕНТР ЗАНЯТ · " : "ВТОРНИК · ЧАЙ · ОКНО НА КУХНЕ · "}</span>
            <span>{seed % 2 === 0 ? "СПАЛЬНЫЙ РАЙОН СВОБОДЕН · ЦЕНТР ЗАНЯТ · " : "ВТОРНИК · ЧАЙ · ОКНО НА КУХНЕ · "}</span>
            <span>{seed % 2 === 0 ? "СПАЛЬНЫЙ РАЙОН СВОБОДЕН · ЦЕНТР ЗАНЯТ · " : "ВТОРНИК · ЧАЙ · ОКНО НА КУХНЕ · "}</span>
            <span>{seed % 2 === 0 ? "СПАЛЬНЫЙ РАЙОН СВОБОДЕН · ЦЕНТР ЗАНЯТ · " : "ВТОРНИК · ЧАЙ · ОКНО НА КУХНЕ · "}</span>
          </div>
        </div>
      );
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
    case "glitch":
      return (
        <div className="pane pane--glitch">
          <div className="scanlines" />
          <div className="glitch" data-text={seed % 2 === 0 ? "РУССКИЙ ДИЗАЙН" : "ПАНЕЛЬНЫЙ КОД"}>
            {seed % 2 === 0 ? "РУССКИЙ ДИЗАЙН" : "ПАНЕЛЬНЫЙ КОД"}
          </div>
        </div>
      );
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
          {Array.from({ length: 14 }, (_, i) => (
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
              &gt; ping panelka.code
              <br />
              64 bytes from 127.0.0.1
              <br />
              time=18.2 ms ttl=64
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
  }
}

type Slot = { area: string; kind: WindowKind; glow: GlowName; seed: number };

const SLOTS: Slot[] = [
  { area: "w01", kind: "tv", glow: "cold", seed: 1 },
  { area: "w02", kind: "marquee", glow: "warm", seed: 2 },
  { area: "w03", kind: "dark", glow: "off", seed: 3 },
  { area: "w04", kind: "cat", glow: "amber", seed: 4 },
  { area: "w05", kind: "glitch", glow: "pink", seed: 5 },

  { area: "w06", kind: "curtains", glow: "warm", seed: 6 },
  { area: "w07", kind: "rain", glow: "blue", seed: 7 },
  { area: "stair", kind: "staircase", glow: "cold", seed: 8 },
  { area: "w08", kind: "plant", glow: "green", seed: 9 },
  { area: "w09", kind: "garland", glow: "violet", seed: 10 },

  { area: "w10", kind: "bulb", glow: "warm", seed: 11 },
  { area: "w11", kind: "aquarium", glow: "cold", seed: 12 },
  { area: "w12", kind: "dark", glow: "off", seed: 13 },
  { area: "w13", kind: "tv", glow: "violet", seed: 14 },

  { area: "w14", kind: "smoke", glow: "amber", seed: 15 },
  { area: "balc", kind: "dark", glow: "warm", seed: 16 },
  { area: "w15", kind: "disco", glow: "pink", seed: 17 },

  { area: "w16", kind: "dark", glow: "warm", seed: 18 },
  { area: "w17", kind: "carpet", glow: "warm", seed: 19 },
  { area: "w18", kind: "crt", glow: "cold", seed: 20 },
  { area: "w19", kind: "cat", glow: "warm", seed: 21 },
  { area: "w20", kind: "marquee", glow: "cold", seed: 22 },

  { area: "w21", kind: "bulb", glow: "warm", seed: 23 },
  { area: "w22", kind: "glitch", glow: "violet", seed: 24 },
  { area: "w23", kind: "tv", glow: "amber", seed: 25 },
  { area: "w24", kind: "boarded", glow: "off", seed: 26 },
  { area: "w25", kind: "plant", glow: "green", seed: 27 },
];

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

function Window({ slot }: { slot: Slot }) {
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

export default function Building() {
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
      </div>

      <div className="building__wall">
        <div className="wall-grid">
          {SLOTS.map((slot) =>
            slot.area === "balc" ? (
              <Balcony key="balc" slot={slot} />
            ) : (
              <Window key={slot.area} slot={slot} />
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
        <div className="streetlight">
          <span className="streetlight__pole" />
          <span className="streetlight__head" />
          <span className="streetlight__glow" />
        </div>
      </div>
    </div>
  );
}

function Balcony({ slot }: { slot: Slot }) {
  return (
    <div className="balcony" style={{ gridArea: slot.area }} aria-label="балкон с бельём">
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
    </div>
  );
}
