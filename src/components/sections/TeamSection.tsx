"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { TEAM } from "@/lib/data";

export function TeamSection() {
  const [activeMember, setActiveMember] = useState(TEAM[0]);

  return (
    <section id="team" className="section-light">
      <div className="container-gallery py-[var(--spacing-section)]">
        <div className="mb-14 grid gap-8 lg:grid-cols-12">
          <FadeIn className="lg:col-span-4">
            <p className="text-label mb-5 text-void/45">The People</p>
            <h2 className="font-display text-[clamp(2.1rem,3.8vw,4.4rem)] font-medium leading-none text-void">
              Team
            </h2>
          </FadeIn>

          <FadeIn delay={0.08} className="lg:col-start-8 lg:col-span-4 lg:self-end">
            <p className="text-sm leading-[1.78] text-void/55">
              A compact curatorial and production team working across exhibitions,
              artist systems, digital culture, and international partnerships.
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(14rem,0.68fr)_minmax(18rem,0.84fr)_minmax(16rem,0.62fr)] lg:items-start lg:gap-12 xl:gap-16">
          <div className="border-b border-black/10">
            {TEAM.map((member, index) => {
              const isActive = member.id === activeMember.id;

              return (
                <motion.button
                  key={member.id}
                  type="button"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: index * 0.04, duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setActiveMember(member)}
                  onFocus={() => setActiveMember(member)}
                  onClick={() => setActiveMember(member)}
                  className={`block w-full border-t border-black/10 px-0 py-5 text-left transition-colors duration-300 ${
                    isActive ? "bg-black/[0.035]" : "hover:bg-black/[0.025]"
                  }`}
                >
                  <span className="block text-[0.68rem] font-medium uppercase leading-none tracking-[0.13em] text-void/42">
                    {member.role}
                  </span>
                  <span className="mt-2 block font-display text-[clamp(1.35rem,2vw,2.25rem)] font-medium leading-[1.03] text-void">
                    {member.name}
                  </span>
                </motion.button>
              );
            })}
          </div>

          <motion.div
            key={`${activeMember.id}-about`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
            className="order-3 border-t border-black/10 pt-5 lg:order-none"
          >
            <h3 className="text-label text-void">About</h3>
            <p className="mt-5 max-w-[24rem] text-sm leading-[1.82] text-void/58">
              {activeMember.bio}
            </p>
          </motion.div>

          <motion.div
            key={`${activeMember.id}-portrait`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 aspect-[4/5] w-full max-w-[18rem] overflow-hidden bg-white sm:max-w-[20rem] lg:order-none lg:h-[min(58vh,31rem)] lg:w-auto lg:max-w-none lg:justify-self-start"
          >
            <Image
              src={activeMember.imageUrl}
              alt={activeMember.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 24vw"
              className="object-cover object-top grayscale transition-all duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
