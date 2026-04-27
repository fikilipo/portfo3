import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import type { GlowColor } from "../types";

const GLOW_VAR: Record<GlowColor, string> = {
  warm: "var(--glow-warm)",
  cold: "var(--glow-cold)",
  pink: "var(--glow-pink)",
  green: "var(--glow-green)",
  violet: "var(--glow-violet)",
  off: "0,0,0",
};

type Props = {
  area: string;
  glow: GlowColor;
  children: ReactNode;
  cross?: boolean;
  ariaLabel?: string;
  className?: string;
  spillStrength?: number;
};

export default function Window({
  area,
  glow,
  children,
  cross = true,
  ariaLabel,
  className = "",
  spillStrength = 1,
}: Props) {
  const [open, setOpen] = useState(false);

  const style: CSSProperties = {
    gridArea: area,
    ["--glow" as string]: GLOW_VAR[glow],
  };

  return (
    <div
      className={`window-cell ${open ? "is-open" : ""} ${className}`}
      style={style}
      role="figure"
      aria-label={ariaLabel}
      onClick={() => setOpen((v) => !v)}
    >
      <div className={`pane ${cross ? "has-cross" : ""}`}>
        {children}
        {glow !== "off" && <div className="glow" />}
      </div>
      {glow !== "off" && spillStrength > 0 && (
        <div className="spill" style={{ opacity: `calc(var(--window-glow) * ${0.6 * spillStrength})` }} />
      )}
    </div>
  );
}
