import type { Metadata } from "next";
import { PracticePageContent } from "@/components/sections/PracticePageContent";

export const metadata: Metadata = {
  title: {
    absolute: "Practice – Artist Development | ArtNomad Curators",
  },
  description:
    "Professional development for contemporary artists. CV, website, strategy, and international network. From $300.",
};

export default function PracticePage() {
  return <PracticePageContent />;
}
