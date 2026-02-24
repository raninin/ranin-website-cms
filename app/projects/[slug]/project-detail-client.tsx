"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  MapPin,
  Calendar,
  Clock,
  Building2,
  Activity,
  BookOpen,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionLabel } from "@/components/shared/section-label";
import { CTAStrip } from "@/components/sections/cta-strip";
import type { Project } from "@/lib/data/projects";
import { SubtlePatternBg } from "@/components/shared/subtle-pattern-bg";

interface Props {
  project: Project;
  allProjects: Project[];
}

export default function ProjectDetailClient({ project, allProjects }: Props) {
  const currentIndex = allProjects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  const details = [
    { label: "Client", value: project.client, icon: Building2 },
    { label: "Year", value: project.year, icon: Calendar },
    { label: "Duration", value: project.duration, icon: Clock },
    { label: "Status", value: project.status, icon: Activity },
  ];

  return (
    <main>
      {/* -- Hero -------------------------------------------------------- */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-ranin-navy pb-16 pt-32 lg:min-h-[70vh] lg:pb-24 lg:pt-40">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover opacity-[0.2]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ranin-navy via-ranin-navy/70 to-ranin-navy/40" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/projects"
              className="group mb-6 inline-flex items-center text-sm text-ranin-steel transition-colors hover:text-white"
            >
              <ArrowLeft className="mr-2 size-4 transition-transform group-hover:-translate-x-1" />
              All Projects
            </Link>

            <div className="flex items-center gap-3">
              <Badge className="bg-ranin-accent/90 text-[10px] text-white">
                {project.sector}
              </Badge>
              <div className="flex items-center gap-1.5 text-ranin-steel">
                <MapPin className="size-3.5" />
                <span className="text-sm">{project.location}</span>
              </div>
            </div>

            <h1 className="mt-4 font-display text-5xl text-white md:text-6xl lg:text-7xl">
              {project.title.toUpperCase()}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ranin-steel">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.services.map((s) => (
                <span
                  key={s}
                  className="border border-white/[0.12] px-2.5 py-1 text-[10px] uppercase tracking-wider text-white/60"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* -- Overview + Key Details -------------------------------------- */}
      <section className="relative bg-ranin-light py-24 lg:py-32">
        <SubtlePatternBg src="/images/30.png" opacity={0.09} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            {/* Long description -- sticky */}
            <motion.div
              className="lg:sticky lg:top-32 lg:self-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel className="text-ranin-accent">
                Overview
              </SectionLabel>
              <h2 className="mt-4 font-display text-4xl text-ranin-navy sm:text-5xl">
                PROJECT OVERVIEW
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ranin-steel">
                {project.longDescription}
              </p>
              <Link
                href="/contact"
                className="group mt-10 inline-flex items-center bg-ranin-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-ranin-accent/90"
              >
                Discuss Your Project
                <ArrowRight className="ml-3 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Key details */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <SectionLabel className="text-ranin-accent">
                  Details
                </SectionLabel>
                <h2 className="mt-4 font-display text-4xl text-ranin-navy sm:text-5xl">
                  KEY DETAILS
                </h2>
              </motion.div>

              <div className="mt-8 grid grid-cols-2 gap-5">
                {details.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="group/card relative overflow-hidden border border-ranin-navy/[0.06] bg-white p-6 transition-all duration-300 hover:border-ranin-accent/20 hover:shadow-lg lg:p-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <div className="absolute inset-y-0 left-0 w-1 bg-ranin-accent/0 transition-all duration-300 group-hover/card:bg-ranin-accent" />
                    <div className="flex size-10 items-center justify-center bg-ranin-accent/10">
                      <item.icon className="size-5 text-ranin-accent" strokeWidth={1.5} />
                    </div>
                    <span className="mt-4 block text-xs uppercase tracking-wider text-ranin-steel">
                      {item.label}
                    </span>
                    <span className="mt-1 block font-display text-xl text-ranin-navy lg:text-2xl">
                      {item.value.toUpperCase()}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Highlights */}
              <motion.div
                className="group/card relative mt-5 overflow-hidden border border-ranin-navy/[0.06] bg-white p-6 transition-all duration-300 hover:border-ranin-accent/20 hover:shadow-lg lg:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-ranin-accent" />
                <h3 className="font-display text-xl text-ranin-navy">
                  HIGHLIGHTS
                </h3>
                <div className="mt-5 grid gap-3">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center bg-ranin-accent/10">
                        <CheckCircle2 className="size-3.5 text-ranin-accent" />
                      </div>
                      <span className="text-base leading-relaxed text-ranin-steel">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Project Insights --------------------------------------------- */}
      {project.blogContent && project.blogContent.length > 0 && (
        <section className="relative bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel className="text-ranin-accent">
                Insights
              </SectionLabel>
              <h2 className="mt-4 font-display text-4xl text-ranin-navy md:text-5xl lg:text-6xl">
                PROJECT INSIGHTS
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-ranin-steel">
                A detailed look at the challenges, methods, and outcomes that defined this project
              </p>
            </motion.div>

            <div className="mx-auto mt-14 max-w-4xl lg:mt-20">
              {project.blogContent.map((section, i) => (
                <motion.article
                  key={section.heading}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  {/* Connector line between articles */}
                  {i > 0 && (
                    <div className="mx-auto mb-12 h-px w-24 bg-ranin-navy/10" />
                  )}

                  <div className="flex gap-6">
                    {/* Accent bar and icon */}
                    <div className="hidden shrink-0 flex-col items-center sm:flex">
                      <div className="flex size-10 items-center justify-center bg-ranin-accent/10">
                        <BookOpen className="size-5 text-ranin-accent" strokeWidth={1.5} />
                      </div>
                      <div className="mt-3 h-full w-px bg-ranin-accent/15" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-12">
                      <span className="font-mono text-sm text-ranin-accent/50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2 font-display text-2xl text-ranin-navy lg:text-3xl">
                        {section.heading.toUpperCase()}
                      </h3>
                      <div className="mt-2 h-0.5 w-12 bg-ranin-accent/40" />
                      <p className="mt-6 text-base leading-relaxed text-ranin-steel lg:text-lg">
                        {section.body}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* -- Scope of Work ----------------------------------------------- */}
      <section className="relative overflow-hidden bg-ranin-navy py-24 lg:py-32">
        <SubtlePatternBg src="/images/59.png" opacity={0.06} theme="dark" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <SectionLabel>Scope</SectionLabel>
            <h2 className="mt-4 font-display text-4xl text-white md:text-5xl lg:text-6xl">
              SCOPE OF WORK
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ranin-steel">
              Comprehensive delivery across all project phases
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-20">
            {project.scope.map((group, i) => (
              <motion.div
                key={group.title}
                className="group/scope relative overflow-hidden border border-white/[0.06] bg-white/[0.03] p-8 transition-all duration-300 hover:border-ranin-accent/20 hover:bg-white/[0.06] lg:p-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: (i % 2) * 0.1, duration: 0.5 }}
              >
                {/* Accent top border on hover */}
                <div className="absolute inset-x-0 top-0 h-1 bg-ranin-accent/0 transition-all duration-300 group-hover/scope:bg-ranin-accent" />

                <span className="font-mono text-4xl font-light text-ranin-accent/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-2xl text-white">
                  {group.title.toUpperCase()}
                </h3>
                <div className="mt-2 h-0.5 w-12 bg-ranin-accent/40" />
                <div className="mt-6 grid gap-3">
                  {group.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-ranin-accent" />
                      <span className="text-base leading-relaxed text-ranin-steel">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Prev / Next Navigation -------------------------------------- */}
      <section className="border-t border-white/[0.06] bg-ranin-navy">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-2">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-4 border-r border-white/[0.06] p-8 transition-colors hover:bg-ranin-blue/20 lg:p-12"
            >
              <ArrowLeft className="size-5 text-ranin-steel transition-transform group-hover:-translate-x-1 group-hover:text-ranin-accent" />
              <div>
                <span className="text-xs uppercase tracking-wider text-ranin-steel">
                  Previous
                </span>
                <h4 className="mt-1 font-display text-lg text-white">
                  {prevProject.title.toUpperCase()}
                </h4>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center justify-end gap-4 p-8 text-right transition-colors hover:bg-ranin-blue/20 lg:p-12"
            >
              <div>
                <span className="text-xs uppercase tracking-wider text-ranin-steel">
                  Next
                </span>
                <h4 className="mt-1 font-display text-lg text-white">
                  {nextProject.title.toUpperCase()}
                </h4>
              </div>
              <ArrowRight className="size-5 text-ranin-steel transition-transform group-hover:translate-x-1 group-hover:text-ranin-accent" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* -- CTA --------------------------------------------------------- */}
      <CTAStrip />
    </main>
  );
}
