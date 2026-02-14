import {
  Users,
  Package,
  Wrench,
  Hammer,
  PaintBucket,
  Printer,
} from "lucide-react";

export interface ServiceFeature {
  title: string;
  details: string[];
}

export interface Service {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  features: string[];
  featureGroups: ServiceFeature[];
  icon: typeof Users;
  images: string[];
  heroImage: string;
}

export const services: Service[] = [
  {
    id: 1,
    slug: "manpower-services",
    title: "Industrial & Construction\nManpower Services",
    shortTitle: "Manpower Services",
    description:
      "Deploying skilled and semi-skilled workforce across Saudi Arabia — welders, fitters, riggers, electricians, and project managers tailored to your operational demands.",
    longDescription:
      "Ranin International provides comprehensive industrial and construction manpower solutions, deploying highly skilled and semi-skilled professionals across Saudi Arabia's most critical projects. From welders and pipe fitters to riggers, electricians, and project managers — we assemble teams tailored to your unique operational demands. Our workforce management ensures compliance, safety training, and rapid mobilization to keep your projects on schedule.",
    features: [
      "Skilled & semi-skilled workforce deployment",
      "Welders, fitters, riggers & electricians",
      "Project managers & supervisors",
      "Rapid mobilization capabilities",
      "Full compliance & safety training",
      "Flexible staffing models",
    ],
    featureGroups: [
      {
        title: "Piping & Structural",
        details: [
          "Piping Supervisor, Foreman, Fabricator, Fitter, Grinder Man",
          "Hydro Test Foreman, Line Checker",
          "Structural Supervisor, Foreman, Fabricator, Fitter",
          "Steel Erector, Iron Worker Foreman, Iron Worker",
        ],
      },
      {
        title: "Quality Control & Safety",
        details: [
          "Safety Supervisor, Inspector & Officer",
          "QA/QC Inspectors — Mechanical, Structural, Welding, Painting & Coating",
          "Mechanical Engineer (Static), Structural Engineer",
          "Environmental Coordinator, Scaffolding Supervisor",
        ],
      },
      {
        title: "Mechanical & GRE (RTR)",
        details: [
          "Mechanical Supervisor, Foreman, Technician, Fitter & Helper",
          "Millwright Foreman & Millwright",
          "RTR Supervisor, GRE Laminator Foreman, Pipe Laminator",
        ],
      },
      {
        title: "Electrical, Instrumentation & Operations",
        details: [
          "Industrial Electrician, Electrical Technician & HVAC Technician",
          "Instrument Fitter, Cable Terminator, Loop Checker",
          "Forklift, Manlift, Boom Truck & Crane Operators",
        ],
      },
      {
        title: "Tank, Vessel & Welding",
        details: [
          "Tank Supervisor, Foreman, Fabricator & Fitter",
          "Welders — 3G, 6G, 6GR, FCAW, SAW, MIG CO\u2082, Alloy, Inconel",
          "Welding Foreman, Welding Supervisor, NDT Coordinator",
        ],
      },
      {
        title: "Rigging, Civil & Scaffolding",
        details: [
          "Riggers (Level I, II, III), Rigging Foreman & Supervisor",
          "Civil Supervisor, Foreman, Steel Fixer, Carpenter, Flagman",
          "Scaffolding Inspector, Supervisor, Foreman & Scaffolder",
        ],
      },
      {
        title: "Delivery Models",
        details: [
          "Short-term, shutdown & turnaround teams",
          "Long-term, site-based staffing",
          "Project-based workforce packages",
          "Outsourced teams with supervision",
        ],
      },
    ],
    icon: Users,
    images: [
      "/services/Industrial_And_Construction_Manpower_Services/icms (1).png",
      "/services/Industrial_And_Construction_Manpower_Services/icms (2).png",
    ],
    heroImage:
      "/services/Industrial_And_Construction_Manpower_Services/icms (1).png",
  },
  {
    id: 2,
    slug: "materials-supply",
    title: "Industrial & Construction\nMaterials Supply",
    shortTitle: "Materials Supply",
    description:
      "Comprehensive procurement and supply chain management for industrial-grade materials, structural steel, piping, valves, and construction consumables.",
    longDescription:
      "We offer end-to-end procurement and supply chain management for industrial-grade materials essential to construction and industrial operations. From structural steel and piping to valves, fittings, and construction consumables — our supply chain expertise ensures timely delivery, quality assurance, and competitive pricing. We partner with leading manufacturers to guarantee materials meet international standards.",
    features: [
      "Structural steel & piping supply",
      "Valves, fittings & flanges",
      "Construction consumables",
      "Quality assurance & certification",
      "Competitive procurement",
      "Logistics & timely delivery",
    ],
    featureGroups: [
      {
        title: "Electrical",
        details: [
          "Cables, wires, panels & switchgear",
          "Lighting, conduits, cable trays & accessories",
        ],
      },
      {
        title: "Mechanical (SS & CS)",
        details: [
          "Pipes, fittings, flanges & valves",
          "Fasteners & structural components",
        ],
      },
      {
        title: "Power Tools",
        details: [
          "Electric tools & hand tools",
          "Welding & cutting equipment",
        ],
      },
      {
        title: "Piping Systems",
        details: [
          "PVC, HDPE & GI pipes",
          "Fittings & connectors",
        ],
      },
      {
        title: "Safety (PPE)",
        details: [
          "Helmets, safety shoes & gloves",
          "Protective wear & site safety items",
        ],
      },
      {
        title: "Quality Assurance",
        details: [
          "Material compliance & documentation",
          "Packaging & logistics planning",
          "Delivery scheduling & site coordination",
        ],
      },
    ],
    icon: Package,
    images: [
      "/services/Industries_And_Construction_Materials_Supply/icmsa (1).png",
      "/services/Industries_And_Construction_Materials_Supply/icmsa (2).png",
    ],
    heroImage:
      "/services/Industries_And_Construction_Materials_Supply/icmsa (1).png",
  },
  {
    id: 3,
    slug: "operation-maintenance",
    title: "Operation &\nMaintenance",
    shortTitle: "Operation & Maintenance",
    description:
      "Turnkey O&M services for refineries, power plants, and industrial facilities — ensuring maximum uptime, safety compliance, and operational efficiency.",
    longDescription:
      "Ranin International delivers turnkey Operation & Maintenance services for refineries, power plants, petrochemical complexes, and industrial facilities. Our O&M teams ensure maximum uptime, strict safety compliance, and operational efficiency through preventive maintenance programs, shutdown support, and continuous monitoring. We keep critical infrastructure running at peak performance.",
    features: [
      "Preventive & corrective maintenance",
      "Plant shutdown & turnaround support",
      "Refinery & power plant O&M",
      "Safety compliance management",
      "24/7 operational monitoring",
      "Equipment inspection & testing",
    ],
    featureGroups: [
      {
        title: "Mechanical Systems",
        details: [
          "Rotating & static equipment maintenance",
          "Pump, compressor & turbine servicing",
        ],
      },
      {
        title: "Electrical Systems",
        details: [
          "HV/LV switchgear & distribution maintenance",
          "Motor control centers & transformers",
        ],
      },
      {
        title: "HVAC Systems",
        details: [
          "Chiller, AHU & ductwork servicing",
          "Building climate control optimization",
        ],
      },
      {
        title: "Firefighting & Fire Alarm",
        details: [
          "Fire suppression system testing & maintenance",
          "Alarm panel inspection & calibration",
        ],
      },
      {
        title: "Generators & Power",
        details: [
          "Diesel & gas generator maintenance",
          "UPS & emergency power systems",
        ],
      },
      {
        title: "Civil & Building Services",
        details: [
          "Structural integrity inspections",
          "Plumbing, drainage & facility upkeep",
        ],
      },
      {
        title: "Service Delivery",
        details: [
          "Experienced engineers & certified technicians",
          "Work planning, supervision & reporting",
          "Safety & regulatory compliance",
        ],
      },
    ],
    icon: Wrench,
    images: [
      "/services/Operation_And_Maintenance/om (1).png",
      "/services/Operation_And_Maintenance/om (2).png",
      "/services/Operation_And_Maintenance/om (3).png",
      "/services/Operation_And_Maintenance/om (4).png",
      "/services/Operation_And_Maintenance/om (5).png",
      "/services/Operation_And_Maintenance/om (6).png",
    ],
    heroImage: "/services/Operation_And_Maintenance/om (1).png",
  },
  {
    id: 4,
    slug: "fabrication-work",
    title: "Fabrication\nWork",
    shortTitle: "Fabrication Work",
    description:
      "Precision fabrication of structural steel, pressure vessels, piping spools, tanks, and custom metalwork — from engineering to final inspection.",
    longDescription:
      "Our fabrication division specializes in precision manufacturing of structural steel, pressure vessels, piping spools, storage tanks, and custom metalwork. From initial engineering and design through cutting, welding, assembly, and final inspection — we deliver fabricated components that meet the most stringent international codes and standards. Our state-of-the-art facilities handle projects of all scales.",
    features: [
      "Structural steel fabrication",
      "Pressure vessel manufacturing",
      "Piping spool fabrication",
      "Tank & vessel construction",
      "Custom metalwork & assemblies",
      "NDT & quality inspection",
    ],
    featureGroups: [
      {
        title: "Structural Steel Fabrication",
        details: [
          "Industrial & commercial structural steel",
          "Beams, columns, trusses & platforms",
        ],
      },
      {
        title: "Piping Fabrication",
        details: [
          "Cutting, fit-up, welding & spool assembly",
          "Carbon steel, stainless steel & alloy piping",
        ],
      },
      {
        title: "Housing Fabrication",
        details: [
          "Equipment enclosures & shelters",
          "Protective structures & custom builds",
        ],
      },
      {
        title: "Quality & Compliance",
        details: [
          "Procedure-driven execution",
          "Continuous quality control & dimensional inspection",
          "Full documentation & traceability",
        ],
      },
    ],
    icon: Hammer,
    images: Array.from({ length: 25 }, (_, i) => `/services/Fabrication_Work/fab (${i + 1}).png`),
    heroImage: "/services/Fabrication_Work/fab (1).png",
  },
  {
    id: 5,
    slug: "sandblasting-painting",
    title: "Sandblasting, Painting\n& Galvanizing",
    shortTitle: "Sandblasting & Painting",
    description:
      "Surface preparation and protective coating services — industrial sandblasting, epoxy systems, fireproofing, and hot-dip galvanizing for lasting corrosion protection.",
    longDescription:
      "We provide comprehensive surface preparation and protective coating services to extend the lifespan of industrial structures and equipment. Our capabilities include industrial sandblasting, application of advanced epoxy and polyurethane coating systems, fireproofing, and hot-dip galvanizing. Every project is executed to international coating standards, ensuring lasting corrosion protection in the harshest environments.",
    features: [
      "Industrial sandblasting (Sa 2.5 / Sa 3)",
      "Epoxy & polyurethane coating systems",
      "Fireproofing applications",
      "Hot-dip galvanizing",
      "Coating inspection & DFT testing",
      "Corrosion protection solutions",
    ],
    featureGroups: [
      {
        title: "Surface Preparation",
        details: [
          "Sandblasting for proper surface cleaning (Sa 2.5 / Sa 3)",
          "Mechanical & chemical surface preparation",
        ],
      },
      {
        title: "Industrial Painting",
        details: [
          "Epoxy & polyurethane coating systems",
          "Application per approved coating specifications",
          "Fireproofing & intumescent coatings",
        ],
      },
      {
        title: "Galvanizing",
        details: [
          "Hot-dip galvanizing for long-term corrosion protection",
          "Batch & continuous galvanizing processes",
        ],
      },
      {
        title: "Inspection & Standards",
        details: [
          "Coating inspection & DFT testing at all stages",
          "Compliance with international & project standards",
          "Quality assurance documentation",
        ],
      },
    ],
    icon: PaintBucket,
    images: [
      "/services/Sandblasting_Painting_And_Galvanizing_Work/spgw (1).png",
      "/services/Sandblasting_Painting_And_Galvanizing_Work/spgw (2).png",
      "/services/Sandblasting_Painting_And_Galvanizing_Work/spgw (3).png",
      "/services/Sandblasting_Painting_And_Galvanizing_Work/spgw (4).png",
      "/services/Sandblasting_Painting_And_Galvanizing_Work/spgw (5).png",
    ],
    heroImage:
      "/services/Sandblasting_Painting_And_Galvanizing_Work/spgw (1).png",
  },
  {
    id: 6,
    slug: "printing-press",
    title: "Printing Press\nServices",
    shortTitle: "Printing Press",
    description:
      "Full-service commercial and industrial printing — corporate collateral, safety signage, technical documentation, and large-format production.",
    longDescription:
      "Ranin International's printing press division provides full-service commercial and industrial printing solutions. From corporate collateral and safety signage to technical documentation and large-format production — we deliver high-quality printed materials that meet the demands of industrial and corporate environments. Our modern printing facility ensures precision, consistency, and fast turnaround.",
    features: [
      "Corporate branding & collateral",
      "Safety signage & labels",
      "Technical documentation printing",
      "Large-format printing",
      "Packaging & industrial labels",
      "Fast turnaround production",
    ],
    featureGroups: [
      {
        title: "Technical Printing",
        details: [
          "Engineering drawings & schematics",
          "Operational manuals & safety documents",
          "Reports & training documentation",
        ],
      },
      {
        title: "Corporate & Marketing",
        details: [
          "Brochures & corporate communication materials",
          "Corporate branding & collateral",
        ],
      },
      {
        title: "Production Capabilities",
        details: [
          "Digital & offset printing — small batch to large volume",
          "Large-format printing & signage",
          "Packaging & industrial labels",
        ],
      },
      {
        title: "Finishing & Quality",
        details: [
          "Laminating, binding, cutting & folding",
          "Proofing, inspection & specification compliance",
          "Confidential handling & on-time delivery",
        ],
      },
    ],
    icon: Printer,
    images: [
      "/services/Printing_Press_Services/pps (1).png",
      "/services/Printing_Press_Services/pps (2).png",
      "/services/Printing_Press_Services/pps (3).png",
      "/services/Printing_Press_Services/pps (4).png",
    ],
    heroImage: "/services/Printing_Press_Services/pps (1).png",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
