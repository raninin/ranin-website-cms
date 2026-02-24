"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/shared/section-label";
import { defaultCertifications, type CertificationData } from "@/lib/queries/certifications";

function CertRow({ reverse = false, certs }: { reverse?: boolean; certs: CertificationData[] }) {
  const doubled = [...certs, ...certs];
  return (
    <div
      className={`flex items-center gap-8 lg:gap-12 ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {doubled.map((cert, i) => (
        <div
          key={`${cert.title}-${i}`}
          className="group flex shrink-0 items-center gap-4 border border-white/[0.04] bg-white/[0.02] px-6 py-4 transition-all duration-500 hover:border-ranin-accent/20 hover:bg-white/[0.06]"
        >
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center lg:h-14 lg:w-14">
            <Image
              src={cert.logoUrl}
              alt={`${cert.title} - ${cert.subtitle}`}
              width={56}
              height={56}
              className="h-10 w-auto object-contain opacity-60 transition-all duration-500 group-hover:opacity-100 lg:h-12"
            />
          </div>
          <div className="whitespace-nowrap">
            <h3 className="font-display text-sm tracking-wider text-white lg:text-base">
              {cert.title}
            </h3>
            <p className="text-[10px] uppercase tracking-widest text-ranin-steel transition-colors duration-300 group-hover:text-ranin-accent lg:text-[11px]">
              {cert.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Certifications({ certifications }: { certifications?: CertificationData[] }) {
  const certs = certifications ?? defaultCertifications;
  return (
    <section className="relative overflow-hidden bg-ranin-navy py-24 lg:py-32">
      {/* Subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="cert-grid"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cert-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <SectionLabel>Accreditations</SectionLabel>
          <h2 className="mt-4 font-display text-4xl text-white md:text-5xl lg:text-6xl">
            CERTIFIED EXCELLENCE
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-ranin-steel">
            Our operations meet the highest international standards — recognized
            by the Kingdom&apos;s most trusted regulatory and industry bodies.
          </p>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="relative mt-14 overflow-hidden py-4 lg:mt-20">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-ranin-navy to-transparent sm:w-32" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-ranin-navy to-transparent sm:w-32" />

        <div className="flex flex-col gap-6">
          <CertRow certs={certs} />
          <CertRow certs={certs} reverse />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Trust statement */}
        <motion.div
          className="mt-14 flex flex-col items-center gap-4 border-t border-white/[0.06] pt-10 text-center lg:mt-16 lg:flex-row lg:justify-center lg:gap-8 lg:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-ranin-accent/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ranin-accent">
              Trusted &amp; Verified
            </span>
            <div className="h-px w-8 bg-ranin-accent/40" />
          </div>
          <p className="max-w-lg text-sm text-ranin-steel">
            Every project we deliver is backed by internationally recognized
            certifications, ensuring quality, safety, and environmental
            compliance at every stage.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
