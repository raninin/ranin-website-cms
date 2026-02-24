"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/animations/counter";
import { Separator } from "@/components/ui/separator";
import { defaultTrustBar, type TrustBarData } from "@/lib/data/defaults/trust-bar";

export function TrustBar({ data }: { data?: TrustBarData }) {
  const d = data ?? defaultTrustBar;
  return (
    <section className="relative z-10 border-y border-white/[0.06] bg-ranin-navy">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center px-6 py-10 gap-y-8 md:py-12 lg:py-14">
        {d.metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            className="relative flex flex-1 basis-full flex-col items-center text-center md:basis-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            {/* Vertical separator (desktop only, not on first item) */}
            {i > 0 && (
              <Separator
                orientation="vertical"
                className="absolute left-0 top-1/2 hidden h-12 -translate-y-1/2 bg-gradient-to-b from-transparent via-white/[0.06] to-transparent md:block"
              />
            )}

            <Counter
              target={metric.value}
              suffix={metric.suffix}
              className="font-display text-4xl text-white md:text-5xl"
              duration={2}
            />
            <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ranin-steel">
              {metric.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
