"use client";

import Image from "next/image";
import { useState } from "react";

const artists = [
  {
    name: "Chunkook Lee",
    image: "/projects/chunkook.webp",
    caption: "Chunkook Lee, Art Dubai 2026",
    paragraphs: [
      "Chunkook Lee is a South Korean artist working between sculpture, digitally modelled forms, and material transformation. His practice investigates growth, instability, biological mutation, and the relationship between virtual image systems and physical matter.",
      "Lee's sculptural works merge industrial fabrication with speculative organic structures, producing forms that oscillate between natural evolution and synthetic construction.",
    ],
    reverse: false,
  },
  {
    name: "Fatma Lootah",
    image: "/projects/fatmaa.webp",
    caption: "Fatma Lootah, Art Dubai 2026",
    paragraphs: [
      "Fatma Lootah is a UAE artist whose practice bridges Arabic heritage, digital image-making, textile language, and contemporary visual experimentation. Her work explores memory, ornament, mythology, and transformation through immersive environments and hybrid material systems.",
      "Lootah has exhibited internationally and is recognised for developing a contemporary visual language rooted in Gulf cultural identity while engaging digital and spatial practices.",
    ],
    reverse: true,
  },
];

function ArtistImage({ artist }: { artist: (typeof artists)[number] }) {
  const [missing, setMissing] = useState(false);

  return (
    <figure>
      <div className="relative aspect-[4/5] overflow-hidden bg-black/[0.045]">
        {missing ? (
          <div className="grid h-full w-full place-items-center text-label text-void/30">
            {artist.name}
          </div>
        ) : (
          <Image
            src={artist.image}
            alt={artist.name}
            fill
            sizes="(max-width: 1024px) 88vw, 42vw"
            className="object-cover"
            onError={() => setMissing(true)}
          />
        )}
      </div>
      <figcaption className="mt-4 text-xs leading-[1.6] text-void/42">
        {artist.caption}
      </figcaption>
    </figure>
  );
}

export function ArtDubaiArtists({ only }: { only?: string[] }) {
  const visibleArtists = only
    ? artists.filter((artist) => only.includes(artist.name))
    : artists;

  return (
    <div className="grid gap-24 lg:gap-32">
      {visibleArtists.map((artist) => (
        <article
          key={artist.name}
          className="grid gap-12 border-t border-black/10 pt-10 lg:grid-cols-12 lg:gap-16"
        >
          <div className={artist.reverse ? "lg:col-start-8 lg:col-span-5" : "lg:col-span-5"}>
            <ArtistImage artist={artist} />
          </div>

          <div
            className={`max-w-[43rem] self-center ${
              artist.reverse
                ? "lg:col-start-1 lg:row-start-1 lg:col-span-5"
                : "lg:col-start-8 lg:col-span-5"
            }`}
          >
            <h2 className="font-display text-[clamp(2.4rem,4.6vw,5.6rem)] font-medium leading-[0.96] tracking-[-0.035em] text-void">
              {artist.name}
            </h2>
            <div className="mt-9 grid gap-6">
              {artist.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-[clamp(1rem,1.16vw,1.12rem)] leading-[1.84] text-void/64">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
