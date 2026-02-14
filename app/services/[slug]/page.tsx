"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionLabel } from "@/components/shared/section-label";
import { services, getServiceBySlug } from "@/lib/data/services";
import { Certifications } from "@/components/sections/certifications";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-ranin-navy pt-20">
        <div className="text-center">
          <h1 className="font-display text-4xl text-white">SERVICE NOT FOUND</h1>
          <Link
            href="/services"
            className="mt-4 inline-flex items-center text-sm text-ranin-accent"
          >
            <ArrowLeft className="mr-2 size-4" />
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  const currentIndex = services.findIndex((s) => s.slug === slug);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService =
    currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

  /* Show a reasonable subset of gallery images */
  const galleryImages = service.images.slice(0, 12);

  return (
    <main>
      {/* ── Hero ────────────────────────────────────────────── */}
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
              <service.icon className="size-6 text-ranin-accent" strokeWidth={1.5} />
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

      {/* ── Description + Features ──────────────────────────── */}
      <section className="bg-ranin-light py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Long description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel className="text-ranin-accent">Overview</SectionLabel>
              <h2 className="mt-4 font-display text-3xl text-ranin-navy sm:text-4xl">
                WHAT WE DELIVER
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ranin-steel">
                {service.longDescription}
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center text-sm font-semibold text-ranin-navy transition-colors hover:text-ranin-accent"
              >
                Request a Quote
                <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <SectionLabel className="text-ranin-accent">Capabilities</SectionLabel>
              <h2 className="mt-4 font-display text-3xl text-ranin-navy sm:text-4xl">
                KEY FEATURES
              </h2>
              <div className="mt-6 grid gap-4">
                {service.featureGroups.map((group, i) => (
                  <motion.div
                    key={group.title}
                    className="border border-ranin-navy/[0.06] bg-white p-5"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <h3 className="font-display text-base text-ranin-navy">
                      {group.title.toUpperCase()}
                    </h3>
                    <div className="mt-3 grid gap-2">
                      {group.details.map((detail) => (
                        <div key={detail} className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-ranin-accent" />
                          <span className="text-sm text-ranin-steel">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Image Gallery ───────────────────────────────────── */}
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
                className="group relative aspect-[4/3] overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
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

      {/* ── Prev / Next Navigation ──────────────────────────── */}
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

      {/* ── Certifications CTA ─────────────────────────────── */}
      <Certifications />
    </main>
  );
}
