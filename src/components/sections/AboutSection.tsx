"use client";

import { FadeIn } from "@/components/ui/FadeIn";

const KEYWORDS = [
  "Exhibitions",
  "Research",
  "Digital Environments",
  "Artist Positioning",
  "Curatorial Systems",
  "Cross-Cultural Projects",
];

export function AboutSection() {
  return (
    <section id="about" className="section-paper border-y border-black/10">
      <div className="container-gallery pb-12 pt-[var(--spacing-section)] lg:pb-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <FadeIn className="lg:col-span-5">
            <p className="text-label mb-5 text-void/45">ABOUT THE PLATFORM</p>
            <h2 className="font-display text-[clamp(2.4rem,5vw,5.6rem)] font-medium leading-[0.98] text-void">
              Between physical
              <br />
              and digital space.
            </h2>
          </FadeIn>

          <FadeIn delay={0.08} className="lg:col-start-7 lg:col-span-6 lg:self-end">
            <p className="text-[clamp(1rem,1.2vw,1.18rem)] leading-[1.85] text-void/66">
              Art Curatorial Nomads is a curatorial platform operating between
              contemporary art, digital culture, and cross-cultural exhibition practice.
            </p>
            <p className="mt-6 text-[clamp(1rem,1.2vw,1.18rem)] leading-[1.85] text-void/56">
              We connect artists, institutions, and audiences through exhibitions,
              research, and long-term cultural systems across Asia, Europe, and
              emerging digital environments.
            </p>
            <p className="mt-6 text-[clamp(1rem,1.2vw,1.18rem)] leading-[1.85] text-void/56">
              Projects spanning galleries, fairs, residencies, and digital exhibition
              systems.
            </p>
          </FadeIn>
        </div>

        <div className="mt-16 border-t border-black/10 pt-7 lg:mt-24">
          <div className="flex flex-wrap justify-between gap-x-8 gap-y-4">
            {KEYWORDS.map((keyword) => (
              <span key={keyword} className="text-label text-void/48">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
