import { getServiceBySlug, getServices } from "@/lib/queries/services";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./service-detail-client";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const [service, allServices] = await Promise.all([
    getServiceBySlug(slug),
    getServices(),
  ]);

  if (!service) notFound();

  // Strip non-serializable `icon` property
  const { icon, ...serializedService } = service;
  const serializedAll = allServices.map(({ icon, ...rest }) => rest);

  return <ServiceDetailClient service={serializedService} allServices={serializedAll} />;
}
