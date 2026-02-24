"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { SectionLabel } from "@/components/shared/section-label";
import { defaultCompanyInfo, type CompanyInfoData } from "@/lib/data/defaults/company-info";
import { SubtlePatternBg } from "@/components/shared/subtle-pattern-bg";

export function GoogleMap({ companyInfo }: { companyInfo?: CompanyInfoData }) {
  const info = companyInfo ?? defaultCompanyInfo;
  return (
    <section className="relative overflow-hidden bg-ranin-light py-24 lg:py-32">
      <SubtlePatternBg src="/images/30.png" opacity={0.09} />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel className="text-ranin-accent">Location</SectionLabel>
            <h2 className="mt-4 font-display text-3xl text-ranin-navy sm:text-4xl md:text-5xl">
              OUR OFFICE
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              Visit us at our headquarters in Jubail Industrial City — the heart
              of Saudi Arabia&apos;s industrial zone.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-ranin-accent" />
                <span className="text-sm text-ranin-steel whitespace-pre-line">
                  {info.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-ranin-accent" />
                <a
                  href={`tel:${info.phone.replace(/\s/g, "")}`}
                  className="text-sm text-ranin-steel transition-colors hover:text-ranin-accent"
                >
                  {info.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-ranin-accent" />
                <a
                  href={`mailto:${info.email}`}
                  className="text-sm text-ranin-steel transition-colors hover:text-ranin-accent"
                >
                  {info.email}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Map — 2 cols */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="overflow-hidden border border-ranin-navy/[0.06]">
              <iframe
                src={info.mapEmbedUrl}
                width="100%"
                height="400"
                style={{
                  border: 0,
                  filter:
                    "invert(1) hue-rotate(220deg) brightness(0.9) contrast(0.9) saturate(0.25)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Ranin International Office Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
