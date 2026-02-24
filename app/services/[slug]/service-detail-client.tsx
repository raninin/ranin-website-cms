"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionLabel } from "@/components/shared/section-label";
import { CTAStrip } from "@/components/sections/cta-strip";
import type { Service } from "@/lib/data/services";
import { getIcon } from "@/lib/data/icons";
import { SubtlePatternBg } from "@/components/shared/subtle-pattern-bg";

type SerializedService = Omit<Service, "icon">;

interface Props {
  service: SerializedService;
  allServices: SerializedService[];
}

export default function ServiceDetailClient({ service, allServices }: Props) {
  const Icon = getIcon(service.iconName ?? "Package");

  const currentIndex = allServices.findIndex((s) => s.slug === service.slug);
  const prevService = currentIndex > 0 ? allServices[currentIndex - 1] : null;
  const nextService =
    currentIndex < allServices.length - 1 ? allServices[currentIndex + 1] : null;

  /* Show a reasonable subset of gallery images */
  const galleryImages = service.images.slice(0, 12);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goNext = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev !== null ? (prev + 1) % galleryImages.length : null
      ),
    [galleryImages.length]
  );
  const goPrev = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev !== null
          ? (prev - 1 + galleryImages.length) % galleryImages.length
          : null
      ),
    [galleryImages.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  return (
    <main>
      {/* -- Hero -------------------------------------------------------- */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-ranin-navy pb-16 pt-32 lg:min-h-[70vh] lg:pb-24 lg:pt-40">
        <Image
          src={service.heroImage}
          alt={service.shortTitle}
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
              href="/services"
              className="group mb-6 inline-flex items-center text-sm text-ranin-steel transition-colors hover:text-white"
            >
              <ArrowLeft className="mr-2 size-4 transition-transform group-hover:-translate-x-1" />
              All Services
            </Link>

            <div className="flex items-center gap-4">
              <Badge
                variant="outline"
                className="border-ranin-accent/30 font-mono text-xs text-ranin-accent"
              >
                {String(service.id).padStart(2, "0")}
              </Badge>
              <Icon className="size-6 text-ranin-accent" strokeWidth={1.5} />
            </div>

            <h1 className="mt-4 whitespace-pre-line font-display text-5xl text-white md:text-6xl lg:text-7xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ranin-steel">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* -- Description + Features -------------------------------------- */}
      <section className="relative bg-ranin-light py-24 lg:py-32">
        <SubtlePatternBg src="/images/9.png" opacity={0.09} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            {/* Long description -- sticky so it follows the features */}
            <motion.div
              className="lg:sticky lg:top-32 lg:self-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel className="text-ranin-accent">Overview</SectionLabel>
              <h2 className="mt-4 font-display text-4xl text-ranin-navy sm:text-5xl">
                WHAT WE DELIVER
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ranin-steel">
                {service.longDescription}
              </p>

              {/* Quick-glance feature list */}
              <div className="mt-8 grid gap-3">
                {service.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-3">
                    <div className="flex size-6 shrink-0 items-center justify-center bg-ranin-accent/10">
                      <CheckCircle2 className="size-3.5 text-ranin-accent" />
                    </div>
                    <span className="text-base text-ranin-navy">{feat}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="group mt-10 inline-flex items-center bg-ranin-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-ranin-accent/90"
              >
                Request a Quote
                <ArrowRight className="ml-3 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Features -- full list with visual weight */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <SectionLabel className="text-ranin-accent">Capabilities</SectionLabel>
                <h2 className="mt-4 font-display text-4xl text-ranin-navy sm:text-5xl">
                  KEY FEATURES
                </h2>
              </motion.div>

              <div className="mt-8 grid gap-5">
                {service.featureGroups.map((group, i) => (
                  <motion.div
                    key={group.title}
                    className="group/card relative overflow-hidden border border-ranin-navy/[0.06] bg-white p-6 transition-all duration-300 hover:border-ranin-accent/20 hover:shadow-lg lg:p-8"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    {/* Accent left border */}
                    <div className="absolute inset-y-0 left-0 w-1 bg-ranin-accent/0 transition-all duration-300 group-hover/card:bg-ranin-accent" />

                    <div className="flex items-center gap-4">
                      <span className="font-mono text-2xl font-light text-ranin-accent/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-xl text-ranin-navy">
                        {group.title.toUpperCase()}
                      </h3>
                    </div>
                    <div className="mt-5 grid gap-3 pl-12">
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
          </div>
        </div>
      </section>

      {/* -- Image Gallery ----------------------------------------------- */}
      <section className="bg-ranin-navy py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <SectionLabel>Gallery</SectionLabel>
            <h2 className="mt-4 font-display text-4xl text-white md:text-5xl">
              PROJECT GALLERY
            </h2>
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                onClick={() => setLightboxIndex(i)}
              >
                <Image
                  src={img}
                  alt={`${service.shortTitle} - Image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-ranin-navy/20 transition-opacity duration-300 group-hover:bg-ranin-navy/5" />
                <span className="absolute bottom-3 left-3 font-mono text-[10px] text-white/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Lightbox ---------------------------------------------------- */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center text-white/60 transition-colors hover:text-white lg:right-6 lg:top-6"
            >
              <X className="size-6" />
            </button>

            {/* Counter */}
            <span className="absolute left-4 top-4 font-mono text-xs text-white/40 lg:left-6 lg:top-6">
              {String(lightboxIndex + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}
            </span>

            {/* Prev button */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-2 top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center text-white/50 transition-colors hover:text-white lg:left-6"
            >
              <ChevronLeft className="size-8" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              className="relative h-[70vh] w-[90vw] max-w-5xl sm:h-[75vh] sm:w-[85vw]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[lightboxIndex]}
                alt={`${service.shortTitle} - Image ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>

            {/* Next button */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-2 top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center text-white/50 transition-colors hover:text-white lg:right-6"
            >
              <ChevronRight className="size-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* -- Prev / Next Navigation -------------------------------------- */}
      <section className="border-t border-white/[0.06] bg-ranin-navy">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-2">
          {prevService ? (
            <Link
              href={`/services/${prevService.slug}`}
              className="group flex items-center gap-4 border-r border-white/[0.06] p-8 transition-colors hover:bg-ranin-blue/20 lg:p-12"
            >
              <ArrowLeft className="size-5 text-ranin-steel transition-transform group-hover:-translate-x-1 group-hover:text-ranin-accent" />
              <div>
                <span className="text-xs uppercase tracking-wider text-ranin-steel">
                  Previous
                </span>
                <h4 className="mt-1 font-display text-lg text-white">
                  {prevService.shortTitle.toUpperCase()}
                </h4>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextService ? (
            <Link
              href={`/services/${nextService.slug}`}
              className="group flex items-center justify-end gap-4 p-8 text-right transition-colors hover:bg-ranin-blue/20 lg:p-12"
            >
              <div>
                <span className="text-xs uppercase tracking-wider text-ranin-steel">
                  Next
                </span>
                <h4 className="mt-1 font-display text-lg text-white">
                  {nextService.shortTitle.toUpperCase()}
                </h4>
              </div>
              <ArrowRight className="size-5 text-ranin-steel transition-transform group-hover:translate-x-1 group-hover:text-ranin-accent" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* -- Certifications CTA ------------------------------------------ */}
      <CTAStrip />
    </main>
  );
}
