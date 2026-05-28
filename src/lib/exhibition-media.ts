import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import type { Project } from "@/lib/data";
import type { ExhibitionPageConfig } from "@/lib/exhibition-pages";
import { EXHIBITION_ARTIST_BIOS, type ArtistBio } from "@/lib/artist-bios";

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
}

const imageExtension = /\.(jpe?g|png|webp|gif)$/i;
const exhibitionsRoot = path.join(process.cwd(), "public", "exhibitions");

function mediaSrc(...segments: string[]) {
  return `/${segments.map((segment) => encodeURIComponent(segment)).join("/")}`;
}

function imageSize(filePath: string) {
  const data = readFileSync(filePath);

  if (data.toString("ascii", 1, 4) === "PNG") {
    return { width: data.readUInt32BE(16), height: data.readUInt32BE(20) };
  }

  if (data[0] !== 0xff || data[1] !== 0xd8) return undefined;

  let offset = 2;
  while (offset < data.length) {
    if (data[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = data[offset + 1];
    if (marker >= 0xc0 && marker <= 0xc3) {
      return {
        height: data.readUInt16BE(offset + 5),
        width: data.readUInt16BE(offset + 7),
      };
    }

    const length = data.readUInt16BE(offset + 2);
    offset += length + 2;
  }

  return undefined;
}

function findSection(folderPath: string, sectionNames: string[]) {
  if (!existsSync(folderPath)) return undefined;

  const normalizedNames = sectionNames.map((name) => name.toLowerCase());
  const entry = readdirSync(folderPath, { withFileTypes: true }).find(
    (candidate) => candidate.isDirectory() && normalizedNames.includes(candidate.name.toLowerCase())
  );

  return entry?.name;
}

function readSectionImages(folder: string, sectionNames: string[], label: string) {
  const folderPath = path.join(exhibitionsRoot, folder);
  const section = findSection(folderPath, sectionNames);

  if (!section) return [];

  const sectionPath = path.join(folderPath, section);

  return readdirSync(sectionPath, { withFileTypes: true })
    .filter((file) => file.isFile() && imageExtension.test(file.name))
    .sort((first, second) => first.name.localeCompare(second.name, undefined, { numeric: true }))
    .map((file, index) => {
      const size = imageSize(path.join(sectionPath, file.name));

      return {
        src: mediaSrc("exhibitions", folder, section, file.name),
        alt: `${label} ${index + 1}`,
        isWide: size ? size.width / size.height > 1.15 : false,
      };
    });
}

export function getExhibitionMedia(config: ExhibitionPageConfig, project: Project): ExhibitionMedia {
  const artistBios = EXHIBITION_ARTIST_BIOS[config.projectId] ?? [];

  if (!config.folder) {
    return {
      heroImage: project.imageUrl,
      installationLabel: config.installationLabel ?? "INSTALLATION VIEWS",
      installationImages: [],
      featuredWorks: [],
      artistImages: [],
      featuredColumns: config.featuredColumns,
      artistBios,
      hideRightArtists: config.hideRightArtists ?? false,
      hideRightCollaborators: config.hideRightCollaborators ?? false,
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
    heroImage: heroImages[0]?.src ?? project.imageUrl,
    installationLabel: config.installationLabel ?? "INSTALLATION VIEWS",
    installationImages: readSectionImages(config.folder, installationSection, `${project.title} installation view`),
    featuredWorks,
    artistImages: readSectionImages(config.folder, ["artist", "artists"], `${project.title} artist image`),
    featuredColumns: config.featuredColumns,
    artistBios,
    hideRightArtists: config.hideRightArtists ?? false,
    hideRightCollaborators: config.hideRightCollaborators ?? false,
  };
}
