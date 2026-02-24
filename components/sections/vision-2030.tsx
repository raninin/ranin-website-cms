"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SplitText } from "@/components/animations/split-text";
import { defaultVision2030, type Vision2030Data } from "@/lib/data/defaults/vision-2030";

export function Vision2030({ data }: { data?: Vision2030Data }) {
  const d = data ?? defaultVision2030;
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0.2, 0.6], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-ranin-navy via-ranin-blue/60 to-ranin-navy py-28 lg:py-40"
    >
      {/* Vision 2030 watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="select-none font-display text-[20vw] leading-none text-white/[0.02]">
          2030
        </span>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        {/* Gold accent line */}
        <div className="mx-auto mb-10 h-[2px] max-w-xs overflow-hidden bg-white/[0.06]">
          <motion.div
            className="h-full bg-ranin-gold"
            style={{ width: lineWidth }}
          />
        </div>

        <SplitText
          as="h2"
          className="font-display text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl"
          delay={0}
          stagger={0.06}
          yOffset={40}
        >
          {d.heading}
        </SplitText>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ranin-steel md:mt-8 md:text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {d.description}
        </motion.p>

        {/* Decorative elements */}
        <motion.div
          className="mx-auto mt-10 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="h-px w-12 bg-ranin-gold/40" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ranin-gold/60">
            {d.tagline}
          </span>
          <div className="h-px w-12 bg-ranin-gold/40" />
        </motion.div>
      </div>
    </section>
  );
}
