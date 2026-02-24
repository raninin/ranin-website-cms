import { getContactPageContent } from "@/lib/queries/site-content";
import { getCompanyInfo } from "@/lib/queries/company-info";
import ContactPageClient from "./contact-page-client";

export default async function ContactPage() {
  const [contactData, companyInfo] = await Promise.all([
    getContactPageContent(),
    getCompanyInfo(),
  ]);

  return <ContactPageClient data={contactData} companyInfo={companyInfo} />;
}
