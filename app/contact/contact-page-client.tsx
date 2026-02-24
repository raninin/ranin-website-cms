"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/shared/section-label";
import { SubtlePatternBg } from "@/components/shared/subtle-pattern-bg";
import type { ContactPageData } from "@/lib/data/defaults/contact-page";
import type { CompanyInfoData } from "@/lib/data/defaults/company-info";

interface Props {
  data: ContactPageData;
  companyInfo: CompanyInfoData;
}

export default function ContactPageClient({ data, companyInfo }: Props) {
  const contactCards = [
    {
      icon: MapPin,
      label: "Office Address",
      value: companyInfo.address,
      accent: "Visit our headquarters in the heart of Saudi Arabia's industrial zone.",
    },
    {
      icon: Phone,
      label: "Phone",
      value: companyInfo.phone,
      href: `tel:${companyInfo.phone.replace(/\s/g, "")}`,
      accent: "Speak directly with our team — we're available Sunday through Thursday.",
    },
    {
      icon: Mail,
      label: "Email",
      value: companyInfo.email,
      href: `mailto:${companyInfo.email}`,
      accent: "Send us your inquiry and we'll respond within 24 hours.",
    },
  ];

  return (
    <main>
      {/* -- Hero Banner ------------------------------------------------- */}
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-ranin-navy pb-16 pt-32 lg:min-h-[60vh] lg:pb-24 lg:pt-40">
        <Image
          src={data.heroImage}
          alt={data.heroImageAlt}
          fill
          className="object-cover opacity-[0.1]"
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
            <SectionLabel>Get in Touch</SectionLabel>
            <h1 className="mt-4 font-display text-5xl text-white md:text-6xl lg:text-7xl">
              {data.heroHeading}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ranin-steel">
              {data.heroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* -- Contact Cards ------------------------------------------------- */}
      <section className="relative overflow-hidden bg-ranin-light py-24 lg:py-32">
        <SubtlePatternBg src="/images/14.png" opacity={0.09} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel className="text-ranin-accent">Reach Out</SectionLabel>
            <h2 className="mt-4 font-display text-4xl text-ranin-navy md:text-5xl">
              HOW TO FIND US
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-ranin-steel">
              Whether you need manpower, materials, or maintenance — we&apos;re here to help. Reach out through any of the channels below.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-3">
            {contactCards.map((card, i) => {
              const inner = (
                <motion.div
                  className="group relative flex h-full flex-col overflow-hidden border border-ranin-navy/[0.06] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-ranin-accent/20 hover:shadow-2xl"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                >
                  {/* Top accent bar */}
                  <div className="h-1 w-full bg-ranin-accent/0 transition-all duration-500 group-hover:bg-ranin-accent" />

                  <div className="flex flex-1 flex-col p-8 lg:p-10">
                    {/* Icon */}
                    <div className="flex size-16 items-center justify-center bg-ranin-accent/10 transition-colors duration-300 group-hover:bg-ranin-accent">
                      <card.icon className="size-7 text-ranin-accent transition-colors duration-300 group-hover:text-white" strokeWidth={1.5} />
                    </div>

                    {/* Label */}
                    <span className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-ranin-steel">
                      {card.label}
                    </span>

                    {/* Value */}
                    <p className="mt-3 whitespace-pre-line font-display text-2xl text-ranin-navy lg:text-3xl">
                      {card.value.toUpperCase()}
                    </p>

                    {/* Description */}
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-ranin-steel">
                      {card.accent}
                    </p>

                    {/* Action hint */}
                    {card.href && (
                      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-ranin-navy transition-colors group-hover:text-ranin-accent">
                        {card.label === "Phone" ? "Call Now" : "Send Email"}
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    )}
                  </div>
                </motion.div>
              );

              return card.href ? (
                <a key={card.label} href={card.href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={card.label}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Google Map -------------------------------------------------- */}
      <section className="relative overflow-hidden bg-ranin-navy">
        <SubtlePatternBg src="/images/30.png" opacity={0.06} theme="dark" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="text-center">
            <SectionLabel>Location</SectionLabel>
            <h2 className="mt-4 font-display text-4xl text-white md:text-5xl">
              FIND US
            </h2>
          </div>

          <div className="mt-14 overflow-hidden border border-white/[0.06] lg:mt-20">
            <iframe
              src={data.mapEmbedUrl}
              width="100%"
              height="450"
              style={{
                border: 0,
                filter:
                  "invert(1) hue-rotate(220deg) brightness(0.9) contrast(0.9) saturate(0.25)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Ranin International Company Office Location"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
