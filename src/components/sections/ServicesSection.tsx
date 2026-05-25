"use client";

import { FadeIn } from "@/components/ui/FadeIn";

const PANELS = [
  {
    index: "01",
    title: "For Artists",
    intro:
      "We help artists build strong identities, professional systems, and international visibility.",
    services: [
      {
        title: "Portfolio & Website Systems",
        desc: "Custom portfolios and websites that reflect your practice and speak to institutions.",
      },
      {
        title: "Residency & Open Call Strategy",
        desc: "Applications, strategies, and positioning for residencies and grants.",
      },
      {
        title: "Institutional Positioning",
        desc: "Long-term positioning for galleries, biennials, awards, and collections.",
      },
      {
        title: "Exhibition Production",
        desc: "From concept to installation across physical, digital, and phygital formats.",
      },
    ],
    collaborations: [
      "Art Dubai",
      "TOKAS",
      "White Stone Gallery",
      "Capsules by Luxembourg Art Week",
      "421 Arts Campus",
    ],
  },
  {
    index: "02",
    title: "For Institutions & Brands",
    intro:
      "We develop curatorial programs and cultural strategies that create meaningful impact and global relevance.",
    services: [
      {
        title: "Curatorial Concepts",
        desc: "Research-based concepts for exhibitions, programs, and commissions.",
      },
      {
        title: "Exhibition Development",
        desc: "Full-scale development and production for institutions and spaces.",
      },
      {
        title: "Cultural Strategy",
        desc: "Strategic planning for cultural positioning and audience development.",
      },
      {
        title: "Artist Partnerships",
        desc: "Identifying and developing collaborations with contemporary artists.",
      },
    ],
    collaborations: ["Linda Gallery", "ESQAPE", "Studiya", "RARARES", "Kyara"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-light">
      <div className="container-gallery py-[var(--spacing-section)]">
        <div className="mb-12 grid gap-8 lg:grid-cols-12">
          <FadeIn className="lg:col-span-5">
            <p className="text-label mb-5 text-void/45">Services</p>
            <h2 className="font-display text-[clamp(2.3rem,4.8vw,5.4rem)] font-medium leading-none text-void">
              What We Do
            </h2>
          </FadeIn>
          <FadeIn delay={0.08} className="lg:col-start-8 lg:col-span-4 lg:self-end">
            <p className="text-sm leading-[1.75] text-void/55">
              We design and develop cultural strategies, exhibitions, and systems that
              connect artists, institutions, and audiences across borders and disciplines.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {PANELS.map((panel) => (
            <div key={panel.index} className="border border-black/10 p-7 lg:p-9">
              <p className="text-label mb-8 text-void/35">{panel.index}</p>
              <h3 className="font-display text-[clamp(2rem,3.4vw,3.6rem)] font-medium leading-none text-void">
                {panel.title}
              </h3>
              <p className="mt-7 max-w-[34rem] text-sm leading-[1.78] text-void/58">
                {panel.intro}
              </p>

              <div className="mt-10 border-y border-black/10">
                {panel.services.map((service) => (
                  <div
                    key={service.title}
                    className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-5 border-t border-black/10 py-6 first:border-t-0"
                  >
                    <span aria-hidden className="pt-1 text-sm leading-none text-void/45">
                      {"\u2192"}
                    </span>
                    <div>
                      <h4 className="text-[1rem] font-semibold leading-tight text-void">
                        {service.title}
                      </h4>
                      <p className="mt-2 text-sm leading-[1.7] text-void/55">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-9">
                <p className="text-label mb-4 text-void/35">Selected Collaborations</p>
                <p className="text-sm leading-[1.8] text-void/62">
                  {panel.collaborations.join(" / ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
