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
        {/* Mobile: portrait crop */}
        <Image
          src="/images/preserved-unfixed-hero-mobile.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center grayscale-[0.05] saturate-[0.9] min-[769px]:hidden"
        />
        {/* Desktop: wide crop */}
        <Image
          src="/images/preserved-unfixed-hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-[42%_48%] grayscale-[0.05] saturate-[0.9] min-[769px]:block"
        />
      </div>

      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.28)_0%,rgba(17,17,17,0.2)_45%,rgba(17,17,17,0.42)_100%)]"
        aria-hidden
      />

      <div className="container-gallery relative z-10 flex h-full items-end pb-[10.5rem] pt-36 min-[769px]:px-6 min-[769px]:pb-20 lg:pb-28 lg:pt-44">
        <div className="max-w-[48rem] text-left min-[769px]:ml-auto min-[769px]:text-right">
          <FadeIn>
            <p className="text-label mb-10 max-w-[18rem] !tracking-[0.12em] leading-[1.5] text-white/78 sm:max-w-none sm:!tracking-[0.08em] min-[769px]:ml-auto">
              INTERNATIONAL CURATORIAL COLLECTIVE / EST. 2021
            </p>
            <p className="text-label mb-5 text-white/70">LATEST</p>
            <h1 className="max-w-[44rem] font-display text-[2.4rem] font-medium leading-[0.92] tracking-[-0.03em] text-white sm:text-[clamp(3rem,5vw,5.75rem)] min-[769px]:ml-auto">
              PRESERVED,
              <br />
              UNFIXED
            </h1>
            <p className="mt-8 text-[clamp(1rem,1.2vw,1.22rem)] font-medium leading-[1.5] text-white/88">
              Yasy Bachurina
            </p>
            <p className="mt-10 text-sm leading-[1.75] text-white/74 sm:mt-6">
              Studiya Gallery
              <br />
              Seoul
              <br />
              17–29 October
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
