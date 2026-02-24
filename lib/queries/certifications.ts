import { prisma } from "@/lib/db";

export interface CertificationData {
  id: number;
  title: string;
  subtitle: string;
  logoUrl: string;
  sortOrder: number;
}

const defaultCertifications: CertificationData[] = [
  { id: 1, title: "ISO 9001:2015", subtitle: "Quality Management", logoUrl: "/certificates/iso-9001-2015-quality-management.svg", sortOrder: 0 },
  { id: 2, title: "ISO 14001:2015", subtitle: "Environmental Management", logoUrl: "/certificates/iso-14001-2015-environmental-management.svg", sortOrder: 1 },
  { id: 3, title: "ISO 45001:2018", subtitle: "Occupational Health & Safety", logoUrl: "/certificates/iso-45001-2018-occupational-health-safety.svg", sortOrder: 2 },
  { id: 4, title: "Saudi Aramco", subtitle: "Approved Vendor", logoUrl: "/certificates/saudi-aramco-approved-vendor.svg", sortOrder: 3 },
  { id: 5, title: "SABIC", subtitle: "Approved Contractor", logoUrl: "/certificates/sabic-approved-contractor.svg", sortOrder: 4 },
  { id: 6, title: "Royal Commission", subtitle: "Jubail Licensed", logoUrl: "/certificates/royal-commission-jubail-licensed.svg", sortOrder: 5 },
];

export async function getCertifications(): Promise<CertificationData[]> {
  try {
    const dbCerts = await prisma.certification.findMany({
      orderBy: { sortOrder: "asc" },
    });

    if (dbCerts.length === 0) return defaultCertifications;
    return dbCerts;
  } catch {
    return defaultCertifications;
  }
}

export { defaultCertifications };
