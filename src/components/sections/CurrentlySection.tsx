"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { PRESERVED_UNFIXED } from "@/lib/preserved-unfixed";

export function CurrentlySection() {
  return (
    <section className="section-light">
      <div className="container-gallery pb-12 pt-[var(--spacing-section)] lg:pb-16">
        <div className="grid gap-5 lg:grid-cols-[8rem_minmax(0,1fr)] lg:gap-[18vw]">
          <FadeIn>
            <p className="text-label text-void/45">DETAILS</p>
          </FadeIn>

          <FadeIn delay={0.08} direction="up" className="max-w-[42rem] lg:justify-self-end">
            <p className="text-[clamp(1rem,1.2vw,1.16rem)] leading-[1.86] text-void/68">
              {PRESERVED_UNFIXED.description}
            </p>

            <Link
              href={PRESERVED_UNFIXED.href}
              className="link-editorial mt-10 inline-flex min-h-11 w-fit text-label text-void"
            >
              VIEW EXHIBITION <span aria-hidden>{"↗"}</span>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
