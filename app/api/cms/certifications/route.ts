import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyCmsAuth, unauthorizedResponse } from "@/lib/cms-auth";

export async function GET() {
  const certs = await prisma.certification.findMany({
    orderBy: { sortOrder: "asc" },
  });
  return NextResponse.json(certs);
}

export async function POST(request: Request) {
  if (!verifyCmsAuth(request)) return unauthorizedResponse();

  const body = await request.json();
  const cert = await prisma.certification.create({
    data: {
      title: body.title,
      subtitle: body.subtitle,
      logoUrl: body.logoUrl,
      sortOrder: body.sortOrder ?? 0,
    },
  });

  return NextResponse.json(cert, { status: 201 });
}

export async function PUT(request: Request) {
  if (!verifyCmsAuth(request)) return unauthorizedResponse();

  const body = await request.json();
  const { id, ...data } = body;

  const cert = await prisma.certification.update({
    where: { id },
    data,
  });

  return NextResponse.json(cert);
}

export async function DELETE(request: Request) {
  if (!verifyCmsAuth(request)) return unauthorizedResponse();

  const { searchParams } = new URL(request.url);
  const id = parseInt(searchParams.get("id") ?? "0");

  await prisma.certification.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
