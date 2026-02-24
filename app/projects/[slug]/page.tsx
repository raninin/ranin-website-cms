import { getProjectBySlug, getProjects } from "@/lib/queries/projects";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./project-detail-client";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const [project, allProjects] = await Promise.all([
    getProjectBySlug(slug),
    getProjects(),
  ]);

  if (!project) notFound();

  return <ProjectDetailClient project={project} allProjects={allProjects} />;
}
