import { Hero } from "@/components/sections/Hero";
import { CurrentlySection } from "@/components/sections/CurrentlySection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { WorkWithSection } from "@/components/sections/WorkWithSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";
import { PracticeCTA } from "@/components/sections/PracticeCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art Curatorial Nomads - International Curatorial Collective",
  description:
    "International curatorial platform operating across contemporary art, immersive technologies, digital culture, and interdisciplinary exhibition-making.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="post-hero-narrow mobile-tight-sections">
        <CurrentlySection />
        <SelectedProjects />
        <ManifestoSection />
        <WorkWithSection />
        <WorkflowSection />
        <NewsletterCTA />
        <PracticeCTA />
      </div>
    </>
  );
}
