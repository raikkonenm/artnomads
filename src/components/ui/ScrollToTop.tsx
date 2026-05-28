"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Disable browser scroll restoration so it doesn't fight Next.js
    if (typeof window !== "undefined") {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // Use 'instant' to bypass scroll-behavior: smooth on <html>,
    // which would otherwise animate from the previous scroll position
    // and leave mobile users visually mid-page on initial render.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
