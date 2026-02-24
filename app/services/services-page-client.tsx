"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionLabel } from "@/components/shared/section-label";
import { CTAStrip } from "@/components/sections/cta-strip";
import type { Service } from "@/lib/data/services";
import type { ServicesPageData } from "@/lib/data/defaults/services-page";
import { getIcon } from "@/lib/data/icons";
import { SubtlePatternBg } from "@/components/shared/subtle-pattern-bg";

interface Props {
  services: Omit<Service, "icon">[];
  pageContent: ServicesPageData;
}

export default function ServicesPageClient({ services, pageContent }: Props) {
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
            <SectionLabel>What We Do</SectionLabel>
            <h1 className="mt-4 font-display text-5xl text-white md:text-6xl lg:text-7xl">
              {pageContent.heroHeading}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ranin-steel">
              {pageContent.heroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* -- Services Grid ----------------------------------------------- */}
      <section className="relative overflow-hidden bg-ranin-light py-24 lg:py-32">
        <SubtlePatternBg src="/images/14.png" opacity={0.09} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 lg:gap-8">
            {services.map((service, i) => {
              const Icon = getIcon(service.iconName ?? "Package");
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                >
                  <Link href={`/services/${service.slug}`} className="group block">
                    <div
                      className={`grid overflow-hidden border border-ranin-navy/[0.06] transition-all duration-500 hover:border-ranin-accent/20 hover:shadow-xl lg:grid-cols-2 ${
                        i % 2 === 1 ? "lg:direction-rtl" : ""
                      }`}
                    >
                      {/* Image */}
                      <div
                        className={`relative h-64 overflow-hidden lg:h-auto lg:min-h-[360px] ${
                          i % 2 === 1 ? "lg:order-2" : ""
                        }`}
                      >
                        <Image
                          src={service.heroImage}
                          alt={service.shortTitle}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ranin-navy/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-ranin-navy/10" />
                        <Badge
                          variant="outline"
                          className="absolute top-4 left-4 border-white/20 font-mono text-xs text-white/80"
                        >
                          {String(service.id).padStart(2, "0")}
                        </Badge>
                      </div>

                      {/* Content */}
                      <div
                        className={`flex flex-col justify-center bg-white p-8 lg:p-12 ${
                          i % 2 === 1 ? "lg:order-1" : ""
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon
                            className="size-6 text-ranin-accent"
                            strokeWidth={1.5}
                          />
                          <span className="font-mono text-[10px] uppercase tracking-widest text-ranin-steel">
                            Service {String(service.id).padStart(2, "0")}
                          </span>
                        </div>
                        <h2 className="mt-4 whitespace-pre-line font-display text-3xl text-ranin-navy lg:text-4xl">
                          {service.title}
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
                          {service.description}
                        </p>

                        {/* Features preview */}
                        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                          {service.features.slice(0, 4).map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-2 text-xs text-ranin-steel"
                            >
                              <span className="size-1 bg-ranin-accent" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ranin-navy transition-colors group-hover:text-ranin-accent">
                          Learn More
                          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTAStrip />
    </main>
  );
}
