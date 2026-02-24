"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { SplitText } from "@/components/animations/split-text";
import { SectionLabel } from "@/components/shared/section-label";
import { defaultHero, type HeroData } from "@/lib/data/defaults/hero";

/* ── Lazy-load Antigravity (Three.js — client only) ─────── */
const Antigravity = dynamic(
  () => import("@/components/animations/antigravity"),
  { ssr: false }
);

/* ── Scroll Indicator ────────────────────────────────────── */
function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 lg:bottom-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 0.6 }}
    >
      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-ranin-steel/60">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="size-4 text-ranin-steel/40" />
      </motion.div>
    </motion.div>
  );
}

/* ── Hero Section ────────────────────────────────────────── */
export function Hero({ data }: { data?: HeroData }) {
  const d = data ?? defaultHero;
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], ["0%", "12%"]);
  const particleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const imageStripY = useTransform(scrollYProgress, [0, 0.3], ["0%", "40%"]);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-dvh flex-col overflow-hidden bg-ranin-navy"
    >
      {/* ── Layer 0: Background image (very subtle atmosphere) ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src={d.backgroundImage}
          alt=""
          fill
          className="object-cover opacity-[0.50]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ranin-navy via-ranin-navy/80 to-ranin-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ranin-navy/60 via-transparent to-ranin-navy/60" />
      </div>

      {/* ── Layer 1: Antigravity Particles ────────────────────── */}
      <motion.div
        className="absolute inset-0 z-[1]"
        style={{ opacity: particleOpacity }}
      >
        <Antigravity
          count={300}
          magnetRadius={8}
          ringRadius={7}
          waveSpeed={0.3}
          waveAmplitude={0.6}
          particleSize={0.8}
          lerpSpeed={0.05}
          color="#1e3a52"
          autoAnimate={false}
          particleVariance={0.6}
          rotationSpeed={0}
          depthFactor={0.8}
          pulseSpeed={2}
          particleShape="tetrahedron"
          fieldStrength={10}
        />
      </motion.div>

      {/* ── Layer 2: Radial vignette focus ────────────────────── */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.15_0.03_250)_100%)]" />

      {/* ── Layer 3: Content ──────────────────────────────────── */}
      <motion.div
        className="pointer-events-none relative z-10 flex flex-1 flex-col items-center justify-center px-6"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        >
          <SectionLabel className="text-ranin-steel/80">
            {d.sectionLabel}
          </SectionLabel>
        </motion.div>

        {/* H1 */}
        <div className="mt-6 max-w-5xl text-center md:mt-8">
          <SplitText
            className="font-display text-[clamp(2.5rem,8vw,6.5rem)] leading-[1.02] text-white"
            delay={0.7}
            stagger={0.07}
            yOffset={50}
          >
            {d.heading}
          </SplitText>
        </div>

        {/* Subheading */}
        <motion.p
          className="mx-auto mt-5 max-w-xl text-center text-sm leading-relaxed text-ranin-steel sm:text-base md:mt-7 md:max-w-2xl md:text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
        >
          {d.subheading}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="pointer-events-auto mt-8 flex flex-col items-center gap-4 sm:flex-row md:mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.6, ease: "easeOut" }}
        >
          <MagneticButton>
            <Button
              size="lg"
              className="cta-shimmer group h-12 bg-ranin-accent px-8 text-sm font-semibold tracking-wide text-white hover:bg-ranin-accent/90"
            >
              {d.ctaPrimary.label}
              <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </MagneticButton>

          <MagneticButton>
            <Button
              variant="outline"
              size="lg"
              className="group h-12 border-white/15 px-8 text-sm font-semibold tracking-wide text-white/80 hover:border-white/30 hover:bg-white/5 hover:text-white"
            >
              {d.ctaSecondary.label}
            </Button>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* ── Layer 4: Bottom image strip (desktop) ─────────────── */}
      <motion.div
        className="pointer-events-auto relative z-10 hidden pb-16 lg:block"
        style={{ y: imageStripY }}
      >
        <motion.div
          className="mx-auto flex max-w-5xl items-end justify-center gap-[1px] px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8, ease: "easeOut" }}
        >
          {d.images.map((img, i) => (
            <motion.div
              key={img.label}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 + i * 0.1 }}
            >
              {/* Image card */}
              <div className="relative h-20 w-36 overflow-hidden border border-white/[0.06] xl:h-24 xl:w-44">
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover opacity-40 transition-all duration-500 group-hover:scale-105 group-hover:opacity-70"
                  sizes="180px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ranin-navy/90 via-ranin-navy/40 to-transparent" />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 px-3 pb-2">
                  <span className="font-mono text-[9px] text-ranin-accent/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] tracking-wider text-white/50 transition-colors group-hover:text-white/80">
                    {img.label}
                  </span>
                </div>
              </div>

              {/* Active indicator line on hover */}
              <div className="h-[2px] w-full bg-white/[0.03] transition-colors duration-300 group-hover:bg-ranin-accent/40" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator ──────────────────────────────────── */}
      <div className="lg:hidden">
        <ScrollIndicator />
      </div>

      {/* ── Bottom accent line ────────────────────────────────── */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-px bg-gradient-to-r from-transparent via-ranin-accent/20 to-transparent" />
    </section>
  );
}
