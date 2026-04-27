export type WindowKind =
  | "tv"
  | "marquee"
  | "dark"
  | "cat"
  | "neon"
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
  | "staircase"
  | "minibalcony";

export type GlowName = "warm" | "cold" | "pink" | "green" | "violet" | "blue" | "amber" | "off";

export type Slot = { area: string; kind: WindowKind; glow: GlowName; seed: number };

export const SLOTS: Slot[] = [
  { area: "w01", kind: "tv", glow: "cold", seed: 1 },
  { area: "w02", kind: "marquee", glow: "warm", seed: 2 },
  { area: "w03", kind: "dark", glow: "off", seed: 3 },
  { area: "w04", kind: "cat", glow: "amber", seed: 4 },
  { area: "w05", kind: "neon", glow: "pink", seed: 5 },

  { area: "w06", kind: "curtains", glow: "warm", seed: 6 },
  { area: "w07", kind: "rain", glow: "blue", seed: 7 },
  { area: "stair", kind: "staircase", glow: "cold", seed: 8 },
  { area: "w08", kind: "plant", glow: "green", seed: 9 },
  { area: "w09", kind: "minibalcony", glow: "warm", seed: 10 },

  { area: "w10", kind: "bulb", glow: "warm", seed: 11 },
  { area: "w11", kind: "aquarium", glow: "cold", seed: 12 },
  { area: "w12", kind: "garland", glow: "violet", seed: 13 },
  { area: "w13", kind: "tv", glow: "violet", seed: 14 },

  { area: "w14", kind: "smoke", glow: "amber", seed: 15 },
  { area: "balc", kind: "dark", glow: "warm", seed: 16 },
  { area: "w15", kind: "disco", glow: "pink", seed: 17 },

  { area: "w16", kind: "minibalcony", glow: "green", seed: 18 },
  { area: "w17", kind: "carpet", glow: "warm", seed: 19 },
  { area: "w18", kind: "crt", glow: "cold", seed: 20 },
  { area: "w19", kind: "cat", glow: "warm", seed: 21 },
  { area: "w20", kind: "neon", glow: "blue", seed: 22 },

  { area: "w21", kind: "bulb", glow: "warm", seed: 23 },
  { area: "w22", kind: "curtains", glow: "amber", seed: 24 },
  { area: "w23", kind: "tv", glow: "amber", seed: 25 },
  { area: "w24", kind: "boarded", glow: "off", seed: 26 },
  { area: "w25", kind: "plant", glow: "green", seed: 27 },
];

export type Resident = {
  num: string;
  floor: string;
  title: string;
  sub: string;
  area: string;
  kind: string;
  lit: boolean;
};

