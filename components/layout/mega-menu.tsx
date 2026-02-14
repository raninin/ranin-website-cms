"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";

interface MegaMenuProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function MegaMenu({ onMouseEnter, onMouseLeave }: MegaMenuProps) {
  return (
    <motion.div
      className="absolute top-full left-0 right-0 z-50"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Invisible bridge zone to prevent flicker */}
      <div className="h-2" />

      <div className="border border-white/[0.06] bg-ranin-navy/95 backdrop-blur-xl">
        {/* Top accent line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-ranin-accent to-transparent" />

        <div className="mx-auto max-w-7xl px-6 py-5">
          {/* Header row */}
          <div className="mb-4 flex items-center justify-between">
            <p className="text-[11px] font-medium uppercase tracking-widest text-white/30">
              Our Services
            </p>
            <Link
              href="/services"
              className="group flex items-center gap-1.5 text-[12px] font-medium text-ranin-accent transition-colors hover:text-white"
            >
              View All
              <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Service cards — compact horizontal layout */}
          <div className="grid grid-cols-6 gap-2">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block overflow-hidden border border-white/[0.04] bg-ranin-navy transition-all duration-200 hover:-translate-y-0.5 hover:border-white/[0.1]"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={service.heroImage}
                        alt={service.shortTitle}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="200px"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,var(--ranin-navy)_0%,var(--ranin-navy)_5%,oklch(0.15_0.03_250/0.4)_50%,transparent_100%)]" />
                      {/* Icon badge */}
                      <div className="absolute bottom-1.5 left-1.5 flex size-6 items-center justify-center border border-white/[0.1] bg-ranin-navy/70 text-ranin-accent backdrop-blur-sm transition-colors group-hover:border-ranin-accent/30">
                        <Icon className="size-3" />
                      </div>
                    </div>
                    {/* Title */}
                    <div className="px-2 py-2">
                      <p className="text-[11px] font-medium leading-tight text-white/80 transition-colors group-hover:text-white">
                        {service.shortTitle}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
