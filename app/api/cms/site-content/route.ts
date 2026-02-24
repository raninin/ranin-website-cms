import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { verifyCmsAuth, unauthorizedResponse } from "@/lib/cms-auth";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const content = await prisma.siteContent.findUnique({ where: { id } });
    return NextResponse.json(content);
  }

  const all = await prisma.siteContent.findMany();
  return NextResponse.json(all);
}

export async function PUT(request: Request) {
  if (!verifyCmsAuth(request)) return unauthorizedResponse();

  const body = await request.json();
  const { id, data } = body;

  const content = await prisma.siteContent.upsert({
    where: { id },
    update: { data },
    create: { id, data },
  });

  revalidatePath("/", "layout");
  return NextResponse.json(content);
}
