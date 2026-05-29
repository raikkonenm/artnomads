"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { ARCHIVE_PROJECTS, FEATURED_PROJECTS, type Project } from "@/lib/data";
import { getExhibitionHref } from "@/lib/exhibition-pages";

const GRID_PROJECT_IDS = ["handful-of-dust", "stream-of-consciousness", "women-nfts"];

const archiveCategories: Record<string, string> = {
  "tokyo-collaborative": "Exhibition",
  "hybrid-chronicles": "Exhibition",
  "handful-of-dust": "Exhibition",
  "new-locality": "Exhibition",
  "expanding-light": "Installation",
  "source-code": "Exhibition",
  "orkhan-mammadov": "Fair",
  "tenu-bangkok": "Solo Exhibition",
  "noise-australia": "Solo Exhibition",
  "tree-of-life": "Exhibition",
  "inner-landscapes": "Digital Project",
  "70-desert-stones": "Digital Project",
  "materialization-sensual": "Immersive Exhibition",
  "cicconi-resin": "Residency",
  "comprehended-fantasy": "Exhibition",
};

function ProjectFeature({ project }: { project: Project }) {
  const imageLeft = project.id === "body-foreign-place";
  const detailsSpacing = imageLeft ? "mt-8 lg:mt-10" : "mt-14 lg:mt-20";
  const href = getExhibitionHref(project.id) ?? project.href;

  return (
    <article id={project.id} className="border-t border-black/10 py-[var(--spacing-section)]">
      {imageLeft && (
        <div className="container-gallery min-[769px]:hidden">
          <Link href="/exhibitions/body-is-the-foreign-place" className="group block">
            <div className="relative aspect-[16/10] overflow-hidden bg-white">
              <Image
                src={project.imageUrl}
                alt={project.imageAlt}
                fill
                sizes="100vw"
                className="object-cover image-burn transition-transform duration-700 ease-out group-hover:scale-[1.014]"
              />
            </div>
          </Link>

          <div className="pt-8">
            <p className="text-label text-void/55">RARARES ART GALLERY / ART CENTRAL</p>
            <h3 className="mt-6 font-display text-[clamp(1.45rem,2vw,2.05rem)] font-medium leading-[1.08] text-void">
              <Link
                href="/exhibitions/body-is-the-foreign-place"
                className="transition-opacity duration-300 hover:opacity-60"
              >
                {project.title}
              </Link>
            </h3>
            <p className="mt-5 text-sm leading-[1.45] text-void/58">
              {project.year}, {project.city}
            </p>
            <p className="mt-8 text-[0.94rem] leading-[1.72] text-void/64">
              {project.description}
            </p>
          </div>
        </div>
      )}
      <div
        className={`container-gallery gap-10 lg:gap-12 xl:gap-14 ${
          imageLeft ? "hidden min-[769px]:grid" : "grid"
        } ${
          imageLeft
            ? "lg:grid-cols-[minmax(0,1fr)_minmax(18rem,25rem)]"
            : "lg:grid-cols-[minmax(18rem,25rem)_minmax(0,1fr)]"
        }`}
      >
        <div className={`flex flex-col justify-between ${imageLeft ? "lg:col-start-2" : ""}`}>
          <div>
            <FadeIn direction="up">
              <p className="text-label mb-6 text-void/45">
                {project.index} / {project.city} / {project.year}
              </p>
              <h3 className="font-display text-[clamp(1.9rem,2.9vw,3.45rem)] font-medium leading-[1.06] text-void">
                <Link href={href} className="transition-opacity duration-300 hover:opacity-60">
                  {project.title}
                </Link>
              </h3>
              <p className="mt-7 text-sm leading-[1.72] text-void/55">
                {project.venue}
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.08} direction="up" className={`${detailsSpacing} border-t border-black/10 pt-7`}>
            <p className="max-w-[31rem] text-[0.94rem] leading-[1.82] text-void/64">
              {project.description}
            </p>

            <div className="mt-8 grid gap-6">
              {project.artists && project.artists.length > 0 && (
                <div>
                  <p className="text-label mb-2 text-void/35">Artists</p>
                  <p className="text-sm leading-relaxed text-void/58">{project.artists.join(" / ")}</p>
                </div>
              )}
              {project.collaborators && project.collaborators.length > 0 && (
                <div>
                  <p className="text-label mb-2 text-void/35">Collaborators</p>
                  <p className="text-sm leading-relaxed text-void/58">{project.collaborators.join(" / ")}</p>
                </div>
              )}
            </div>

          </FadeIn>
        </div>

        <div
          className={`lg:w-[92%] ${
            imageLeft
              ? "lg:col-start-1 lg:row-start-1 lg:justify-self-start"
              : "lg:justify-self-end"
          }`}
        >
          <Link href={href} className="group block">
            <div className="relative aspect-[16/9] overflow-hidden bg-white">
              <Image
                src={project.imageUrl}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 72vw"
                className="object-cover image-burn transition-transform duration-700 ease-out group-hover:scale-[1.014]"
              />
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}

