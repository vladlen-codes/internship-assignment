import type { CSSProperties, ElementType, ReactNode } from "react";
import clsx from "clsx";

export type Tone = "default" | "soft" | "muted" | "dark" | "legal";

type SectionProps = {
  rows: [number, number];
  tone?: Tone;
  pad?: number;
  minH?: number;
  id?: string;
  className?: string;
  background?: ReactNode;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  children: ReactNode;
};

const toneClass: Record<Tone, string> = {
  default: "bg-bg text-ink",
  soft: "bg-bg-soft text-ink",
  muted: "bg-bg-muted text-ink-strong",
  dark: "bg-ink text-on-dark",
  legal: "bg-legal text-on-dark",
};

export function FluidSection({ rows, tone = "default", pad = 0, minH = 0, id, className, background, children, ...aria }: SectionProps) {
  return (
    <section
      id={id}
      {...aria}
      className={clsx("fe-section", toneClass[tone], className)}
      style={{ "--pad": pad, "--min-h": minH, "--rows-m": rows[0], "--rows-d": rows[1] } as CSSProperties}
    >
      {background}
      <div className="fe">{children}</div>
    </section>
  );
}

type Align = "start" | "center" | "end";

type BlockProps = {
  m: string;
  d: string;
  z?: [number, number];
  align?: Align | [Align, Align];
  as?: ElementType;
  className?: string;
  children?: ReactNode;
};

export function Block({ m, d, z = [0, 0], align = "start", as: Tag = "div", className, children }: BlockProps) {
  const [am, ad] = Array.isArray(align) ? align : [align, align];
  return (
    <Tag
      className={clsx("fe-block", className)}
      style={{ "--am": m, "--ad": d, "--zm": z[0], "--zd": z[1], "--jm": am, "--jd": ad } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
