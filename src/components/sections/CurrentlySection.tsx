"use client";

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
              Objects are collected, named, and preserved, allowing us to return to what
              has not entirely disappeared. This possibility of return is part of what
              draws Yasy Bachurina to museums. Yet even when an object remains unchanged,
              the way we encounter and understand it may shift over time. To preserve
              something is not to fix a single interpretation, and even familiar forms may
              hold possibilities yet to be discovered. In this exhibition, paintings and
              objects coexist without reconstructing a particular period or resolving into
              a single narrative. Recognition does not bring our relationship with a thing
              to an end.
            </p>

            {/* Hidden until the /exhibitions/preserved-unfixed page is created.
            <Link
              href="/exhibitions/preserved-unfixed"
              className="link-editorial mt-10 inline-flex w-fit text-label text-void"
            >
              VISIT EXHIBITION ↗
            </Link>
            */}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
