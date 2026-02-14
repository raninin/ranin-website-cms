"use client";

import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MegaMenu } from "./mega-menu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const megaMenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  const openMegaMenu = () => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    setMegaMenuOpen(true);
  };

  const closeMegaMenu = () => {
    megaMenuTimeout.current = setTimeout(() => setMegaMenuOpen(false), 150);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  /* Scroll-driven transitions: floating → edge-to-edge */
  const navPadding = useTransform(scrollY, [0, 80], [16, 0]);
  const navBgOpacity = useTransform(scrollY, [0, 80], [0.35, 0.9]);
  const navBlur = useTransform(scrollY, [0, 80], [12, 24]);

  return (
    <>
      {/* ── Desktop + Mobile Header Shell ──────────────── */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          paddingTop: navPadding,
          paddingLeft: navPadding,
          paddingRight: navPadding,
        }}
      >
        <motion.div
          className="relative overflow-hidden border border-white/[0.06]"
          style={{
            backgroundColor: useTransform(
              navBgOpacity,
              (v) => `oklch(0.13 0.03 250 / ${v})`
            ),
            backdropFilter: useTransform(
              navBlur,
              (v) => `blur(${v}px) saturate(1.4)`
            ),
          }}
        >
          {/* Top accent gradient */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-ranin-accent to-transparent opacity-50" />

          <nav className="mx-auto flex h-14 max-w-7xl items-center gap-6 px-5 lg:h-[60px] lg:px-6">
            {/* ── Logo ──────────────────────────────────── */}
            <Link href="/" className="shrink-0">
              <Image
                src="/ranin-logo.png"
                alt="Ranin International"
                width={130}
                height={38}
                className="h-8 w-auto lg:h-9"
                priority
              />
            </Link>

            {/* Vertical divider after logo */}
            <div className="hidden h-6 w-px bg-white/[0.08] lg:block" />

            {/* ── Desktop Nav — Sliding Highlight */}
            <div
              className="hidden flex-1 items-center lg:flex"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {navLinks.map((link, i) => {
                const active = isActive(link.href);
                const isServices = link.label === "Services";
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative px-4 py-2 text-[13px] font-medium transition-colors duration-200 hover:text-white ${
                      active || (isServices && megaMenuOpen)
                        ? "text-white"
                        : "text-white/50"
                    }`}
                    onMouseEnter={() => {
                      setHoveredIndex(i);
                      if (isServices) openMegaMenu();
                      else closeMegaMenu();
                    }}
                  >
                    {/* Sliding highlight box (hover or active) */}
                    {(hoveredIndex === i || (hoveredIndex === null && active)) && (
                      <motion.span
                        layoutId="nav-highlight"
                        className="absolute inset-0 border border-white/[0.05] bg-white/[0.05]"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* ── Desktop Actions ───────────────────────── */}
            <div className="hidden items-center gap-3 lg:flex">
              {/* Language segmented toggle */}
              <div className="flex h-7 items-center overflow-hidden border border-white/[0.08] font-mono text-[10px] tracking-wider">
                <button className="bg-white/[0.07] px-2.5 py-1 text-white transition-colors">
                  EN
                </button>
                <button className="px-2.5 py-1 text-white/40 transition-colors hover:text-white/70">
                  AR
                </button>
              </div>

              {/* CTA */}
              <Link href="/contact">
                <Button
                  size="sm"
                  className="group cta-shimmer bg-ranin-accent px-4 text-white hover:bg-ranin-accent/90"
                >
                  Get a Quote
                  <ArrowRight className="ml-1.5 size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </div>

            {/* ── Mobile Toggle ─────────────────────────── */}
            <button
              className="relative z-50 ml-auto flex size-10 items-center justify-center lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative flex size-5 flex-col items-center justify-center">
                <motion.span
                  className="absolute h-px w-5 bg-white"
                  animate={
                    mobileOpen
                      ? { rotate: 45, y: 0 }
                      : { rotate: 0, y: -4 }
                  }
                  transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                />
                <motion.span
                  className="absolute h-px w-5 bg-white"
                  animate={
                    mobileOpen
                      ? { opacity: 0, scaleX: 0 }
                      : { opacity: 1, scaleX: 1 }
                  }
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute h-px w-5 bg-white"
                  animate={
                    mobileOpen
                      ? { rotate: -45, y: 0 }
                      : { rotate: 0, y: 4 }
                  }
                  transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                />
              </div>
            </button>
          </nav>
        </motion.div>

        {/* ── Desktop Mega Menu ──────────────────────────── */}
        <AnimatePresence>
          {megaMenuOpen && (
            <MegaMenu
              onMouseEnter={openMegaMenu}
              onMouseLeave={closeMegaMenu}
            />
          )}
        </AnimatePresence>
      </motion.header>

      {/* ── Mobile Full-Screen Menu ────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-ranin-navy"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex h-full flex-col justify-center px-8 sm:px-12">
              {/* Nav Links */}
              <nav className="flex flex-col">
                {navLinks.map((link, i) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                    >
                      <motion.div
                        className="group flex items-center gap-5 border-b border-white/[0.06] py-5"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{
                          delay: 0.12 + i * 0.07,
                          duration: 0.5,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        <span
                          className={`font-display text-3xl transition-colors group-hover:text-white sm:text-4xl ${
                            active ? "text-white" : "text-white/80"
                          }`}
                        >
                          {link.label.toUpperCase()}
                        </span>
                        <ArrowRight
                          className={`ml-auto size-5 transition-all duration-300 group-hover:translate-x-1 group-hover:text-ranin-accent ${
                            active ? "text-ranin-accent" : "text-white/10"
                          }`}
                        />
                      </motion.div>
                    </Link>
                  );
                })}
              </nav>

              {/* Bottom Actions */}
              <motion.div
                className="mt-10 flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
              >
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button
                    size="lg"
                    className="group bg-ranin-accent px-8 text-white hover:bg-ranin-accent/90"
                  >
                    Get a Quote
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </Link>
                <div className="flex h-9 items-center overflow-hidden border border-white/[0.08] font-mono text-xs tracking-wider">
                  <button className="bg-white/[0.07] px-3 py-2 text-white">
                    EN
                  </button>
                  <button className="px-3 py-2 text-white/40">AR</button>
                </div>
              </motion.div>

              {/* Decorative corner accent */}
              <div className="pointer-events-none absolute bottom-8 right-8 size-24 border-b border-r border-ranin-accent/10" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
