import { prisma } from "@/lib/db";

import { defaultHero, type HeroData } from "@/lib/data/defaults/hero";
import { defaultTrustBar, type TrustBarData } from "@/lib/data/defaults/trust-bar";
import { defaultAboutPreview, type AboutPreviewData } from "@/lib/data/defaults/about-preview";
import { defaultVision2030, type Vision2030Data } from "@/lib/data/defaults/vision-2030";
import { defaultSectors, type SectorsData } from "@/lib/data/defaults/sectors";
import { defaultCTAStrip, type CTAStripData } from "@/lib/data/defaults/cta-strip";
import { defaultClientsProjects, type ClientsProjectsData } from "@/lib/data/defaults/clients-projects";
import { defaultAboutPage, type AboutPageData } from "@/lib/data/defaults/about-page";
import { defaultContactPage, type ContactPageData } from "@/lib/data/defaults/contact-page";
import { defaultServicesPage, type ServicesPageData } from "@/lib/data/defaults/services-page";
import { defaultProjectsPage, type ProjectsPageData } from "@/lib/data/defaults/projects-page";
import { defaultSiteMeta, type SiteMetaData } from "@/lib/data/defaults/site-meta";

const defaultsMap: Record<string, unknown> = {
  hero: defaultHero,
  "trust-bar": defaultTrustBar,
  "about-preview": defaultAboutPreview,
  "vision-2030": defaultVision2030,
  sectors: defaultSectors,
  "cta-strip": defaultCTAStrip,
  "clients-projects": defaultClientsProjects,
  "about-page": defaultAboutPage,
  "contact-page": defaultContactPage,
  "services-page": defaultServicesPage,
  "projects-page": defaultProjectsPage,
  "site-meta": defaultSiteMeta,
};

export async function getSiteContent<T>(id: string): Promise<T> {
  try {
    const record = await prisma.siteContent.findUnique({ where: { id } });
    if (record) return record.data as T;
    return defaultsMap[id] as T;
  } catch {
    return defaultsMap[id] as T;
  }
}

// Convenience typed getters
export const getHero = () => getSiteContent<HeroData>("hero");
export const getTrustBar = () => getSiteContent<TrustBarData>("trust-bar");
export const getAboutPreview = () => getSiteContent<AboutPreviewData>("about-preview");
export const getVision2030 = () => getSiteContent<Vision2030Data>("vision-2030");
export const getSectors = () => getSiteContent<SectorsData>("sectors");
export const getCTAStrip = () => getSiteContent<CTAStripData>("cta-strip");
export const getClientsProjects = () => getSiteContent<ClientsProjectsData>("clients-projects");
export const getAboutPageContent = () => getSiteContent<AboutPageData>("about-page");
export const getContactPageContent = () => getSiteContent<ContactPageData>("contact-page");
export const getServicesPageContent = () => getSiteContent<ServicesPageData>("services-page");
export const getProjectsPageContent = () => getSiteContent<ProjectsPageData>("projects-page");
export const getSiteMeta = () => getSiteContent<SiteMetaData>("site-meta");

// Re-export types for convenience
export type {
  HeroData,
  TrustBarData,
  AboutPreviewData,
  Vision2030Data,
  SectorsData,
  CTAStripData,
  ClientsProjectsData,
  AboutPageData,
  ContactPageData,
  ServicesPageData,
  ProjectsPageData,
  SiteMetaData,
};
