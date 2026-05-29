export interface ExhibitionPageConfig {
  projectId: string;
  slug: string;
  folder?: string;
  installationLabel?: string;
  featuredColumns?: 2 | 3;
  /** Hide the Artists block in the right description column */
  hideRightArtists?: boolean;
  /** Hide the Collaborators block in the right description column */
  hideRightCollaborators?: boolean;
  /** Skip the first N featured works (e.g. to remove a duplicate) */
  featuredWorksStart?: number;
  /** Cap total featured works shown */
  featuredWorksLimit?: number;
  /** Override the LOCATION field in the left sidebar (replaces venue + city) */
  overrideLocation?: string;
  /** Override the detail-page hero image with a specific file (path segments under /public, URL-encoded automatically). */
  heroImagePath?: string[];
}

export const EXHIBITION_PAGE_CONFIGS: ExhibitionPageConfig[] = [
  {
    projectId: "handful-of-dust",
    slug: "handful-of-dust",
    folder: "Handful of Dust",
    hideRightArtists: true,
    hideRightCollaborators: true,
  },
  {
    projectId: "stream-of-consciousness",
    slug: "stream-of-consciousness",
    folder: "Stream of Consciousness",
    hideRightArtists: true,
    hideRightCollaborators: true,
  },
  { projectId: "women-nfts", slug: "women-nfts", folder: "Women & NFTs" },
  {
    projectId: "tokyo-collaborative",
    slug: "tokyo-collaborative",
    folder: "Tokyo Collaborative — ESQAPE & Linda Gallery",
    hideRightArtists: true,
    hideRightCollaborators: true,
  },
  {
    projectId: "hybrid-chronicles",
    slug: "hybrid-chronicles",
    folder: "Hybrid Chronicles",
  },
  {
    projectId: "new-locality",
    slug: "new-locality",
    folder: "New Locality",
    hideRightArtists: true,
    featuredWorksLimit: 8,
    overrideLocation: "The Gallery",
  },
  {
    projectId: "expanding-light",
    slug: "expanding-light",
    folder: "Expanding Light",
    hideRightArtists: true,
    hideRightCollaborators: true,
  },
  {
    projectId: "source-code",
    slug: "source-code",
    hideRightArtists: true,
    hideRightCollaborators: true,
  },
  {
    projectId: "tree-of-life",
    slug: "tree-of-life",
    folder: "Tree_of_life",
    hideRightArtists: true,
  },
  {
    projectId: "orkhan-mammadov",
    slug: "orkhan-mammadov-at-focus-art-fair",
    folder: "Orkhan Mammadov at Focus Art Fair",
    hideRightArtists: true,
    hideRightCollaborators: true,
  },
  {
    projectId: "tenu-bangkok",
    slug: "tenu",
    folder: "TENÚ",
    hideRightArtists: true,
    featuredWorksStart: 2,
    heroImagePath: ["exhibitions", "TENÚ", "FEATURED WORKS", "16(1).jpg"],
  },
  {
    projectId: "noise-australia",
    slug: "noise",
    folder: "NOISE",
  },
  { projectId: "white-dragon", slug: "white-dragon", folder: "White Dragon" },
  {
    projectId: "inner-landscapes",
    slug: "inner-landscapes",
    folder: "Inner Landscapes",
    installationLabel: "VIDEO VIEW",
    featuredColumns: 2,
  },
  {
    projectId: "70-desert-stones",
    slug: "annihilation",
    folder: "Annihilation",
    featuredColumns: 3,
    hideRightArtists: true,
  },
  {
    projectId: "materialization-sensual",
    slug: "materialization-of-sensual-ideas",
    folder: "Materialization of Sensual Ideas",
    hideRightArtists: true,
    hideRightCollaborators: true,
  },
  {
    projectId: "cicconi-resin",
    slug: "cicconi-resin-residency",
    folder: "Cicconi  RES.IN Residency",
  },
  {
    projectId: "comprehended-fantasy",
    slug: "comprehended-by-fantasy",
    folder: "Comprehended by Fantasy",
    featuredColumns: 2,
  },
];

const fixedPageHrefs: Record<string, string> = {
  "natura-naturans": "/exhibitions/art-dubai-2026",
  "body-foreign-place": "/exhibitions/body-is-the-foreign-place",
};

const dynamicPageHrefs = Object.fromEntries(
  EXHIBITION_PAGE_CONFIGS.map((config) => [config.projectId, `/exhibitions/${config.slug}`])
);

export function getExhibitionHref(projectId: string) {
  return fixedPageHrefs[projectId] ?? dynamicPageHrefs[projectId];
}

export function getExhibitionPageConfig(slug: string) {
  return EXHIBITION_PAGE_CONFIGS.find((config) => config.slug === slug);
}