function ExhibitionGridCard({ project, idx }: { project: Project; idx: number }) {
  const href = getExhibitionHref(project.id) ?? project.href;

  return (
    <motion.article
      id={project.id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: idx * 0.04, duration: 0.46, ease: [0.16, 1, 0.3, 1] }}
      className="flex min-h-full flex-col"
    >
      <Link href={href} className="group block">
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

      <div className="flex flex-1 flex-col pt-8">
        <p className="text-label text-void/55">{project.venue}</p>

        <div className="mt-6 grid min-h-[4.75rem] gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
          <h3 className="font-display text-[clamp(1.45rem,2vw,2.05rem)] font-medium leading-[1.08] text-void">
            <Link href={href} className="transition-opacity duration-300 hover:opacity-60">
              {project.title}
            </Link>
          </h3>
          <p className="max-w-[11rem] text-left text-sm leading-[1.45] text-void/58 sm:text-right">
            {project.year}
            <br />
            {project.city}
          </p>
        </div>

        <p className="mt-8 text-[0.94rem] leading-[1.72] text-void/64">
          {project.previewDescription ?? project.description}
        </p>

      </div>
    </motion.article>
  );
}

function ArchivePanel() {
  const [activeProject, setActiveProject] = useState<Project>(ARCHIVE_PROJECTS[0]);
  const artists = activeProject.artists?.length ? activeProject.artists : ["Chunkook Lee"];
  const curators = activeProject.curators?.length ? activeProject.curators : ["ACN Curatorial Team"];

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.38fr)] lg:items-stretch xl:gap-10">
      <div className="sticky top-[76px] z-10 bg-white pb-4 min-[769px]:hidden">
        <motion.div
          key={`${activeProject.id}-mobile-image`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[42svh] min-h-[17rem] max-h-[24rem] overflow-hidden bg-white"
        >
          <Image
            src={activeProject.imageUrl}
            alt={activeProject.imageAlt}
            fill
            sizes="100vw"
            className="object-cover object-center image-burn"
          />
        </motion.div>
      </div>

      <div className="border-b border-black/10">
        <div className="hidden grid-cols-[5rem_minmax(0,1fr)] border-y border-black/10 py-3 text-label text-void/35 md:grid">
          <span>Year</span>
          <span>Project</span>
        </div>

        {ARCHIVE_PROJECTS.map((project, index) => {
          const isActive = project.id === activeProject.id;
          const href = getExhibitionHref(project.id) ?? project.href;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (index % 8) * 0.018, duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setActiveProject(project)}
              onFocusCapture={() => setActiveProject(project)}
              onClick={() => setActiveProject(project)}
              className={`grid w-full gap-2 border-t border-black/10 px-0 py-3 text-left transition-colors duration-300 md:grid-cols-[5rem_minmax(0,1fr)] md:items-center ${
                isActive ? "bg-black/[0.035]" : "hover:bg-black/[0.025]"
              }`}
            >
              <span className="text-label text-void/42 md:pl-2">{project.year}</span>
              <span>
                <span className="block text-[0.68rem] font-medium uppercase leading-none tracking-[0.13em] text-void/45">
                  {archiveCategories[project.id] ?? "Exhibition"}
                </span>
                <Link
                  href={href}
                  className="mt-1.5 block font-display text-[clamp(1.05rem,1.25vw,1.35rem)] font-medium leading-tight text-void transition-opacity duration-300 hover:opacity-60"
                >
                  {project.title}
                </Link>
              </span>
            </motion.div>
          );
        })}
      </div>

      <div className="hidden min-[769px]:block lg:self-stretch">
        <div className="grid gap-8 lg:sticky lg:top-28 lg:grid-cols-[minmax(18rem,0.82fr)_minmax(15rem,0.56fr)]">
          <Link href={getExhibitionHref(activeProject.id) ?? activeProject.href} className="group block">
            <motion.div
              key={`${activeProject.id}-image`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] overflow-hidden bg-white"
            >
              <Image
                src={activeProject.imageUrl}
                alt={activeProject.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover image-burn transition-transform duration-700 ease-out group-hover:scale-[1.014]"
              />
            </motion.div>
          </Link>

          <motion.aside
            key={`${activeProject.id}-details`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-black/10 pt-5"
          >
            <p className="text-label text-void/42">
              {activeProject.city} / {activeProject.dateRange ?? activeProject.year}
            </p>
            <h4 className="mt-8 text-label text-void">Info</h4>
            <p className="mt-4 text-[0.92rem] leading-[1.72] text-void/64">
              {activeProject.previewDescription ?? activeProject.description}
            </p>

            <div className="mt-8 grid gap-7">
              <div>
                <p className="text-label mb-2 text-void/35">Artists</p>
                <p className="text-sm leading-relaxed text-void/58">{artists.join(" / ")}</p>
              </div>
              <div>
                <p className="text-label mb-2 text-void/35">Curators</p>
                <p className="text-sm leading-relaxed text-void/58">{curators.join(" / ")}</p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}

export function SelectedProjects() {
  const featureModules = FEATURED_PROJECTS.filter(
    (project) => project.id !== "natura-naturans" && !GRID_PROJECT_IDS.includes(project.id)
  );
  const gridProjects = GRID_PROJECT_IDS.map((id) =>
    FEATURED_PROJECTS.find((project) => project.id === id)
  ).filter((project): project is Project => Boolean(project));

  return (
    <section id="projects" className="section-light">
      <div className="container-gallery pb-10 pt-[var(--spacing-section)]">
        <div className="grid gap-10 lg:grid-cols-12">
          <FadeIn className="lg:col-span-5">
            <h2 className="text-label text-void/45">
              Selected projects
            </h2>
          </FadeIn>

          <FadeIn delay={0.08} className="lg:col-start-8 lg:col-span-4 lg:self-end">
            {null}
          </FadeIn>
        </div>
      </div>

      {featureModules.map((project) => (
        <ProjectFeature key={project.id} project={project} />
      ))}

      <div className="border-t border-black/10">
        <div className="container-gallery py-[var(--spacing-section)]">
          <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 xl:gap-16">
            {gridProjects.map((project, index) => (
              <ExhibitionGridCard key={project.id} project={project} idx={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="container-gallery py-[var(--spacing-section)]">
        <div className="mb-10 grid gap-8 lg:grid-cols-12">
          <FadeIn className="lg:col-span-4">
            <h3 className="text-label text-void/45">
              Exhibitions
            </h3>
          </FadeIn>
          <FadeIn delay={0.08} className="lg:col-start-8 lg:col-span-4 lg:self-end">
            {null}
          </FadeIn>
        </div>

        <ArchivePanel />
      </div>
    </section>
  );
}
