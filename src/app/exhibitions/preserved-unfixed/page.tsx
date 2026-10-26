import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ArtDubaiInstallationCarousel } from "@/components/sections/ArtDubaiInstallationCarousel";
import { PRESERVED_UNFIXED, PRESERVED_UNFIXED_VIEWS } from "@/lib/preserved-unfixed";

export const metadata: Metadata = {
  title: {
    absolute: "Preserved, Unfixed — Yasy Bachurina | Art Curatorial Nomads",
  },
  description:
    "Preserved, Unfixed, a solo exhibition by Yasy Bachurina at Studiya Gallery, Seoul, 17–29 October 2026. Exhibition views and curatorial text.",
};

export default function PreservedUnfixedPage() {
  return (
    <div className="section-paper mobile-tight-sections">
      <Hero />

      <section aria-label="Exhibition details" className="border-t border-black/10">
        <div className="container-gallery py-[var(--spacing-section)]">
          <div className="grid gap-14 lg:grid-cols-12">
            <dl className="grid content-start gap-10 border-t border-black/10 pt-5 lg:col-span-4">
              <div>
                <dt className="text-label mb-3 text-void/60">ARTISTS</dt>
                <dd className="text-sm leading-[1.7] text-void/66">{PRESERVED_UNFIXED.artist}</dd>
              </div>
              <div>
                <dt className="text-label mb-3 text-void/60">DATES</dt>
                <dd className="text-sm leading-[1.7] text-void/66">{PRESERVED_UNFIXED.dates}</dd>
              </div>
              <div>
                <dt className="text-label mb-3 text-void/60">LOCATION</dt>
                <dd className="text-sm leading-[1.7] text-void/66">
                  {PRESERVED_UNFIXED.venue}
                  <br />
                  {PRESERVED_UNFIXED.city}
                </dd>
              </div>
            </dl>

            <div className="min-w-0 border-t border-black/10 pt-5 lg:col-start-7 lg:col-span-6">
              <p className="text-[clamp(1rem,1.2vw,1.16rem)] leading-[1.86] text-void/68">
                {PRESERVED_UNFIXED.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Exhibition view" className="border-t border-black/10">
        <div className="py-[var(--spacing-section)]">
          <ArtDubaiInstallationCarousel images={PRESERVED_UNFIXED_VIEWS} title="EXHIBITION VIEW" />
        </div>
      </section>
    </div>
  );
}
