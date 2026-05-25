"use client";

import { useEffect, useState } from "react";

const screenshots = [
  {
    src: "/projects/workflow.1.png",
    alt: "Workflow.art dashboard overview",
  },
  {
    src: "/projects/workflow.2.png",
    alt: "Workflow.art project management dashboard",
  },
  {
    src: "/projects/workflow.3.png",
    alt: "Workflow.art calendar and tasks dashboard",
  },
];

const loopSlides = [...screenshots, screenshots[0]];

export function WorkflowBrowserMockup() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((index) => index + 1);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeIndex !== screenshots.length) return;

    const reset = window.setTimeout(() => {
      setIsTransitioning(false);
      setActiveIndex(0);
    }, 850);

    return () => window.clearTimeout(reset);
  }, [activeIndex]);

  useEffect(() => {
    if (isTransitioning) return;

    const firstFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setIsTransitioning(true));
    });

    return () => window.cancelAnimationFrame(firstFrame);
  }, [isTransitioning]);

  return (
    <div className="relative w-full">
      <div className="absolute inset-4 -z-10 bg-black/[0.035]" />
      <div className="overflow-hidden rounded-[24px] border border-black/[0.08] bg-[#f8f8f6] shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
        <div className="flex h-[30px] items-center gap-1.5 border-b border-black/[0.08] bg-[#f4f4f1] px-4">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        </div>
        <div className="relative box-border aspect-[3/2] overflow-hidden bg-white p-4">
          <div
            className="flex h-full w-full"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
              transition: isTransitioning
                ? "transform 850ms cubic-bezier(0.16, 1, 0.3, 1)"
                : "none",
            }}
          >
            {loopSlides.map((screenshot, index) => (
              <div key={`${screenshot.src}-${index}`} className="h-full w-full shrink-0">
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="h-full w-full object-contain object-center [filter:none] [image-rendering:auto] [transform:none]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
