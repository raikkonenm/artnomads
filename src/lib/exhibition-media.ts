import type { Project } from "@/lib/data";
import type { ExhibitionPageConfig } from "@/lib/exhibition-pages";
import { EXHIBITION_ARTIST_BIOS, type ArtistBio } from "@/lib/artist-bios";
import { EXHIBITION_MEDIA_MANIFEST } from "@/lib/generated/exhibition-media-manifest";

export interface ExhibitionMediaItem {
  src: string;
  alt: string;
  isWide: boolean;
}

export interface ExhibitionMedia {
  heroImage: string;
  installationLabel: string;
  installationImages: ExhibitionMediaItem[];
  featuredWorks: ExhibitionMediaItem[];
  artistImages: ExhibitionMediaItem[];
  featuredColumns?: 2 | 3;
  /** Text-only artist bio blocks (image-based blocks use these for bio text too) */
  artistBios: ArtistBio[];
  /** Hide the Artists block in the right description column */
  hideRightArtists: boolean;
  /** Hide the Collaborators block in the right description column */
  hideRightCollaborators: boolean;
  /** Override the LOCATION field in the left sidebar (replaces venue + city display) */
  overrideLocation?: string;
}

const sourceImageExtension = /\.(jpe?g|png)$/i;

interface ManifestSection {
  name: string;
  images: {
    name: string;
    isWide: boolean;
  }[];
}

function mediaSrc(...segments: string[]) {
  return `/${segments.map((segment) => encodeURIComponent(segment)).join("/")}`;
}

function optimizedMediaSrc(...segments: string[]) {
  const fileName = segments.at(-1);

  if (!fileName || !sourceImageExtension.test(fileName)) return mediaSrc(...segments);

  return mediaSrc(...segments.slice(0, -1), fileName.replace(sourceImageExtension, ".webp"));
}

function findSection(folderPath: string, sectionNames: string[]) {
  const normalizedNames = sectionNames.map((name) => name.toLowerCase());
  const entry = EXHIBITION_MEDIA_MANIFEST[folderPath as keyof typeof EXHIBITION_MEDIA_MANIFEST];
  const sectionName = Object.keys(entry?.sections ?? {}).find((candidate) =>
    normalizedNames.includes(candidate)
  );

  return sectionName
    ? (entry?.sections[sectionName as keyof typeof entry.sections] as ManifestSection)
    : undefined;
}

function readSectionImages(folder: string, sectionNames: string[], label: string) {
  const section = findSection(folder, sectionNames);

  if (!section) return [];

  return section.images.map((file, index) => ({
    src: mediaSrc("exhibitions", folder, section.name, file.name),
    alt: `${label} ${index + 1}`,
    isWide: file.isWide,
  }));
}

export function getExhibitionMedia(config: ExhibitionPageConfig, project: Project): ExhibitionMedia {
  const artistBios = EXHIBITION_ARTIST_BIOS[config.projectId] ?? [];
  const heroOverride = config.heroImagePath ? optimizedMediaSrc(...config.heroImagePath) : undefined;

  if (!config.folder) {
    return {
      heroImage: heroOverride ?? project.imageUrl,
      installationLabel: config.installationLabel ?? "INSTALLATION VIEWS",
      installationImages: [],
      featuredWorks: [],
      artistImages: [],
      featuredColumns: config.featuredColumns,
      artistBios,
      hideRightArtists: config.hideRightArtists ?? false,
      hideRightCollaborators: config.hideRightCollaborators ?? false,
      overrideLocation: config.overrideLocation,
    };
  }

  const heroImages = readSectionImages(config.folder, ["main"], `${project.title} hero image`);
  const installationSection =
    config.installationLabel === "VIDEO VIEW" ? ["video view"] : ["installation views"];

  let featuredWorks = readSectionImages(config.folder, ["featured works"], `${project.title} featured work`);
  if (config.featuredWorksStart) {
    featuredWorks = featuredWorks.slice(config.featuredWorksStart);
  }
  if (config.featuredWorksLimit !== undefined) {
    featuredWorks = featuredWorks.slice(0, config.featuredWorksLimit);
  }

  return {
    heroImage: heroOverride ?? heroImages[0]?.src ?? project.imageUrl,
    installationLabel: config.installationLabel ?? "INSTALLATION VIEWS",
    installationImages: readSectionImages(config.folder, installationSection, `${project.title} installation view`),
    featuredWorks,
    artistImages: readSectionImages(config.folder, ["artist", "artists"], `${project.title} artist image`),
    featuredColumns: config.featuredColumns,
    artistBios,
    hideRightArtists: config.hideRightArtists ?? false,
    hideRightCollaborators: config.hideRightCollaborators ?? false,
    overrideLocation: config.overrideLocation,
  };
}
