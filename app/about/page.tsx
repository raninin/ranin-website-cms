"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Handshake,
  Award,
  Target,
  ArrowRight,
} from "lucide-react";
import { SectionLabel } from "@/components/shared/section-label";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Certifications } from "@/components/sections/certifications";
import { CTAStrip } from "@/components/sections/cta-strip";
import { Badge } from "@/components/ui/badge";

const values = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "Zero-compromise safety culture across every project site and operation. HSE compliance is embedded in our DNA.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description:
      "Transparent partnerships built on trust, accountability, and honest communication at every level.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Relentless pursuit of quality in every deliverable — from manpower deployment to materials supply.",
  },
  {
    icon: Target,
    title: "Commitment",
    description:
      "Dedicated to delivering on time, within budget, and beyond expectations on every engagement.",
  },
];

const milestones = [
  { year: "2010", title: "Company Founded", description: "Ranin International established in Jubail Industrial City, KSA." },
  { year: "2013", title: "First Major Contract", description: "Awarded manpower supply contract with Saudi Aramco contractors." },
  { year: "2016", title: "Fabrication Division", description: "Launched dedicated fabrication workshop for structural steel & piping." },
  { year: "2018", title: "500+ Workforce", description: "Scaled operations to deploy over 500 skilled workers across the Kingdom." },
  { year: "2020", title: "O&M Expansion", description: "Expanded into turnkey Operation & Maintenance services for refineries." },
  { year: "2023", title: "NEOM & Mega-Projects", description: "Selected as contractor for Saudi Arabia's landmark infrastructure projects." },
];


export default function AboutPage() {
  return (
    <main>
      {/* ── Hero Banner ─────────────────────────────────────── */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-ranin-navy pb-16 pt-32 lg:min-h-[70vh] lg:pb-24 lg:pt-40">
        <Image
          src="/images/59.png"
          alt="Engineers reviewing blueprints"
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
            <SectionLabel>About Us</SectionLabel>
            <h1 className="mt-4 font-display text-5xl text-white md:text-6xl lg:text-7xl">
              YOUR TRUSTED PARTNER IN
              <br />
              INDUSTRIAL EXCELLENCE
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ranin-steel">
              For over 15 years, Ranin International has been a cornerstone of
              industrial services in the Kingdom — delivering mission-critical
              manpower, materials, and maintenance solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Company Overview ────────────────────────────────── */}
      <section className="bg-ranin-light py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image */}
            <ScrollReveal>
              <div className="relative overflow-hidden">
                <Image
                  src="/images/56.png"
                  alt="Ranin International worker at industrial facility"
                  width={640}
                  height={480}
                  className="aspect-[4/3] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 flex bg-ranin-navy/90 backdrop-blur-sm">
                  <div className="flex-1 border-r border-white/[0.06] px-4 py-4 text-center lg:px-6">
                    <span className="font-display text-3xl text-ranin-accent">15+</span>
                    <span className="mt-1 block text-[10px] uppercase tracking-wider text-ranin-steel">Years</span>
                  </div>
                  <div className="flex-1 border-r border-white/[0.06] px-4 py-4 text-center lg:px-6">
                    <span className="font-display text-3xl text-ranin-accent">500+</span>
                    <span className="mt-1 block text-[10px] uppercase tracking-wider text-ranin-steel">Projects</span>
                  </div>
                  <div className="flex-1 px-4 py-4 text-center lg:px-6">
                    <span className="font-display text-3xl text-ranin-accent">6</span>
                    <span className="mt-1 block text-[10px] uppercase tracking-wider text-ranin-steel">Services</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Text */}
            <div>
              <ScrollReveal>
                <SectionLabel className="text-ranin-accent">Our Story</SectionLabel>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="mt-4 font-display text-3xl text-ranin-navy sm:text-4xl md:text-5xl">
                  A LEGACY OF INDUSTRIAL EXCELLENCE
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="mt-6 text-base leading-relaxed text-ranin-steel">
                  Founded in 2010, Ranin International is a diversified industrial
                  services company headquartered in Jubail Industrial City, Kingdom of
                  Saudi Arabia. What started as a specialized manpower provider has
                  grown into a comprehensive industrial partner — serving the nation&apos;s
                  most critical sectors.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="mt-4 text-base leading-relaxed text-ranin-steel">
                  Today, we provide end-to-end solutions spanning manpower deployment,
                  industrial materials supply, operation &amp; maintenance, precision
                  fabrication, surface treatment, and commercial printing. Our
                  commitment to safety, quality, and operational excellence has made us
                  a trusted partner for leading EPC contractors, oil &amp; gas
                  operators, and government entities.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <Link
                  href="/services"
                  className="group mt-6 inline-flex items-center text-sm font-semibold text-ranin-navy transition-colors hover:text-ranin-accent"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────── */}
      <section className="bg-ranin-navy py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <SectionLabel>Our Values</SectionLabel>
            <h2 className="mt-4 font-display text-4xl text-white md:text-5xl">
              WHAT DRIVES US
            </h2>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                className="group border border-white/[0.06] bg-ranin-blue/20 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ranin-accent/30 lg:p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <value.icon
                  className="size-8 text-ranin-accent"
                  strokeWidth={1.5}
                />
                <h3 className="mt-4 font-display text-xl text-white">
                  {value.title.toUpperCase()}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ranin-steel">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ────────────────────────────────────────── */}
      <section className="bg-ranin-light py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <SectionLabel className="text-ranin-accent">Our Journey</SectionLabel>
            <h2 className="mt-4 font-display text-4xl text-ranin-navy md:text-5xl">
              MILESTONES
            </h2>
          </div>

          <div className="relative mt-14 lg:mt-20">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-ranin-navy/10 lg:left-1/2" />

            <div className="flex flex-col gap-8 lg:gap-12">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  className={`relative flex items-start gap-8 pl-12 lg:pl-0 ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  {/* Dot */}
                  <div className="absolute left-[10px] top-1.5 size-3 border-2 border-ranin-accent bg-ranin-light lg:left-1/2 lg:-translate-x-1/2" />

                  {/* Content */}
                  <div className={`lg:w-1/2 ${i % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                    <Badge
                      variant="outline"
                      className="mb-2 border-ranin-accent/30 font-mono text-xs text-ranin-accent"
                    >
                      {milestone.year}
                    </Badge>
                    <h3 className="font-display text-xl text-ranin-navy">
                      {milestone.title.toUpperCase()}
                    </h3>
                    <p className="mt-1 text-sm text-ranin-steel">
                      {milestone.description}
                    </p>
                  </div>
                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Certifications />

      <CTAStrip />
    </main>
  );
}
