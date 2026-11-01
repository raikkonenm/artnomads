import type { Metadata } from "next";
import { PracticePageContent } from "@/components/sections/PracticePageContent";

export const metadata: Metadata = {
  title: { absolute: "Artist Reviews & Exhibition Development | Art Curatorial Nomads" },
  description: "Written artist practice reviews, personalised development strategies and exhibition development with Eugene Sheidlin and Maria Raikkonen of Art Curatorial Nomads.",
};

export default function PracticePage() {
  return <PracticePageContent />;
}
