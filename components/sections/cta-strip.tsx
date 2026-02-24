"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { Button } from "@/components/ui/button";
import { defaultCTAStrip, type CTAStripData } from "@/lib/data/defaults/cta-strip";

export function CTAStrip({ data }: { data?: CTAStripData }) {
  const d = data ?? defaultCTAStrip;
  return (
    <section className="relative overflow-hidden bg-ranin-navy">
      {/* ── Image Mosaic Background ─────────────────────────── */}
      <div className="absolute inset-0 grid grid-cols-2 lg:grid-cols-4">
        {d.backgroundImages.map((img, i) => (
          <div key={img} className="relative overflow-hidden">
            <Image
              src={img}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-ranin-navy/85" />

      {/* Accent line top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-ranin-accent to-transparent opacity-40" />

      {/* Content */}
      <div className="relative py-24 lg:py-36">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
            {/* Left: Text — 3 cols */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ranin-accent">
                  {d.label}
                </span>
                <h2 className="mt-4 font-display text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  {d.heading}
                  <br />
                  <span className="text-ranin-accent">{d.headingAccent}</span>
                </h2>
                <p className="mt-4 max-w-lg text-base text-white/60 md:text-lg">
                  {d.description}
                </p>
              </motion.div>
            </div>

            {/* Right: CTAs — 2 cols */}
            <motion.div
              className="flex flex-col gap-4 lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <MagneticButton>
                <Link href={d.ctaPrimary.href} className="block">
                  <Button
                    size="lg"
                    className="group h-14 w-full bg-ranin-accent px-8 text-sm font-semibold text-white hover:bg-ranin-accent/90"
                  >
                    {d.ctaPrimary.label}
                    <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </MagneticButton>

              <MagneticButton>
                <a href={d.ctaSecondary.href} className="block">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group h-14 w-full border-white/20 px-8 text-sm font-semibold text-white hover:border-white/40 hover:bg-white/5"
                  >
                    <Phone className="mr-2 size-4" />
                    {d.ctaSecondary.label}
                  </Button>
                </a>
              </MagneticButton>

              <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-wider text-white/60">
                {d.hours}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom image strip — peek through */}
        <div className="mt-16 flex gap-2 overflow-hidden px-6 lg:mt-24 lg:px-8">
          {d.bottomImages.map(
            (img, i) => (
              <motion.div
                key={img}
                className="relative h-24 flex-1 overflow-hidden opacity-30 lg:h-32"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              >
                <Image
                  src={img}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* Accent line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-ranin-accent to-transparent opacity-40" />
    </section>
  );
}
