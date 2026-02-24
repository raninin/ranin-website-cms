"use client";

import {
  Image,
  BarChart3,
  Users2,
  Mountain,
  Eye,
  Megaphone,
  Handshake,
  Award,
  Wrench,
  FolderKanban,
  FileText,
  Phone,
  Building,
  Settings,
} from "lucide-react";

const sections = [
  { id: "hero", label: "Hero Section", icon: Image, group: "Homepage" },
  { id: "trust-bar", label: "Trust Bar", icon: BarChart3, group: "Homepage" },
  {
    id: "about-preview",
    label: "About Preview",
    icon: Users2,
    group: "Homepage",
  },
  { id: "sectors", label: "Sectors", icon: Mountain, group: "Homepage" },
  { id: "vision-2030", label: "Vision 2030", icon: Eye, group: "Homepage" },
  { id: "cta-strip", label: "CTA Strip", icon: Megaphone, group: "Homepage" },
  { id: "partners", label: "Partners", icon: Handshake, group: "Homepage" },
  {
    id: "certifications",
    label: "Certifications",
    icon: Award,
    group: "Homepage",
  },
  { id: "services", label: "Services", icon: Wrench, group: "Content" },
  { id: "projects", label: "Projects", icon: FolderKanban, group: "Content" },
  { id: "about-page", label: "About Page", icon: FileText, group: "Pages" },
  { id: "contact-page", label: "Contact Page", icon: Phone, group: "Pages" },
  {
    id: "company-info",
    label: "Company Info",
    icon: Building,
    group: "Settings",
  },
  {
    id: "site-meta",
    label: "Site Settings",
    icon: Settings,
    group: "Settings",
  },
];

interface Props {
  activeSection: string;
  onSelect: (id: string) => void;
}

export function CmsSidebar({ activeSection, onSelect }: Props) {
  const groups = [...new Set(sections.map((s) => s.group))];

  return (
    <aside className="flex w-64 flex-col border-r border-zinc-800 bg-zinc-900">
      <div className="border-b border-zinc-800 px-5 py-4">
        <h1 className="text-lg font-bold text-white">Ranin CMS</h1>
        <p className="text-xs text-zinc-500">Content Management</p>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        {groups.map((group) => (
          <div key={group} className="mb-4">
            <p className="px-5 pb-2 text-[10px] font-semibold uppercase tracking-widest text-zinc-600">
              {group}
            </p>
            {sections
              .filter((s) => s.group === group)
              .map((section) => {
                const Icon = section.icon;
                const active = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => onSelect(section.id)}
                    className={`flex w-full items-center gap-3 px-5 py-2 text-left text-sm transition-colors ${
                      active
                        ? "bg-blue-600/10 text-blue-400"
                        : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                    }`}
                  >
                    <Icon className="size-4 shrink-0" />
                    {section.label}
                  </button>
                );
              })}
          </div>
        ))}
      </nav>
    </aside>
  );
}
