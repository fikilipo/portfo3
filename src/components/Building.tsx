import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { COLS, GRID_AREAS, ROWS, SLOTS } from "../data/layout";
import Window from "./Window";
import MarqueeWindow from "./windows/MarqueeWindow";
import CurtainsWindow from "./windows/CurtainsWindow";
import GlitchWindow from "./windows/GlitchWindow";
import TVWindow from "./windows/TVWindow";
import CatWindow from "./windows/CatWindow";
import RainWindow from "./windows/RainWindow";
import PlantWindow from "./windows/PlantWindow";
import DiscoWindow from "./windows/DiscoWindow";
import BulbWindow from "./windows/BulbWindow";
import GarlandWindow from "./windows/GarlandWindow";
import AquariumWindow from "./windows/AquariumWindow";
import BoardedWindow from "./windows/BoardedWindow";
import SmokeWindow from "./windows/SmokeWindow";
import CarpetWindow from "./windows/CarpetWindow";
import CRTWindow from "./windows/CRTWindow";
import DarkWindow from "./windows/DarkWindow";
import LaundryWindow from "./windows/LaundryWindow";
import StaircaseWindow from "./windows/StaircaseWindow";
import type { WindowKind } from "../types";

const RENDERERS: Record<WindowKind, (seed: number) => React.ReactNode> = {
  marquee: (s) => <MarqueeWindow seed={s} />,
  curtains: (s) => <CurtainsWindow seed={s} />,
  glitch: (s) => <GlitchWindow seed={s} />,
  tv: (s) => <TVWindow seed={s} />,
  cat: (s) => <CatWindow seed={s} />,
  rain: (s) => <RainWindow seed={s} />,
  plant: (s) => <PlantWindow seed={s} />,
  disco: (s) => <DiscoWindow seed={s} />,
  bulb: (s) => <BulbWindow seed={s} />,
  garland: (s) => <GarlandWindow seed={s} />,
  aquarium: (s) => <AquariumWindow seed={s} />,
  boarded: (s) => <BoardedWindow seed={s} />,
  smoke: (s) => <SmokeWindow seed={s} />,
  carpet: (s) => <CarpetWindow seed={s} />,
  crt: (s) => <CRTWindow seed={s} />,
  dark: (s) => <DarkWindow seed={s} />,
  laundry: (s) => <LaundryWindow seed={s} />,
  staircase: (s) => <StaircaseWindow seed={s} />,
};

const KIND_LABEL: Record<WindowKind, string> = {
  marquee: "бегущая строка",
  curtains: "шторы",
  glitch: "глитч-надпись",
  tv: "телевизор",
  cat: "кот на подоконнике",
  rain: "дождь за стеклом",
  plant: "комнатное растение",
  disco: "дискошар",
  bulb: "лампочка на проводе",
  garland: "новогодняя гирлянда",
  aquarium: "аквариум",
  boarded: "заколоченное окно",
  smoke: "сигаретный огонёк",
  carpet: "ковёр на стене",
  crt: "старый монитор",
  dark: "тёмное окно",
  laundry: "балкон с бельём",
  staircase: "лестничная клетка",
};

export default function Building() {
  const style: CSSProperties = {
    gridTemplateAreas: GRID_AREAS,
    gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
    gridTemplateRows: `repeat(${ROWS}, clamp(82px, 13vw, 138px))`,
    ["--cols" as string]: String(COLS),
    ["--rows" as string]: String(ROWS),
  };

  return (
    <div className="relative mx-auto w-full max-w-[960px]">
      <div className="absolute -inset-x-[14px] -top-1 bottom-0 -z-10 rounded-sm bg-[color:var(--frame-outer)] opacity-30 blur-sm" />
      <motion.div
        className="wall relative grid gap-[10px] p-[14px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]"
        style={style}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
      >
        {SLOTS.map((slot) => (
          <Window
            key={slot.area}
            area={slot.area}
            glow={slot.glow}
            ariaLabel={KIND_LABEL[slot.kind]}
            cross={slot.kind !== "staircase" && slot.kind !== "laundry"}
            spillStrength={slot.kind === "staircase" ? 0.4 : 1}
          >
            {RENDERERS[slot.kind](slot.seed ?? 0)}
          </Window>
        ))}
      </motion.div>
    </div>
  );
}
