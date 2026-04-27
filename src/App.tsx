import { useEffect, useState } from "react";
import Sky from "./components/Sky";
import Roof from "./components/Roof";
import Building from "./components/Building";
import Plinth from "./components/Plinth";
import Manifesto from "./components/Manifesto";
import Footer from "./components/Footer";
import TimeToggle from "./components/TimeToggle";
import type { TimeOfDay } from "./types";

const STORAGE_KEY = "panelka:time";

function pickInitialTime(): TimeOfDay {
  if (typeof window === "undefined") return "day";
  const saved = window.localStorage.getItem(STORAGE_KEY) as TimeOfDay | null;
  if (saved === "day" || saved === "dusk" || saved === "night") return saved;
  const hour = new Date().getHours();
  if (hour >= 21 || hour < 6) return "night";
  if (hour >= 18) return "dusk";
  return "day";
}

export default function App() {
  const [time, setTime] = useState<TimeOfDay>(pickInitialTime);

  useEffect(() => {
    document.documentElement.dataset.time = time;
    window.localStorage.setItem(STORAGE_KEY, time);
  }, [time]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.target instanceof HTMLInputElement) return;
      const k = event.key.toLowerCase();
      if (k === "n") setTime("night");
      else if (k === "d") setTime("day");
      else if (k === "v") setTime("dusk");
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Sky>
        <TimeToggle value={time} onChange={setTime} />
        <div className="relative mx-auto w-full max-w-[1080px] px-4 pt-24 sm:pt-28">
          <Roof />
          <Building />
          <Plinth />
        </div>
      </Sky>
      <Manifesto />
      <Footer />
    </div>
  );
}
