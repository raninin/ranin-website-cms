import { prisma } from "@/lib/db";
import { defaultCompanyInfo, type CompanyInfoData } from "@/lib/data/defaults/company-info";

export async function getCompanyInfo(): Promise<CompanyInfoData> {
  try {
    const info = await prisma.companyInfo.findUnique({ where: { id: 1 } });
    if (!info) return defaultCompanyInfo;
    return {
      address: info.address,
      phone: info.phone,
      email: info.email,
      hours: info.hours,
      mapEmbedUrl: info.mapEmbedUrl,
      tagline: info.tagline,
      logoUrl: info.logoUrl,
    };
  } catch {
    return defaultCompanyInfo;
  }
}

export type { CompanyInfoData };
