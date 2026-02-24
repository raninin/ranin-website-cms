import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyCmsAuth, unauthorizedResponse } from "@/lib/cms-auth";
import { services } from "@/lib/data/services";
import { projects } from "@/lib/data/projects";
import { defaultClientsProjects } from "@/lib/data/defaults/clients-projects";
import { defaultCompanyInfo } from "@/lib/data/defaults/company-info";
import { defaultHero } from "@/lib/data/defaults/hero";
import { defaultTrustBar } from "@/lib/data/defaults/trust-bar";
import { defaultAboutPreview } from "@/lib/data/defaults/about-preview";
import { defaultVision2030 } from "@/lib/data/defaults/vision-2030";
import { defaultSectors } from "@/lib/data/defaults/sectors";
import { defaultCTAStrip } from "@/lib/data/defaults/cta-strip";
import { defaultAboutPage } from "@/lib/data/defaults/about-page";
import { defaultContactPage } from "@/lib/data/defaults/contact-page";
import { defaultServicesPage } from "@/lib/data/defaults/services-page";
import { defaultProjectsPage } from "@/lib/data/defaults/projects-page";
import { defaultSiteMeta } from "@/lib/data/defaults/site-meta";

export async function POST(request: Request) {
  if (!verifyCmsAuth(request)) return unauthorizedResponse();

  try {
    // Clear existing data
    await prisma.serviceFeatureGroupDetail.deleteMany();
    await prisma.serviceFeatureGroup.deleteMany();
    await prisma.serviceFeature.deleteMany();
    await prisma.serviceImage.deleteMany();
    await prisma.service.deleteMany();
    await prisma.projectBlogContent.deleteMany();
    await prisma.projectScopeDetail.deleteMany();
    await prisma.projectScope.deleteMany();
    await prisma.projectHighlight.deleteMany();
    await prisma.projectService.deleteMany();
    await prisma.project.deleteMany();
    await prisma.partner.deleteMany();
    await prisma.certification.deleteMany();
    await prisma.companyInfo.deleteMany();
    await prisma.siteContent.deleteMany();

    // Seed services
    for (const [i, service] of services.entries()) {
      await prisma.service.create({
        data: {
          slug: service.slug,
          title: service.title,
          shortTitle: service.shortTitle,
          description: service.description,
          longDescription: service.longDescription,
          iconName: service.iconName ?? "Package",
          heroImage: service.heroImage,
          sortOrder: i,
          features: {
            create: service.features.map((text, j) => ({ text, sortOrder: j })),
          },
          featureGroups: {
            create: service.featureGroups.map((group, j) => ({
              title: group.title,
              sortOrder: j,
              details: {
                create: group.details.map((text, k) => ({ text, sortOrder: k })),
              },
            })),
          },
          images: {
            create: service.images.map((url, j) => ({ url, sortOrder: j })),
          },
        },
      });
    }

    // Seed projects
    for (const [i, project] of projects.entries()) {
      await prisma.project.create({
        data: {
          slug: project.slug,
          title: project.title,
          sector: project.sector,
          location: project.location,
          description: project.description,
          longDescription: project.longDescription,
          image: project.image,
          heroImage: project.heroImage,
          client: project.client,
          year: project.year,
          duration: project.duration,
          status: project.status,
          sortOrder: i,
          highlights: {
            create: project.highlights.map((text, j) => ({ text, sortOrder: j })),
          },
          scope: {
            create: project.scope.map((s, j) => ({
              title: s.title,
              sortOrder: j,
              details: {
                create: s.details.map((text, k) => ({ text, sortOrder: k })),
              },
            })),
          },
          services: {
            create: project.services.map((name) => ({ name })),
          },
          blogContent: {
            create: (project.blogContent ?? []).map((b, j) => ({
              heading: b.heading,
              body: b.body,
              sortOrder: j,
            })),
          },
        },
      });
    }

    // Seed partners
    for (const [i, p] of defaultClientsProjects.partnersRow1.entries()) {
      await prisma.partner.create({
        data: { name: p.alt, logoUrl: p.src, row: 1, sortOrder: i },
      });
    }
    for (const [i, p] of defaultClientsProjects.partnersRow2.entries()) {
      await prisma.partner.create({
        data: { name: p.alt, logoUrl: p.src, row: 2, sortOrder: i },
      });
    }

    // Seed certifications
    const certs = [
      { title: "ISO 9001:2015", subtitle: "Quality Management", logoUrl: "/certificates/iso-9001-2015-quality-management.svg" },
      { title: "ISO 14001:2015", subtitle: "Environmental Management", logoUrl: "/certificates/iso-14001-2015-environmental-management.svg" },
      { title: "ISO 45001:2018", subtitle: "Occupational Health & Safety", logoUrl: "/certificates/iso-45001-2018-occupational-health-safety.svg" },
      { title: "Saudi Aramco", subtitle: "Approved Vendor", logoUrl: "/certificates/saudi-aramco-approved-vendor.svg" },
      { title: "SABIC", subtitle: "Approved Contractor", logoUrl: "/certificates/sabic-approved-contractor.svg" },
      { title: "Royal Commission", subtitle: "Jubail Licensed", logoUrl: "/certificates/royal-commission-jubail-licensed.svg" },
    ];
    for (const [i, cert] of certs.entries()) {
      await prisma.certification.create({ data: { ...cert, sortOrder: i } });
    }

    // Seed company info
    await prisma.companyInfo.create({
      data: {
        id: 1,
        ...defaultCompanyInfo,
      },
    });

    // Seed site content
    const contents: [string, unknown][] = [
      ["hero", defaultHero],
      ["trust-bar", defaultTrustBar],
      ["about-preview", defaultAboutPreview],
      ["vision-2030", defaultVision2030],
      ["sectors", defaultSectors],
      ["cta-strip", defaultCTAStrip],
      ["clients-projects", defaultClientsProjects],
      ["about-page", defaultAboutPage],
      ["contact-page", defaultContactPage],
      ["services-page", defaultServicesPage],
      ["projects-page", defaultProjectsPage],
      ["site-meta", defaultSiteMeta],
    ];
    for (const [id, data] of contents) {
      await prisma.siteContent.create({ data: { id, data: data as object } });
    }

    return NextResponse.json({ success: true, message: "Database seeded successfully" });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json(
      { error: "Failed to seed database" },
      { status: 500 }
    );
  }
}
