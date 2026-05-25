"use client";

import { useRef, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

export function ManifestoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    const nextMuted = !isMuted;

    if (video) {
      video.muted = nextMuted;
    }

    setIsMuted(nextMuted);
  };

  return (
    <section id="manifesto" className="section-light border-b border-black/10">
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
