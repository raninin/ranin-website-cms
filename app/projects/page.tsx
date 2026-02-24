import { getProjects } from "@/lib/queries/projects";
import { getProjectsPageContent } from "@/lib/queries/site-content";
import ProjectsPageClient from "./projects-page-client";

export default async function ProjectsPage() {
  const [projects, pageContent] = await Promise.all([
    getProjects(),
    getProjectsPageContent(),
  ]);

  return <ProjectsPageClient projects={projects} pageContent={pageContent} />;
}
