"use client";

/**
 * Reveals text from beneath a clip-path mask — the premium luxury-site
 * technique used by Fondation Prada, Bottega Veneta, A24, etc.
 *
 * Each child line wraps in an `overflow-hidden` container so the text
 * appears to slide up from below.
 */

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface RevealLineProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  /** When true the animation runs immediately (no scroll trigger) */
  eager?: boolean;
}

const lineVariants: Variants = {
  hidden: {
    clipPath: "inset(100% 0 0 0)",
    opacity: 0,
  },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    opacity: 1,
  },
};

export function RevealLine({
  children,
  className,
  delay = 0,
  duration = 1.0,
  once = true,
  eager = false,
}: RevealLineProps) {
  const ref  = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px" });

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        variants={lineVariants}
        initial="hidden"
        animate={eager || inView ? "visible" : "hidden"}
        transition={{
          delay,
          duration,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={cn(className)}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ─── Stagger container for multiple reveal lines ───────────────────────── */

interface RevealGroupProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayStart?: number;
  eager?: boolean;
  once?: boolean;
}

const groupVariants: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

const childVariants: Variants = {
  hidden:  { clipPath: "inset(100% 0 0 0)", opacity: 0 },
  visible: { clipPath: "inset(0% 0 0 0)",   opacity: 1 },
};

export function RevealGroup({
  children,
  className,
  stagger = 0.1,
  delayStart = 0,
  eager = false,
  once = true,
}: RevealGroupProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={groupVariants}
      custom={stagger}
      initial="hidden"
      animate={eager || inView ? "visible" : "hidden"}
      transition={{ delayChildren: delayStart }}
    >
      {children}
    </motion.div>
  );
}

export function RevealChild({
  children,
  className,
  duration = 1.0,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        variants={childVariants}
        transition={{ duration, ease: [0.16, 1, 0.3, 1] }}
        className={cn(className)}
      >
        {children}
      </motion.div>
    </div>
  );
}
