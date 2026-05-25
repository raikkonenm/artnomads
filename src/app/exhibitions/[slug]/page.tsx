import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExhibitionDetailTemplate } from "@/components/sections/ExhibitionDetailTemplate";
import { PROJECTS } from "@/lib/data";
import { getExhibitionMedia } from "@/lib/exhibition-media";
import { EXHIBITION_PAGE_CONFIGS, getExhibitionPageConfig } from "@/lib/exhibition-pages";

export function generateStaticParams() {
  return EXHIBITION_PAGE_CONFIGS.map((config) => ({ slug: config.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const config = getExhibitionPageConfig(slug);
  const project = config ? PROJECTS.find((entry) => entry.id === config.projectId) : undefined;

  if (!project) return {};

  return {
    title: {
      absolute: `${project.title} | Art Curatorial Nomads`,
    },
    description: project.description,
  };
}

export default async function DynamicExhibitionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const config = getExhibitionPageConfig(slug);
  const project = config ? PROJECTS.find((entry) => entry.id === config.projectId) : undefined;

  if (!config || !project) notFound();

  return <ExhibitionDetailTemplate project={project} media={getExhibitionMedia(config, project)} />;
}
