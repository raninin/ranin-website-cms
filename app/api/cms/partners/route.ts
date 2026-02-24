import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyCmsAuth, unauthorizedResponse } from "@/lib/cms-auth";

export async function GET() {
  const partners = await prisma.partner.findMany({
    orderBy: { sortOrder: "asc" },
  });
  return NextResponse.json(partners);
}

export async function POST(request: Request) {
  if (!verifyCmsAuth(request)) return unauthorizedResponse();

  const body = await request.json();
  const partner = await prisma.partner.create({
    data: {
      name: body.name,
      logoUrl: body.logoUrl,
      row: body.row ?? 1,
      sortOrder: body.sortOrder ?? 0,
    },
  });

  return NextResponse.json(partner, { status: 201 });
}

export async function PUT(request: Request) {
  if (!verifyCmsAuth(request)) return unauthorizedResponse();

  const body = await request.json();
  const { id, ...data } = body;

  const partner = await prisma.partner.update({
    where: { id },
    data,
  });

  return NextResponse.json(partner);
}

export async function DELETE(request: Request) {
  if (!verifyCmsAuth(request)) return unauthorizedResponse();

  const { searchParams } = new URL(request.url);
  const id = parseInt(searchParams.get("id") ?? "0");

  await prisma.partner.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
