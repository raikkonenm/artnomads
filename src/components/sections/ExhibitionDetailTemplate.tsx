import Image from "next/image";
import { ArtDubaiInstallationCarousel } from "@/components/sections/ArtDubaiInstallationCarousel";
import type { Project } from "@/lib/data";
import type { ExhibitionMedia, ExhibitionMediaItem } from "@/lib/exhibition-media";

function FeaturedWorks({
  works,
  columns,
}: {
  works: ExhibitionMediaItem[];
  columns?: 2 | 3;
}) {
  const fixedGrid = columns === 3 ? "md:grid-cols-3" : columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2";

  return (
    <div className={`grid gap-10 lg:gap-14 ${fixedGrid}`}>
      {works.map((work) => {
        const fullWidth = !columns && work.isWide;

        return (
          <figure key={work.src} className={fullWidth ? "md:col-span-2" : undefined}>
            <img src={work.src} alt={work.alt} className="block h-auto w-full object-contain" />
          </figure>
        );
      })}
    </div>
  );
}

function ArtistBlocks({ project, images }: { project: Project; images: ExhibitionMediaItem[] }) {
  return (
    <div className="grid gap-24 lg:gap-32">
      {images.map((image, index) => {
        const reverse = index % 2 === 1;
        const artistName = project.artists?.[index] ?? project.artists?.[0] ?? "Artist";

        return (
          <article
            key={image.src}
            className="grid gap-12 border-t border-black/10 pt-10 lg:grid-cols-12 lg:gap-16"
          >
            <figure className={reverse ? "lg:col-start-8 lg:col-span-5" : "lg:col-span-5"}>
              <div className="relative aspect-[4/5] overflow-hidden bg-black/[0.045]">
                <Image src={image.src} alt={artistName} fill sizes="(max-width: 1024px) 88vw, 42vw" className="object-cover" />
              </div>
              <figcaption className="mt-4 text-xs leading-[1.6] text-void/42">
                {artistName}, {project.title}
              </figcaption>
            </figure>

            <div
              className={`max-w-[43rem] self-center ${
                reverse
                  ? "lg:col-start-1 lg:row-start-1 lg:col-span-5"
                  : "lg:col-start-8 lg:col-span-5"
              }`}
            >
              <h2 className="font-display text-[clamp(2.4rem,4.6vw,5.6rem)] font-medium leading-[0.96] tracking-[-0.035em] text-void">
                {artistName}
              </h2>
              <p className="mt-9 text-[clamp(1rem,1.16vw,1.12rem)] leading-[1.84] text-void/64">
                Artist information forthcoming.
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function ExhibitionDetailTemplate({
  project,
  media,
}: {
  project: Project;
  media: ExhibitionMedia;
}) {
  const details = project.description || "Details forthcoming.";
  const artists = project.artists?.join(" / ") ?? "Details forthcoming.";

  return (
    <div className="section-paper">
      <section className="relative flex h-[100svh] min-h-[680px] overflow-hidden bg-void text-white">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src={media.heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center grayscale-[0.08] saturate-[0.88]"
          />
        </div>
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.28)_0%,rgba(17,17,17,0.2)_45%,rgba(17,17,17,0.42)_100%)]"
          aria-hidden
        />
        <div className="container-gallery relative z-10 flex h-full items-end px-6 pb-20 pt-36 lg:pb-28 lg:pt-44">
          <div className="max-w-[48rem] text-left">
            <p className="text-label mb-5 text-white/70">
              {project.city.toUpperCase()} / {project.year}
            </p>
            <h1 className="max-w-[44rem] font-display text-[clamp(3rem,5vw,5.75rem)] font-medium leading-[0.92] tracking-[-0.03em] text-white">
              {project.title}
            </h1>
            <p className="mt-8 text-[clamp(1rem,1.2vw,1.22rem)] font-medium leading-[1.5] text-white/88">
              {project.venue}
            </p>
            <p className="mt-6 text-sm leading-[1.75] text-white/74">
              {project.dateRange ?? project.year}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10">
        <div className="container-gallery py-[var(--spacing-section)]">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="grid content-start gap-10 border-t border-black/10 pt-5 lg:col-span-4">
              <div>
                <p className="text-label mb-3 text-void/35">ARTISTS</p>
                <p className="text-sm leading-[1.7] text-void/66">{artists}</p>
              </div>
              <div>
                <p className="text-label mb-3 text-void/35">DATES</p>
                <p className="text-sm leading-[1.7] text-void/66">{project.dateRange ?? project.year}</p>
              </div>
              <div>
                <p className="text-label mb-3 text-void/35">LOCATION</p>
                <p className="text-sm leading-[1.7] text-void/66">
                  {project.venue}
                  <br />
                  {project.city}
                </p>
              </div>
            </div>

            <div className="border-t border-black/10 pt-5 lg:col-start-7 lg:col-span-6">
              <p className="text-[clamp(1rem,1.2vw,1.16rem)] leading-[1.86] text-void/68">{details}</p>
              <div className="mt-10 grid gap-7">
                <div>
                  <p className="text-label mb-2 text-void/35">Artists</p>
                  <p className="text-sm leading-relaxed text-void/58">
                    {artists}
                  </p>
                </div>
                <div>
                  <p className="text-label mb-2 text-void/35">Collaborators</p>
                  <p className="text-sm leading-relaxed text-void/58">
                    {project.collaborators?.join(" / ") ?? "Details forthcoming."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {media.installationImages.length > 0 && (
        <section className="border-t border-black/10">
          <div className="py-[var(--spacing-section)]">
            <ArtDubaiInstallationCarousel images={media.installationImages} title={media.installationLabel} />
          </div>
        </section>
      )}

      {media.featuredWorks.length > 0 && (
        <section className="border-t border-black/10">
          <div className="container-gallery py-[var(--spacing-section)]">
            <p className="text-label mb-10 text-void/45">FEATURED WORKS</p>
            <FeaturedWorks works={media.featuredWorks} columns={media.featuredColumns} />
          </div>
        </section>
      )}

      {media.artistImages.length > 0 && (
        <section className="border-t border-black/10">
          <div className="container-gallery py-[var(--spacing-section)]">
            <p className="text-label mb-12 text-void/45">About the Artists</p>
            <ArtistBlocks project={project} images={media.artistImages} />
          </div>
        </section>
      )}
    </div>
  );
}
