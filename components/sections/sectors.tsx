"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/shared/section-label";
import { defaultSectors, type SectorsData } from "@/lib/data/defaults/sectors";
import { getIcon } from "@/lib/data/icons";

export function Sectors({ data }: { data?: SectorsData }) {
  const d = data ?? defaultSectors;
  return (
    <section className="relative bg-ranin-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <SectionLabel>{d.sectionLabel}</SectionLabel>
          <h2 className="mt-4 font-display text-4xl text-white md:text-5xl lg:text-6xl">
            {d.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-ranin-steel">
            {d.description}
          </p>
        </div>

        {/* Sector Cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-5">
          {d.sectors.map((sector, i) => {
            const Icon = getIcon(sector.iconName);
            return (
            <motion.div
              key={sector.title}
              className="group relative overflow-hidden border border-white/[0.06] bg-ranin-blue/20 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-ranin-accent/30 lg:p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              {/* Background image */}
              <Image
                src={sector.image}
                alt=""
                fill
                className="object-cover opacity-[0.06] transition-opacity duration-500 group-hover:opacity-[0.14]"
                sizes="(max-width: 640px) 50vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ranin-navy via-ranin-navy/60 to-transparent" />

              {/* Content */}
              <div className="relative z-10">
                <div className="mb-5 inline-block animate-[float_3s_ease-in-out_infinite]">
                  <Icon
                    className="size-8 text-ranin-accent transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="font-display text-xl text-white">
                  {sector.title.toUpperCase()}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ranin-steel transition-colors duration-300 group-hover:text-white/70">
                  {sector.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 z-10 h-[2px] w-0 bg-ranin-accent transition-all duration-500 group-hover:w-full" />
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
