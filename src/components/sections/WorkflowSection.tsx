"use client";

import { useRef, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

const FEATURES = [
  { label: "Open Calls & Residencies", desc: "Structures for tracking international opportunities" },
  { label: "Exhibition Archive", desc: "Database for exhibition history and documentation" },
  { label: "Contact Management", desc: "Gallery, institution, and collector contacts" },
  { label: "Project Scheduling", desc: "Timeline and deadline management across projects" },
  { label: "Research System", desc: "Organised research workflow for curatorial practice" },
  { label: "Grant Tracking", desc: "Monitor applications, deadlines, and funding globally" },
];

export function WorkflowSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const toggleMute = () => {
    const video = videoRef.current;
    const nextMuted = !isMuted;

    if (video) {
      video.muted = nextMuted;
    }

    setIsMuted(nextMuted);
  };

  const updateProgress = () => {
    const video = videoRef.current;

    if (!video?.duration) {
      setProgress(0);
      return;
    }

    setProgress((video.currentTime / video.duration) * 100);
  };

  return (
    <section id="workflow" className="section-paper border-y border-black/10">
      <div className="container-gallery py-[var(--spacing-section)]">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <FadeIn>
              <h2 className="text-label mb-5 text-void/45">
                Workflow.art
              </h2>
              <div className="relative h-[clamp(14rem,28vw,23rem)] overflow-hidden bg-white">
                <video
                  ref={videoRef}
                  src="/videos/workflow-preview.mp4"
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  onLoadedMetadata={updateProgress}
                  onTimeUpdate={updateProgress}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-3 right-3 flex flex-row-reverse items-center gap-3">
                  <button
                    type="button"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                    onClick={toggleMute}
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/45 bg-black/20 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-black/35"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-current opacity-90" />
                  </button>
                  <div className="h-px w-24 bg-white/30">
                    <div
                      className="h-px bg-white transition-[width] duration-150"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.08} className="mt-10">
              <p className="text-[clamp(1rem,1.2vw,1.16rem)] leading-[1.82] text-void/64">
                A Notion-based system for tracking open calls, residencies, grants,
                exhibitions, and contacts.
                <br />
                <br />
                Built for artists who work internationally.
                <br />
                <br />
                $49
              </p>

              <a
                href="https://workflow.art"
                target="_blank"
                rel="noopener noreferrer"
                className="link-editorial mt-10 text-label text-void/70 hover:text-void"
              >
                Access Workflow.art →
              </a>
            </FadeIn>
          </div>

          <div className="lg:col-start-7 lg:col-span-6">
            <div className="grid border-b border-black/10 sm:grid-cols-2">
              {FEATURES.map((feature, index) => (
                <FadeIn key={feature.label} delay={0.05 + index * 0.035} direction="up">
                  <div className="h-full border-t border-black/10 py-7 sm:px-7 sm:[&:nth-child(odd)]:border-r">
                    <p className="text-label mb-7 text-void/35">0{index + 1}</p>
                    <h4 className="mb-3 font-display text-[1.25rem] font-medium leading-tight text-void">
                      {feature.label}
                    </h4>
                    <p className="text-sm leading-[1.7] text-void/55">{feature.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
