import { PrismaClient } from "@prisma/client";
import { services } from "../lib/data/services";
import { projects } from "../lib/data/projects";
import { defaultHero } from "../lib/data/defaults/hero";
import { defaultTrustBar } from "../lib/data/defaults/trust-bar";
import { defaultAboutPreview } from "../lib/data/defaults/about-preview";
import { defaultVision2030 } from "../lib/data/defaults/vision-2030";
import { defaultSectors } from "../lib/data/defaults/sectors";
import { defaultCTAStrip } from "../lib/data/defaults/cta-strip";
import { defaultClientsProjects } from "../lib/data/defaults/clients-projects";
import { defaultAboutPage } from "../lib/data/defaults/about-page";
import { defaultContactPage } from "../lib/data/defaults/contact-page";
import { defaultServicesPage } from "../lib/data/defaults/services-page";
import { defaultProjectsPage } from "../lib/data/defaults/projects-page";
import { defaultSiteMeta } from "../lib/data/defaults/site-meta";
import { defaultCompanyInfo } from "../lib/data/defaults/company-info";

const prisma = new PrismaClient();

const iconMap: Record<string, string> = {
  Users: "Users",
  Package: "Package",
  Wrench: "Wrench",
  Hammer: "Hammer",
  PaintBucket: "PaintBucket",
  Printer: "Printer",
};

async function main() {
  console.log("Seeding database...");

  // ─── Services ───────────────────────────────────────────
  console.log("Seeding services...");
  for (const [i, service] of services.entries()) {
    await prisma.service.create({
      data: {
        slug: service.slug,
        title: service.title,
        shortTitle: service.shortTitle,
        description: service.description,
        longDescription: service.longDescription,
        iconName: service.iconName ?? iconMap[service.icon?.name ?? ""] ?? "Package",
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

  // ─── Projects ──────────────────────────────────────────
  console.log("Seeding projects...");
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

  // ─── Partners ──────────────────────────────────────────
  console.log("Seeding partners...");
  for (const [i, partner] of defaultClientsProjects.partnersRow1.entries()) {
    await prisma.partner.create({
      data: { name: partner.alt, logoUrl: partner.src, row: 1, sortOrder: i },
    });
  }
  for (const [i, partner] of defaultClientsProjects.partnersRow2.entries()) {
    await prisma.partner.create({
      data: { name: partner.alt, logoUrl: partner.src, row: 2, sortOrder: i },
    });
  }

  // ─── Certifications ───────────────────────────────────
  console.log("Seeding certifications...");
  const certs = [
    { title: "ISO 9001:2015", subtitle: "Quality Management", logoUrl: "/certificates/iso-9001-2015-quality-management.svg" },
    { title: "ISO 14001:2015", subtitle: "Environmental Management", logoUrl: "/certificates/iso-14001-2015-environmental-management.svg" },
    { title: "ISO 45001:2018", subtitle: "Occupational Health & Safety", logoUrl: "/certificates/iso-45001-2018-occupational-health-safety.svg" },
    { title: "Saudi Aramco", subtitle: "Approved Vendor", logoUrl: "/certificates/saudi-aramco-approved-vendor.svg" },
    { title: "SABIC", subtitle: "Approved Contractor", logoUrl: "/certificates/sabic-approved-contractor.svg" },
    { title: "Royal Commission", subtitle: "Jubail Licensed", logoUrl: "/certificates/royal-commission-jubail-licensed.svg" },
  ];
  for (const [i, cert] of certs.entries()) {
    await prisma.certification.create({
      data: { ...cert, sortOrder: i },
    });
  }

  // ─── Company Info ──────────────────────────────────────
  console.log("Seeding company info...");
  await prisma.companyInfo.create({
    data: {
      id: 1,
      address: defaultCompanyInfo.address,
      phone: defaultCompanyInfo.phone,
      email: defaultCompanyInfo.email,
      hours: defaultCompanyInfo.hours,
      mapEmbedUrl: defaultCompanyInfo.mapEmbedUrl,
      tagline: defaultCompanyInfo.tagline,
      logoUrl: defaultCompanyInfo.logoUrl,
    },
  });

  // ─── Site Content (JSON store) ─────────────────────────
  console.log("Seeding site content...");
  const siteContents: [string, unknown][] = [
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

  for (const [id, data] of siteContents) {
    await prisma.siteContent.create({
      data: { id, data: data as object },
    });
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
