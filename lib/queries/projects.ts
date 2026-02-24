import { prisma } from "@/lib/db";
import { projects as defaultProjects, type Project } from "@/lib/data/projects";

export async function getProjectsForNav(): Promise<
  { slug: string; title: string; sector: string; image: string }[]
> {
  try {
    const dbProjects = await prisma.project.findMany({
      orderBy: { sortOrder: "asc" },
      select: { slug: true, title: true, sector: true, image: true },
    });
    if (dbProjects.length === 0) {
      return defaultProjects.map((p) => ({
        slug: p.slug,
        title: p.title,
        sector: p.sector,
        image: p.image,
      }));
    }
    return dbProjects;
  } catch {
    return defaultProjects.map((p) => ({
      slug: p.slug,
      title: p.title,
      sector: p.sector,
      image: p.image,
    }));
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const dbProjects = await prisma.project.findMany({
      orderBy: { sortOrder: "asc" },
      include: {
        highlights: { orderBy: { sortOrder: "asc" } },
        scope: {
          orderBy: { sortOrder: "asc" },
          include: { details: { orderBy: { sortOrder: "asc" } } },
        },
        services: true,
        blogContent: { orderBy: { sortOrder: "asc" } },
      },
    });

    if (dbProjects.length === 0) return defaultProjects;

    return dbProjects.map((p) => ({
      id: p.id,
      slug: p.slug,
      title: p.title,
      sector: p.sector,
      location: p.location,
      description: p.description,
      longDescription: p.longDescription,
      highlights: p.highlights.map((h) => h.text),
      scope: p.scope.map((s) => ({
        title: s.title,
        details: s.details.map((d) => d.text),
      })),
      blogContent: p.blogContent.map((b) => ({
        heading: b.heading,
        body: b.body,
      })),
      image: p.image,
      heroImage: p.heroImage,
      services: p.services.map((s) => s.name),
      client: p.client,
      year: p.year,
      duration: p.duration,
      status: p.status,
    }));
  } catch {
    return defaultProjects;
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  try {
    const dbProject = await prisma.project.findUnique({
      where: { slug },
      include: {
        highlights: { orderBy: { sortOrder: "asc" } },
        scope: {
          orderBy: { sortOrder: "asc" },
          include: { details: { orderBy: { sortOrder: "asc" } } },
        },
        services: true,
        blogContent: { orderBy: { sortOrder: "asc" } },
      },
    });

    if (!dbProject) {
      return defaultProjects.find((p) => p.slug === slug);
    }

    return {
      id: dbProject.id,
      slug: dbProject.slug,
      title: dbProject.title,
      sector: dbProject.sector,
      location: dbProject.location,
      description: dbProject.description,
      longDescription: dbProject.longDescription,
      highlights: dbProject.highlights.map((h) => h.text),
      scope: dbProject.scope.map((s) => ({
        title: s.title,
        details: s.details.map((d) => d.text),
      })),
      blogContent: dbProject.blogContent.map((b) => ({
        heading: b.heading,
        body: b.body,
      })),
      image: dbProject.image,
      heroImage: dbProject.heroImage,
      services: dbProject.services.map((s) => s.name),
      client: dbProject.client,
      year: dbProject.year,
      duration: dbProject.duration,
      status: dbProject.status,
    };
  } catch {
    return defaultProjects.find((p) => p.slug === slug);
  }
}
