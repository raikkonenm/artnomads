import type { Metadata } from "next";
import { Suspense } from "react";
import { ExhibitionsPageContent } from "@/components/sections/ExhibitionsPageContent";

export const metadata: Metadata = {
  title: "Exhibitions | ArtNomad Curators",
  description: "Explore current and previous exhibitions by Art Curatorial Nomads across Dubai, Hong Kong, Seoul, Tokyo, London, New York, Venice, and more.",
};

export default function ExhibitionsPage() {
  return (
    <Suspense fallback={null}>
      <ExhibitionsPageContent />
    </Suspense>
  );
}
