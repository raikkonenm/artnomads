"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { RevealLine } from "@/components/ui/RevealText";
import { FadeIn } from "@/components/ui/FadeIn";

/* ─── Animated counter ──────────────────────────────────────────────────────── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const STATS = [
  {
    value: 122,
    suffix: "k+",
    label: "ArtNomads Instagram",
    sub: "Global audience",
  },
  {
    value: 20,
    suffix: "k+",
    label: "FindArt Platform",
    sub: "Community reach",
  },
  {
    value: 19,
    suffix: "+",
    label: "Countries",
    sub: "Europe · Asia · Middle East · Australia · Americas",
  },
  {
    value: 5,
    suffix: "",
    label: "Years Active",
    sub: "2021 – present",
  },
];

const REGIONS = [
  "Europe",
  "Asia",
  "Middle East",
  "Australia",
  "United States",
];

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="section-dark py-28 lg:py-40 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 lg:mb-24">
          <RevealLine delay={0}>
            <p className="text-label text-silver/25 tracking-[0.22em] mb-3">Ecosystem</p>
            <h2
              className="font-display font-light text-chalk leading-none"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 5rem)" }}
            >
              Reach & Audience
            </h2>
          </RevealLine>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05] mb-20 lg:mb-28">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="bg-void px-6 py-10 lg:px-10 lg:py-14"
            >
              <p
                className="font-display font-light text-chalk leading-none"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
              >
                <Counter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-label text-silver/40 tracking-[0.16em] mt-4">
                {stat.label}
              </p>
              <p className="text-xs text-silver/25 font-sans mt-1 leading-relaxed">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Regions */}
        <div className="h-px bg-white/[0.06] mb-12" />
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12">
          <p className="text-label text-silver/20 tracking-[0.2em] shrink-0">
            Active Regions
          </p>
          <div className="flex flex-wrap gap-4">
            {REGIONS.map((r, i) => (
              <FadeIn key={r} delay={0.1 + i * 0.06} direction="none">
                <span className="text-label text-silver/35 tracking-[0.16em] border border-white/[0.08] px-4 py-2">
                  {r}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
