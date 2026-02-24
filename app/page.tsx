import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesShowcase } from "@/components/sections/services-showcase";
import { AboutPreview } from "@/components/sections/about-preview";
import { Sectors } from "@/components/sections/sectors";
import { Vision2030 } from "@/components/sections/vision-2030";
import { Certifications } from "@/components/sections/certifications";
import { ClientsProjects } from "@/components/sections/clients-projects";
import { CTAStrip } from "@/components/sections/cta-strip";
import { GoogleMap } from "@/components/sections/google-map";
import {
  getHero,
  getTrustBar,
  getAboutPreview,
  getSectors,
  getVision2030,
  getCTAStrip,
  getClientsProjects,
} from "@/lib/queries/site-content";
import { getServices } from "@/lib/queries/services";
import { getCertifications } from "@/lib/queries/certifications";
import { getCompanyInfo } from "@/lib/queries/company-info";

export default async function Page() {
  const [
    heroData,
    trustBarData,
    aboutPreviewData,
    sectorsData,
    vision2030Data,
    ctaStripData,
    clientsProjectsData,
    services,
    certifications,
    companyInfo,
  ] = await Promise.all([
    getHero(),
    getTrustBar(),
    getAboutPreview(),
    getSectors(),
    getVision2030(),
    getCTAStrip(),
    getClientsProjects(),
    getServices(),
    getCertifications(),
    getCompanyInfo(),
  ]);

  return (
    <main>
      <Hero data={heroData} />
      <TrustBar data={trustBarData} />
      <ServicesShowcase services={services.map(s => ({ id: s.id, slug: s.slug, title: s.title, description: s.description, images: s.images }))} />
      <AboutPreview data={aboutPreviewData} />
      <Sectors data={sectorsData} />
      <Vision2030 data={vision2030Data} />
      <Certifications certifications={certifications} />
      <ClientsProjects data={clientsProjectsData} />
      <CTAStrip data={ctaStripData} />
      <GoogleMap companyInfo={companyInfo} />
    </main>
  );
}
