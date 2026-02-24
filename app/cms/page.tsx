"use client";

import { useState, useEffect } from "react";
import { CmsSidebar } from "./components/cms-sidebar";
import { CmsHeader } from "./components/cms-header";
import { HeroEditor } from "./sections/hero-editor";
import { TrustBarEditor } from "./sections/trust-bar-editor";
import { AboutPreviewEditor } from "./sections/about-preview-editor";
import { SectorsEditor } from "./sections/sectors-editor";
import { Vision2030Editor } from "./sections/vision-2030-editor";
import { CTAStripEditor } from "./sections/cta-strip-editor";
import { PartnersEditor } from "./sections/partners-editor";
import { CertificationsEditor } from "./sections/certifications-editor";
import { ServicesEditor } from "./sections/services-editor";
import { ProjectsEditor } from "./sections/projects-editor";
import { AboutPageEditor } from "./sections/about-page-editor";
import { ContactPageEditor } from "./sections/contact-page-editor";
import { CompanyInfoEditor } from "./sections/company-info-editor";
import { SiteMetaEditor } from "./sections/site-meta-editor";

export default function CmsPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [activeSection, setActiveSection] = useState("hero");
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // Check if already authenticated via auth cookie
    fetch("/api/cms/auth")
      .then((r) => {
        setChecking(false);
        if (r.ok) setAuthenticated(true);
      })
      .catch(() => setChecking(false));
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/cms/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setAuthenticated(true);
    } else {
      setError("Invalid password");
    }
  };

  const handleLogout = async () => {
    await fetch("/api/cms/auth", { method: "DELETE" });
    setAuthenticated(false);
    setPassword("");
  };

  if (checking) {
    return (
      <div className="flex h-screen items-center justify-center bg-zinc-950">
        <div className="text-zinc-500">Loading...</div>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="flex h-screen items-center justify-center bg-zinc-950">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm space-y-4 border border-zinc-800 bg-zinc-900 p-8"
        >
          <div>
            <h1 className="text-2xl font-bold text-white">Ranin CMS</h1>
            <p className="mt-1 text-sm text-zinc-500">
              Enter password to continue
            </p>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none"
          />
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
      </div>
    );
  }

  const editors: Record<string, React.ReactNode> = {
    hero: <HeroEditor />,
    "trust-bar": <TrustBarEditor />,
    "about-preview": <AboutPreviewEditor />,
    sectors: <SectorsEditor />,
    "vision-2030": <Vision2030Editor />,
    "cta-strip": <CTAStripEditor />,
    partners: <PartnersEditor />,
    certifications: <CertificationsEditor />,
    services: <ServicesEditor />,
    projects: <ProjectsEditor />,
    "about-page": <AboutPageEditor />,
    "contact-page": <ContactPageEditor />,
    "company-info": <CompanyInfoEditor />,
    "site-meta": <SiteMetaEditor />,
  };

  return (
    <div className="flex h-screen bg-zinc-950">
      <CmsSidebar activeSection={activeSection} onSelect={setActiveSection} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <CmsHeader onLogout={handleLogout} />
        <main className="flex-1 overflow-y-auto p-6">
          {editors[activeSection]}
        </main>
      </div>
    </div>
  );
}
