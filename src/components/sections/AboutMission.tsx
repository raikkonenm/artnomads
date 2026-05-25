"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

const STATS = [
  { value: "200+", label: "Artists Represented" },
  { value: "48", label: "Countries Reached" },
  { value: "1.2M", label: "Annual Visitors" },
  { value: "1987", label: "Founded" },
];

export function AboutMission() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image column */}
          <FadeIn direction="right" className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110 origin-center">
                <Image
                  src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=900&q=80"
                  alt="Gallery installation view with visitors engaging with artwork"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
            {/* Decorative accent box */}
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 border border-[var(--color-accent)] hidden lg:block"
              aria-hidden
            />
          </FadeIn>

          {/* Text column */}
          <div className="flex flex-col justify-center">
            <FadeIn>
              <p className="text-[10px] tracking-widest uppercase text-[var(--color-accent)] mb-4">
                Our Mission
              </p>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-tight text-balance">
                A Space Where Art
                <br />
                <span>Transcends Borders</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.15} className="mt-6">
              <p className="text-base text-[var(--color-muted)] leading-relaxed max-w-prose">
                ArtNomads was founded on the conviction that art has the power to dissolve cultural
                barriers and ignite profound human connection. Since 1987, we have championed
                international artists whose work challenges, provokes, and inspires.
              </p>
              <p className="mt-4 text-base text-[var(--color-muted)] leading-relaxed max-w-prose">
                Our programme spans emerging talent and established masters across painting,
                sculpture, installation, photography, and digital media — united by a shared
                commitment to artistic excellence and cultural dialogue.
              </p>
            </FadeIn>

            <FadeIn delay={0.25} className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide text-ink border-b border-ink pb-1 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors duration-300"
              >
                Our Story
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </FadeIn>

            {/* Stats row */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {STATS.map((stat, i) => (
                <FadeIn key={stat.label} delay={0.3 + i * 0.07}>
                  <div>
                    <p className="font-display text-3xl font-light text-ink">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-[var(--color-muted)] tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
