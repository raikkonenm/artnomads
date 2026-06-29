"use client";

import { useState } from "react";
import { LightboxArtwork } from "@/components/ui/ImageLightbox";

type Work = {
  artist: string;
  title: string;
  year: string;
  medium: string;
  src: string;
  captionLines?: string[];
};

const naturaNaturans: Work = {
  artist: "Fatma Lootah",
  title: "Natura Naturans",
  year: "2026",
  medium: "Digital / installation",
  src: "/projects/natura-naturans-artwork.webp",
};

const twoColumnRows = [
  [
    {
      artist: "Fatma Lootah",
      title: "Natura Naturata",
      year: "2026",
      medium: "Digital / textile / installation",
      src: "/projects/f2.webp",
      captionLines: [
        "Chunkook Lee, 1995, South Korean",
        "Angel, 2026",
        "Aluminium, wooden panel, polymer clay",
        "75 x 98 x 1.5 cm",
      ],
    },
    {
      artist: "Chunkook Lee",
      title: "Untitled",
      year: "2026",
      medium: "Sculpture",
      src: "/projects/f1.webp",
      captionLines: [
        "Chunkook Lee",
        "Untitled, 2026",
        "Sculpture",
      ],
    },
  ],
  [
    {
      artist: "Fatma Lootah",
      title: "Natura Naturata",
      year: "2026",
      medium: "Digital / textile / installation",
      src: "/projects/f3 (1).webp",
      captionLines: [
        "Chunkook Lee, 1995, South Korean",
        "Cherry Tomato, 2025",
        "PLA, polymer clay, aluminium",
        "51 x 43 x 25 cm",
      ],
    },
    {
      artist: "Chunkook Lee",
      title: "Untitled",
      year: "2026",
      medium: "Sculpture",
      src: "/projects/f3 (2).webp",
      captionLines: [
        "Chunkook Lee, 1995, South Korean",
        "Soft Fall, 2025",
        "Wooden panel, polymer clay, glass",
        "73 x 91 x 6 cm",
      ],
    },
  ],
  [
    {
      artist: "Fatma Lootah",
      title: "Natura Naturata",
      year: "2026",
      medium: "Digital / textile / installation",
      src: "/projects/f3 (3).webp",
      captionLines: [
        "Chunkook Lee, 1995, South Korean",
        "Bone Garden, 2025",
        "Wooden panel, polymer clay",
        "36 x 28 x 4.5 cm",
      ],
    },
    {
      artist: "Chunkook Lee",
      title: "Untitled",
      year: "2026",
      medium: "Sculpture",
      src: "/projects/f3 (4).webp",
      captionLines: [
        "Chunkook Lee, 1995, South Korean",
        "New Dandelion, 2026",
        "Wooden panel, polymer clay, glass",
        "36 x 28 x 4.5 cm",
      ],
    },
  ],
  [
    {
      artist: "Fatma Lootah",
      title: "Natura Naturata",
      year: "2026",
      medium: "Digital / textile / installation",
      src: "/projects/f3 (5).webp",
      captionLines: [
        "Chunkook Lee, 1995, South Korean",
        "Shell, 2025",
        "PLA, polymer clay, speaker",
        "80 x 71 x 32 cm",
      ],
    },
    {
      artist: "Chunkook Lee",
      title: "Untitled",
      year: "2026",
      medium: "Sculpture",
      src: "/projects/lee.webp",
      captionLines: [
        "Chunkook Lee, 1995, South Korean",
        "Trial, 2025",
        "Wooden panel, polymer clay",
        "36 x 28 x 4.5 cm",
      ],
    },
  ],
];

function WorkImage({
  work,
  large = false,
  equalHeight = false,
  alignToRowHeight = false,
}: {
  work: Work;
  large?: boolean;
  equalHeight?: boolean;
  alignToRowHeight?: boolean;
}) {
  const [missing, setMissing] = useState(false);

  return (
    <div className={alignToRowHeight ? "md:flex md:h-[clamp(34rem,62vw,48rem)] md:items-end md:justify-center" : equalHeight ? "md:h-[clamp(34rem,62vw,48rem)]" : ""}>
      {missing ? (
        <div
          className={`grid w-full place-items-center bg-black/[0.045] text-label text-void/30 ${
            equalHeight
              ? "min-h-[clamp(18rem,34vw,30rem)] md:h-full"
              : large
                ? "min-h-[clamp(22rem,54vw,40rem)]"
                : "min-h-[clamp(18rem,34vw,30rem)]"
          }`}
        >
          {work.title}
        </div>
      ) : (
        <LightboxArtwork
          src={work.src}
          alt={`${work.artist}, ${work.title}, ${work.year}`}
          imageClassName={
            alignToRowHeight
              ? "block h-auto w-full md:h-full md:w-auto md:max-w-full"
              : equalHeight
                ? "block h-auto w-full md:h-full md:w-full md:object-contain"
                : "block h-auto w-full"
          }
          triggerClassName={
            alignToRowHeight
              ? "block w-full cursor-zoom-in md:h-full md:w-auto md:max-w-full"
              : equalHeight
                ? "block h-full w-full cursor-zoom-in"
                : "block w-full cursor-zoom-in"
          }
          onError={() => setMissing(true)}
        />
      )}
    </div>
  );
}

function WorkCaption({ work }: { work: Work }) {
  const lines = work.captionLines ?? [
    work.artist,
    `${work.title}, ${work.year}`,
    work.medium,
  ];

  return (
    <figcaption className="mt-5 text-sm leading-[1.72] text-void/62">
      {lines.map((line, index) => (
        <span key={line} className={`block ${index === 0 ? "text-void/72" : ""}`}>
          {line}
        </span>
      ))}
    </figcaption>
  );
}

function WorkFigure({
  work,
  large = false,
  equalHeight = false,
  alignToRowHeight = false,
}: {
  work: Work;
  large?: boolean;
  equalHeight?: boolean;
  alignToRowHeight?: boolean;
}) {
  return (
    <figure>
      <WorkImage work={work} large={large} equalHeight={equalHeight} alignToRowHeight={alignToRowHeight} />
      <WorkCaption work={work} />
    </figure>
  );
}

export function ArtDubaiFeaturedWorks({
  imageOverrides = {},
  featuredImageSrc,
}: {
  imageOverrides?: Record<string, string>;
  featuredImageSrc?: string;
}) {
  const featuredWork = featuredImageSrc
    ? {
        ...naturaNaturans,
        src: featuredImageSrc,
      }
    : naturaNaturans;

  return (
    <div className="grid gap-20 lg:gap-28">
      <WorkFigure work={featuredWork} large />

      {twoColumnRows.map((row, rowIndex) => (
        <div key={row.map((work) => work.src).join("-")} className="grid gap-12 md:grid-cols-2 lg:gap-16">
          {row.map((work, workIndex) => {
            const overriddenWork = {
              ...work,
              src: imageOverrides[`${rowIndex}-${workIndex}`] ?? work.src,
            };

            return (
              <WorkFigure
                key={`${rowIndex}-${workIndex}-${overriddenWork.src}`}
                work={overriddenWork}
                equalHeight={rowIndex === 0}
                alignToRowHeight={rowIndex === 0 && workIndex === 0}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
