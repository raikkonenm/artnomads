export type InterviewImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  artwork?: { title: string; year: number };
};

export type InterviewQuestion = {
  id: string;
  topic: string;
  question: string;
  answer: string | readonly string[];
  images?: readonly InterviewImage[];
  layout?: "wide" | "framePair" | "materialPair" | "studio" | "paintingPair";
  imageNote?: string;
  note?: { text: string; link?: { href: string; label: string } };
};

export type Interview = {
  slug: string;
  number: string;
  artist: string;
  title: string;
  excerpt: string;
  date: string;
  dateTime: string;
  image: InterviewImage;
  heroImage: InterviewImage;
  ogImage: InterviewImage;
  metaDescription: string;
  eyebrow: string;
  intro: string;
  questions: readonly InterviewQuestion[];
  closingView?: { title: string; image: InterviewImage };
  about: string;
  links: readonly { href: string; label: string }[];
  editorNote: string;
};