export const RESIDENTS: Record<string, Resident> = {
  w01: { num: "26", floor: "6", title: "Семья Соколовых", sub: "Сериал по первому каналу — каждый вечер.", area: "32 м²", kind: "Однушка", lit: true },
  w02: { num: "25", floor: "6", title: "Объявления у подъезда", sub: "Аренда, грузоперевозки, потолки. Бегущая строка работает с 1998-го.", area: "—", kind: "Витрина", lit: true },
  w03: { num: "24", floor: "6", title: "На даче до субботы", sub: "Свет выключен, кот у соседей.", area: "44 м²", kind: "Двушка", lit: false },
  w04: { num: "23", floor: "6", title: "Барсик", sub: "Кот наблюдает за птицами на проводах.", area: "32 м²", kind: "Однушка", lit: true },
  w05: { num: "22", floor: "6", title: "Парикмахерская «Алина»", sub: "Без записи. Стрижка 400, мужская 250.", area: "—", kind: "Услуги", lit: true },
  w06: { num: "21", floor: "5", title: "Бабушка Тамара", sub: "Шторы плотные, чай заварной, окно проветрено.", area: "32 м²", kind: "Однушка", lit: true },
  w07: { num: "20", floor: "5", title: "Студент Денис", sub: "Дождь по стеклу. Сессия. Горит до утра.", area: "44 м²", kind: "Двушка", lit: true },
  stair: { num: "—", floor: "5–6", title: "Лестничная клетка", sub: "Лампочка не выключается с 2003 года.", area: "—", kind: "Общее", lit: true },
  w08: { num: "19", floor: "5", title: "Бабушкин кактус", sub: "Растёт уже двадцать лет, ни разу не цвёл.", area: "44 м²", kind: "Двушка", lit: true },
  w09: { num: "18", floor: "5", title: "Балкон с геранью", sub: "Утром поливают, вечером курят.", area: "32 м²", kind: "Однушка", lit: true },
  w10: { num: "17", floor: "4", title: "Холостяк Андрей", sub: "Лампочка без абажура, посуда в раковине.", area: "32 м²", kind: "Однушка", lit: true },
  w11: { num: "16", floor: "4", title: "Аквариум Ивановых", sub: "Четыре золотых рыбки и одна сомик-присоска.", area: "44 м²", kind: "Двушка", lit: true },
  w12: { num: "15", floor: "4", title: "У них всегда ёлка", sub: "Гирлянда не снимается до апреля. И правильно.", area: "44 м²", kind: "Двушка", lit: true },
  w13: { num: "14", floor: "4", title: "Молодёжка", sub: "Геймер. Фиолетовая подсветка ASUS.", area: "44 м²", kind: "Двушка", lit: true },
  w14: { num: "13", floor: "3", title: "Курилка у форточки", sub: "Вид на двор. Окно треснуто с прошлой зимы.", area: "32 м²", kind: "Однушка", lit: true },
  balc: { num: "12", floor: "3", title: "Большой балкон", sub: "Бельё, лыжи, велосипед, ящик с картошкой.", area: "—", kind: "Общий балкон", lit: true },
  w15: { num: "11", floor: "3", title: "Дискотека по средам", sub: "Шар крутится, соседи в бешенстве.", area: "32 м²", kind: "Однушка", lit: true },
  w16: { num: "10", floor: "2", title: "Балкон с самокатом", sub: "Жильцы — молодая пара с собакой.", area: "32 м²", kind: "Однушка", lit: true },
  w17: { num: "9", floor: "2", title: "Ковёр на стене", sub: "Бабушка против моды. Ковру тридцать лет.", area: "44 м²", kind: "Двушка", lit: true },
  w18: { num: "8", floor: "2", title: "Старый ламповый монитор", sub: "Системный администратор, удалёнка.", area: "44 м²", kind: "Двушка", lit: true },
  w19: { num: "7", floor: "2", title: "Чёрный кот Васька", sub: "Мяукает на голубей второй час подряд.", area: "44 м²", kind: "Двушка", lit: true },
  w20: { num: "6", floor: "2", title: "Мастерская «Ремонт»", sub: "Услуги электрика. Звоните после восьми.", area: "—", kind: "Услуги", lit: true },
  w21: { num: "5", floor: "1", title: "Дядя Вова", sub: "Свет на кухне до утра, радио «Шансон».", area: "32 м²", kind: "Однушка", lit: true },
  w22: { num: "4", floor: "1", title: "Соседка с детьми", sub: "Шторы тёплые, телевизор на мультиках.", area: "44 м²", kind: "Двушка", lit: true },
  w23: { num: "3", floor: "1", title: "Хоккей по НТВ", sub: "Болеют всем подъездом.", area: "44 м²", kind: "Двушка", lit: true },
  w24: { num: "2", floor: "1", title: "Заколоченная квартира", sub: "Хозяина не видели лет десять. Окно крест-накрест.", area: "44 м²", kind: "Двушка", lit: false },
  w25: { num: "1", floor: "1", title: "Цветочница Лида", sub: "Десять видов фиалок на подоконнике.", area: "32 м²", kind: "Однушка", lit: true },
};
