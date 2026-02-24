import { getServices } from "@/lib/queries/services";
import { getServicesPageContent } from "@/lib/queries/site-content";
import ServicesPageClient from "./services-page-client";

export default async function ServicesPage() {
  const [services, pageContent] = await Promise.all([
    getServices(),
    getServicesPageContent(),
  ]);

  // Strip non-serializable `icon` property before passing to client
  const serializedServices = services.map(({ icon, ...rest }) => rest);

  return <ServicesPageClient services={serializedServices} pageContent={pageContent} />;
}
