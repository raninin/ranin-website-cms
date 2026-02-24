export interface CTAStripData {
  label: string;
  heading: string;
  headingAccent: string;
  description: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  phone: string;
  hours: string;
  backgroundImages: string[];
  bottomImages: string[];
}

export const defaultCTAStrip: CTAStripData = {
  label: "Let's Work Together",
  heading: "HAVE A PROJECT",
  headingAccent: "IN MIND?",
  description:
    "Get a tailored proposal within 24-48 hours. Our team is ready to deliver excellence.",
  ctaPrimary: { label: "Request a Quote", href: "/contact" },
  ctaSecondary: { label: "Call Us Now", href: "tel:+966508011632" },
  phone: "+966508011632",
  hours: "Available Sun-Thu · 8AM-5PM (AST)",
  backgroundImages: [
    "/images/27.png",
    "/images/47.png",
    "/images/52.png",
    "/images/46.png",
  ],
  bottomImages: [
    "/images/13.png",
    "/images/39.png",
    "/images/57.png",
    "/images/14.png",
  ],
};
