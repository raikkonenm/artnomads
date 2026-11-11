import type { Interview, InterviewImage, InterviewQuestion } from "./interview-types";
import { JINGYAN_DING_INTERVIEW } from "./jingyan-ding-interview";
import { ANGELA_LEYVA_INTERVIEW } from "./angela-leyva-interview";

export type { Interview, InterviewImage, InterviewQuestion } from "./interview-types";

const imageRoot = "/interviews/liang-fu";

function artworkCredit(title: string, year: number) {
  return {
    artwork: { title, year },
    caption: `Liang Fu, ${title}, ${year}. Courtesy of the Artist and Nicodim. Photo: Deng Jiayun.`,
  };
}

export const LIANG_FU_IMAGES = {
  studio: {
    src: `${imageRoot}/studio-1.webp`,
    width: 1920,
    height: 2400,
    alt: "Black-and-white studio photograph of Liang Fu holding a brush close to a painting.",
    caption: "Liang Fu in the studio. Photo: Jeremy Beaudet / @jeremybdt_.",
  },
  studioDetail: {
    src: `${imageRoot}/studio-2.webp`,
    width: 1920,
    height: 2400,
    alt: "Liang Fu’s hand moving a brush across a blue painted surface.",
    caption: "Liang Fu at work in the studio. Photo: Jeremy Beaudet / @jeremybdt_.",
  },
  melancholy: {
    src: `${imageRoot}/melancholy.webp`,
    width: 2200,
    height: 1650,
    alt: "A distorted blue face inside a dark marble frame with pointed corners and pale veins.",
    ...artworkCredit("Melancholy surface", 2026),
  },
  frameDetail: {
    src: `${imageRoot}/frame-detail.webp`,
    width: 1656,
    height: 1242,
    alt: "Close detail of the veined marble edge and blue painted image in Melancholy surface.",
    ...artworkCredit("Melancholy surface", 2026),
  },
  engulfed: {
    src: `${imageRoot}/engulfed.webp`,
    width: 2200,
    height: 1650,
    alt: "A pale face emerging from a large field of blue, violet and granular dark marks.",
    ...artworkCredit("Engulfed", 2026),
  },
  selenite: {
    src: `${imageRoot}/selenite.webp`,
    width: 1800,
    height: 2400,
    alt: "An irregular pale selenite fragment carrying a dark painted image, mounted against a white wall.",
    ...artworkCredit("compressed remains", 2026),
  },
  pigment: {
    src: `${imageRoot}/pigment-detail.webp`,
    width: 2200,
    height: 1650,
    alt: "Close detail of blue and dark granular marks on the surface of Engulfed.",
    ...artworkCredit("Engulfed", 2026),
  },
  installation: {
    src: `${imageRoot}/installation.webp`,
    width: 2200,
    height: 1650,
    alt: "Wide gallery view with two small works on crystal placed between larger blue paintings.",
    caption: "Liang Fu: Sublunary, Installation View, Nicodim New York. Courtesy of the Artist and Nicodim. Photo: Shark Senesac / New Document.",
  },
} satisfies Record<string, InterviewImage>;

export const LIANG_FU_INTRO = "A marble frame can make a painter rethink the image it holds. For Liang Fu, that happened while making Melancholy surface. In this email interview with Art Curatorial Nomads, Fu looks back at Sublunary at Nicodim New York, moving between canvas, crystal and the space of the exhibition. He describes what happens when materials resist his intentions—and why those moments can become part of the work.";

