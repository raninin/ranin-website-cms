"use client";

import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MegaMenu } from "./mega-menu";
import { ProjectsMegaMenu } from "./projects-mega-menu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

interface NavbarProps {
  services?: { slug: string; shortTitle: string; heroImage: string; iconName: string }[];
  projects?: { slug: string; title: string; sector: string; image: string }[];
}

export function Navbar({ services, projects }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [projectsMegaMenuOpen, setProjectsMegaMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const megaMenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const projectsMegaMenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  const openMegaMenu = () => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    setMegaMenuOpen(true);
    closeProjectsMegaMenu();
  };
  const closeMegaMenu = () => {
    megaMenuTimeout.current = setTimeout(() => setMegaMenuOpen(false), 150);
  };
  const openProjectsMegaMenu = () => {
    if (projectsMegaMenuTimeout.current) clearTimeout(projectsMegaMenuTimeout.current);
    setProjectsMegaMenuOpen(true);
    closeMegaMenu();
  };
  const closeProjectsMegaMenu = () => {
    projectsMegaMenuTimeout.current = setTimeout(() => setProjectsMegaMenuOpen(false), 150);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={false}
        animate={scrolled ? "scrolled" : "top"}
      >
        {/* ── Top utility bar — visible only at top ─────────── */}
        <motion.div
          className="overflow-hidden border-b border-white/[0.04] bg-ranin-navy/80 backdrop-blur-sm"
          variants={{
            top: { height: "auto", opacity: 1 },
            scrolled: { height: 0, opacity: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5">
            <span className="font-mono text-[10px] tracking-widest text-white/30">
              INDUSTRIAL & CONSTRUCTION SERVICES
            </span>
            <div className="flex items-center gap-4">
              <div className="flex h-6 items-center overflow-hidden border border-white/[0.08] font-mono text-[9px] tracking-wider">
                <button className="bg-white/[0.07] px-2 py-0.5 text-white transition-colors">
                  EN
                </button>
                <button className="px-2 py-0.5 text-white/40 transition-colors hover:text-white/70">
                  AR
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Main navbar ───────────────────────────────────── */}
        <motion.div
          className="relative border-b border-white/[0.06]"
          variants={{
            top: {
              backgroundColor: "oklch(0.13 0.03 250 / 1)",
            },
            scrolled: {
              backgroundColor: "oklch(0.13 0.03 250 / 1)",
            },
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ranin-accent/30 to-transparent" />

          <nav className="mx-auto flex max-w-7xl items-center px-5 lg:px-6">
            {/* ── Logo — prominent, with dedicated container ── */}
            <Link href="/" className="group relative shrink-0 py-3 pr-8 lg:py-4">
              <div>
                <motion.div
                  variants={{
                    top: { scale: 1 },
                    scrolled: { scale: 0.85 },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ originX: 0, originY: 0.5 }}
                >
                  <Image
                    src="/ranin-logo.png"
                    alt="Ranin International"
                    width={200}
                    height={84}
                    className="h-12 w-auto lg:h-16"
                    priority
                  />
                </motion.div>
              </div>
              {/* Right divider */}
              <div className="absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-white/[0.06] lg:block" />
            </Link>

            {/* ── Desktop Nav Links ───────────────────────── */}
            <div
              className="hidden flex-1 items-center pl-6 lg:flex"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {navLinks.map((link, i) => {
                const active = isActive(link.href);
                const isServices = link.label === "Services";
                const isProjects = link.label === "Projects";
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative px-4 py-2.5 text-[13px] font-medium tracking-wide transition-colors duration-200 hover:text-white ${
                      active || (isServices && megaMenuOpen) || (isProjects && projectsMegaMenuOpen)
                        ? "text-white"
                        : "text-white/50"
                    }`}
                    onMouseEnter={() => {
                      setHoveredIndex(i);
                      if (isServices) openMegaMenu();
                      else if (isProjects) openProjectsMegaMenu();
                      else { closeMegaMenu(); closeProjectsMegaMenu(); }
                    }}
                  >
                    {/* Animated underline indicator */}
                    {(hoveredIndex === i || (hoveredIndex === null && active)) && (
                      <motion.span
                        layoutId="nav-exp-indicator"
                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-ranin-accent"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* ── Desktop CTA ─────────────────────────────── */}
            <div className="hidden items-center gap-4 lg:flex">
              <Link href="/contact">
                <Button
                  className="group cta-shimmer bg-ranin-accent px-6 py-5 cursor-pointer text-white hover:bg-ranin-accent/90"
                >
                  Get a Quote
                  <ArrowRight className="ml-1.5 size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Button>
              </Link>
            </div>

            {/* ── Mobile Toggle ───────────────────────────── */}
            <button
              className="relative z-50 ml-auto flex size-10 items-center justify-center lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative flex size-5 flex-col items-center justify-center">
                <motion.span
                  className="absolute h-px w-5 bg-white"
                  animate={mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                  transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                />
                <motion.span
                  className="absolute h-px w-5 bg-white"
                  animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute h-px w-5 bg-white"
                  animate={mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                  transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                />
              </div>
            </button>
          </nav>
        </motion.div>

        {/* ── Desktop Mega Menus ──────────────────────────── */}
        <AnimatePresence>
          {megaMenuOpen && (
            <MegaMenu
              onMouseEnter={openMegaMenu}
              onMouseLeave={closeMegaMenu}
              services={services}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {projectsMegaMenuOpen && (
            <ProjectsMegaMenu
              onMouseEnter={openProjectsMegaMenu}
              onMouseLeave={closeProjectsMegaMenu}
              projects={projects}
            />
          )}
        </AnimatePresence>
      </motion.header>

      {/* ── Mobile Full-Screen Menu ──────────────────────── */}
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
              {/* Big logo in mobile menu */}
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <Image
                  src="/ranin-logo.png"
                  alt="Ranin International"
                  width={240}
                  height={100}
                  className="h-16 w-auto sm:h-20"
                />
                <div className="mt-3 h-px w-20 bg-ranin-accent/40" />
              </motion.div>

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
                          delay: 0.15 + i * 0.07,
                          duration: 0.5,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        <span className="font-mono text-xs text-ranin-accent/40">
                          {String(i + 1).padStart(2, "0")}
                        </span>
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
                  <button className="bg-white/[0.07] px-3 py-2 text-white">EN</button>
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
