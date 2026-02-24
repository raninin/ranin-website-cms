export interface ProjectScope {
  title: string;
  details: string[];
}

export interface BlogSection {
  heading: string;
  body: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  sector: string;
  location: string;
  description: string;
  longDescription: string;
  highlights: string[];
  scope: ProjectScope[];
  blogContent: BlogSection[];
  image: string;
  heroImage: string;
  services: string[];
  client: string;
  year: string;
  duration: string;
  status: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "petrochemical-complex-maintenance",
    title: "Petrochemical Complex Maintenance",
    sector: "Petrochemical",
    location: "Jubail Industrial City",
    description:
      "Comprehensive maintenance and turnaround services for a major petrochemical complex, deploying 200+ skilled tradesmen across multiple processing units.",
    longDescription:
      "Ranin International delivered full-scope maintenance and turnaround services for one of the largest petrochemical complexes in Jubail Industrial City. Over 200 skilled workers were mobilized across multiple processing units to execute planned shutdowns, corrective maintenance, and equipment overhauls. The turnaround was completed two days ahead of schedule with zero lost-time incidents.",
    highlights: [
      "200+ skilled workers deployed across multiple processing units simultaneously",
      "Zero lost-time incidents recorded throughout the full project duration",
      "Turnaround completed 2 days ahead of the client's aggressive schedule target",
      "Full compliance with client HSE requirements including permit-to-work protocols",
      "24/7 operations with structured multi-shift coverage and seamless handovers",
      "Integrated QA/QC inspection at every phase with 100% first-pass acceptance",
      "Pre-turnaround planning workshops conducted to identify and mitigate risks",
      "Over 120 work packs prepared, reviewed, and executed without scope conflicts",
    ],
    scope: [
      {
        title: "Mechanical Maintenance",
        details: [
          "Complete overhaul of rotating and static equipment including pumps, compressors, and vessels",
          "Heat exchanger tube bundle extraction, inspection, cleaning, and replacement",
          "Pump and compressor disassembly, bearing replacement, alignment, and performance testing",
          "Reactor internals inspection, catalyst screen replacement, and reassembly",
          "Valve overhaul and seat lapping for critical isolation and control valves",
        ],
      },
      {
        title: "Piping & Structural",
        details: [
          "Piping spool replacement and modification across high-temperature and high-pressure lines",
          "Structural steel repair, reinforcement, and corrosion remediation on pipe racks and platforms",
          "Flange management program covering bolt torquing, gasket replacement, and leak testing",
          "Installation of new piping tie-ins to accommodate process optimization upgrades",
          "Scaffolding erection and dismantling to provide safe access across all work zones",
        ],
      },
      {
        title: "Instrumentation & Electrical",
        details: [
          "Instrument calibration and loop testing for over 500 field devices",
          "Electrical switchgear maintenance including breaker testing and relay coordination checks",
          "Cable tray inspection, repair, and replacement of degraded power and signal cables",
          "Control valve positioner calibration and actuator servicing",
          "Motor insulation resistance testing and vibration analysis on critical drives",
        ],
      },
      {
        title: "Safety & Compliance",
        details: [
          "Confined space entry management with continuous atmospheric monitoring",
          "Hot work permit coordination and fire watch deployment at all active welding locations",
          "Daily toolbox talks and Job Safety Analysis (JSA) reviews for every work crew",
          "Emergency response drills conducted weekly with full crew participation",
          "Environmental compliance monitoring including waste segregation and spill prevention",
        ],
      },
    ],
    blogContent: [
      {
        heading: "Planning a Multi-Unit Turnaround",
        body: "Executing a turnaround across multiple petrochemical processing units requires months of detailed pre-planning before the first valve is closed. Our project management team developed over 120 individual work packs, each containing task-level instructions, material requirements, and resource assignments. Pre-turnaround workshops brought together operations, maintenance, and HSE stakeholders to walk through every critical path activity and identify potential bottlenecks before they could impact the schedule.",
      },
      {
        heading: "Workforce Mobilization and Multi-Shift Operations",
        body: "Deploying 200+ skilled tradesmen in a short mobilization window demanded a disciplined approach to workforce logistics. Welders, pipe fitters, riggers, instrument technicians, and mechanical specialists were sourced from our qualified manpower pool, with trade certifications verified before any worker arrived on site. Round-the-clock operations were organized into structured shifts with formal handover procedures, ensuring continuity of work progress and consistent safety standards across day and night crews.",
      },
      {
        heading: "Quality Assurance Under Pressure",
        body: "Aggressive turnaround timelines can create pressure to compromise on quality, but our approach ensured this never happened. Every weld joint, flange connection, and reassembled equipment package went through a defined QA/QC hold-point process. Radiographic testing, hydrostatic checks, and dimensional inspections were performed in sequence, with no work released to the next phase until all quality gates were cleared. The result was a 100% first-pass acceptance rate across all inspections.",
      },
      {
        heading: "Safety Culture in High-Risk Environments",
        body: "Petrochemical turnarounds present some of the highest-risk conditions in industrial maintenance: confined space entry, hot work adjacent to hydrocarbon systems, heavy lifts, and simultaneous operations across multiple work fronts. Our safety management program included mandatory daily toolbox talks, Job Safety Analysis reviews for every task, continuous gas monitoring, and dedicated fire watchers at all active welding locations. This systematic approach delivered zero lost-time incidents throughout the entire project duration.",
      },
    ],
    image: "/images/13.png",
    heroImage: "/images/13.png",
    services: ["Manpower", "O&M"],
    client: "Major Petrochemical Operator",
    year: "2023",
    duration: "4 Months",
    status: "Completed",
  },
  {
    id: 2,
    slug: "high-rise-construction-support",
    title: "High-Rise Construction Support",
    sector: "Construction",
    location: "Riyadh, KSA",
    description:
      "Full-spectrum manpower supply and materials procurement for a landmark high-rise development in Riyadh with 350+ workers deployed.",
    longDescription:
      "Ranin International provided integrated manpower and materials supply for a prestigious high-rise development in Riyadh. Over 350 workers covered structural steel erection, MEP installation, and interior finishing under a single coordinated management structure. The project maintained 100% monthly safety audit scores and met all Saudi Building Code requirements.",
    highlights: [
      "350+ workers deployed at peak operations across multiple building floors simultaneously",
      "Structural steel and MEP teams coordinated under a single integrated management structure",
      "On-time material deliveries throughout the project with zero supply chain disruptions",
      "Strict adherence to Saudi Building Code requirements and municipal inspection standards",
      "Integrated workforce and supply chain management reducing project coordination overhead",
      "Monthly safety audits conducted with consistent 100% compliance scores",
      "Resource-loaded schedule ensured zero idle time across all active work fronts",
      "Full material traceability from procurement through installation with mill certificates on file",
    ],
    scope: [
      {
        title: "Structural Works",
        details: [
          "Steel erection including column splices, beam connections, and moment-frame bolted joints",
          "Concrete formwork system setup, rebar placement, pour scheduling, and post-pour curing management",
          "Core wall construction support with climbing formwork coordination and embedded item installation",
          "Floor slab steel decking installation with shear stud welding and concrete placement",
          "Post-tensioning tendon installation and stressing for long-span floor plates",
        ],
      },
      {
        title: "MEP Installation",
        details: [
          "HVAC ductwork fabrication on site, installation of AHUs, FCUs, and chilled water piping",
          "Electrical conduit installation, cable pulling, and termination for power and lighting systems",
          "Plumbing rough-in including domestic water, drainage, and fire suppression piping with hydrostatic testing",
          "Fire alarm and life safety system installation including detection devices and notification appliances",
          "BMS cable infrastructure and field device mounting in coordination with controls contractor",
        ],
      },
      {
        title: "Materials Supply",
        details: [
          "Structural steel sections, plates, and hollow sections with full mill certificate traceability",
          "Electrical panels, switchgear, cables, cable trays, and installation accessories",
          "PPE, construction consumables, welding rods, and fall protection equipment",
          "MEP materials including pipes, fittings, valves, insulation, and hanging supports",
          "Concrete admixtures, curing compounds, and waterproofing materials for structural elements",
        ],
      },
      {
        title: "Finishing Works",
        details: [
          "Interior partition framing and gypsum board installation with fire-rated assemblies where required",
          "Suspended ceiling grid and tile installation across office floors and common areas",
          "Facade support works including curtain wall bracket installation and cladding crew coordination",
          "Final inspection walkthroughs, punch list generation, and systematic deficiency resolution",
          "Coordination of finishing trades to ensure clean handover of completed floors to the client",
        ],
      },
    ],
    blogContent: [
      {
        heading: "Coordinating Multi-Trade Operations on a Vertical Build",
        body: "High-rise construction creates unique coordination challenges because every trade must work within the same vertical footprint. Structural steel crews, MEP installers, and finishing teams all need access to the same floors at overlapping stages of completion. Our resource-loaded scheduling approach synchronized each trade's mobilization with the construction sequence, preventing conflicts and eliminating idle time across all active floors.",
      },
      {
        heading: "Integrated Supply Chain for Uninterrupted Progress",
        body: "Material delays are one of the most common causes of schedule disruption on large construction projects. By managing both manpower and materials procurement under a single contract, we eliminated the coordination gaps that typically occur when these scopes are handled by separate entities. Structural steel, electrical panels, piping materials, and PPE were sourced from approved vendors with full traceability and delivered to site on a just-in-time basis, maintaining zero supply chain disruptions throughout the project.",
      },
      {
        heading: "MEP Installation Across Multiple Building Systems",
        body: "The MEP scope covered HVAC ductwork fabrication, chilled water piping, electrical conduit and cable pulling, plumbing rough-in, and fire suppression systems. Each system required close coordination with the structural sequence to ensure embedded items, penetrations, and support anchors were placed before concrete pours. Our dedicated MEP supervisors worked floor by floor alongside the structural teams, identifying and resolving clashes in the field before they could cause rework.",
      },
      {
        heading: "Achieving Consistent Safety Performance",
        body: "With 350+ workers on site across multiple active floors, maintaining rigorous safety standards required constant vigilance. Monthly safety audits were conducted by our HSE team in conjunction with the client's safety representatives, and every audit achieved a 100% compliance score. The safety program encompassed fall protection systems, scaffold inspection protocols, hot work management, and daily toolbox talks tailored to the specific risks of each work zone.",
      },
    ],
    image: "/images/30.png",
    heroImage: "/images/30.png",
    services: ["Manpower", "Materials"],
    client: "Leading Real Estate Developer",
    year: "2023",
    duration: "12 Months",
    status: "Completed",
  },
  {
    id: 3,
    slug: "refinery-turnaround-project",
    title: "Refinery Turnaround Project",
    sector: "Oil & Gas",
    location: "Yanbu, KSA",
    description:
      "Critical turnaround support for a major oil refinery in Yanbu, mobilizing 150+ certified welders and fitters within 10 days.",
    longDescription:
      "Ranin International provided specialized welding, pipe fitting, and inspection teams for a major refinery turnaround in Yanbu. Over 150 certified tradesmen were deployed across multiple refinery units under an aggressive 45-day shutdown window. The project achieved zero safety incidents and 100% first-time radiographic weld acceptance.",
    highlights: [
      "150+ specialized tradesmen mobilized and operational on site in under 10 days",
      "All welders certified to ASME Section IX standards with 6G and 6GR qualifications",
      "Turnaround completed within the planned 45-day shutdown window without schedule extension",
      "Zero safety incidents recorded during the entire turnaround duration",
      "100% first-time radiographic weld acceptance rate on all critical joints",
      "Full as-built documentation, weld maps, and NDT reports delivered upon completion",
      "Daily progress tracking with real-time resource reallocation to address emerging priorities",
      "Successful tie-ins to live refinery systems executed under strict isolation protocols",
    ],
    scope: [
      {
        title: "Welding & Fabrication",
        details: [
          "Deployment of 6G and 6GR certified welders for all critical pressure-containing joints",
          "On-site piping spool fabrication and precision field fit-up to isometric drawings",
          "Alloy and stainless steel welding using GTAW (TIG) root and SMAW fill/cap processes",
          "Fabrication of temporary and permanent supports, clamps, and bypass connections",
          "Weld procedure qualification and welder performance qualification testing on site",
        ],
      },
      {
        title: "Piping Modifications",
        details: [
          "Hot and cold tie-in connections to live process systems under strict isolation protocols",
          "Line modifications including rerouting, size changes, and branch connection installations",
          "Hydrostatic testing and pneumatic leak checks on all new and modified piping runs",
          "Comprehensive flange management program with controlled bolt torquing and gasket replacement",
          "Removal and replacement of corroded pipe sections in high-temperature hydrocarbon service",
        ],
      },
      {
        title: "Inspection & QC",
        details: [
          "Full NDT coordination covering radiographic (RT), ultrasonic (UT), penetrant (PT), and magnetic particle (MT) testing",
          "Dimensional inspection and fit-up checks at every stage prior to welding authorization",
          "Weld mapping, joint tracking, and systematic documentation of all weld inspection results",
          "Positive Material Identification (PMI) verification on all alloy piping and fittings",
          "Final hydrostatic test witnessing and certification with client and third-party inspector",
        ],
      },
      {
        title: "Project Management",
        details: [
          "Daily progress tracking dashboards with earned value analysis and schedule forecasting",
          "Resource planning and multi-shift scheduling to optimize workforce utilization",
          "Client interface meetings, coordination with turnaround planners, and scope change management",
          "Material management including receipt inspection, storage, and issuance tracking",
          "Comprehensive closeout package with as-built drawings, test records, and data book compilation",
        ],
      },
    ],
    blogContent: [
      {
        heading: "Rapid Mobilization of Certified Tradesmen",
        body: "The 10-day mobilization window required a highly organized deployment of 150+ tradesmen, all of whom needed active certifications before stepping onto a live refinery site. Our workforce management team coordinated the verification of 6G and 6GR welder qualifications, ASME Section IX procedure compliance, and site-specific safety inductions for every worker. Pre-deployment logistics including accommodation, transport, and PPE issuance were executed in parallel to ensure all crews were productive from day one.",
      },
      {
        heading: "Executing Piping Modifications in Hydrocarbon Service",
        body: "Modifying piping systems that carry high-temperature hydrocarbons requires flawless execution at every step. Each piping modification followed a controlled sequence: engineering review, material verification with Positive Material Identification, precision fit-up to isometric drawings, welding per qualified procedures, and full NDE inspection before the system was released for hydrostatic testing. Corroded pipe sections were systematically removed and replaced with new spools fabricated on site, maintaining process integrity throughout.",
      },
      {
        heading: "Achieving Zero-Defect Weld Quality",
        body: "Every critical weld joint in the turnaround scope was subjected to radiographic testing, and the project achieved a 100% first-time acceptance rate. This outcome reflects the discipline built into every stage of the welding process: qualified weld procedures matched to each material and service condition, experienced welders selected for their proven track records, rigorous fit-up inspections prior to welding authorization, and real-time quality monitoring by our on-site QC inspectors.",
      },
      {
        heading: "Confined Space and Hot Work Safety Management",
        body: "Refinery turnarounds involve extensive confined space entry and hot work operations, both of which are among the highest-risk activities in industrial maintenance. Our safety management protocols included atmospheric monitoring at all confined space entries, dedicated hole watchers, hot work permits with fire watch deployment, and emergency rescue provisions stationed at every active work front. The entire 45-day turnaround was completed with zero safety incidents.",
      },
    ],
    image: "/images/39.png",
    heroImage: "/images/39.png",
    services: ["Manpower", "Fabrication"],
    client: "National Refining Company",
    year: "2024",
    duration: "45 Days",
    status: "Completed",
  },
  {
    id: 4,
    slug: "industrial-fabrication-workshop",
    title: "Industrial Fabrication Workshop",
    sector: "Fabrication",
    location: "Jubail, KSA",
    description:
      "Custom fabrication of ASME-coded pressure vessels, piping spools, and structural steel for multiple projects across the Eastern Province.",
    longDescription:
      "Ranin International's Jubail fabrication workshop delivers pressure vessels, piping spools, and structural steel to ASME and AWS standards. The facility has produced over 5,000 diameter-inches of piping and ASME Section VIII vessels with full material traceability. In-house NDT capabilities ensure immediate quality verification across all fabricated components.",
    highlights: [
      "ASME U-stamp certified pressure vessels fabricated to Section VIII Division 1 requirements",
      "Over 5,000 diameter-inches of piping spools fabricated in carbon steel, stainless steel, and alloy materials",
      "AWS D1.1 compliant structural steel fabrication with certified welders and inspectors",
      "Full material traceability maintained from original mill heat number to final installed product",
      "In-house NDT capabilities including radiographic, ultrasonic, and liquid penetrant testing",
      "On-time delivery to multiple project sites across the Eastern Province without schedule delays",
      "Post-weld heat treatment (PWHT) performed in-house for stress-relieved components",
      "Dedicated QA/QC team reviewing every fabrication stage from fit-up through final inspection",
    ],
    scope: [
      {
        title: "Pressure Vessel Fabrication",
        details: [
          "ASME Section VIII Division 1 coded vessels including drums, separators, and storage tanks",
          "Shell and head forming using plate rolling, pressing, and spinning to code-required tolerances",
          "Nozzle fabrication including reinforcement pads, flange attachment, and orientation verification",
          "Post-weld heat treatment (PWHT) for stress relief of thick-walled and alloy steel components",
          "Final hydrostatic testing, nameplate stamping, and National Board registration where required",
        ],
      },
      {
        title: "Piping Spool Fabrication",
        details: [
          "Carbon steel, stainless steel, and chrome-moly piping spools fabricated to project isometric drawings",
          "Precision fit-up with dimensional control to meet field installation tolerance requirements",
          "Hydrostatic and pneumatic testing per project specifications with certified test packages",
          "Socket weld, butt weld, and threaded connections executed per approved weld procedures",
          "Spool marking, tagging, and packaging for organized shipment and field installation sequence",
        ],
      },
      {
        title: "Structural Steel",
        details: [
          "Platform, handrail, ladder, and cage fabrication per OSHA and client-specific safety standards",
          "Pipe rack modules and support structure assemblies including cross-bracing and base plates",
          "Equipment skid bases, frames, and mounting structures with precision leveling provisions",
          "Hot-dip galvanizing coordination or shop-applied protective coating systems prior to shipment",
          "Assembly fit-up in workshop prior to disassembly for transport to ensure error-free field erection",
        ],
      },
      {
        title: "Quality Control",
        details: [
          "Weld procedure specification (WPS) and procedure qualification record (PQR) development and maintenance",
          "Radiographic, ultrasonic, magnetic particle, and liquid penetrant testing performed in-house",
          "Final dimensional inspection and visual examination per code and project specification requirements",
          "Material receiving inspection including PMI verification, dimensional checks, and certificate review",
          "Complete fabrication data book compilation including MTRs, NDT reports, and dimensional records",
        ],
      },
    ],
    blogContent: [
      {
        heading: "ASME Pressure Vessel Fabrication Process",
        body: "Fabricating pressure vessels to ASME Section VIII Division 1 requirements involves a controlled production sequence that leaves no room for error. Each vessel begins with a detailed engineering review and material procurement phase, followed by plate rolling, head forming, shell welding, nozzle installation, and post-weld heat treatment. Our quality team maintains full material traceability from the original mill heat number through every fabrication stage to the final nameplate data and National Board registration.",
      },
      {
        heading: "Precision Piping Spool Manufacturing",
        body: "With over 5,000 diameter-inches of piping spools produced in carbon steel, stainless steel, and chrome-moly alloys, our workshop operates as a high-throughput fabrication facility without sacrificing precision. Each spool is manufactured to match project isometric drawings within tight dimensional tolerances. Weld joints are executed per approved procedures using GTAW, SMAW, and FCAW processes as specified, with every critical joint inspected before the spool is cleared for hydrostatic testing and shipment.",
      },
      {
        heading: "Structural Steel Fabrication to AWS Standards",
        body: "Our structural steel capabilities encompass platforms, handrails, ladders, pipe rack modules, equipment skid bases, and custom support structures. All fabrication is performed to AWS D1.1 standards by certified welders working under qualified weld procedures. Completed assemblies undergo fit-up verification in the workshop before disassembly for transport, ensuring error-free field erection at the project site. Hot-dip galvanizing or protective coating is applied prior to shipment as specified.",
      },
      {
        heading: "In-House NDT and Quality Verification",
        body: "Having NDT capabilities within our own facility eliminates dependency on external inspection agencies and reduces turnaround time significantly. Our certified NDT technicians perform radiographic, ultrasonic, magnetic particle, and liquid penetrant testing on all fabricated components. This immediate access to quality verification means that any defects are identified and corrected without the scheduling delays that come from waiting for third-party inspectors, keeping fabrication schedules on track.",
      },
    ],
    image: "/services/Fabrication_Work/fab (5).png",
    heroImage: "/services/Fabrication_Work/fab (5).png",
    services: ["Fabrication"],
    client: "EPC Contractor",
    year: "2022–2024",
    duration: "Ongoing",
    status: "Active",
  },
  {
    id: 5,
    slug: "power-plant-om-services",
    title: "Power Plant O&M Services",
    sector: "Power & Utilities",
    location: "Dammam, KSA",
    description:
      "Ongoing operation and maintenance services for a 500MW combined-cycle power plant in Dammam, maintaining 99.5% uptime reliability.",
    longDescription:
      "Ranin International provides comprehensive O&M services for a 500MW combined-cycle power generation facility in Dammam. A dedicated team of 60+ personnel manages gas turbines, HRSGs, electrical systems, and balance-of-plant equipment. Our predictive maintenance approach has reduced forced outage rates by over 40%.",
    highlights: [
      "99.5% plant uptime maintained consistently over the full contract period",
      "Predictive maintenance program reduced unplanned forced outages by over 40%",
      "60+ dedicated O&M personnel on site across operations, maintenance, and support functions",
      "Comprehensive spare parts inventory management with critical spares availability above 98%",
      "Full regulatory compliance with SEC and ECRA standards including periodic audit certifications",
      "Monthly performance reporting with KPI dashboards tracking availability, heat rate, and emissions",
      "Successful planning and execution of major gas turbine inspections with zero schedule overruns",
      "Continuous safety improvement program achieving over 1,000 days without a lost-time incident",
    ],
    scope: [
      {
        title: "Turbine & Generator",
        details: [
          "Gas turbine routine inspections, combustion system checks, and major overhaul planning and execution",
          "Generator condition monitoring including stator and rotor insulation testing and bearing vibration analysis",
          "Combustion system inspections, combustor liner replacement, and fuel nozzle tuning for optimal emissions",
          "Steam turbine maintenance including valve overhauls, blade inspections, and alignment verification",
          "Turbine control system support including software updates, parameter tuning, and alarm management",
        ],
      },
      {
        title: "HRSG & Boiler Systems",
        details: [
          "HRSG tube inspection, chemical cleaning, and tube leak repair using qualified welding procedures",
          "Feedwater and steam system maintenance covering pumps, valves, deaerators, and economizers",
          "Safety valve testing, calibration, and recertification to ASME and national regulatory standards",
          "Expansion joint inspection and replacement to accommodate thermal cycling stresses",
          "Water chemistry monitoring and treatment program to prevent corrosion, scaling, and carryover",
        ],
      },
      {
        title: "Electrical & I&C",
        details: [
          "High-voltage and medium-voltage switchgear maintenance including breaker testing and thermographic surveys",
          "DCS and PLC system support including logic modifications, trending, and alarm rationalization",
          "Field instrument calibration and loop checks covering transmitters, switches, and control valves",
          "Generator protection relay testing, coordination studies, and transformer oil analysis",
          "Uninterruptible power supply (UPS) and DC system maintenance including battery load testing",
        ],
      },
      {
        title: "Balance of Plant",
        details: [
          "Cooling water system maintenance including condenser cleaning, cooling tower fan service, and water treatment",
          "Compressed air system maintenance covering compressors, dryers, receivers, and distribution piping",
          "Fuel gas conditioning system inspection and maintenance including filters, heaters, and regulators",
          "Civil and building facility upkeep including HVAC, lighting, fire protection, and building envelope maintenance",
          "Environmental monitoring and compliance including stack emissions testing and waste disposal management",
        ],
      },
    ],
    blogContent: [
      {
        heading: "Predictive Maintenance Strategy for Power Generation",
        body: "Our O&M philosophy is built on a predictive-first approach rather than relying solely on time-based maintenance intervals. Vibration monitoring on all critical rotating equipment, oil analysis for turbine and generator bearings, thermographic surveys of electrical connections, and performance trend analysis of key operating parameters are used to identify developing issues before they result in unplanned outages. Since implementing this approach, forced outage rates have been reduced by over 40%.",
      },
      {
        heading: "Gas Turbine Inspection and Overhaul Management",
        body: "Managing the lifecycle of gas turbines requires careful planning of combustion inspections, hot gas path inspections, and major overhauls at manufacturer-recommended intervals. Our team coordinates with OEM representatives and third-party specialists to ensure each inspection is executed to manufacturer specifications with minimal impact on plant availability. Combustor liner replacements, fuel nozzle tuning, and turbine blade inspections are performed during planned outages with every activity tracked against a detailed execution schedule.",
      },
      {
        heading: "HRSG Reliability and Water Chemistry Management",
        body: "Heat recovery steam generators are among the most maintenance-intensive components in a combined-cycle plant. Our HRSG maintenance program covers tube inspections, chemical cleaning cycles, safety valve testing and recertification, and expansion joint monitoring. Equally critical is the water chemistry program, which prevents corrosion, scaling, and carryover through continuous monitoring of feedwater and steam quality parameters, with chemical dosing adjusted in real time to maintain optimal conditions.",
      },
      {
        heading: "Regulatory Compliance and Performance Reporting",
        body: "Operating a power generation facility in Saudi Arabia requires strict compliance with SEC and ECRA regulations. Our team manages all aspects of regulatory reporting, including periodic audit certifications, environmental compliance monitoring, and performance data submission. Monthly KPI dashboards track plant availability, heat rate efficiency, stack emissions, and safety performance against contractual targets, providing the client with full visibility into operational performance.",
      },
    ],
    image: "/images/54.png",
    heroImage: "/images/54.png",
    services: ["O&M", "Manpower"],
    client: "Independent Power Producer",
    year: "2022–Present",
    duration: "36+ Months",
    status: "Active",
  },
  {
    id: 6,
    slug: "surface-treatment-coating",
    title: "Surface Treatment & Coating",
    sector: "Oil & Gas",
    location: "Ras Tanura, KSA",
    description:
      "Industrial surface preparation and protective coating for offshore platform components and pipeline infrastructure, covering 50,000+ square meters.",
    longDescription:
      "Ranin International executed a large-scale surface preparation and coating program for offshore components and pipeline infrastructure at Ras Tanura. Over 50,000 square meters were treated with multi-coat epoxy and polyurethane systems, with fireproofing applied to critical structural members. The project achieved zero coating failures during the warranty period with full SSPC/NACE compliance.",
    highlights: [
      "Over 50,000 square meters of surface area prepared, primed, and coated to specification",
      "Sa 2.5 and Sa 3 surface preparation standards consistently achieved and verified",
      "Multi-coat epoxy and polyurethane systems applied per manufacturer specifications",
      "100% dry film thickness (DFT) compliance verified across all coated surfaces at every stage",
      "SSPC/NACE-certified coating inspectors on site throughout the entire project duration",
      "Zero coating failures reported during the full warranty period following project completion",
      "Environmental condition monitoring logged before every coating application shift",
      "Complete inspection data books delivered to client for asset integrity management records",
    ],
    scope: [
      {
        title: "Surface Preparation",
        details: [
          "Abrasive blasting to Sa 2.5 and Sa 3 standards using controlled grit media and dust extraction",
          "Surface profile measurement and verification using replica tape and digital profile gauges",
          "Environmental condition monitoring (humidity, dew point, steel temperature) before every coating shift",
          "Solvent cleaning and degreasing of contaminated surfaces prior to abrasive blasting operations",
          "Mechanical surface preparation including power tool cleaning for areas inaccessible to blasting",
        ],
      },
      {
        title: "Coating Application",
        details: [
          "Zinc-rich inorganic primer application with controlled film thickness per manufacturer data sheet",
          "High-build epoxy intermediate coat and aliphatic polyurethane topcoat applied by airless spray",
          "Stripe coating of all edges, welds, bolt heads, and surface irregularities for uniform coverage",
          "Controlled overcoat intervals monitored between each coat to ensure intercoat adhesion",
          "Touch-up and repair coating of transport and handling damage prior to final inspection acceptance",
        ],
      },
      {
        title: "Fireproofing",
        details: [
          "Cementitious fireproofing application on primary structural columns and beams for passive fire protection",
          "Intumescent coating application on architecturally exposed steel and thin-profile areas",
          "Thickness verification and adhesion testing at regular intervals throughout fireproofing application",
          "Mesh reinforcement installation within cementitious fireproofing where specified by fire engineering",
          "Compatibility verification between fireproofing systems and underlying anti-corrosion coating",
        ],
      },
      {
        title: "Inspection & Documentation",
        details: [
          "Dry film thickness (DFT) measurements documented at every stage of the coating process",
          "Holiday detection testing using low-voltage wet sponge and high-voltage spark methods as required",
          "Adhesion pull-off testing per ASTM D4541 to verify bond strength at representative locations",
          "Complete coating inspection reports compiled into data books for client asset integrity records",
          "Daily inspection logs, non-conformance reports, and corrective action tracking throughout the project",
        ],
      },
    ],
    blogContent: [
      {
        heading: "Surface Preparation: The Foundation of Coating Performance",
        body: "The longevity of any protective coating system depends primarily on the quality of surface preparation beneath it. Our blasting crews achieved Sa 2.5 and Sa 3 cleanliness standards across all 50,000+ square meters of surface area using controlled grit media with dust extraction. Before any coating was applied, each prepared surface was verified for profile depth using replica tape and digital gauges, and environmental conditions including ambient temperature, relative humidity, steel temperature, and dew point were logged to ensure they fell within the coating manufacturer's application parameters.",
      },
      {
        heading: "Multi-Coat Systems for Marine and Industrial Environments",
        body: "The coating system specified for this project — zinc-rich inorganic primer, high-build epoxy intermediate coat, and aliphatic polyurethane topcoat — is engineered for long-term corrosion protection in aggressive offshore and industrial environments. Each coat was applied by airless spray per the paint manufacturer's data sheets, with stripe coating applied to all edges, welds, bolt heads, and surface irregularities to ensure uniform film build. Controlled overcoat intervals between each layer ensured proper intercoat adhesion throughout the system.",
      },
      {
        heading: "Fireproofing of Critical Structural Members",
        body: "Beyond anti-corrosion coating, the project scope included passive fire protection of critical structural steel using both cementitious and intumescent systems. Cementitious fireproofing was applied to primary columns and beams, while intumescent coatings were used on architecturally exposed steel and areas requiring thinner profiles. Compatibility between the fireproofing systems and the underlying anti-corrosion coating was verified at every application point to ensure system integrity.",
      },
      {
        heading: "Inspection, Documentation, and Warranty Performance",
        body: "SSPC/NACE-certified coating inspectors were present throughout the entire project, verifying dry film thickness at every stage, performing holiday detection testing on all coated surfaces, and conducting adhesion pull-off testing at representative locations. Complete inspection records were compiled into data books for the client's asset integrity management system. The project was completed with zero coating failures during the full warranty period, validating both the quality of the coating materials and the precision of our application processes.",
      },
    ],
    image: "/services/Sandblasting_Painting_And_Galvanizing_Work/spgw (1).png",
    heroImage:
      "/services/Sandblasting_Painting_And_Galvanizing_Work/spgw (1).png",
    services: ["Sandblasting & Painting"],
    client: "National Oil Company",
    year: "2023",
    duration: "6 Months",
    status: "Completed",
  },
  {
    id: 7,
    slug: "neom-infrastructure-support",
    title: "NEOM Infrastructure Support",
    sector: "Infrastructure",
    location: "NEOM, KSA",
    description:
      "Large-scale manpower deployment and materials supply for infrastructure development at NEOM, with 500+ multi-discipline workers.",
    longDescription:
      "Ranin International provides integrated manpower and materials supply for foundational infrastructure at NEOM, Saudi Arabia's flagship mega-project. Over 500 workers are deployed across civil, mechanical, and electrical trades with full supply chain coordination. The integrated approach eliminates coordination gaps and supports NEOM's ambitious construction timelines.",
    highlights: [
      "500+ multi-discipline workers deployed across multiple active work fronts simultaneously",
      "Integrated manpower and materials supply managed under a single contract for maximum efficiency",
      "Rapid mobilization to remote NEOM project location with full camp and logistics support established",
      "Multi-discipline workforce covering civil, mechanical, and electrical trades with dedicated supervisors",
      "Supply chain logistics for remote site coordinated seamlessly from procurement through site delivery",
      "Aligned with NEOM sustainability standards and world-class quality requirements",
      "On-site HSE management achieving zero serious incidents during the mobilization and construction phases",
      "Materials tracking system providing real-time visibility from purchase requisition to delivery confirmation",
    ],
    scope: [
      {
        title: "Civil Works Manpower",
        details: [
          "Earthworks and grading crew deployment for site preparation, cut-and-fill operations, and compaction",
          "Concrete and rebar installation teams for foundations, slabs, retaining walls, and structural elements",
          "Road and utility corridor support crews for subgrade preparation, base course, and utility trenching",
          "Drainage and stormwater system installation teams including pipe laying and manhole construction",
          "Survey and setting-out support to ensure civil works conform to design elevations and alignments",
        ],
      },
      {
        title: "Mechanical & Electrical Crews",
        details: [
          "Pipe fitting and welding teams for underground and above-ground utility piping systems",
          "Electrical installation crews for cable laying, conduit installation, and equipment termination",
          "Equipment setting and alignment teams for mechanical plant and utility system components",
          "Instrumentation installation crews for field devices, junction boxes, and cable routing",
          "Testing and commissioning support personnel for mechanical and electrical system handover",
        ],
      },
      {
        title: "Materials Procurement",
        details: [
          "Structural steel reinforcement, sections, and plates sourced from approved manufacturers with full MTRs",
          "Electrical panels, distribution boards, cables, cable trays, and installation accessories",
          "Construction consumables including welding materials, fasteners, sealants, and adhesives",
          "Personal protective equipment and safety supplies for the entire deployed workforce",
          "Piping materials including carbon steel, PVC, HDPE, fittings, valves, and support hardware",
        ],
      },
      {
        title: "Site Management",
        details: [
          "On-site supervision and coordination team managing daily work assignments and crew productivity",
          "HSE management including daily toolbox talks, permit-to-work coordination, and incident investigation",
          "Weekly and monthly progress reporting with photographic documentation and earned value metrics",
          "Resource tracking and workforce planning to align crew availability with construction sequence",
          "Client interface and coordination meetings to manage priorities, resolve issues, and plan ahead",
        ],
      },
    ],
    blogContent: [
      {
        heading: "Mobilization to a Remote Mega-Project Site",
        body: "Deploying 500+ workers to the remote NEOM project location presented logistical challenges that go far beyond typical urban construction projects. Worker accommodation, transport networks, field office establishment, laydown area preparation, and welfare facilities all had to be planned and executed within the client's required timeline. Our operations team managed every aspect of this mobilization, from initial camp setup through to the establishment of functional work fronts across multiple construction zones.",
      },
      {
        heading: "Multi-Discipline Workforce Across Civil, Mechanical, and Electrical Trades",
        body: "The infrastructure scope demanded a workforce organized into specialized crews covering civil earthworks and grading, concrete and reinforcement installation, road and utility corridor construction, mechanical piping and equipment installation, and electrical cable laying and termination. Each crew was assigned a dedicated supervisor reporting to our on-site management team, which maintained daily work assignments, productivity tracking, and quality oversight across all active fronts.",
      },
      {
        heading: "Integrated Supply Chain for Remote Site Operations",
        body: "Managing materials procurement and delivery to a remote construction site requires a logistics management system that tracks every order from purchase requisition through to site delivery confirmation. Our procurement team sourced structural steel reinforcement, piping materials, electrical panels, cables, construction consumables, and PPE from approved manufacturers, with each item inspected at receipt against project specifications before being distributed to the appropriate work front. This integrated approach eliminated the coordination gaps that typically arise when workforce and supply chain are managed separately.",
      },
      {
        heading: "Alignment with Vision 2030 and NEOM Standards",
        body: "NEOM represents Saudi Arabia's most ambitious development initiative under the Vision 2030 economic diversification strategy. Working on this project required adherence to world-class sustainability standards, quality requirements, and safety protocols that exceed typical regional benchmarks. Our HSE management program achieved zero serious incidents during both the mobilization and construction phases, reflecting the safety culture and operational discipline that NEOM demands from all contributing contractors.",
      },
    ],
    image: "/images/28.png",
    heroImage: "/images/28.png",
    services: ["Manpower", "Materials"],
    client: "NEOM Project Contractor",
    year: "2024",
    duration: "18 Months",
    status: "In Progress",
  },
  {
    id: 8,
    slug: "petrochemical-plant-expansion",
    title: "Petrochemical Plant Expansion",
    sector: "Petrochemical",
    location: "Yanbu, KSA",
    description:
      "Fabrication and installation support for a petrochemical plant expansion in Yanbu, delivering 3,000+ diameter-inches of piping and 200 tons of steel.",
    longDescription:
      "Ranin International provided end-to-end fabrication and installation support for a major petrochemical plant expansion in Yanbu. The project delivered over 3,000 diameter-inches of piping spools and 200 tons of structural steel, from workshop fabrication through field erection and live plant tie-ins. All work was completed on schedule and within budget with 100% first-time radiographic acceptance.",
    highlights: [
      "3,000+ diameter-inches of piping spools fabricated in workshop and installed in the field",
      "200 tons of structural steel fabricated, delivered, and erected on the project site",
      "Seamless tie-in connections to existing live plant operations executed without production disruption",
      "All welds passed first-time radiographic inspection with zero reject rate",
      "Dedicated project management and planning team coordinating workshop and field activities",
      "Completed within the original budget and on the contractual schedule without extensions",
      "Comprehensive pre-commissioning including hydrostatic testing, flushing, and system punch list clearance",
      "Full fabrication and installation data books compiled and delivered to client upon project closeout",
    ],
    scope: [
      {
        title: "Shop Fabrication",
        details: [
          "Piping spool fabrication per isometric drawings in carbon steel, stainless steel, and alloy materials",
          "Structural steel cutting, drilling, fitting, welding, and assembly to approved shop drawings",
          "Equipment support frames, skid bases, and mounting structures fabricated to precise tolerances",
          "Protective coating and preservation applied to all fabricated items prior to transport",
          "Pre-shipment dimensional inspection and quality verification before release from workshop",
        ],
      },
      {
        title: "Field Installation",
        details: [
          "Piping erection, fit-up, and field welding with continuous QC oversight at every joint",
          "Structural steel erection including column splices, beam connections, and bracing installation",
          "Equipment setting, leveling, grouting, and alignment to manufacturer tolerances",
          "Field routing of small-bore piping, instrument tubing, and utility connections",
          "Scaffold erection and dismantling to provide safe access for all field installation activities",
        ],
      },
      {
        title: "Tie-In & Commissioning Support",
        details: [
          "Live plant tie-in planning including isolation philosophy, risk assessment, and execution procedures",
          "Pre-fabrication and staging of all tie-in spools and fittings prior to scheduled shutdown windows",
          "Hydrostatic testing, pneumatic leak testing, and flushing of all new and modified piping systems",
          "Pre-commissioning support including system walkdowns, punch list generation, and deficiency resolution",
          "Coordination with client operations team for safe startup and performance verification",
        ],
      },
      {
        title: "Project Controls",
        details: [
          "Weekly progress reporting with schedule tracking, earned value analysis, and variance commentary",
          "Material management covering procurement tracking, warehouse receipt, and controlled issuance",
          "Quality documentation including weld logs, NDE reports, MTRs, and test certificates",
          "Cost tracking and forecasting with monthly reporting against the approved project budget",
          "Comprehensive project closeout data book compilation with all as-built records and certifications",
        ],
      },
    ],
    blogContent: [
      {
        heading: "From Workshop to Field: End-to-End Fabrication and Erection",
        body: "This expansion project demonstrated the advantages of having a single contractor manage both workshop fabrication and field installation. Over 3,000 diameter-inches of piping spools were fabricated in our Jubail workshop to project isometric drawings, alongside 200 tons of structural steel including pipe rack extensions, equipment supports, and access platforms. By controlling fabrication quality in the workshop, we ensured that every component arrived at the Yanbu site ready for immediate installation without the rework that often occurs when shop and field scopes are disconnected.",
      },
      {
        heading: "Live Plant Tie-Ins Without Production Disruption",
        body: "The most critical phase of any brownfield expansion is the tie-in to existing live plant systems. Each connection point was pre-fabricated, pre-inspected, and staged in advance of the scheduled shutdown window. Our tie-in execution teams followed detailed isolation philosophies and risk assessments, with dedicated safety watchers and emergency response provisions in place throughout. Every tie-in was completed within the allocated window, enabling the plant to resume full production without delay.",
      },
      {
        heading: "Structural Steel Erection in an Operating Facility",
        body: "Erecting 200 tons of structural steel within an operating petrochemical plant introduces constraints that do not exist on greenfield sites. Crane movements must be planned around active process equipment, hot work must be controlled near hydrocarbon systems, and ground-level access must be maintained for plant operations staff. Our erection crews coordinated daily with the client's operations team to schedule heavy lifts, manage temporary exclusion zones, and ensure that all structural connections were completed safely and within tolerance.",
      },
      {
        heading: "Pre-Commissioning and Handover",
        body: "Before handing over the expanded systems to the client's operations team, every new piping run and equipment installation underwent systematic pre-commissioning activities. Hydrostatic testing verified pressure integrity, chemical flushing removed construction debris from piping systems, and comprehensive system walkdowns generated punch lists that were systematically cleared. Full fabrication and installation data books, including weld logs, NDE reports, material test records, and as-built drawings, were compiled and delivered upon project closeout.",
      },
    ],
    image: "/images/41.png",
    heroImage: "/images/41.png",
    services: ["Fabrication", "Manpower"],
    client: "International EPC Contractor",
    year: "2024",
    duration: "10 Months",
    status: "In Progress",
  },
  {
    id: 9,
    slug: "corporate-printing-signage",
    title: "Corporate Printing & Signage",
    sector: "Commercial",
    location: "Jubail, KSA",
    description:
      "Full-service industrial printing delivering safety signage, technical documentation, and corporate branding for clients across the Eastern Province.",
    longDescription:
      "Ranin International's printing press division serves major industrial clients across the Eastern Province with comprehensive printing services. The facility produces over 10,000 safety signs annually alongside technical documentation, corporate materials, and large-format graphics. All products meet ANSI, ISO, and OSHA standards with fast turnaround times.",
    highlights: [
      "10,000+ safety signs, hazard labels, and pipe markers produced annually to ANSI/ISO standards",
      "Technical engineering manuals and documentation printed with controlled-document accuracy",
      "Corporate branding packages produced for multiple facilities maintaining strict brand identity guidelines",
      "Large-format banners, site hoarding graphics, and wayfinding signage for industrial and commercial clients",
      "Fast turnaround times consistently maintained without compromising production quality",
      "Confidential handling of proprietary engineering documents and sensitive corporate materials",
      "UV-resistant inks and durable substrates engineered for harsh industrial environments",
      "Coordinated delivery service to client offices, project sites, and remote industrial facilities",
    ],
    scope: [
      {
        title: "Safety & Industrial Signage",
        details: [
          "Hazard warning signs, safety instruction signs, and mandatory action signs to ANSI and ISO standards",
          "Pipe markers, equipment labels, valve tags, and asset identification plates for plant operations",
          "Emergency evacuation plans, assembly point signs, and fire safety instruction displays",
          "Chemical hazard communication labels and GHS-compliant safety data sheet binders",
          "Durable outdoor signage using aluminum, PVC, and weather-resistant substrates with UV-stable inks",
        ],
      },
      {
        title: "Technical Documentation",
        details: [
          "Engineering drawings, piping and instrumentation diagrams (P&IDs), and plot plan printing",
          "Operational manuals, standard operating procedures (SOPs), and maintenance work instructions",
          "Training materials, competency assessment documents, and certification record packages",
          "Controlled document production with revision tracking and distribution list management",
          "Large-format technical drawings up to A0 size with high-resolution precision and color accuracy",
        ],
      },
      {
        title: "Corporate Materials",
        details: [
          "Business cards, letterheads, envelopes, and compliment slips per corporate brand guidelines",
          "Corporate brochures, capability statements, and company profile publications",
          "Annual reports, investor presentations, and executive briefing documents with premium finishing",
          "Event materials including invitations, programs, name badges, and conference collateral",
          "Promotional items and branded merchandise for corporate events and client engagement",
        ],
      },
      {
        title: "Large Format & Finishing",
        details: [
          "Banners, posters, and site hoarding graphics printed on vinyl, mesh, and rigid substrates",
          "Exhibition displays, roll-up banners, and trade show booth graphics",
          "Professional laminating, mounting on foam board and Dibond, and precision cutting services",
          "Binding options including perfect binding, wire-o, saddle stitch, and thermal binding for manuals",
          "Packaging and delivery coordination to multiple client locations including remote project sites",
        ],
      },
    ],
    blogContent: [
      {
        heading: "Industrial Safety Signage Production at Scale",
        body: "Producing safety signage for petrochemical plants, refineries, and construction sites requires more than just printing — it demands compliance with ANSI, ISO, and OSHA visual communication standards. Our facility manufactures over 10,000 safety signs, hazard labels, pipe markers, equipment tags, and emergency evacuation plans annually using durable substrates and UV-resistant inks engineered to withstand the extreme heat, chemical exposure, and weathering conditions found in industrial environments across the Eastern Province.",
      },
      {
        heading: "Technical Documentation for Industrial Operations",
        body: "Engineering drawings, P&IDs, operational manuals, standard operating procedures, and certification records all require printing with precision and confidentiality. Our controlled document production process includes revision tracking, distribution list management, and secure handling of proprietary engineering materials. Large-format technical drawings up to A0 size are produced with high-resolution accuracy, supporting the documentation needs of major industrial facilities during construction, commissioning, and ongoing operations.",
      },
      {
        heading: "Corporate Branding and Large-Format Capabilities",
        body: "Beyond industrial signage and documentation, our facility produces corporate brochures, annual reports, event materials, and promotional items to each client's brand standards and visual identity guidelines. Large-format capabilities extend to banners, site hoarding graphics, wayfinding signage, and exhibition displays printed on vinyl, mesh, and rigid substrates. Professional finishing services including laminating, mounting, binding, and precision cutting ensure every product meets commercial quality standards.",
      },
      {
        heading: "Fast Turnaround and Coordinated Delivery",
        body: "Industrial operations run on tight schedules, and printing services must keep pace. Our production facility maintains fast turnaround times without compromising quality, with a logistics network that coordinates delivery to client offices, project sites, and remote industrial facilities across the Eastern Province. Whether the requirement is an urgent batch of safety signs for a turnaround project or a scheduled delivery of corporate materials for an annual event, our team manages the full production and delivery cycle to meet the client's deadline.",
      },
    ],
    image: "/services/Printing_Press_Services/pps (1).png",
    heroImage: "/services/Printing_Press_Services/pps (1).png",
    services: ["Printing Press"],
    client: "Multiple Industrial Clients",
    year: "2022–Present",
    duration: "Ongoing",
    status: "Active",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
