export interface Project {
  id: string;
  index: string;       // "01", "02" …
  title: string;
  venue: string;
  city: string;
  year: string;
  dateRange?: string;
  description: string;
  artists?: string[];
  curators?: string[];
  collaborators?: string[];
  imageUrl: string;
  imageAlt: string;
  featured: boolean;   // large editorial layout
  href: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  imageAlt: string;
}

/* ─── Projects ─────────────────────────────────────────────────────────────── */

export const PROJECTS: Project[] = [
  {
    id: "natura-naturans",
    index: "01",
    title: "Natura Naturans, Natura Naturata",
    venue: "Art Dubai — Booth X26, RARARES Art Gallery",
    city: "Dubai",
    year: "2026",
    dateRange: "March 2026",
    description:
      "Inspired by the philosophy of Baruch Spinoza, the exhibition explored the relationship between nature as creator and nature as creation. Centred around a large-scale installation by acclaimed UAE artist and cultural ambassador Fatma Lootah, whose experimental contemporary practice remains deeply rooted in Arabic heritage and visual tradition.",
    artists: ["Fatma Lootah"],
    collaborators: ["RARARES Art Gallery"],
    imageUrl: "/projects/natura-naturans-artwork.jpg",
    imageAlt: "Immersive light installation with warm golden tones",
    featured: true,
    href: "#projects",
  },
  {
    id: "body-foreign-place",
    index: "02",
    title: "Body Is The Foreign Place",
    venue: "Art Central — Booth A18 P3, RARARES Art Gallery",
    city: "Hong Kong",
    year: "2026",
    dateRange: "March 2026",
    description:
      "An international group exhibition exploring the body as a site of memory, migration, identity, vulnerability, and transformation within increasingly technologized and globalized societies. Positioned within Hong Kong's layered cultural environment, the project examined the body simultaneously as archive and frontier.",
    artists: ["Mathias Hagen Maserati", "Elnaz Javani", "Chunkook Lee", "Ustina Yakovleva", "Tatiana Chursina"],
    curators: ["Marina Baisel"],
    collaborators: ["RARARES Art Gallery"],
    imageUrl: "/projects/body-foreign-place-booth-wide.png",
    imageAlt: "Abstract figurative painting exploring the body",
    featured: true,
    href: "#projects",
  },
  {
    id: "white-dragon",
    index: "03",
    title: "White Dragon",
    venue: "International Touring Exhibition",
    city: "Tokyo · Dubai · Hong Kong · London · New York",
    year: "2023",
    description:
      "A large-scale phygital initiative combining digital art, sculpture, mythology, and environmental themes. The project reinterpreted the dragon as a symbol of ecology, wisdom, and cultural unity — uniting audiences across five international cities in a single immersive narrative.",
    imageUrl: "/projects/white-dragon.jpg",
    imageAlt: "Dark contemporary gallery space with atmospheric lighting",
    featured: false,
    href: "#projects",
  },
  {
    id: "stream-of-consciousness",
    index: "04",
    title: "Stream of Consciousness",
    venue: "Times Square",
    city: "New York",
    year: "2023",
    description:
      "Immersive digital works across art, spirituality, and public space.",
    imageUrl: "/projects/stream-of-consciousness-times-square.jpg",
    imageAlt: "Times Square at night with digital billboard displays",
    featured: true,
    href: "#projects",
  },
  {
    id: "women-nfts",
    index: "05",
    title: "Women & NFTs",
    venue: "Decentral Art Pavilion, Venice Biennale",
    city: "Venice",
    year: "2022",
    description:
      "Visibility of women within decentralized art and NFT ecosystems.",
    imageUrl: "/projects/women-nfts-installation.jpg",
    imageAlt: "Venice canal architecture at dusk",
    featured: true,
    href: "#projects",
  },

  /* ─── Archive ───────────────────────────────────────────────────────── */

  {
    id: "tokyo-collaborative",
    index: "06",
    title: "Tokyo Collaborative — ESQAPE & Linda Gallery",
    venue: "Linda Gallery, Omotesandō",
    city: "Tokyo",
    year: "2025",
    description:
      "A multisensory five-senses experience exploring the intersection of contemporary art, fashion, tactility, and objecthood. A seven-day program bringing together artists and brands from Japan and Los Angeles.",
    artists: ["Taketo Kikuchi", "Eimi Suzuki"],
    collaborators: ["ESQAPE", "Linda Gallery"],
    imageUrl: "/projects/tokyo-collaborative-esqape-linda-gallery.png",
    imageAlt: "Minimalist Japanese gallery interior",
    featured: false,
    href: "#projects",
  },
  {
    id: "hybrid-chronicles",
    index: "07",
    title: "Hybrid Chronicles",
    venue: "Vnutri Digital Art Center",
    city: "International",
    year: "2025–2026",
    dateRange: "November 2025 – February 2026",
    description:
      "An international multimedia exhibition exploring the unstable boundaries between body, technology, culture, and identity. Featuring 17 artists and 6 curatorial collectives from China, Turkey, Kazakhstan, the UK, the UAE, and South Korea.",
    artists: ["Hwia Kim", "Andrey Berger"],
    curators: ["Alisa Lisovskaia"],
    collaborators: ["Futuart", "Vnutri Digital Art Center"],
    imageUrl: "/projects/hybrid-chronicles.jpg",
    imageAlt: "Digital art installation with immersive projections",
    featured: false,
    href: "#projects",
  },
  {
    id: "handful-of-dust",
    index: "08",
    title: "Handful of Dust",
    venue: "Studiya Gallery",
    city: "Seoul",
    year: "2025",
    description:
      "Fictional archaeology, residue, and objects that exist beyond time.",
    artists: ["Juri Wi", "Yasy Bachurina", "Chunkook Lee", "Ángela Leyva", "Yutaro Inagaki", "Irina Razumovskaya"],
    imageUrl: "/projects/handful-of-dust-feature.jpg",
    imageAlt: "Minimal gallery with sculptural objects",
    featured: true,
    href: "#projects",
  },
  {
    id: "new-locality",
    index: "09",
    title: "New Locality",
    venue: "Group Exhibition",
    city: "Tbilisi",
    year: "2025",
    description:
      "An exhibition focused on migration, emotional transformation, cultural hybridity, and the changing meaning of human connection in an era of constant movement and digital communication.",
    imageUrl: "/projects/new-locality.jpg",
    imageAlt: "Contemporary art space with abstract installations",
    featured: false,
    href: "#projects",
  },
  {
    id: "expanding-light",
    index: "10",
    title: "Expanding Light",
    venue: "art'otel London Hoxton Gallery",
    city: "London",
    year: "2025",
    description:
      "A site-specific immersive light installation exploring invisible spatial structures, perception, architecture, and the convergence of analogue and digital environments.",
    artists: ["Ellen Barratt"],
    imageUrl: "/projects/expanding-light-2.jpg",
    imageAlt: "Light installation in gallery space",
    featured: false,
    href: "#projects",
  },
  {
    id: "source-code",
    index: "11",
    title: "SOURCE CODE",
    venue: "Offline Exhibition",
    city: "ST. PETERSBURG",
    year: "2024",
    description:
      "Offline exhibition exploring the intersection of Tarot symbolism, generative art, AI culture, and neural-network aesthetics. The project brought together students, teachers, and co-founders of AI Uni in a collaborative exhibition format focused on archetypes, computation, and visual transformation.",
    artists: ["AI Uni Artists"],
    curators: ["Ellen Sheidlin", "Eugene Sheidlin", "Ksenia Kiseleva", "Ariadna Krylova"],
    imageUrl: "/projects/source-code.jpg",
    imageAlt: "SOURCE CODE exhibition installation view",
    featured: false,
    href: "#projects",
  },
  {
    id: "tree-of-life",
    index: "12",
    title: "Tree of Life",
    venue: "Art Dubai",
    city: "Dubai",
    year: "2024",
    description:
      "In collaboration with TON Diamonds Marketplace. The unique digital art ecosystem «Tree of Life» was showcased at Art Dubai 2024. The hand-animated video work was accompanied by a series of small digital frames, each representing an individual artwork. It was an unforgettable experience, with an incredible level of complexity involved in presenting a digital mural created in a special technique and achieving a complete sold out.",
    artists: ["Ellen Sheidlin"],
    collaborators: ["TON Diamonds Marketplace"],
    imageUrl: "/images/44(1).jpg",
    imageAlt: "Tree of Life digital art ecosystem at Art Dubai 2024",
    featured: false,
    href: "/exhibitions/tree-of-life",
  },
  {
    id: "orkhan-mammadov",
    index: "11",
    title: "Orkhan Mammadov at Focus Art Fair",
    venue: "Focus Art Fair",
    city: "London",
    year: "2024",
    description:
      "A presentation of computationally driven contemporary artworks combining historical miniature traditions, coding, digital displays, Islamic mathematical heritage, and algorithmic visual systems.",
    artists: ["Orkhan Mammadov"],
    imageUrl: "/projects/orkhan-mammadov-focus-art-fair.jpg",
    imageAlt: "Algorithmic digital artwork with geometric patterns",
    featured: false,
    href: "#projects",
  },
  {
    id: "tenu-bangkok",
    index: "12",
    title: "TENÚ",
    venue: "Charoen AArt",
    city: "Bangkok",
    year: "2024",
    description:
      "The debut solo exhibition of Yasy Bachurina in Thailand exploring fragility, subtle emotional states, perception, invisibility, and intimate psychological landscapes.",
    artists: ["Yasy Bachurina"],
    collaborators: ["Charoen AArt", "Artsy", "WLGUL"],
    imageUrl: "/projects/tenu-bangkok.jpg",
    imageAlt: "Delicate translucent artwork installation",
    featured: false,
    href: "#projects",
  },
  {
    id: "noise-australia",
    index: "13",
    title: "NOISE",
    venue: "Beinart Gallery",
    city: "Melbourne",
    year: "2024",
    description:
      "Ellen Sheidlin's debut solo exhibition in Australia investigating the relationship between classical painting and neural networks, diffusion models, emotional purification, and feminine identity.",
    artists: ["Ellen Sheidlin"],
    imageUrl: "/projects/noise-australia.jpg",
    imageAlt: "Abstract digital painting with painterly textures",
    featured: false,
    href: "#projects",
  },
  {
    id: "inner-landscapes",
    index: "15",
    title: "Inner Landscapes",
    venue: "Digital",
    city: "International",
    year: "2023",
    description:
      "An NFT-based art project by Sarah Mcdaniel developed in collaboration with TON Diamonds Marketplace, using brain scans, scientific imaging, and emotional states to explore the intersection between neuroscience and personal experience.",
    artists: ["Sarah Mcdaniel"],
    collaborators: ["TON Diamonds Marketplace"],
    imageUrl: "/projects/inner-landscapes.jpg",
    imageAlt: "Abstract neural network visualization",
    featured: false,
    href: "#projects",
  },
  {
    id: "70-desert-stones",
    index: "16",
    title: "Annihilation",
    venue: "Art Dubai",
    city: "Dubai",
    year: "2023",
    description:
      "An NFT continuation of Ellen Sheidlin's 'Annihilation' universe. The project became one of the highest-valued NFT collections on the TON blockchain, combining hand-drawn sketches, symbolic ecosystems, and neural-network-enhanced visual mythology.",
    artists: ["Ellen Sheidlin"],
    collaborators: ["TON Diamonds Marketplace"],
    imageUrl: "/projects/70-desert-stones.jpg",
    imageAlt: "Mythological digital artwork with desert tones",
    featured: false,
    href: "#projects",
  },
  {
    id: "materialization-sensual",
    index: "17",
    title: "Materialization of Sensual Ideas",
    venue: "Art in Space",
    city: "Dubai",
    year: "2022",
    description:
      "A 360-degree immersive digital environment based on Ellen Sheidlin's 'survirtualism' methodology, exploring subconscious imagery, fantastical creatures, sensuality, and dream logic.",
    artists: ["Ellen Sheidlin"],
    imageUrl: "/projects/materialization-sensual-ideas.jpg",
    imageAlt: "360-degree immersive digital environment",
    featured: false,
    href: "#projects",
  },
  {
    id: "cicconi-resin",
    index: "18",
    title: "Cicconi / RES.IN Residency",
    venue: "Residency Exhibition",
    city: "Palermo",
    year: "2021",
    description:
      "A collaborative residency project examining urban memory, body, architecture, and Mediterranean hybridity through contemporary media.",
    artists: ["Ellen Sheidlin", "Edoardo Dionea Cicconi"],
    imageUrl: "/projects/cicconi-resin-residency.jpg",
    imageAlt: "Mediterranean architecture and contemporary art",
    featured: false,
    href: "#projects",
  },
  {
    id: "comprehended-fantasy",
    index: "19",
    title: "Comprehended by Fantasy",
    venue: "Group Exhibition",
    city: "Florence",
    year: "2021",
    description:
      "An immersive exhibition exploring the borders between dreams, subconsciousness, memory, fantasy, and emotional mythology through sculpture, photography, and painting.",
    imageUrl: "/projects/comprehended-by-fantasy.jpg",
    imageAlt: "Dreamlike sculptural installation in historic space",
    featured: false,
    href: "#projects",
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
export const ARCHIVE_PROJECTS  = PROJECTS.filter((p) => !p.featured).sort((a, b) => {
  const yearA = Number(a.year.match(/\d{4}/)?.[0] ?? 0);
  const yearB = Number(b.year.match(/\d{4}/)?.[0] ?? 0);

  return yearB - yearA;
});

/* ─── Team ─────────────────────────────────────────────────────────────────── */

export const TEAM: TeamMember[] = [
  {
    id: "eugene-sheidlin",
    name: "Eugene Sheidlin",
    role: "CEO",
    bio: "Works across curatorial direction, exhibition systems, digital culture, and international collaborations.",
    imageUrl: "/team/eugene-sheidlin.jpg",
    imageAlt: "Eugene Sheidlin",
  },
  {
    id: "maria-raikkonen",
    name: "Maria Raikkonen",
    role: "Art Curator",
    bio: "Leads artist development, research, institutional communication, and media strategy within the platform.",
    imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=700&q=80",
    imageAlt: "Maria Raikkonen",
  },
];

export const FEATURED_ARTISTS: import("@/types").Artist[] = [
  {
    id: "fatma-lootah",
    name: "Fatma Lootah",
    nationality: "UAE",
    medium: "Installation / Painting",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80",
    imageAlt: "Portrait study in soft museum light",
    href: "/artists/fatma-lootah",
  },
  {
    id: "ellen-sheidlin",
    name: "Ellen Sheidlin",
    nationality: "International",
    medium: "Digital / Painting",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=80",
    imageAlt: "Artist portrait with neutral background",
    href: "/artists/ellen-sheidlin",
  },
  {
    id: "orkhan-mammadov",
    name: "Orkhan Mammadov",
    nationality: "Azerbaijan",
    medium: "Algorithmic Art",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=80",
    imageAlt: "Portrait of contemporary digital artist",
    href: "/artists/orkhan-mammadov",
  },
  {
    id: "yasy-bachurina",
    name: "Yasy Bachurina",
    nationality: "International",
    medium: "Sculpture / Installation",
    imageUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&q=80",
    imageAlt: "Contemporary artist portrait",
    href: "/artists/yasy-bachurina",
  },
];

export const FEATURED_EXHIBITIONS: import("@/types").Exhibition[] = [
  {
    id: "natura-naturans-feature",
    title: "Natura Naturans, Natura Naturata",
    subtitle: "A large-scale installation and curatorial presentation rooted in nature, heritage, and contemporary perception.",
    artist: "Fatma Lootah",
    dateRange: "March 2026",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85",
    imageAlt: "Immersive light installation with warm golden tones",
    tag: "Upcoming",
    href: "/exhibitions/natura-naturans",
  },
  {
    id: "body-foreign-place-feature",
    title: "Body Is The Foreign Place",
    subtitle: "An international group exhibition on body, memory, migration, vulnerability, and technological transformation.",
    artist: "Group Exhibition",
    dateRange: "March 2026",
    imageUrl: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=1200&q=85",
    imageAlt: "Abstract figurative painting exploring the body",
    tag: "Upcoming",
    href: "/exhibitions/body-is-the-foreign-place",
  },
  {
    id: "hybrid-chronicles-feature",
    title: "Hybrid Chronicles",
    subtitle: "A multimedia exhibition tracing unstable boundaries between body, technology, culture, and identity.",
    artist: "International Artists",
    dateRange: "November 2025 - February 2026",
    imageUrl: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1200&q=85",
    imageAlt: "Digital art installation with immersive projections",
    tag: "Current",
    href: "/exhibitions/hybrid-chronicles",
  },
];
