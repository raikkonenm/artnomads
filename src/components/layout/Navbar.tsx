"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const leftNav = [
  { label: "Exhibitions", href: "/exhibitions" },
  { label: "Network", href: "#network" },
  { label: "Practice", href: "/practice" },
];

const rightNav = [
  { label: "FINDART ↗", href: "https://www.findartplatform.com/", external: true },
  { label: "WORKFLOW.ART", href: "/workflow-art" },
  { label: "Contact", href: "#contact" },
];

const allNav = [...leftNav, ...rightNav];

const projectCities = [
  "Hong Kong",
  "Dubai",
  "Seoul",
  "Tokyo",
  "London",
  "New York",
  "Venice",
  "Tbilisi",
  "Bangkok",
];

function citySlug(city: string) {
  return city.toLowerCase().replace(/\s+/g, "-");
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const onInteriorPage = pathname !== "/";
  const solidNav = scrolled || menuOpen || onInteriorPage;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500",
          solidNav
            ? "border-black/10 bg-linen/94 text-void backdrop-blur-md"
            : "border-white/18 bg-transparent text-white"
        )}
      >
        <nav className="container-gallery grid h-[76px] grid-cols-[1fr_auto_1fr] items-center gap-4">
          <ul className="hidden items-center gap-8 lg:flex">
            {leftNav.map((item) => (
              <li key={item.href} className={item.label === "Exhibitions" ? "group relative" : undefined}>
                <Link href={item.href} className="text-label opacity-70 transition-opacity duration-300 hover:opacity-100">
                  {item.label}
                </Link>
                {item.label === "Exhibitions" && (
                  <div className="pointer-events-none absolute left-0 top-full pt-5 opacity-0 transition duration-300 ease-out group-hover:pointer-events-auto group-hover:opacity-100">
                    <div className="min-w-[10.5rem] border border-white/12 bg-void/72 px-5 py-4 text-white shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl">
                      <ul className="grid gap-2.5">
                        {projectCities.map((city) => (
                          <li
                            key={city}
                            className="text-[0.68rem] font-medium uppercase leading-none tracking-[0.14em]"
                          >
                            <Link
                              href={`/exhibitions?city=${citySlug(city)}`}
                              className="text-white/62 transition-colors duration-300 hover:text-white"
                            >
                              {city}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="col-start-2 justify-self-center text-center"
            aria-label="Art Curatorial Nomads home"
          >
            <span
              aria-hidden
              className="block h-[34px] w-[clamp(9rem,15vw,15.5rem)] bg-current"
              style={{
                WebkitMaskImage: "url('/brand/artnomads-logo-mask.png')",
                maskImage: "url('/brand/artnomads-logo-mask.png')",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskSize: "contain",
                maskSize: "contain",
              }}
            />
            <span className="sr-only">
              Art Curatorial Nomads
            </span>
          </Link>

          <div className="col-start-3 flex items-center justify-end gap-6">
            <ul className="hidden items-center gap-8 lg:flex">
              {rightNav.map((item) => (
                <li key={item.label}>
                  {"external" in item && item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-label opacity-70 transition-opacity duration-300 hover:opacity-100"
                    >
                      {item.label}
                    </a>
                  ) : item.href ? (
                    <Link href={item.href} className="text-label opacity-70 transition-opacity duration-300 hover:opacity-100">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-label opacity-70">{item.label}</span>
                  )}
                </li>
              ))}
            </ul>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
              className="grid h-10 w-10 place-items-center transition-opacity duration-300 hover:opacity-60 lg:hidden"
            >
              <span className="relative block h-4 w-5">
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-0 block h-px w-5 bg-current"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-[7px] block h-px w-5 bg-current"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 left-0 block h-px w-5 bg-current"
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu-overlay"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-linen pt-[76px] text-void lg:hidden"
          >
            <nav className="container-gallery border-t border-black/10">
              <ul>
                {allNav.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + index * 0.035, duration: 0.3 }}
                    className="border-b border-black/10"
                  >
                    {"external" in item && item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMenuOpen(false)}
                        className="grid grid-cols-[3rem_1fr] items-center py-6"
                      >
                        <span className="text-label text-void/35">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-[2.25rem] font-medium leading-none sm:text-[2.375rem]">
                          {item.label}
                        </span>
                      </a>
                    ) : item.href ? (
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="grid grid-cols-[3rem_1fr] items-center py-6"
                      >
                        <span className="text-label text-void/35">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-[2.25rem] font-medium leading-none sm:text-[2.375rem]">
                          {item.label}
                        </span>
                      </Link>
                    ) : (
                      <div className="grid grid-cols-[3rem_1fr] items-center py-6">
                        <span className="text-label text-void/35">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-[2.25rem] font-medium leading-none sm:text-[2.375rem]">
                          {item.label}
                        </span>
                      </div>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
