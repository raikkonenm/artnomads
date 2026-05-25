"use client";

import Image from "next/image";

function FadeIn({
  children,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function Hero() {
  return (
    <section className="relative flex min-h-[680px] h-[100svh] overflow-hidden bg-void text-white">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/hero-art-dubai.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[54%_50%] grayscale-[0.08] saturate-[0.88]"
        />
      </div>

      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.28)_0%,rgba(17,17,17,0.2)_45%,rgba(17,17,17,0.42)_100%)]"
        aria-hidden
      />

      <div className="container-gallery relative z-10 flex h-full items-end px-6 pb-20 pt-36 lg:pb-28 lg:pt-44">
        <div className="max-w-[48rem] text-left">
          <FadeIn>
            <p className="text-label mb-10 max-w-[18rem] leading-[1.5] text-white/78 sm:max-w-none">
              INTERNATIONAL CURATORIAL COLLECTIVE / EST. 2021
            </p>
            <p className="text-label mb-5 text-white/70">CURRENTLY</p>
            <h1 className="max-w-[44rem] font-display text-[clamp(3rem,5vw,5.75rem)] font-medium leading-[0.92] tracking-[-0.03em] text-white">
              Natura Naturans,
              <br />
              Natura Naturata
            </h1>
            <p className="mt-8 text-[clamp(1rem,1.2vw,1.22rem)] font-medium leading-[1.5] text-white/88">
              Fatma Lootah / Chunkook Lee
            </p>
            <p className="mt-6 text-sm leading-[1.75] text-white/74">
              Art Dubai — Booth X26
              <br />
              RARARES Art Gallery
              <br />
              14–17 May
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
