import type { ReactNode } from "react";

export default function Sky({ children }: { children: ReactNode }) {
  return <section className="sky relative w-full pb-20">{children}</section>;
}
