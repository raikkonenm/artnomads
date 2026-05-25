"use client";

import { cn } from "@/lib/utils";

interface MarqueeStripProps {
  text?: string;
  className?: string;
  speed?: number; /* seconds for one full cycle */
  light?: boolean;
}

const DEFAULT_TEXT =
  "Art Dubai · Art Central Hong Kong · Venice Biennale · Tokyo · London · New York · Seoul · Bangkok · Tbilisi · Florence · Palermo · Melbourne · Dubai · ";

export function MarqueeStrip({
  text = DEFAULT_TEXT,
  className,
  speed = 32,
  light = false,
}: MarqueeStripProps) {
  /* Duplicate the string so the loop is seamless */
  const doubled = text + text;

  return (
    <div
      className={cn(
        "overflow-hidden py-4 border-y",
        light
          ? "bg-paper border-black/[0.06] text-void/40"
          : "bg-ash border-white/[0.05] text-silver/30",
        className
      )}
      aria-hidden
    >
      <div
        className="marquee-track"
        style={{ animationDuration: `${speed}s` }}
      >
        <span className="text-label tracking-[0.22em] whitespace-nowrap pr-0">
          {doubled}
        </span>
      </div>
    </div>
  );
}
