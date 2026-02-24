import { getAboutPageContent } from "@/lib/queries/site-content";
import { getCertifications } from "@/lib/queries/certifications";
import { getCTAStrip } from "@/lib/queries/site-content";
import AboutPageClient from "./about-page-client";

export default async function AboutPage() {
  const [aboutData, certifications, ctaData] = await Promise.all([
    getAboutPageContent(),
    getCertifications(),
    getCTAStrip(),
  ]);

  return <AboutPageClient data={aboutData} certifications={certifications} ctaData={ctaData} />;
}
