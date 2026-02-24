export interface AboutPageValue {
  iconName: string;
  title: string;
  description: string;
}

export interface AboutPageMilestone {
  year: string;
  title: string;
  description: string;
}

export interface AboutPageStat {
  value: string;
  label: string;
}

export interface AboutPageData {
  heroImage: string;
  heroImageAlt: string;
  heroHeading: string;
  heroDescription: string;
  overviewImage: string;
  overviewStats: AboutPageStat[];
  storyHeading: string;
  storyParagraphs: string[];
  valuesHeading: string;
  values: AboutPageValue[];
  milestonesHeading: string;
  milestones: AboutPageMilestone[];
}

export const defaultAboutPage: AboutPageData = {
  heroImage: "/images/59.png",
  heroImageAlt: "Engineers reviewing blueprints",
  heroHeading: "YOUR TRUSTED PARTNER IN\nINDUSTRIAL EXCELLENCE",
  heroDescription:
    "For over 15 years, Ranin International has been a cornerstone of industrial services in the Kingdom — delivering mission-critical manpower, materials, and maintenance solutions.",
  overviewImage: "/images/56.png",
  overviewStats: [
    { value: "15+", label: "Years" },
    { value: "500+", label: "Projects" },
    { value: "6", label: "Services" },
  ],
  storyHeading: "A LEGACY OF INDUSTRIAL EXCELLENCE",
  storyParagraphs: [
    "Founded in 2010, Ranin International is a diversified industrial services company headquartered in Jubail Industrial City, Kingdom of Saudi Arabia. What started as a specialized manpower provider has grown into a comprehensive industrial partner — serving the nation's most critical sectors.",
    "Today, we provide end-to-end solutions spanning manpower deployment, industrial materials supply, operation & maintenance, precision fabrication, surface treatment, and commercial printing. Our commitment to safety, quality, and operational excellence has made us a trusted partner for leading EPC contractors, oil & gas operators, and government entities.",
  ],
  valuesHeading: "WHAT DRIVES US",
  values: [
    {
      iconName: "ShieldCheck",
      title: "Safety First",
      description:
        "Zero-compromise safety culture across every project site and operation. HSE compliance is embedded in our DNA.",
    },
    {
      iconName: "Handshake",
      title: "Integrity",
      description:
        "Transparent partnerships built on trust, accountability, and honest communication at every level.",
    },
    {
      iconName: "Award",
      title: "Excellence",
      description:
        "Relentless pursuit of quality in every deliverable — from manpower deployment to materials supply.",
    },
    {
      iconName: "Target",
      title: "Commitment",
      description:
        "Dedicated to delivering on time, within budget, and beyond expectations on every engagement.",
    },
  ],
  milestonesHeading: "MILESTONES",
  milestones: [
    {
      year: "2010",
      title: "Company Founded",
      description:
        "Ranin International established in Jubail Industrial City, KSA.",
    },
    {
      year: "2013",
      title: "First Major Contract",
      description:
        "Awarded manpower supply contract with Saudi Aramco contractors.",
    },
    {
      year: "2016",
      title: "Fabrication Division",
      description:
        "Launched dedicated fabrication workshop for structural steel & piping.",
    },
    {
      year: "2018",
      title: "500+ Workforce",
      description:
        "Scaled operations to deploy over 500 skilled workers across the Kingdom.",
    },
    {
      year: "2020",
      title: "O&M Expansion",
      description:
        "Expanded into turnkey Operation & Maintenance services for refineries.",
    },
    {
      year: "2023",
      title: "NEOM & Mega-Projects",
      description:
        "Selected as contractor for Saudi Arabia's landmark infrastructure projects.",
    },
  ],
};
