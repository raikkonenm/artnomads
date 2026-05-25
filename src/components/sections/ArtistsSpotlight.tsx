"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { FEATURED_ARTISTS } from "@/lib/data";
import type { Artist } from "@/types";

export function ArtistsSpotlight() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--color-canvas)]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <FadeIn>
            <p className="text-[10px] tracking-widest uppercase text-[var(--color-accent)] mb-3">
              The Creators
            </p>
            <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-light leading-tight">
              Featured Artists
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link
              href="/artists"
              className="link-underline text-sm font-medium tracking-wide text-[var(--color-muted)] hover:text-ink transition-colors shrink-0"
            >
              All Artists →
            </Link>
          </FadeIn>
        </div>

        {/* Artists grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FEATURED_ARTISTS.map((artist, i) => (
            <ArtistCard key={artist.id} artist={artist} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArtistCard({ artist, index }: { artist: Artist; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={index * 0.08} direction="up">
      <Link
        href={artist.href}
        className="group block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Portrait */}
        <div className="relative overflow-hidden aspect-[3/4]">
          <Image
            src={artist.imageUrl}
            alt={artist.imageAlt}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Hover overlay with details */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/80 via-[var(--color-ink)]/20 to-transparent flex flex-col justify-end p-4"
          >
            <p className="text-[10px] tracking-widest uppercase text-[var(--color-accent)]">
              {artist.medium}
            </p>
          </motion.div>
        </div>

        {/* Name + nationality */}
        <div className="mt-4">
          <h3 className="font-display text-lg font-medium group-hover:text-[var(--color-accent)] transition-colors duration-300">
            {artist.name}
          </h3>
          <p className="mt-0.5 text-xs text-[var(--color-muted)] tracking-wide">
            {artist.nationality}
          </p>
        </div>
      </Link>
    </FadeIn>
  );
}
