"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects as defaultProjects } from "@/lib/data/projects";

interface ProjectsMegaMenuProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  projects?: { slug: string; title: string; sector: string; image: string }[];
}

export function ProjectsMegaMenu({ onMouseEnter, onMouseLeave, projects }: ProjectsMegaMenuProps) {
  const items = projects ?? defaultProjects.map((p) => ({
    slug: p.slug,
    title: p.title,
    sector: p.sector,
    image: p.image,
  }));

  // Show up to 6 featured projects in the mega menu
  const featured = items.slice(0, 6);

  return (
    <motion.div
      className="absolute top-full left-0 right-0 z-50"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Invisible bridge zone to prevent flicker */}
      <div className="h-2" />

      <div className="border border-white/[0.06] bg-ranin-navy/95 backdrop-blur-xl">
        {/* Top accent line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-ranin-accent to-transparent" />

        <div className="mx-auto max-w-7xl px-6 py-5">
          {/* Header row */}
          <div className="mb-4 flex items-center justify-between">
            <p className="text-[11px] font-medium uppercase tracking-widest text-white/30">
              Our Projects
            </p>
            <Link
              href="/projects"
              className="group flex items-center gap-1.5 text-[12px] font-medium text-ranin-accent transition-colors hover:text-white"
            >
              View All
              <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Project cards */}
          <div className="grid grid-cols-6 gap-2">
            {featured.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.2 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block overflow-hidden border border-white/[0.04] bg-ranin-navy transition-all duration-200 hover:-translate-y-0.5 hover:border-white/[0.1]"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="200px"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,var(--ranin-navy)_0%,var(--ranin-navy)_5%,oklch(0.15_0.03_250/0.4)_50%,transparent_100%)]" />
                    {/* Sector badge */}
                    <div className="absolute bottom-1.5 left-1.5 border border-white/[0.1] bg-ranin-navy/70 px-1.5 py-0.5 backdrop-blur-sm">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-ranin-accent">
                        {project.sector}
                      </span>
                    </div>
                  </div>
                  {/* Title */}
                  <div className="px-2 py-2">
                    <p className="line-clamp-2 text-[11px] font-medium leading-tight text-white/80 transition-colors group-hover:text-white">
                      {project.title}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
