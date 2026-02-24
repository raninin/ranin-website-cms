import { prisma } from "@/lib/db";
import { defaultClientsProjects } from "@/lib/data/defaults/clients-projects";

export interface PartnerRow {
  id: number;
  name: string;
  logoUrl: string;
  row: number;
  sortOrder: number;
}

export async function getPartners(): Promise<{ row1: PartnerRow[]; row2: PartnerRow[] }> {
  try {
    const dbPartners = await prisma.partner.findMany({
      orderBy: { sortOrder: "asc" },
    });

    if (dbPartners.length === 0) {
      return {
        row1: defaultClientsProjects.partnersRow1.map((p, i) => ({
          id: i + 1,
          name: p.alt,
          logoUrl: p.src,
          row: 1,
          sortOrder: i,
        })),
        row2: defaultClientsProjects.partnersRow2.map((p, i) => ({
          id: i + 100,
          name: p.alt,
          logoUrl: p.src,
          row: 2,
          sortOrder: i,
        })),
      };
    }

    return {
      row1: dbPartners.filter((p) => p.row === 1),
      row2: dbPartners.filter((p) => p.row === 2),
    };
  } catch {
    return {
      row1: defaultClientsProjects.partnersRow1.map((p, i) => ({
        id: i + 1,
        name: p.alt,
        logoUrl: p.src,
        row: 1,
        sortOrder: i,
      })),
      row2: defaultClientsProjects.partnersRow2.map((p, i) => ({
        id: i + 100,
        name: p.alt,
        logoUrl: p.src,
        row: 2,
        sortOrder: i,
      })),
    };
  }
}
