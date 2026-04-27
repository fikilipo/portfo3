# Панельный Код / The Panelka Grid

Манифест CSS-сетки в форме фасада позднесоветской панельки. Один HTML-документ, один файл стилей, ни одной картинки. Каждое окно — отдельный CSS-этюд. Подробное ТЗ лежит в [TZ.md](./TZ.md).

## Стек

- Vite + React 19 + TypeScript
- Tailwind CSS 4 (как утилитарная база)
- Framer Motion (только для одного входного перехода)
- Чистый CSS: Grid, переменные, `clip-path`, `conic-gradient`, `backdrop-filter`, псевдоэлементы

## Запуск

```bash
npm install
npm run dev
```

Сборка для GitHub Pages:

```bash
npm run build
```

`base` в [vite.config.ts](./vite.config.ts) выставлен в `/portfo3/`. Workflow `.github/workflows/deploy.yml` публикует `dist` на ветку `gh-pages` после пуша в `main`. Включите Pages в настройках репозитория (Source: GitHub Actions).

## Управление

- Кнопки **День / Вечер / Ночь** — в правом верхнем углу.
- `D`, `V`, `N` — те же режимы с клавиатуры.
- Наведение на окно — раздвигаются шторы / включается подсветка.
- Клик по окну — створка слегка приоткрывается.

## Структура

```
src/
  App.tsx                — оркестратор и состояние времени суток
  index.css              — токены, текстуры, кейфреймы
  data/layout.ts         — grid-template-areas + раскладка окон
  components/
    Sky, Roof, Plinth, Building, Window, TimeToggle, Manifesto, Footer
    windows/             — 18 разных мини-этюдов
```
