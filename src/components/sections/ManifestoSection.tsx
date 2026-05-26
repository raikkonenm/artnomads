"use client";

import { useRef, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { TEAM } from "@/lib/data";

export function ManifestoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [activeMember, setActiveMember] = useState<(typeof TEAM)[number] | null>(null);

  const toggleMute = () => {
    const video = videoRef.current;
    const nextMuted = !isMuted;

    if (video) {
      video.muted = nextMuted;
    }

    setIsMuted(nextMuted);
  };

  return (
    <section id="about" className="section-light scroll-mt-28 border-b border-black/10">
      <div className="container-gallery py-[var(--spacing-section)]">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <FadeIn>
              <p className="text-label text-void/45">About</p>
            </FadeIn>

            <div className="mt-10 max-w-[42rem] border-t border-black/10 pt-5">
              <FadeIn delay={0.06} direction="up">
                <p className="text-[clamp(1rem,1.16vw,1.12rem)] leading-[1.82] text-void/68">
                  Our practice operates between disciplines, geographies, mediums, and
                  systems of perception. We approach art as a living structure that
                  requires visibility, protection, experimentation, and long-term support.
                </p>
              </FadeIn>

              <FadeIn delay={0.12} direction="up">
                <p className="mt-6 text-[clamp(0.96rem,1.08vw,1.05rem)] leading-[1.82] text-void/56">
                  Through exhibitions, curatorial collaborations,
                  <br />
                  artist development, and digital initiatives —
                  <br />
                  we create the conditions for contemporary
                  <br />
                  practice to become internationally visible.
                </p>
              </FadeIn>

              <FadeIn
                delay={0.18}
                direction="up"
                className="mt-14 border-t border-black/10 pt-5"
              >
                <span id="team" className="sr-only scroll-mt-28" aria-hidden />
                <p className="text-label mb-7 text-void/35">People</p>

                <div
                  className="hidden grid-cols-[minmax(11rem,0.78fr)_minmax(14rem,1fr)] gap-8 min-[769px]:grid"
                  onMouseLeave={() => setActiveMember(null)}
                >
                  <div className="border-b border-black/10">
                    {TEAM.map((member) => (
                      <div key={member.id} className="border-t border-black/10 py-4">
                        <p className="text-label text-void/40">{member.role}</p>
                        <button
                          type="button"
                          onMouseEnter={() => setActiveMember(member)}
                          onFocus={() => setActiveMember(member)}
                          onBlur={() => setActiveMember(null)}
                          className={`mt-2 block w-full text-left font-display text-[clamp(1.1rem,1.3vw,1.35rem)] leading-tight transition-colors duration-300 ${
                            activeMember?.id === member.id ? "text-void" : "text-void/58 hover:text-void"
                          }`}
                        >
                          {member.name}
                        </button>
                      </div>
                    ))}
                  </div>

                  {activeMember && (
                    <div className="border-t border-black/10 pt-4" aria-live="polite">
                      <p className="text-sm leading-[1.72] text-void/58">
                        {activeMember.bio}
                      </p>
                    </div>
                  )}
                </div>

                <div className="grid gap-6 min-[769px]:hidden">
                  {TEAM.map((member) => (
                    <div key={member.id} className="border-t border-black/10 pt-4">
                      <p className="text-label text-void/40">{member.role}</p>
                      <button
                        type="button"
                        aria-expanded={activeMember?.id === member.id}
                        onClick={() =>
                          setActiveMember(activeMember?.id === member.id ? null : member)
                        }
                        className="mt-2 block w-full text-left"
                      >
                        <span className="block font-display text-[1.25rem] font-medium leading-tight text-void">
                          {member.name}
                        </span>
                      </button>
                      {activeMember?.id === member.id && (
                        <p className="mt-4 text-sm leading-[1.72] text-void/58">
                          {member.bio}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn delay={0.1} direction="up" className="lg:col-start-8 lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-white lg:mt-3">
              <video
                ref={videoRef}
                src="/videos/our-practice-video.mp4"
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                onClick={toggleMute}
                className="absolute bottom-3 right-3 z-10 grid h-9 w-9 place-items-center rounded-full border border-white/45 bg-black/20 text-white opacity-90 backdrop-blur-sm transition-opacity duration-300 hover:opacity-100"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-current opacity-90" />
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