export const LIANG_FU_QUESTIONS = [
  {
    id: "the-frame",
    topic: "The frame",
    question: "In Melancholy surface, how did the marble frame change your understanding of the painting?",
    answer: "I tend to trust intuition when deciding where a painting begins and ends. Years of painting and looking at art also help me. In this work, the thickness and weight of the marble made me re-examine the boundary between image and sculpture. I want the frame to be part of the physical extension of the painting, breaking through the idea of painting as simply a two-dimensional plane.",
  },
  {
    id: "canvas-and-crystal",
    topic: "Canvas & crystal",
    question: "How does working on selenite differ from working on canvas?",
    answer: "In this painting, I tried to achieve a sense of transparent colour through layering. On the crystal mineral, I got a different texture—one brought by the material itself. I found that sometimes one also has to learn to accept the surprises or disappointments that materials bring. This is why I like to start from painting and explore different media: to discuss painting and material, or rather the boundaries of painting.",
  },
  {
    id: "traces-of-pigment",
    topic: "Traces of pigment",
    question: "What do you choose to preserve in the traces left by water and pigment?",
    answer: "The traces left as water evaporates from the pigment remind me of sand on the beach being constantly washed over. This resonates with the mineral pigments I use: their matte texture and graininess are exactly what I want to preserve in this painting. The image left after the pigment dries seems to have an inexplicable, subtle relationship with the theme of the painting. It is precisely this materiality that is so hard to control that has given me a new understanding of the material itself.",
  },
  {
    id: "negative-space",
    topic: "Negative space",
    question: "What happens when the subject becomes harder to recognise?",
    answer: "I would choose the same painting to answer this question. Its composition explores a subtle relationship: when the subject is concealed, the whole picture either collapses or turns into a more abstract work. I think this also relates to the influence of negative space, or liubai, in traditional Chinese painting.",
  },
  {
    id: "in-the-gallery",
    topic: "In the gallery",
    question: "What did installing Sublunary reveal that you could not see in the studio?",
    answer: "The exhibition revealed problems I could not see in the studio—or a way of re-examining my works. I have always been interested in how works are presented in space, how different spaces affect our perception, and how I can guide people to look through the arrangement of the works. In this exhibition, I placed the two painted works on crystal among the paintings, making them a part you must see rather than exhibiting them separately. The light in the gallery also gave me new ideas for the works in my next exhibition.",
  },
  {
    id: "what-comes-next",
    topic: "What comes next",
    question: "What are you preparing next?",
    answer: "I will be presenting new works during Shanghai Art Week on 7 November. The exhibition is based on the space itself: Linseed Gallery is located in a house in Shanghai’s former French Concession. The intimacy of this residential space, with its different small rooms, is a great challenge for me. I have prepared works for the different spaces to discuss the influence of material, light and space on our perception.",
  },
] as const;

const liangFuImages: Pick<InterviewQuestion, "images" | "layout">[] = [
  { images: [LIANG_FU_IMAGES.melancholy, LIANG_FU_IMAGES.frameDetail], layout: "framePair" },
  { images: [LIANG_FU_IMAGES.engulfed, LIANG_FU_IMAGES.selenite], layout: "materialPair" },
  { images: [LIANG_FU_IMAGES.pigment], layout: "wide" },
  { images: [LIANG_FU_IMAGES.studioDetail], layout: "studio" },
  { images: [LIANG_FU_IMAGES.installation], layout: "wide" },
  {},
];

export const INTERVIEWS: readonly Interview[] = [
  {
    slug: "liang-fu-painting-material-interview",
    number: "01",
    artist: "Liang Fu",
    title: "When a Painting Becomes an Object",
    excerpt: "The artist on marble frames, the surprises of selenite, and the traces he chooses to keep.",
    date: "October 2026",
    dateTime: "2026-10",
    image: { ...LIANG_FU_IMAGES.studio, src: `${imageRoot}/studio-1-card.webp`, width: 800, height: 1000 },
    heroImage: LIANG_FU_IMAGES.studio,
    ogImage: LIANG_FU_IMAGES.melancholy,
    metaDescription: "Liang Fu speaks to Art Curatorial Nomads about marble frames, selenite, mineral pigments and how exhibition spaces change the way we look at painting.",
    eyebrow: "Painting / Material / Space",
    intro: LIANG_FU_INTRO,
    questions: LIANG_FU_QUESTIONS.map((question, index) => ({ ...question, ...liangFuImages[index] })),
    about: "Liang Fu was born in Sichuan, China, in 1993 and lives and works in Paris. His practice explores painting through mineral pigments, different supports and sculptural frames. Sublunary was presented at Nicodim New York from 25 June to 14 August 2026.",
    links: [
      { href: "https://www.fuliang.co/", label: "Artist website" },
      { href: "https://www.instagram.com/liang_f/", label: "@liang_f" },
      { href: "https://www.nicodimgallery.com/exhibitions/liang-fu-sublunary", label: "Sublunary at Nicodim" },
    ],
    editorNote: "Questions and answers have been edited for length and clarity. The Shanghai presentation is described by the artist; check the venue’s announcement for visitor information.",
  },
  JINGYAN_DING_INTERVIEW,
  ANGELA_LEYVA_INTERVIEW,
];

export function getLatestInterviews(count = 2) {
  return [...INTERVIEWS]
    .sort((first, second) => second.dateTime.localeCompare(first.dateTime) || Number(second.number) - Number(first.number))
    .slice(0, count);
}
