import type { Metadata } from "next";
import Image from "next/image";
import { ArtDubaiArtists } from "@/components/sections/ArtDubaiArtists";
import { ArtDubaiFeaturedWorks } from "@/components/sections/ArtDubaiFeaturedWorks";
import { ArtDubaiInstallationCarousel } from "@/components/sections/ArtDubaiInstallationCarousel";

const description =
  "An international group exhibition exploring the body as a site of memory, migration, identity, vulnerability, and transformation within increasingly technologized and globalized societies. Positioned within Hong Kong's layered cultural environment, the project examined the body simultaneously as archive and frontier.";

const installationImages = [
  { src: "/projects/0.jpg", alt: "Body Is The Foreign Place installation view 1" },
  { src: "/projects/1.jpg", alt: "Body Is The Foreign Place installation view 2" },
  { src: "/projects/4.jpg", alt: "Body Is The Foreign Place installation view 3" },
  { src: "/projects/5.jpg", alt: "Body Is The Foreign Place installation view 4" },
  { src: "/projects/7.jpg", alt: "Body Is The Foreign Place installation view 5" },
  { src: "/projects/8.jpg", alt: "Body Is The Foreign Place installation view 6" },
  { src: "/projects/9.jpg", alt: "Body Is The Foreign Place installation view 7" },
  { src: "/projects/13.jpg", alt: "Body Is The Foreign Place installation view 8" },
];

const artworkImageOverrides = {
  "0-0": "/projects/3(1).jpg",
  "0-1": "/projects/Chunkook_Lee_Work_1.jpg",
  "1-0": "/projects/15.jpg",
  "1-1": "/projects/10.jpg",
  "2-0": "/projects/14.jpg",
  "2-1": "/projects/11.jpg",
  "3-0": "/projects/Chunkook_Lee_Work_5.jpg",
  "3-1": "/projects/Chunkook_Lee_Work_2.jpg",
};

export const metadata: Metadata = {
  title: {
    absolute: "Body Is The Foreign Place | Art Central 2026",
  },
  description,
};

export default function BodyIsTheForeignPlacePage() {
  return (
    <div className="section-paper">
      <section className="relative flex min-h-[680px] h-[100svh] overflow-hidden bg-void text-white">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/projects/2F7A1912 copy.jpg"
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
            <p className="text-label mb-5 text-white/70">ART CENTRAL 2026</p>
            <h1 className="max-w-[44rem] font-display text-[clamp(3rem,5vw,5.75rem)] font-medium leading-[0.92] tracking-[-0.03em] text-white">
              Body Is The
              <br />
              Foreign Place
            </h1>
            <p className="mt-8 text-[clamp(1rem,1.2vw,1.22rem)] font-medium leading-[1.5] text-white/88">
              Art Central — Booth A18 P3
            </p>
            <p className="mt-6 text-sm leading-[1.75] text-white/74">
              RARARES Art Gallery
              <br />
              March 2026
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
                <p className="text-sm leading-[1.7] text-void/66">March 2026</p>
              </div>
              <div>
                <p className="text-label mb-3 text-void/35">LOCATION</p>
                <p className="text-sm leading-[1.7] text-void/66">
                  Art Central
                  <br />
                  Booth A18 P3
                  <br />
                  Hong Kong
                </p>
              </div>
            </div>

            <div className="border-t border-black/10 pt-5 lg:col-start-7 lg:col-span-6">
              <p className="text-[clamp(1rem,1.2vw,1.16rem)] leading-[1.86] text-void/68">
                {description}
              </p>
              <div className="mt-10 grid gap-7">
                <div>
                  <p className="text-label mb-2 text-void/35">Artists</p>
                  <p className="text-sm leading-relaxed text-void/58">
                    Mathias Hagen Maserati / Elnaz Javani / Chunkook Lee / Ustina Yakovleva / Tatiana Chursina
                  </p>
                </div>
                <div>
                  <p className="text-label mb-2 text-void/35">Collaborators</p>
                  <p className="text-sm leading-relaxed text-void/58">RARARES Art Gallery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10">
        <div className="py-[var(--spacing-section)]">
          <ArtDubaiInstallationCarousel images={installationImages} />
        </div>
      </section>

      <section className="border-t border-black/10">
        <div className="container-gallery py-[var(--spacing-section)]">
          <p className="text-label mb-10 text-void/45">FEATURED WORKS</p>
          <ArtDubaiFeaturedWorks featuredImageSrc="/projects/5.jpg" imageOverrides={artworkImageOverrides} />
        </div>
      </section>

      <section id="about-artists" className="border-t border-black/10">
        <div className="container-gallery py-[var(--spacing-section)]">
          <p className="text-label mb-12 text-void/45">About the Artists</p>
          <ArtDubaiArtists only={["Chunkook Lee"]} />
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
