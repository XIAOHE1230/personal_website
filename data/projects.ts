export interface ProjectLinks {
  github?: string;
  pdf?: string;
  video?: string;
  docs?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  featured: boolean;
  tags: string[];
  concept: string;
  systemLogic: string;
  process: string;
  outcome: string;
  links: ProjectLinks;
  coverImage: string;
  coverPosition?: string;
  heroImage?: string;
  gallery?: string[];
  galleryLayout?: 'carousel' | 'vertical';
}

export const projects: Project[] = [
  // GROUP A: Robotic & AI Systems
  {
    slug: "robofab-guide",
    title: "RoboFab Guide",
    subtitle: "RAG-Based Robotic Fabrication AI Assistant",
    year: "2025–2026",
    category: "AI / ROBOTICS",
    featured: true,
    tags: ["RAG", "LLM", "Robotic Fabrication", "Workflow System"],
    concept:
      "A conversational AI assistant built from real lab pain points — scattered resources and complex robotic fabrication workflows.",
    systemLogic:
      "Combines knowledge retrieval (RAG) with large language models. Structures domain knowledge — robots, materials, fabrication processes — into retrievable, executable guidance rather than generic answers.",
    process:
      "Designed from the lab floor up: identified recurring questions, built structured knowledge base, implemented RAG pipeline with VS Code + ChatGPT integration, iterated on workflow coverage.",
    outcome:
      "A deployable open-source assistant that guides users through complete fabrication workflows, reduces repetitive communication, and builds community knowledge over time.",
    links: { github: "", docs: "" },
    coverImage: "/images/robofab/hubhero.png",
    heroImage: "/images/robofab/hubhero2.png",
    gallery: [
      '/images/robofab/gallery-1.png',
      '/images/robofab/gallery-22.png',
      '/images/robofab/gallery-3.png',
      '/images/robofab/gallery-4.png',
      '/images/robofab/gallery-5.png',
      '/images/robofab/gallery-6.png',
    ],
  },
  {
    slug: "image-to-robot-drawing",
    title: "Image-to-Robot Drawing",
    subtitle: "Automated Image → Point Array → Robot Arm Execution",
    year: "2025–2026",
    category: "COMPUTATIONAL DESIGN / ROBOTICS",
    featured: false,
    tags: ["Grasshopper", "Machina", "ABB Robot", "Image Processing"],
    concept:
      "Digital-to-physical translation: any photograph becomes a robot-executed point drawing.",
    systemLogic:
      "Grasshopper analyzes image grayscale → generates point arrays filtered by density threshold → exports toolpaths to Machina → ABB robot arm execution. Balances drawing precision against execution efficiency.",
    process:
      "Iterated on grid density vs. grayscale distribution, solved path errors, pen pressure calibration, and repositioning drift issues across multiple test runs.",
    outcome:
      "Complete automated pipeline: Image Processing → Path Generation → Robot Execution, with documented logic and replicable workflow.",
    links: { github: "" },
    coverImage: "/images/robot-drawing/cover.png",
    gallery: [
      '/images/robot-drawing/draw4.png',
      '/images/robot-drawing/draw5.png',
      '/images/robot-drawing/draw6.png',
    ],
  },
  {
    slug: "interactive-sensor-system",
    title: "Robotic Digital Manufacturing",
    subtitle: "Clay 3D Printing & Multi-Sensor Interactive System",
    year: "2025",
    category: "ROBOTICS / DIGITAL FABRICATION",
    featured: false,
    tags: ["Arduino", "Sensors", "LED", "Robotic Fabrication"],
    concept:
      "Research into inclined facade structures via clay 3D printing, combined with multi-sensor interactive control.",
    systemLogic:
      "Rotary encoders + infrared sensors feed real-time data into multi-channel LED control logic. System responds dynamically with light feedback.",
    process:
      "Systematic troubleshooting of print collapse, material instability, and nozzle pressure variance. Built standardized test documentation.",
    outcome:
      "Interactive control prototype + fabrication methodology with documented system architecture.",
    links: {},
    coverImage: "/images/robman/cover22.png",
    gallery: [
      '/images/robman/man1.png',
      '/images/robman/man2.png',
      '/images/robman/man3.png',
      '/images/robman/man4.png',
      '/images/robman/man5.png',
    ],
  },

  // GROUP B: Architectural Design
  {
    slug: "the-hand-of-structure",
    title: "The Hand of Structure",
    subtitle: "Variable Structure Design",
    year: "2024",
    category: "ARCHITECTURE / STRUCTURAL",
    featured: true,
    tags: ["Modular", "Variable Structure", "Parametric", "FEA"],
    concept:
      "A structural system combining flexibility, variable form, and spatial extensibility — breaking limitations of static structural design.",
    systemLogic:
      "Modular base units with 360° rotating louvres combine in three variation patterns (A/B/C) allowing infinite spatial extension. FEA validates structural performance across configurations.",
    process:
      "3 module types → multiple variation patterns → FEA stress testing → physical model fabrication (ABS, 30×30mm) → building skin application studies.",
    outcome:
      "Deployable modular system applicable as adaptive building skin, structurally validated, with future potential in smart materials and robotics.",
    links: { pdf: "" },
    coverImage: "/images/hand-structure/hand2.png",
    coverPosition: "center 70%",
    gallery: [
      '/images/hand-structure/hand31.png',
      '/images/hand-structure/hand32.png',
      '/images/hand-structure/hand33.png',
      '/images/hand-structure/hand34.png',
    ],
  },
  {
    slug: "iron-island",
    title: "Iron Island",
    subtitle: "Offshore Rig Modification",
    year: "2023",
    category: "ARCHITECTURE / ECOLOGICAL DESIGN",
    featured: false,
    tags: ["Adaptive Reuse", "Marine Ecosystem", "Sustainability", "Offshore"],
    concept:
      "Decommissioned offshore drilling rigs in the Adriatic Sea transformed into offshore mussel farming plants — economically efficient and ecologically restorative.",
    systemLogic:
      "Rig superstructure → processing/storage levels. Substructure → aquaculture net frames and breeding rafts. Tidal energy → kinetic power generation. Water collection → purification loop.",
    process:
      "Site analysis of Adriatic platforms → ecological feasibility → structural adaptation → sustainable systems integration (wind/solar/tidal) → interior spatial programming.",
    outcome:
      "Replicable offshore aquaculture model that transforms industrial waste into productive marine ecosystems.",
    links: { pdf: "" },
    coverImage: "/images/iron-island/iron.png",
    coverPosition: "center 35%",
    gallery: [
      '/images/iron-island/iron12.png',
      '/images/iron-island/iron13.png',
      '/images/iron-island/iron14.png',
      '/images/iron-island/iron15.png',
    ],
  },
  {
    slug: "floating-community",
    title: "Floating Community",
    subtitle: "Vagrant Community Design",
    year: "2022",
    category: "ARCHITECTURE / SOCIAL DESIGN",
    featured: false,
    tags: ["Community", "Sustainability", "Inclusive Design", "Veterans"],
    concept:
      "A holistic supportive community for homeless veterans in Fresno County — sustainable, inclusive, and economically self-sufficient.",
    systemLogic:
      "Three residential typologies for different veteran needs. Corridor bridge network connects units. Factory + wastewater treatment + agricultural cycles form closed-loop economy.",
    process:
      "Urban mapping → veteran needs research → three building typology design → corridor analysis (20+ variants) → operation map + lifecycle simulation.",
    outcome:
      "Complete community system with residential, productive, and therapeutic programs — replicable in similar contexts.",
    links: { pdf: "" },
    coverImage: "/images/floating-community/cover.png",
    gallery: [
      '/images/floating-community/floating2.png',
      '/images/floating-community/floating3.png',
      '/images/floating-community/floating4.png',
      '/images/floating-community/floating5.png',
    ],
  },
  {
    slug: "multi-cyber-city",
    title: "Multi Cyber City",
    subtitle: "Future Urban Design",
    year: "2024",
    category: "ARCHITECTURE / URBAN DESIGN",
    featured: true,
    tags: ["Cyberpunk", "Cultural Fusion", "Future City", "Digital"],
    concept:
      "Deep integration of Chinese ancient architecture + Gothic + Temple colonnades + Cyber technology = a unified future urban language.",
    systemLogic:
      "Three architectural DNA strands (Euclidean/Chinese Ancient/Temple) combined with Cyber elements → elemental fusion module → city building logic.",
    process:
      "Cultural research → module extraction → digital fusion methodology → city construction logic → scenario rendering.",
    outcome:
      "A new architectural language where history and technology coexist in future urban environments.",
    links: { pdf: "" },
    coverImage: "/images/cyber-city/city.png",
    coverPosition: "center center",
    gallery: [
      '/images/cyber-city/cyber1.png',
      '/images/cyber-city/cyber2.png',
      '/images/cyber-city/cyber3.png',
    ],
  },
  {
    slug: "desert-boat",
    title: "Desert Boat",
    subtitle: "Assembly Building Design",
    year: "2023",
    category: "ARCHITECTURE / MODULAR",
    featured: false,
    tags: ["Assembly", "Modular", "Post-Disaster", "Sustainability"],
    concept:
      "A modular assembled building system for desert and barren regions — rapid deployment, climate-adaptive, community-oriented.",
    systemLogic:
      "Standardized units freely combine in 3D space. Ventilation, shading, and heating modules add/remove per climate condition. Public/private ratio adjusts as population changes.",
    process:
      "Desert climate challenges analysis → modular unit design → aggregation pattern exploration → community operation simulation.",
    outcome:
      "Flexible housing solution for post-disaster, temporary, or permanent desert settlements — globally replicable.",
    links: { pdf: "" },
    coverImage: "/images/desert-boat/cover.png",
    gallery: ['/images/desert-boat/desert2.png'],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
