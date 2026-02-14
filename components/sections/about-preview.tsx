"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Handshake, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/shared/section-label";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

const values = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description: "Zero-compromise safety culture across every project site and operation.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description: "Transparent partnerships built on trust, accountability, and honest communication.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Relentless pursuit of quality in every deliverable, from manpower to materials.",
  },
];

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-ranin-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                src="/images/56.png"
                alt="Ranin International worker at industrial facility"
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
                Who We Are
              </SectionLabel>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 font-display text-3xl text-ranin-navy sm:text-4xl md:text-5xl">
                YOUR TRUSTED INDUSTRIAL PARTNER SINCE 2010
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-ranin-steel">
                Ranin International is a diversified industrial services company
                headquartered in the Kingdom of Saudi Arabia. For over 15 years, we
                have delivered mission-critical manpower, materials, fabrication,
                and maintenance solutions to the region&apos;s most demanding
                sectors.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="mt-4 text-base leading-relaxed text-ranin-steel">
                Our commitment to operational excellence, safety, and integrity
                has made us a trusted partner for leading EPC contractors, oil
                &amp; gas operators, and government entities across the Kingdom.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Link
                href="/about"
                className="group mt-6 inline-flex items-center text-sm font-semibold text-ranin-navy transition-colors hover:text-ranin-accent"
              >
                About Us
                <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* ── Value Cards ────────────────────────────────────── */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3 lg:mt-20">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
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
              <value.icon className="size-8 text-ranin-accent" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-xl text-ranin-navy">
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
  );
}
