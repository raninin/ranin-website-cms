"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronUp, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import {
  defaultCompanyInfo,
  type CompanyInfoData,
} from "@/lib/data/defaults/company-info";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const defaultServiceLinks = [
  { label: "Manpower Services", href: "/services/manpower-services" },
  { label: "Materials Supply", href: "/services/materials-supply" },
  { label: "Operation & Maintenance", href: "/services/operation-maintenance" },
  { label: "Fabrication Work", href: "/services/fabrication-work" },
  { label: "Sandblasting & Painting", href: "/services/sandblasting-painting" },
  { label: "Printing Press", href: "/services/printing-press" },
];

interface FooterProps {
  companyInfo?: CompanyInfoData;
  services?: { slug: string; shortTitle: string }[];
}

export function Footer({ companyInfo, services }: FooterProps) {
  const info = companyInfo ?? defaultCompanyInfo;
  const serviceLinks = services
    ? services.map((s) => ({ label: s.shortTitle, href: `/services/${s.slug}` }))
    : defaultServiceLinks;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-ranin-navy pt-24 lg:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── 4-Column Grid ──────────────────────────────────── */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Col 1: Logo + Tagline */}
          <ScrollReveal>
            <div>
              <Image
                src="/ranin-logo.png"
                alt="Ranin International"
                width={140}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-ranin-steel">
                {info.tagline}
              </p>

              {/* Social icons */}
              <div className="mt-6 flex gap-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center border border-white/[0.08] text-ranin-steel transition-all duration-300 hover:border-ranin-accent/40 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="size-4" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center border border-white/[0.08] text-ranin-steel transition-all duration-300 hover:border-ranin-accent/40 hover:text-white"
                  aria-label="X (Twitter)"
                >
                  <Twitter className="size-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center border border-white/[0.08] text-ranin-steel transition-all duration-300 hover:border-ranin-accent/40 hover:text-white"
                  aria-label="Facebook"
                >
                  <Facebook className="size-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center border border-white/[0.08] text-ranin-steel transition-all duration-300 hover:border-ranin-accent/40 hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="size-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Col 2: Quick Links */}
          <ScrollReveal delay={0.1}>
            <div>
              <h4 className="font-display text-sm tracking-wider text-white">
                QUICK LINKS
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ranin-steel transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Col 3: Services */}
          <ScrollReveal delay={0.2}>
            <div>
              <h4 className="font-display text-sm tracking-wider text-white">
                SERVICES
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {serviceLinks.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="text-sm text-ranin-steel transition-colors hover:text-white"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Col 4: Contact */}
          <ScrollReveal delay={0.3}>
            <div>
              <h4 className="font-display text-sm tracking-wider text-white">
                CONTACT
              </h4>
              <ul className="mt-4 flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-ranin-accent" />
                  <span className="text-sm text-ranin-steel whitespace-pre-line">
                    {info.address}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0 text-ranin-accent" />
                  <a
                    href={`tel:${info.phone.replace(/\s/g, "")}`}
                    className="text-sm text-ranin-steel transition-colors hover:text-white"
                  >
                    {info.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-4 shrink-0 text-ranin-accent" />
                  <a
                    href={`mailto:${info.email}`}
                    className="text-sm text-ranin-steel transition-colors hover:text-white"
                  >
                    {info.email}
                  </a>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Bottom Bar ─────────────────────────────────────── */}
        <Separator className="mt-16 bg-white/[0.06]" />

        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="font-mono text-[10px] tracking-wider text-ranin-steel/60 flex items-center gap-1.5">
            Developed by
            <a
              href="https://taqneo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-ranin-steel/80 transition-colors hover:text-white"
            >
              <Image
                src="/inhouse/taqneo.svg"
                alt="Taqneo"
                width={14}
                height={14}
                className="inline-block h-3.5 w-auto"
              />
              Taqneo
            </a>
            Software Team
            <a href="https://chnspart.com" target="_blank" rel="noopener noreferrer" aria-hidden="true" tabIndex={-1} className="absolute opacity-0 pointer-events-none">chnspart</a>
            <a href="https://oonkoo.com" target="_blank" rel="noopener noreferrer" aria-hidden="true" tabIndex={-1} className="absolute opacity-0 pointer-events-none">oonkoo</a>
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="font-mono text-[10px] tracking-wider text-ranin-steel/60 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="font-mono text-[10px] tracking-wider text-ranin-steel/60 transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* ── Back to Top Button ────────────────────────────────── */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.3 }}
      >
        <Button
          size="icon"
          onClick={scrollToTop}
          className="bg-ranin-accent text-white shadow-lg hover:bg-ranin-accent/90"
          aria-label="Back to top"
        >
          <ChevronUp className="size-5" />
        </Button>
      </motion.div>
    </footer>
  );
}
