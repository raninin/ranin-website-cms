"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/shared/section-label";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { defaultAboutPreview, type AboutPreviewData } from "@/lib/data/defaults/about-preview";
import { getIcon } from "@/lib/data/icons";
import { SubtlePatternBg } from "@/components/shared/subtle-pattern-bg";

export function AboutPreview({ data }: { data?: AboutPreviewData }) {
  const d = data ?? defaultAboutPreview;
  return (
    <section className="relative overflow-hidden bg-ranin-light py-24 lg:py-32">
      <SubtlePatternBg src="/images/30.png" opacity={0.09} />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── Two-column layout ──────────────────────────────── */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Image with block-wipe reveal */}
          <div className="relative overflow-hidden">
            {/* Accent block that slides away */}
            <motion.div
              className="absolute inset-0 z-10 bg-ranin-accent"
              initial={{ x: "0%" }}
              whileInView={{ x: "101%" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.2,
              }}
            />
            {/* Image */}
            <motion.div
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            >
              <Image
                src={d.image}
                alt={d.imageAlt}
                width={640}
                height={480}
                className="aspect-[4/3] w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>

          {/* Right: Text content */}
          <div>
            <ScrollReveal>
              <SectionLabel className="text-ranin-accent">
                {d.sectionLabel}
              </SectionLabel>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 font-display text-3xl text-ranin-navy sm:text-4xl md:text-5xl">
                {d.heading}
              </h2>
            </ScrollReveal>

            {d.paragraphs.map((p, i) => (
            <ScrollReveal key={i} delay={0.2 + i * 0.1}>
              <p className={`${i === 0 ? "mt-6" : "mt-4"} text-base leading-relaxed text-ranin-steel`}>
                {p}
              </p>
            </ScrollReveal>
            ))}


            <ScrollReveal delay={0.2 + d.paragraphs.length * 0.1}>
              <Link
                href={d.linkHref}
                className="group mt-6 inline-flex items-center text-sm font-semibold text-ranin-navy transition-colors hover:text-ranin-accent"
              >
                {d.linkText}
                <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* ── Value Cards ────────────────────────────────────── */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3 lg:mt-20">
          {d.values.map((v, i) => {
            const Icon = getIcon(v.iconName);
            return (
            <motion.div
              key={v.title}
              className="group border border-ranin-navy/[0.06] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ranin-accent/20 hover:shadow-lg lg:p-8"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: 0.3 + i * 0.15,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
            >
              <Icon className="size-8 text-ranin-accent" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-xl text-ranin-navy">
                {v.title.toUpperCase()}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ranin-steel">
                {v.description}
              </p>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
