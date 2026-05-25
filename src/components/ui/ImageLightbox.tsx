"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type LightboxImage = {
  src: string;
  alt: string;
};

export function ImageLightbox({
  image,
  onClose,
}: {
  image: LightboxImage | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!image) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          key={image.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-black/90 p-5 sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={image.alt}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute inset-0"
            aria-label="Close image view"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
            src={image.src}
            alt={image.alt}
            className="relative z-10 max-h-[calc(100svh-3rem)] max-w-[calc(100vw-2rem)] object-contain sm:max-h-[calc(100svh-5rem)] sm:max-w-[calc(100vw-5rem)]"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close image view"
            className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center text-2xl leading-none text-white transition-opacity duration-300 hover:opacity-55 sm:right-8 sm:top-8"
          >
            {"\u00d7"}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function LightboxArtwork({
  src,
  alt,
  imageClassName,
  triggerClassName = "block w-full cursor-zoom-in",
  onError,
}: {
  src: string;
  alt: string;
  imageClassName: string;
  triggerClassName?: string;
  onError?: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={triggerClassName}>
        <img src={src} alt={alt} className={imageClassName} onError={onError} />
      </button>
      <ImageLightbox image={open ? { src, alt } : null} onClose={() => setOpen(false)} />
    </>
  );
}
