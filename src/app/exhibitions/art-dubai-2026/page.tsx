import type { Metadata } from "next";
import Image from "next/image";
import { ArtDubaiArtists } from "@/components/sections/ArtDubaiArtists";
import { ArtDubaiFeaturedWorks } from "@/components/sections/ArtDubaiFeaturedWorks";
import { ArtDubaiInstallationCarousel } from "@/components/sections/ArtDubaiInstallationCarousel";

export const metadata: Metadata = {
  title: {
    absolute: "Art Dubai 2026 | Natura Naturans, Natura Naturata",
  },
  description:
    "Natura Naturans, Natura Naturata at Art Dubai 2026, Booth X26 with RARARES Art Gallery.",
};

export default function ArtDubai2026Page() {
  return (
    <div className="section-paper">
      <section className="relative flex min-h-[680px] h-[100svh] overflow-hidden bg-void text-white">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/projects/exhibition_view_1.png"
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
            <p className="text-label mb-5 text-white/70">ART DUBAI 2026</p>
            <h1 className="max-w-[44rem] font-display text-[clamp(3rem,5vw,5.75rem)] font-medium leading-[0.92] tracking-[-0.03em] text-white">
              Natura Naturans,
              <br />
              Natura Naturata
            </h1>
            <p className="mt-8 text-[clamp(1rem,1.2vw,1.22rem)] font-medium leading-[1.5] text-white/88">
              Art Dubai — Booth X26
            </p>
            <p className="mt-6 text-sm leading-[1.75] text-white/74">
              RARARES Art Gallery
              <br />
              14–17 May 2026
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10">
        <div className="container-gallery py-[var(--spacing-section)]">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="grid content-start gap-10 border-t border-black/10 pt-5 lg:col-span-4">
              <div>
                <p className="text-label mb-3 text-void/35">DATES</p>
                <p className="text-sm leading-[1.7] text-void/66">14–17 May 2026</p>
              </div>
              <div>
                <p className="text-label mb-3 text-void/35">LOCATION</p>
                <p className="text-sm leading-[1.7] text-void/66">
                  Art Dubai
                  <br />
                  Madinat Jumeirah
                  <br />
                  Dubai, UAE
                </p>
              </div>
            </div>

            <div className="border-t border-black/10 pt-5 lg:col-start-7 lg:col-span-6">
              <p className="text-[clamp(1rem,1.2vw,1.16rem)] leading-[1.86] text-void/68">
                Inspired by the philosophy of Baruch Spinoza, the exhibition explores the
                relationship between nature as creator and nature as creation. Centred
                around a large-scale installation by acclaimed UAE artist and cultural
                ambassador Fatma Lootah, whose experimental contemporary practice remains
                deeply rooted in Arabic heritage and visual tradition.
              </p>
              <p className="mt-7 text-[clamp(1rem,1.2vw,1.16rem)] leading-[1.86] text-void/68">
                The project brings Fatma Lootah and Chunkook Lee into dialogue through
                material, digital, and sculptural approaches to nature, transformation,
                and cultural memory.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10">
        <div className="py-[var(--spacing-section)]">
          <ArtDubaiInstallationCarousel />
        </div>
      </section>

      <section className="border-t border-black/10">
        <div className="container-gallery py-[var(--spacing-section)]">
          <p className="text-label mb-10 text-void/45">FEATURED WORKS</p>
          <ArtDubaiFeaturedWorks />
        </div>
      </section>

      <section id="about-artists" className="border-t border-black/10">
        <div className="container-gallery py-[var(--spacing-section)]">
          <p className="text-label mb-12 text-void/45">About the Artists</p>
          <ArtDubaiArtists />
        </div>
      </section>

      <section className="border-t border-black/10">
        <div className="container-gallery py-[var(--spacing-section)]">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="border-t border-black/10 pt-5">
              <p className="text-label mb-5 text-void/35">DOWNLOAD</p>
              <a href="#" className="link-editorial inline-flex w-fit text-label text-void">
                {"\u2192"} Exhibition Guide (PDF)
              </a>
            </div>
            <div className="border-t border-black/10 pt-5">
              <p className="text-label mb-5 text-void/35">SHARE</p>
              <div className="flex flex-wrap gap-x-7 gap-y-3">
                <a href="#" className="link-editorial text-label text-void/62 hover:text-void">
                  Facebook
                </a>
                <a href="#" className="link-editorial text-label text-void/62 hover:text-void">
                  Instagram
                </a>
                <a href="#" className="link-editorial text-label text-void/62 hover:text-void">
                  X (Twitter)
                </a>
              </div>
            </div>
            <div className="border-t border-black/10 pt-5">
              <p className="text-label mb-5 text-void/35">COLLABORATOR</p>
              <p className="text-sm leading-[1.7] text-void/66">RARARES Art Gallery</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
