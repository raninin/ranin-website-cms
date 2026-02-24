import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyCmsAuth, unauthorizedResponse } from "@/lib/cms-auth";

export async function GET() {
  const info = await prisma.companyInfo.findUnique({ where: { id: 1 } });
  return NextResponse.json(info);
}

export async function PUT(request: Request) {
  if (!verifyCmsAuth(request)) return unauthorizedResponse();

  const body = await request.json();

  const info = await prisma.companyInfo.upsert({
    where: { id: 1 },
    update: body,
    create: { id: 1, ...body },
  });

  return NextResponse.json(info);
}
