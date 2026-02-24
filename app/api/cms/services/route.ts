import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyCmsAuth, unauthorizedResponse } from "@/lib/cms-auth";

export async function GET() {
  const services = await prisma.service.findMany({
    orderBy: { sortOrder: "asc" },
    include: {
      features: { orderBy: { sortOrder: "asc" } },
      featureGroups: {
        orderBy: { sortOrder: "asc" },
        include: { details: { orderBy: { sortOrder: "asc" } } },
      },
      images: { orderBy: { sortOrder: "asc" } },
    },
  });
  return NextResponse.json(services);
}

export async function POST(request: Request) {
  if (!verifyCmsAuth(request)) return unauthorizedResponse();

  const body = await request.json();
  const service = await prisma.service.create({
    data: {
      slug: body.slug,
      title: body.title,
      shortTitle: body.shortTitle,
      description: body.description,
      longDescription: body.longDescription,
      iconName: body.iconName ?? "Package",
      heroImage: body.heroImage ?? "",
      sortOrder: body.sortOrder ?? 0,
      features: {
        create: (body.features ?? []).map((text: string, i: number) => ({
          text,
          sortOrder: i,
        })),
      },
      featureGroups: {
        create: (body.featureGroups ?? []).map(
          (g: { title: string; details: string[] }, i: number) => ({
            title: g.title,
            sortOrder: i,
            details: {
              create: (g.details ?? []).map((text: string, j: number) => ({
                text,
                sortOrder: j,
              })),
            },
          })
        ),
      },
      images: {
        create: (body.images ?? []).map((url: string, i: number) => ({
          url,
          sortOrder: i,
        })),
      },
    },
    include: {
      features: true,
      featureGroups: { include: { details: true } },
      images: true,
    },
  });

  return NextResponse.json(service, { status: 201 });
}

export async function PUT(request: Request) {
  if (!verifyCmsAuth(request)) return unauthorizedResponse();

  const body = await request.json();
  const { id, features, featureGroups, images, ...data } = body;

  // Delete existing related records
  await prisma.serviceFeature.deleteMany({ where: { serviceId: id } });
  await prisma.serviceImage.deleteMany({ where: { serviceId: id } });
  const groups = await prisma.serviceFeatureGroup.findMany({
    where: { serviceId: id },
  });
  for (const g of groups) {
    await prisma.serviceFeatureGroupDetail.deleteMany({
      where: { featureGroupId: g.id },
    });
  }
  await prisma.serviceFeatureGroup.deleteMany({ where: { serviceId: id } });

  const service = await prisma.service.update({
    where: { id },
    data: {
      ...data,
      features: {
        create: (features ?? []).map((text: string, i: number) => ({
          text,
          sortOrder: i,
        })),
      },
      featureGroups: {
        create: (featureGroups ?? []).map(
          (g: { title: string; details: string[] }, i: number) => ({
            title: g.title,
            sortOrder: i,
            details: {
              create: (g.details ?? []).map((text: string, j: number) => ({
                text,
                sortOrder: j,
              })),
            },
          })
        ),
      },
      images: {
        create: (images ?? []).map((url: string, i: number) => ({
          url,
          sortOrder: i,
        })),
      },
    },
    include: {
      features: true,
      featureGroups: { include: { details: true } },
      images: true,
    },
  });

  return NextResponse.json(service);
}

export async function DELETE(request: Request) {
  if (!verifyCmsAuth(request)) return unauthorizedResponse();

  const { searchParams } = new URL(request.url);
  const id = parseInt(searchParams.get("id") ?? "0");

  await prisma.service.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
