import type { Metadata } from "next";
import { Bebas_Neue, Geist_Mono, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Preloader } from "@/components/layout/preloader";
import { PageTransition } from "@/components/layout/page-transition";
import { getSiteMeta } from "@/lib/queries/site-content";
import { getCompanyInfo } from "@/lib/queries/company-info";
import { getServicesForNav } from "@/lib/queries/services";
import { getProjectsForNav } from "@/lib/queries/projects";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getSiteMeta();
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [{ url: "/ranin-logo.png", width: 512, height: 512, alt: "Ranin International" }],
    },
    twitter: {
      card: "summary",
      title: meta.title,
      description: meta.description,
      images: ["/ranin-logo.png"],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [companyInfo, servicesNav, projectsNav] = await Promise.all([
    getCompanyInfo(),
    getServicesForNav(),
    getProjectsForNav(),
  ]);

  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable} ${geistMono.variable} dark`}>
      <body className="antialiased">
        <Preloader />
        <Navbar services={servicesNav} projects={projectsNav} />
        <PageTransition>{children}</PageTransition>
        <Footer companyInfo={companyInfo} services={servicesNav} />
      </body>
    </html>
  );
}
