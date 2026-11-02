export const EXHIBITION_SERVICE = "Exhibition Development — By enquiry";
export const SERVICES = [
  {
    name: "Artist Practice Review", price: "$170", value: "Artist Practice Review — $170",
    description: "An independent curatorial assessment of your artistic practice and professional presentation.",
    scopeLabel: "Includes",
    scope: ["Critical assessment of your work and artistic language.", "Portfolio, statement and CV review.", "Website and social media presentation analysis.", "Specific curatorial recommendations."],
    format: "Written, illustrated PDF", pages: "Approx. 15 pages", timelineLabel: "Timeline", timeline: "7–10 days", cta: "Request a Review",
    image: "/exhibitions/Yasy/2.webp", alt: "A painting from Yasy Bachurina’s Preserved, Unfixed exhibition", imageHref: "/exhibitions/preserved-unfixed", imageCredit: "Preserved, Unfixed · Yasy Bachurina · Seoul, 2026", position: "50% 50%",
  },
  {
    name: "Artist Development Strategy", price: "$350", value: "Artist Development Strategy — $350",
    description: "An in-depth assessment of your practice and a personalised strategy for its next stage of development.",
    scopeLabel: "Includes",
    scope: ["Complete Artist Practice Review, included in the $350 fee.", "Artistic positioning and professional priorities.", "Tailored 90-day development roadmap.", "Guidance on portfolio development and professional outreach."],
    format: "Written strategy", pages: "Approx. 20–25 pages", timelineLabel: "Timeline", timeline: "Within 14 days", cta: "Request a Strategy",
    image: "/exhibitions/Handful of Dust/INSTALLATION VIEWS/119.webp", alt: "A white sculptural work displayed in front of a painting in Handful of Dust", imageHref: "/exhibitions/handful-of-dust", imageCredit: "Handful of Dust · Studiya Gallery · Seoul, 2025", position: "50% 50%",
  },
  {
    name: "Exhibition Development", price: "By enquiry", value: EXHIBITION_SERVICE,
    description: "Curatorial development for artists, galleries and cultural organisations.",
    scopeLabel: "Possible scope",
    scope: ["Exhibition concept and narrative.", "Selection and spatial presentation of works.", "Curatorial texts and exhibition proposals.", "Project development and production planning."],
    format: "Individual project collaboration", pages: "", timelineLabel: "Timeline and fee", timeline: "Agreed individually", cta: "Discuss an Exhibition",
    image: "/exhibitions/TENÚ/INSTALLATION VIEWS/41.webp", alt: "Visitors gathered around an artwork during TENÚ at Charoen AArt", imageHref: "/exhibitions/tenu", imageCredit: "TENÚ · Charoen AArt · Bangkok, 2024", position: "50% 50%",
  },
] as const;

export const HERO_PROJECT = { title: "Body Is The Foreign Place", context: "Art Central · Hong Kong · 2026", image: "/projects/body-foreign-place-booth-wide.webp", alt: "Body Is The Foreign Place exhibition booth at Art Central Hong Kong", href: "/exhibitions/body-is-the-foreign-place" } as const;

export const PROJECTS = [
  { title: "Natura Naturans, Natura Naturata", context: "Art Dubai · Dubai · 2026", role: "Curatorial Collaboration", description: "Fatma Lootah and Chunkook Lee in dialogue with RARARES.", image: "/projects/ad5.webp", alt: "A suspended garden-like installation at Natura Naturans, Natura Naturata, Art Dubai", href: "/exhibitions/art-dubai-2026", position: "50% 50%", fit: "cover" },
  { title: "Body Is The Foreign Place", context: "Art Central · Hong Kong · 2026", role: "Curatorial Collaboration", description: "With RARARES, exploring the body as memory and frontier.", image: "/exhibitions/Art_Central/4.webp", alt: "Paintings arranged across two walls at Body Is The Foreign Place, Art Central Hong Kong", href: "/exhibitions/body-is-the-foreign-place", position: "50% 50%", fit: "cover" },
  { title: "Stream of Consciousness", context: "Times Square · New York · 2023", role: "Digital Art Presentation", description: "With TON Diamonds Marketplace, including a Times Square screen.", image: "/projects/stream-of-consciousness-times-square.webp", alt: "Digital artwork on a Times Square billboard as part of Stream of Consciousness", href: "/exhibitions/stream-of-consciousness", position: "50% 65%", fit: "cover" },
  { title: "NOISE", context: "Beinart Gallery · Melbourne · 2024", role: "Solo Exhibition", description: "Ellen Sheidlin’s Australian debut in painting and neural imagery.", image: "/exhibitions/NOISE/main/noise-2.webp", alt: "An artwork detail from NOISE, Ellen Sheidlin’s exhibition at Beinart Gallery", href: "/exhibitions/noise", position: "50% 50%", fit: "cover" },
  { title: "Tokyo Collaborative", context: "Linda Gallery · Tokyo · 2025", role: "Curatorial Collaboration", description: "Art and objecthood with ESQAPE and Linda Gallery.", image: "/projects/tokyo-collaborative-esqape-linda-gallery.webp", alt: "A sculptural object from Tokyo Collaborative — ESQAPE and Linda Gallery, shown in full", href: "/exhibitions/tokyo-collaborative", position: "50% 50%", fit: "contain" },
  { title: "Preserved, Unfixed", context: "Studiya Gallery · Seoul · 2026", role: "Solo Exhibition", description: "Yasy Bachurina’s paintings and objects in dialogue at Studiya Gallery.", image: "/exhibitions/Yasy/1.webp", alt: "Two paintings and green sculptural objects in Preserved, Unfixed, Seoul", href: "/exhibitions/preserved-unfixed", position: "50% 50%", fit: "cover" },
  { title: "TENÚ", context: "Charoen AArt · Bangkok · 2024", role: "Solo Exhibition", description: "Yasy Bachurina’s first Thai solo exhibition, with Charoen AArt.", image: "/exhibitions/TENÚ/INSTALLATION VIEWS/38.webp", alt: "A sculptural installation in the window of TENÚ at Charoen AArt, Bangkok", href: "/exhibitions/tenu", position: "50% 50%", fit: "contain" },
  { title: "Handful of Dust", context: "Studiya Gallery · Seoul · 2025", role: "Group Exhibition", description: "A group exhibition on memory and material traces at Studiya.", image: "/exhibitions/Handful of Dust/INSTALLATION VIEWS/124.webp", alt: "A dark sculptural object and paintings arranged in the Handful of Dust exhibition space", href: "/exhibitions/handful-of-dust", position: "50% 50%", fit: "cover" },
] as const;
export const PEOPLE = [
  { name: "Eugene Sheidlin", role: "Art Curator, CEO of Art Curatorial Nomads", image: "/practice-review/eugene-sheidlin.webp" },
  { name: "Maria Raikkonen", role: "Art Curator, Founder of FindArt.Platform", image: "/practice-review/maria-raikkonen.webp" },
];
export const FAQ = [
  { question: "What materials do I need?", answer: "A portfolio PDF or link with 10–15 selected works and links to your website and Instagram, where available. Include your statement, CV and questions if available; the strategy also requires a short strategic brief." },
  { question: "Can I ask questions afterwards?", answer: "Yes. Both written services include one round of follow-up questions by email within 14 days after you receive your document." },
];
