import type { GlowColor, WindowKind } from "../types";

export type Slot = {
  area: string;
  kind: WindowKind;
  glow: GlowColor;
  seed?: number;
};

export const GRID_AREAS = [
  "w1  w2  w3  w4  w5",
  "w6  w7  st  w8  w9",
  "w10 w11 st  w12 w13",
  "w14 ba  ba  w15 w16",
  "w17 w18 w19 w20 w21",
  "w22 w23 w24 w25 w26",
]
  .map((row) => `"${row}"`)
  .join("\n");

export const SLOTS: Slot[] = [
  { area: "w1", kind: "marquee", glow: "warm", seed: 1 },
  { area: "w2", kind: "tv", glow: "cold", seed: 2 },
  { area: "w3", kind: "dark", glow: "off", seed: 3 },
  { area: "w4", kind: "disco", glow: "pink", seed: 4 },
  { area: "w5", kind: "cat", glow: "warm", seed: 5 },

  { area: "w6", kind: "curtains", glow: "warm", seed: 6 },
  { area: "w7", kind: "glitch", glow: "pink", seed: 7 },
  { area: "st", kind: "staircase", glow: "cold", seed: 8 },
  { area: "w8", kind: "rain", glow: "cold", seed: 9 },
  { area: "w9", kind: "plant", glow: "green", seed: 10 },

  { area: "w10", kind: "bulb", glow: "warm", seed: 11 },
  { area: "w11", kind: "garland", glow: "violet", seed: 12 },
  { area: "w12", kind: "aquarium", glow: "cold", seed: 13 },
  { area: "w13", kind: "dark", glow: "off", seed: 14 },

  { area: "w14", kind: "boarded", glow: "off", seed: 15 },
  { area: "ba", kind: "laundry", glow: "warm", seed: 16 },
  { area: "w15", kind: "smoke", glow: "warm", seed: 17 },
  { area: "w16", kind: "dark", glow: "warm", seed: 18 },

  { area: "w17", kind: "tv", glow: "violet", seed: 19 },
  { area: "w18", kind: "cat", glow: "warm", seed: 20 },
  { area: "w19", kind: "crt", glow: "cold", seed: 21 },
  { area: "w20", kind: "carpet", glow: "warm", seed: 22 },
  { area: "w21", kind: "plant", glow: "green", seed: 23 },

  { area: "w22", kind: "bulb", glow: "warm", seed: 24 },
  { area: "w23", kind: "marquee", glow: "cold", seed: 25 },
  { area: "w24", kind: "rain", glow: "cold", seed: 26 },
  { area: "w25", kind: "glitch", glow: "green", seed: 27 },
  { area: "w26", kind: "disco", glow: "pink", seed: 28 },
];

export const COLS = 5;
export const ROWS = 6;
