"use client";

import { useRef, useState } from "react";
import { ImageLightbox, type LightboxImage } from "@/components/ui/ImageLightbox";

type InstallationImage = {
  src: string;
  alt: string;
};

const defaultImages: InstallationImage[] = [
  {
    src: "/projects/ad1.png",
    alt: "Art Dubai installation view 1",
  },
  {
    src: "/projects/ad2.png",
    alt: "Art Dubai installation view 2",
  },
  {
    src: "/projects/ad3.png",
    alt: "Art Dubai installation view 3",
  },
  {
    src: "/projects/ad4.png",
    alt: "Art Dubai installation view 4",
  },
  {
    src: "/projects/ad5.jpg",
    alt: "Art Dubai installation view 5",
  },
  {
    src: "/projects/ad6.png",
    alt: "Art Dubai installation view 6",
  },
];

export function ArtDubaiInstallationCarousel({
  images = defaultImages,
  title = "INSTALLATION VIEWS",
}: {
  images?: InstallationImage[];
  title?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, moved: false, startX: 0, scrollLeft: 0 });
  const [missingImages, setMissingImages] = useState<Record<string, boolean>>({});
  const [selectedImage, setSelectedImage] = useState<LightboxImage | null>(null);

  const scrollBySlide = (direction: number) => {
    const container = scrollRef.current;
    const slide = container?.querySelector<HTMLElement>("[data-carousel-slide]");

    if (!container || !slide) return;

    const style = window.getComputedStyle(container);
    const gap = parseFloat(style.columnGap || style.gap || "0");
    container.scrollBy({
      left: direction * (slide.offsetWidth + gap),
      behavior: "smooth",
    });
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const container = scrollRef.current;

    if (!container) return;

    drag.current = {
      active: true,
      moved: false,
      startX: event.clientX,
      scrollLeft: container.scrollLeft,
    };
    container.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const container = scrollRef.current;

    if (!container || !drag.current.active) return;

    if (Math.abs(event.clientX - drag.current.startX) > 5) {
      drag.current.moved = true;
    }

    container.scrollLeft = drag.current.scrollLeft - (event.clientX - drag.current.startX);
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const container = scrollRef.current;

    drag.current.active = false;

    if (container?.hasPointerCapture(event.pointerId)) {
      container.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div>
      <div className="container-gallery mb-10">
        <p className="text-label text-void/45">{title}</p>
      </div>

      <div className="group relative overflow-hidden">
        <div
          ref={scrollRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          className="flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto px-[max(1.5rem,5.9vw)] pb-2 active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((image) => (
            <figure
              key={image.src}
              data-carousel-slide
              className="relative flex h-[clamp(19rem,58vw,44rem)] w-[min(78vw,1180px)] shrink-0 snap-center items-center justify-center overflow-hidden bg-black/[0.025]"
            >
              {missingImages[image.src] ? (
                <div className="grid h-full w-full place-items-center text-label text-void/30">
                  {image.alt}
                </div>
              ) : (
                <button
                  type="button"
                  aria-label={`Open ${image.alt}`}
                  onClick={() => {
                    if (!drag.current.moved) setSelectedImage(image);
                  }}
                  className="relative h-full w-full cursor-zoom-in"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="eager"
                    decoding="async"
                    draggable={false}
                    className="h-full w-full object-contain object-center"
                    onError={() =>
                      setMissingImages((current) => ({
                        ...current,
                        [image.src]: true,
                      }))
                    }
                  />
                </button>
              )}
            </figure>
          ))}
        </div>

        <button
          type="button"
          aria-label="Previous installation view"
          onClick={() => scrollBySlide(-1)}
          className="pointer-events-none absolute left-[max(1.5rem,5.9vw)] top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center border border-white/55 bg-black/12 text-lg leading-none text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 hover:bg-black/22 group-hover:pointer-events-auto group-hover:opacity-100"
        >
          {"\u2190"}
        </button>
        <button
          type="button"
          aria-label="Next installation view"
          onClick={() => scrollBySlide(1)}
          className="pointer-events-none absolute right-[max(1.5rem,5.9vw)] top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center border border-white/55 bg-black/12 text-lg leading-none text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 hover:bg-black/22 group-hover:pointer-events-auto group-hover:opacity-100"
        >
          {"\u2192"}
        </button>
      </div>
      <ImageLightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
}
