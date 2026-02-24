import { prisma } from "@/lib/db";
import { services as defaultServices, type Service } from "@/lib/data/services";

export async function getServices(): Promise<Service[]> {
  try {
    const dbServices = await prisma.service.findMany({
      orderBy: { sortOrder: "asc" },
      include: {
        features: { orderBy: { sortOrder: "asc" } },
        featureGroups: {
          orderBy: { sortOrder: "asc" },
          include: { details: { orderBy: { sortOrder: "asc" } } },
        },
        images: { orderBy: { sortOrder: "asc" } },
      },
    });

    if (dbServices.length === 0) return defaultServices;

    return dbServices.map((s) => ({
      id: s.id,
      slug: s.slug,
      title: s.title,
      shortTitle: s.shortTitle,
      description: s.description,
      longDescription: s.longDescription,
      iconName: s.iconName,
      features: s.features.map((f) => f.text),
      featureGroups: s.featureGroups.map((g) => ({
        title: g.title,
        details: g.details.map((d) => d.text),
      })),
      images: s.images.map((img) => img.url),
      heroImage: s.heroImage,
    })) as unknown as Service[];
  } catch {
    return defaultServices;
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  try {
    const dbService = await prisma.service.findUnique({
      where: { slug },
      include: {
        features: { orderBy: { sortOrder: "asc" } },
        featureGroups: {
          orderBy: { sortOrder: "asc" },
          include: { details: { orderBy: { sortOrder: "asc" } } },
        },
        images: { orderBy: { sortOrder: "asc" } },
      },
    });

    if (!dbService) {
      return defaultServices.find((s) => s.slug === slug);
    }

    return {
      id: dbService.id,
      slug: dbService.slug,
      title: dbService.title,
      shortTitle: dbService.shortTitle,
      description: dbService.description,
      longDescription: dbService.longDescription,
      iconName: dbService.iconName,
      features: dbService.features.map((f) => f.text),
      featureGroups: dbService.featureGroups.map((g) => ({
        title: g.title,
        details: g.details.map((d) => d.text),
      })),
      images: dbService.images.map((img) => img.url),
      heroImage: dbService.heroImage,
    } as unknown as Service;
  } catch {
    return defaultServices.find((s) => s.slug === slug);
  }
}

export async function getServicesForNav(): Promise<
  { slug: string; shortTitle: string; heroImage: string; iconName: string }[]
> {
  try {
    const dbServices = await prisma.service.findMany({
      orderBy: { sortOrder: "asc" },
      select: { slug: true, shortTitle: true, heroImage: true, iconName: true },
    });
    if (dbServices.length === 0) {
      return defaultServices.map((s) => ({
        slug: s.slug,
        shortTitle: s.shortTitle,
        heroImage: s.heroImage,
        iconName: s.iconName ?? "Package",
      }));
    }
    return dbServices;
  } catch {
    return defaultServices.map((s) => ({
      slug: s.slug,
      shortTitle: s.shortTitle,
      heroImage: s.heroImage,
      iconName: s.iconName ?? "Package",
    }));
  }
}
