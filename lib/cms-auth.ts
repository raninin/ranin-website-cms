import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const CMS_PASSWORD = process.env.CMS_PASSWORD ?? "admin123";
const COOKIE_NAME = "cms-auth";

export function verifyCmsAuth(request: Request): boolean {
  const authHeader = request.headers.get("x-cms-password");
  if (authHeader === CMS_PASSWORD) return true;

  const cookieHeader = request.headers.get("cookie") ?? "";
  const match = cookieHeader.match(new RegExp(`${COOKIE_NAME}=([^;]+)`));
  return match?.[1] === CMS_PASSWORD;
}

export function unauthorizedResponse() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function verifyCmsAuthFromCookies(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value === CMS_PASSWORD;
}

export { CMS_PASSWORD, COOKIE_NAME };
