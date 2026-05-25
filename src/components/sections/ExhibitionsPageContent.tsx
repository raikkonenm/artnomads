"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { PROJECTS, type Project } from "@/lib/data";
import { getExhibitionHref } from "@/lib/exhibition-pages";

const CITY_FILTERS = [
  "HONG KONG",
  "DUBAI",
  "SEOUL",
  "TOKYO",
  "LONDON",
  "NEW YORK",
  "VENICE",
  "TBILISI",
  "BANGKOK",
];

const PREVIOUS_PROJECT_IDS = [
  "body-foreign-place",
  "handful-of-dust",
  "stream-of-consciousness",
  "women-nfts",
  "tokyo-collaborative",
  "hybrid-chronicles",
  "new-locality",
  "expanding-light",
  "source-code",
  "tree-of-life",
  "orkhan-mammadov",
  "tenu-bangkok",
  "noise-australia",
  "white-dragon",
  "inner-landscapes",
  "70-desert-stones",
  "materialization-sensual",
  "cicconi-resin",
  "comprehended-fantasy",
];

const CARD_OVERRIDES: Record<string, Partial<Pick<Project, "venue" | "city" | "description">>> = {
  "70-desert-stones": {
    venue: "Digital Project",
    city: "International",
    description:
      "Digital project exploring mythological desert imagery, symbolic transformation, and immersive visual storytelling.",
  },
  "materialization-sensual": {
    venue: "Immersive Exhibition",
    city: "International",
    description:
      "Immersive exhibition exploring sensual perception, digital embodiment, and the translation of immaterial ideas into visual experience.",
  },
  "cicconi-resin": {
    venue: "Residency",
    city: "International",
    description:
      "Residency project focused on artistic exchange, research, and cross-cultural collaboration.",
  },
  "comprehended-fantasy": {
    venue: "Exhibition",
    city: "International",
    description:
      "Exhibition exploring fantasy, perception, and speculative visual imagination.",
  },
};

function yearValue(project: Project) {
  return Number(project.year.match(/\d{4}/)?.[0] ?? 0);
}

function citySlug(city: string) {
  return city.toLowerCase().replace(/\s+/g, "-");
}

function projectHref(project: Project) {
  return getExhibitionHref(project.id) ?? (project.href === "#projects" ? "/#projects" : project.href);
}

function matchesCity(project: Project, city: string | null) {
  if (!city) return true;
  return project.city.toLowerCase().includes(city.toLowerCase());
}

function findProject(id: string) {
  return PROJECTS.find((project) => project.id === id);
}

function ExhibitionCard({ project }: { project: Project }) {
  const displayProject = { ...project, ...CARD_OVERRIDES[project.id] };

  return (
    <article className="flex min-h-full flex-col border-t border-black/10 pt-6">
      <Link href={projectHref(project)} className="group block">
        <div className="relative aspect-[16/10] overflow-hidden bg-white">
          <Image
            src={project.imageUrl}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover image-burn transition-transform duration-700 ease-out group-hover:scale-[1.018]"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col pt-7">
        <p className="text-label text-void/45">
          {displayProject.city} / {displayProject.year}
        </p>

        <h3 className="mt-5 font-display text-[clamp(1.35rem,1.75vw,1.95rem)] font-medium leading-[1.08] text-void">
          <Link href={projectHref(project)} className="transition-opacity duration-300 hover:opacity-60">
            {displayProject.title}
          </Link>
        </h3>

        <p className="mt-4 text-sm leading-[1.55] text-void/52">
          {displayProject.venue}
        </p>

        <p className="mt-7 text-[0.92rem] leading-[1.72] text-void/64">
          {displayProject.description}
        </p>

      </div>
    </article>
  );
}

