import type { Metadata } from "next";
import { ExhibitionsPageContent } from "@/components/sections/ExhibitionsPageContent";

export const metadata: Metadata = {
  title: "Exhibitions | ArtNomad Curators",
  description: "Explore current and previous exhibitions by Art Curatorial Nomads across Dubai, Hong Kong, Seoul, Tokyo, London, New York, Venice, and more.",
};

export default async function ExhibitionsPage({
  searchParams,
}: {
  searchParams?: Promise<{ city?: string }>;
}) {
  const params = await searchParams;

  return <ExhibitionsPageContent selectedCity={params?.city?.toLowerCase() ?? null} />;
}
