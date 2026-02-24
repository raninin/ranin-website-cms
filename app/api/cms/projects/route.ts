import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyCmsAuth, unauthorizedResponse } from "@/lib/cms-auth";

export async function GET() {
  const projects = await prisma.project.findMany({
    orderBy: { sortOrder: "asc" },
    include: {
      highlights: { orderBy: { sortOrder: "asc" } },
      scope: {
        orderBy: { sortOrder: "asc" },
        include: { details: { orderBy: { sortOrder: "asc" } } },
      },
      services: true,
      blogContent: { orderBy: { sortOrder: "asc" } },
    },
  });
  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  if (!verifyCmsAuth(request)) return unauthorizedResponse();

  const body = await request.json();
  const project = await prisma.project.create({
    data: {
      slug: body.slug,
      title: body.title,
      sector: body.sector,
      location: body.location,
      description: body.description,
      longDescription: body.longDescription,
      image: body.image ?? "",
      heroImage: body.heroImage ?? "",
      client: body.client ?? "",
      year: body.year ?? "",
      duration: body.duration ?? "",
      status: body.status ?? "Active",
      sortOrder: body.sortOrder ?? 0,
      highlights: {
        create: (body.highlights ?? []).map((text: string, i: number) => ({
          text,
          sortOrder: i,
        })),
      },
      scope: {
        create: (body.scope ?? []).map(
          (s: { title: string; details: string[] }, i: number) => ({
            title: s.title,
            sortOrder: i,
            details: {
              create: (s.details ?? []).map((text: string, j: number) => ({
                text,
                sortOrder: j,
              })),
            },
          })
        ),
      },
      services: {
        create: (body.services ?? []).map((name: string) => ({ name })),
      },
      blogContent: {
        create: (body.blogContent ?? []).map(
          (b: { heading: string; body: string }, i: number) => ({
            heading: b.heading,
            body: b.body,
            sortOrder: i,
          })
        ),
      },
    },
    include: {
      highlights: true,
      scope: { include: { details: true } },
      services: true,
      blogContent: true,
    },
  });

  return NextResponse.json(project, { status: 201 });
}

export async function PUT(request: Request) {
  if (!verifyCmsAuth(request)) return unauthorizedResponse();

  const body = await request.json();
  const { id, highlights, scope, services, blogContent, ...data } = body;

  // Delete existing related records
  await prisma.projectHighlight.deleteMany({ where: { projectId: id } });
  await prisma.projectService.deleteMany({ where: { projectId: id } });
  await prisma.projectBlogContent.deleteMany({ where: { projectId: id } });
  const scopes = await prisma.projectScope.findMany({
    where: { projectId: id },
  });
  for (const s of scopes) {
    await prisma.projectScopeDetail.deleteMany({ where: { scopeId: s.id } });
  }
  await prisma.projectScope.deleteMany({ where: { projectId: id } });

  const project = await prisma.project.update({
    where: { id },
    data: {
      ...data,
      highlights: {
        create: (highlights ?? []).map((text: string, i: number) => ({
          text,
          sortOrder: i,
        })),
      },
      scope: {
        create: (scope ?? []).map(
          (s: { title: string; details: string[] }, i: number) => ({
            title: s.title,
            sortOrder: i,
            details: {
              create: (s.details ?? []).map((text: string, j: number) => ({
                text,
                sortOrder: j,
              })),
            },
          })
        ),
      },
      services: {
        create: (services ?? []).map((name: string) => ({ name })),
      },
      blogContent: {
        create: (blogContent ?? []).map(
          (b: { heading: string; body: string }, i: number) => ({
            heading: b.heading,
            body: b.body,
            sortOrder: i,
          })
        ),
      },
    },
    include: {
      highlights: true,
      scope: { include: { details: true } },
      services: true,
      blogContent: true,
    },
  });

  return NextResponse.json(project);
}

export async function DELETE(request: Request) {
  if (!verifyCmsAuth(request)) return unauthorizedResponse();

  const { searchParams } = new URL(request.url);
  const id = parseInt(searchParams.get("id") ?? "0");

  await prisma.project.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
