export interface PartnerLogo {
  src: string;
  alt: string;
}

export interface FeaturedProject {
  title: string;
  sector: string;
  location: string;
  image: string;
}

export interface ClientsProjectsData {
  partnersHeading: string;
  partnersDescription: string;
  partnersRow1: PartnerLogo[];
  partnersRow2: PartnerLogo[];
  portfolioHeading: string;
  featuredProjects: FeaturedProject[];
}

export const defaultClientsProjects: ClientsProjectsData = {
  partnersHeading: "TRUSTED BY INDUSTRY LEADERS",
  partnersDescription:
    "Partnering with the world's leading engineering, construction, and energy companies across the Kingdom.",
  partnersRow1: [
    { src: "/partners/Saudi_Aramco_logo.png", alt: "Saudi Aramco" },
    { src: "/partners/SABIC_logo.png", alt: "SABIC" },
    { src: "/partners/MAADEN.png", alt: "Ma'aden" },
    { src: "/partners/NEOM.png", alt: "NEOM" },
    { src: "/partners/Sadara.png", alt: "Sadara" },
    { src: "/partners/SAMSUNG_Engineering.png", alt: "Samsung Engineering" },
    { src: "/partners/HYUNDAI_Engineering.png", alt: "Hyundai Engineering" },
    { src: "/partners/SAIPEM.png", alt: "Saipem" },
    { src: "/partners/Sinopec.png", alt: "Sinopec" },
    { src: "/partners/L_T.png", alt: "L&T" },
    { src: "/partners/DAEWOO.png", alt: "Daewoo" },
    { src: "/partners/DOOSAN.png", alt: "Doosan" },
  ],
  partnersRow2: [
    {
      src: "/partners/CCC-Consolidated_Contractors_Company.png",
      alt: "CCC",
    },
    { src: "/partners/Tecnicas_Reunidas_logo.png", alt: "Tecnicas Reunidas" },
    { src: "/partners/JGC_Corporation_company_logo.png", alt: "JGC" },
    { src: "/partners/MARAFIQ_logo.png", alt: "Marafiq" },
    { src: "/partners/Farabi.png", alt: "Farabi" },
    { src: "/partners/SASREF.png", alt: "SASREF" },
    { src: "/partners/Satrop.png", alt: "Satrop" },
    { src: "/partners/Yasref_logo.png", alt: "Yasref" },
    { src: "/partners/RC.png", alt: "Royal Commission" },
    { src: "/partners/Read_Sea.png", alt: "Red Sea" },
    { src: "/partners/S-Chem_logo.png", alt: "S-Chem" },
    { src: "/partners/Sipchem_logo.png", alt: "Sipchem" },
  ],
  portfolioHeading: "PROJECT HIGHLIGHTS",
  featuredProjects: [
    {
      title: "Petrochemical Complex Maintenance",
      sector: "Petrochemical",
      location: "Jubail Industrial City",
      image: "/images/13.png",
    },
    {
      title: "High-Rise Construction Support",
      sector: "Construction",
      location: "Riyadh, KSA",
      image: "/images/30.png",
    },
    {
      title: "Refinery Turnaround Project",
      sector: "Oil & Gas",
      location: "Yanbu, KSA",
      image: "/images/39.png",
    },
  ],
};
