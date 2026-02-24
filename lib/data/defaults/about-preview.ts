export interface AboutPreviewValue {
  iconName: string;
  title: string;
  description: string;
}

export interface AboutPreviewData {
  sectionLabel: string;
  heading: string;
  paragraphs: string[];
  linkText: string;
  linkHref: string;
  image: string;
  imageAlt: string;
  values: AboutPreviewValue[];
}

export const defaultAboutPreview: AboutPreviewData = {
  sectionLabel: "Who We Are",
  heading: "YOUR TRUSTED INDUSTRIAL PARTNER SINCE 2010",
  paragraphs: [
    "Ranin International Company is a diversified industrial services company headquartered in the Kingdom of Saudi Arabia. For over 15 years, we have delivered mission-critical manpower, materials, fabrication, and maintenance solutions to the region's most demanding sectors.",
    "Our commitment to operational excellence, safety, and integrity has made us a trusted partner for leading EPC contractors, oil & gas operators, and government entities across the Kingdom.",
  ],
  linkText: "About Us",
  linkHref: "/about",
  image: "/images/47.png",
  imageAlt: "Ranin International worker at industrial facility",
  values: [
    {
      iconName: "ShieldCheck",
      title: "Safety First",
      description:
        "Zero-compromise safety culture across every project site and operation.",
    },
    {
      iconName: "Handshake",
      title: "Integrity",
      description:
        "Transparent partnerships built on trust, accountability, and honest communication.",
    },
    {
      iconName: "Award",
      title: "Excellence",
      description:
        "Relentless pursuit of quality in every deliverable, from manpower to materials.",
    },
  ],
};
