"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { PROJECTS } from "@/lib/data";

const project = PROJECTS.find((item) => item.id === "natura-naturans");

export function CurrentlySection() {
  if (!project) return null;

  return (
    <section className="section-light">
      <div className="container-gallery pb-12 pt-[var(--spacing-section)] lg:pb-16">
        <div className="grid gap-16 lg:grid-cols-[8rem_minmax(0,1fr)] lg:gap-[18vw]">
          <FadeIn>
            <p className="text-label text-void/45">DETAILS</p>
          </FadeIn>

          <FadeIn delay={0.08} direction="up" className="max-w-[42rem] lg:justify-self-end">
            <p className="text-[clamp(1rem,1.2vw,1.16rem)] leading-[1.86] text-void/68">
              Inspired by the philosophy of Baruch Spinoza, the exhibition explores the
              relationship between nature as creator and nature as creation. Centred
              around a large-scale installation by acclaimed UAE artist and cultural
              ambassador Fatma Lootah, whose experimental contemporary practice remains
              deeply rooted in Arabic heritage and visual tradition.
            </p>

            <div className="mt-12">
              <p className="text-label mb-3 text-void/35">COLLABORATOR</p>
              <p className="text-sm leading-relaxed text-void/62">RARARES Art Gallery</p>
            </div>

            <Link
              href="/exhibitions/art-dubai-2026"
              className="link-editorial mt-10 inline-flex w-fit text-label text-void"
            >
              VISIT EXHIBITION ↗
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
