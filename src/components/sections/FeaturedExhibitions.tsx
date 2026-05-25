"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { Tag } from "@/components/ui/Tag";
import { FEATURED_EXHIBITIONS } from "@/lib/data";
import type { Exhibition } from "@/types";

export function FeaturedExhibitions() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--color-canvas)]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <FadeIn>
            <p className="text-[10px] tracking-widest uppercase text-[var(--color-accent)] mb-3">
              On View Now
            </p>
            <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-light leading-tight text-balance">
              Featured Exhibitions
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link
              href="/exhibitions"
              className="link-underline text-sm font-medium tracking-wide text-[var(--color-muted)] hover:text-ink transition-colors shrink-0"
            >
              View All Exhibitions →
            </Link>
          </FadeIn>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
          {FEATURED_EXHIBITIONS.map((exhibition, i) => (
            <ExhibitionCard key={exhibition.id} exhibition={exhibition} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExhibitionCard({ exhibition, index }: { exhibition: Exhibition; index: number }) {
  return (
    <FadeIn delay={index * 0.1} direction="up">
      <Link href={exhibition.href} className="group block">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/5]">
          <Image
            src={exhibition.imageUrl}
            alt={exhibition.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-[var(--color-ink)]/0 group-hover:bg-[var(--color-ink)]/20 transition-colors duration-500" />

          {/* Tag overlay */}
          <div className="absolute top-4 left-4">
            <Tag
              label={exhibition.tag}
              variant={exhibition.tag === "Upcoming" ? "accent" : "default"}
            />
          </div>
        </div>

        {/* Content */}
        <div className="mt-5">
          <p className="text-xs tracking-widest uppercase text-[var(--color-muted)] mb-2">
            {exhibition.artist}
          </p>
          <h3 className="font-display text-xl font-medium group-hover:text-[var(--color-accent)] transition-colors duration-300">
            {exhibition.title}
          </h3>
          <p className="mt-1.5 text-sm text-[var(--color-muted)] leading-relaxed line-clamp-2">
            {exhibition.subtitle}
          </p>
          <p className="mt-3 text-xs text-[var(--color-muted)] tracking-wide">
            {exhibition.dateRange}
          </p>
        </div>
      </Link>
    </FadeIn>
  );
}
