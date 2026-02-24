"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionLabel } from "@/components/shared/section-label";
import { CTAStrip } from "@/components/sections/cta-strip";
import type { Project } from "@/lib/data/projects";
import type { ProjectsPageData } from "@/lib/data/defaults/projects-page";
import { SubtlePatternBg } from "@/components/shared/subtle-pattern-bg";

interface Props {
  projects: Project[];
  pageContent: ProjectsPageData;
}

export default function ProjectsPageClient({ projects, pageContent }: Props) {
  return (
    <main>
      {/* -- Hero Banner ------------------------------------------------- */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-ranin-navy pb-16 pt-32 lg:min-h-[70vh] lg:pb-24 lg:pt-40">
        <Image
          src={pageContent.heroImage}
          alt={pageContent.heroImageAlt}
          fill
          className="object-cover opacity-[0.12]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ranin-navy via-ranin-navy/60 to-ranin-navy/30" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>Portfolio</SectionLabel>
            <h1 className="mt-4 font-display text-5xl text-white md:text-6xl lg:text-7xl">
              {pageContent.heroHeading}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ranin-steel">
              {pageContent.heroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* -- Filter Tags ------------------------------------------------- */}
      <section className="border-b border-white/[0.06] bg-ranin-navy py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {pageContent.sectors.map((sector, i) => (
              <button
                key={sector}
                className={`border px-4 py-1.5 font-mono text-[10px] uppercase tracking-wider transition-all duration-300 ${
                  i === 0
                    ? "border-ranin-accent bg-ranin-accent/10 text-ranin-accent"
                    : "border-white/[0.08] text-ranin-steel hover:border-ranin-accent/30 hover:text-white"
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* -- Projects Grid ----------------------------------------------- */}
      <section className="relative overflow-hidden bg-ranin-light py-24 lg:py-32">
        <SubtlePatternBg src="/images/41.png" opacity={0.09} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="group overflow-hidden border border-ranin-navy/[0.06] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ranin-navy/80 via-ranin-navy/20 to-transparent" />

                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <Badge className="bg-ranin-accent/90 text-[10px] text-white">
                        {project.sector}
                      </Badge>
                    </div>

                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white/70">
                      <MapPin className="size-3" />
                      <span className="text-xs">{project.location}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-xl text-ranin-navy">
                      {project.title.toUpperCase()}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ranin-steel">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.services.map((s) => (
                        <span
                          key={s}
                          className="border border-ranin-navy/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-ranin-steel"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 inline-flex items-center text-sm font-semibold text-ranin-navy transition-colors group-hover:text-ranin-accent">
                      View Project
                      <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </main>
  );
}