function CurrentlySection({ project }: { project: Project }) {
  return (
    <section className="border-t border-black/10 py-[var(--spacing-section)]">
      <div className="container-gallery">
        <h2 className="text-label text-void/45">CURRENTLY</h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.18fr)_minmax(20rem,0.72fr)] lg:gap-14 xl:gap-18">
          <Link href={projectHref(project)} className="group block">
            <div className="relative aspect-[16/10] overflow-hidden bg-white">
              <Image
                src="/images/hero-art-dubai.jpg"
                alt={project.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              />
            </div>
          </Link>

          <div className="flex flex-col justify-between border-t border-black/10 pt-6 lg:border-t-0 lg:pt-0">
            <div>
              <p className="text-label text-void/45">Art Dubai / Dubai / 2026</p>
              <h3 className="mt-8 font-display text-[clamp(2rem,3.35vw,4.15rem)] font-medium leading-[0.98] tracking-[-0.03em] text-void">
                {project.title}
              </h3>
            </div>

            <div className="mt-10 grid gap-7">
              <div>
                <p className="text-label mb-2 text-void/35">Artists</p>
                <p className="text-sm leading-relaxed text-void/62">Fatma Lootah / Chunkook Lee</p>
              </div>
              <div>
                <p className="text-label mb-2 text-void/35">Collaborator</p>
                <p className="text-sm leading-relaxed text-void/62">RARARES Art Gallery</p>
              </div>
              <div>
                <p className="text-label mb-2 text-void/35">Dates</p>
                <p className="text-sm leading-relaxed text-void/62">14–17 May 2026</p>
              </div>
              <Link href={projectHref(project)} className="link-editorial mt-4 inline-flex w-fit text-label text-void">
                VISIT EXHIBITION ↗
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExhibitionsPageContent() {
  const searchParams = useSearchParams();
  const selectedCity = searchParams.get("city")?.toLowerCase() ?? null;
  const activeCity = CITY_FILTERS.find((city) => citySlug(city) === selectedCity) ?? null;
  const currentProject = findProject("natura-naturans");

  const previousProjects = useMemo(
    () =>
      PREVIOUS_PROJECT_IDS.map(findProject)
        .filter((project): project is Project => Boolean(project))
        .sort((a, b) => yearValue(b) - yearValue(a)),
    []
  );

  const visiblePrevious = previousProjects.filter((project) => matchesCity(project, activeCity));
  const showCurrent = currentProject ? matchesCity(currentProject, activeCity) : false;

  return (
    <main className="section-light pt-[76px]">
      <section className="container-gallery pb-16 pt-[var(--spacing-section)]">
        <div className="grid gap-8 border-b border-black/10 pb-10 lg:grid-cols-[minmax(14rem,0.36fr)_minmax(0,0.64fr)] lg:items-end">
          <h1 className="font-display text-[clamp(2.55rem,5vw,5.8rem)] font-medium leading-[0.98] tracking-[-0.03em] text-void">
            Exhibitions
          </h1>

          <div className="flex flex-wrap gap-x-2.5 gap-y-2 lg:justify-end">
            {CITY_FILTERS.map((city, index) => (
              <Link
                key={city}
                href={activeCity === city ? "/exhibitions" : `/exhibitions?city=${citySlug(city)}`}
                className={`whitespace-nowrap text-label transition-opacity duration-300 hover:opacity-100 ${
                  activeCity === city ? "opacity-100" : "opacity-45"
                }`}
              >
                {city}
                {index < CITY_FILTERS.length - 1 && <span className="ml-2.5 opacity-35">/</span>}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {currentProject && showCurrent && <CurrentlySection project={currentProject} />}

      <section className="border-t border-black/10 py-[var(--spacing-section)]">
        <div className="container-gallery">
          <h2 className="text-label text-void/45">PREVIOUS EXHIBITIONS</h2>

          {visiblePrevious.length > 0 ? (
            <div className="mt-10 grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-14">
              {visiblePrevious.map((project) => (
                <ExhibitionCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <p className="mt-10 max-w-xl border-t border-black/10 pt-6 text-sm leading-[1.72] text-void/52">
              No exhibitions are currently listed for this location.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
