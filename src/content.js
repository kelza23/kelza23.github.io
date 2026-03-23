export const profile = {
  name: "Dr. Yit Hong (Kelvin) Choo",
  title: "Innovation Architect | PhD in Engineering",
  logo: "/logo.svg",
  motto: "Everything you don't know is something you can learn.",
  summary:
    "An Innovation Architect who strategically bridges the Valley of Death between advanced academic research and commercial industrial application. Operating at the intersection of Transport, Defence, and Advanced Manufacturing, I transform theoretical breakthroughs into mission-critical assets — integrating AI, computer vision, and edge computing hardware to ensure novel engineering concepts survive the transition from laboratory to operational frontline.",
  email: "kelvinchoo_96@hotmail.com",
  linkedin: "kelvincyh",
  github: "kelza23",
  location: "Geelong, VIC",
  funding: "> AUD 2,500,000",
};

export const experience = [
  {
    role: "AI Technical Specialist",
    company: "Swinburne University of Technology",
    period: "Oct 2025 - Present",
    type: "Industry Interface",
    description:
      "Acting as the bridge between academia and the defence sector. Translating institutional capabilities into market-aligned projects, ensuring that cutting-edge research finds its way into real-world application.",
    highlights: [
      "Lead proposal development and pre-award commercial structuring.",
      "Identify and qualify multidisciplinary AI opportunities across engineering and applied sciences.",
      "Facilitate cross-functional collaboration to deliver pilot demonstrations and customer trials.",
    ],
  },
  {
    role: "Research Fellow — AI & Operations Analytics",
    company: "IISRI, Deakin University",
    period: "Aug 2023 — Sept 2025",
    type: "Industrial Impact",
    description:
      "A tenure defined by translating complex AI research into practical tools. Led industry-funded programs deploying AI, optimisation, and computer vision to solve critical operational bottlenecks for major partners including Alstom, Downer Group, and FLAIM Systems.",
    highlights: [
      "Secured and managed > AUD 2,500,000 in collaborative grants and contracts across career.",
      "Lead Chief Investigator for the FLAIM Systems VR training efficacy project.",
      "Supervised HDR candidates developing lightweight Deep Learning models for edge computing.",
      "Led the SASI Safe2Go DriverAssist R&D — AUD 1,975,112 project with Alstom Australia.",
    ],
  },
  {
    role: "Ultimate Frisbee Coach",
    company: "Victorian Representative Teams / Ultimate Victoria",
    period: "2021 — Present",
    type: "Passion Project",
    description:
      "Head Coach for Victorian representative teams, merging technical expertise with passion for sport. Integrates AI tools for biomechanical tracking and movement efficiency analysis to build evidence-based, high-performance training programs.",
    highlights: [
      "Head Coach for the 2023 Australian Under-22 Ultimate Championships.",
      "Recipient of the Ellipsis Coaching Scholarship for excellence in tactical development.",
      "Implemented AI-driven biomechanical tracking for performance analysis.",
    ],
  },
  {
    role: "Founder & Lead Photographer",
    company: "Kreatif Minds Studio",
    period: "2024 — Present",
    type: "Commercial Venture",
    description:
      "Founder and operator of a commercial photography studio specialising in elite international sporting events. Manages end-to-end commercial operations from accreditation and logistics to post-production delivery.",
    highlights: [
      "Official photographer for the World Ultimate Championships 2024.",
      "Engaged for The World Games 2025 coverage.",
      "Manages independent commercial operations and client relationships.",
    ],
  },
];

export const aiSpecialties = [
  {
    title: "Commercial & Technical Translation",
    icon: "Database",
    desc: "Architecting SRS documents, pilot-to-prototype roadmaps, and IP governance that align R&D with commercial objectives.",
  },
  {
    title: "Advanced Data Modelling & Simulation",
    icon: "Cpu",
    desc: "Developing ML and optimisation algorithms using Python, PyTorch, and Scikit-Learn to solve white-space industrial challenges.",
  },
  {
    title: "Program Governance & Leadership",
    icon: "Activity",
    desc: "Applying PMBOK principles to manage multi-million-dollar lifecycles across legal, finance, technical labs, and government.",
  },
  {
    title: "Edge AI & Hardware Integration",
    icon: "Code",
    desc: "Deploying real-time computer vision on NVIDIA Jetson and Unitree Go2 robotics for safety-critical operational environments.",
  },
];

export const projects = [
  {
    title: "SASI Safe2Go DriverAssist",
    partner: "Alstom Australia / Dept of Transport, VIC",
    tag: "Passenger Safety",
    funding: "AUD 1,975,112",
    description:
      "Led the R&D of an AI-based passenger safety system utilising real-time computer vision and edge inference on NVIDIA Jetson devices. Implemented CI/CD practices for seamless iteration, resulting in a technology demonstrator ready for procurement and field trials.",
    tech: ["Computer Vision", "NVIDIA Jetson", "Edge Inference", "CI/CD"],
    accent: {
      border: "hover:border-cyan-500/40",
      tag: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      tagFixed: "text-cyan-400 bg-cyan-500/10 border border-cyan-500/20",
      gradient: "from-cyan-500/8",
      icon: "group-hover:bg-cyan-500",
      glow: "rgba(6,182,212,0.15)",
    },
  },
  {
    title: "Rollingstock Maintenance DSS",
    partner: "Downer Group / Rail Manufacturing CRC",
    tag: "Logistics Optimisation",
    funding: "Industry PhD Research",
    description:
      "Developed a custom multi-objective optimisation algorithm and predictive models to forecast failure risks and task durations. Successfully deployed at the Auburn Maintenance Centre, delivering optimal schedules that maximised operational throughput and asset uptime.",
    tech: ["Multi-objective Optimisation", "Predictive Modelling", "Python"],
    accent: {
      border: "hover:border-amber-500/40",
      tag: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      tagFixed: "text-amber-400 bg-amber-500/10 border border-amber-500/20",
      gradient: "from-amber-500/8",
      icon: "group-hover:bg-amber-500",
      glow: "rgba(245,158,11,0.15)",
    },
  },
  {
    title: "Heads Up Safe Route",
    partner: "Heavy Vehicle Safety Initiative (HVSI)",
    tag: "Heavy Vehicle Safety",
    funding: "AUD 421,072",
    description:
      "Managing a multidisciplinary team to deliver safety-critical R&D outputs against strict government benchmarks. Directs budget monitoring and translates complex data into visual narratives that inform government safety policy and drive broad industry adoption.",
    tech: ["Safety Analytics", "PowerBI", "Stakeholder Engagement"],
    accent: {
      border: "hover:border-emerald-500/40",
      tag: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      tagFixed: "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20",
      gradient: "from-emerald-500/8",
      icon: "group-hover:bg-emerald-500",
      glow: "rgba(16,185,129,0.15)",
    },
  },
  {
    title: "VR Training Efficacy",
    partner: "FLAIM Systems",
    tag: "Defence / VR",
    funding: "AUD 49,837",
    description:
      "Served as Lead Chief Investigator evaluating VR efficacy versus conventional training for high-risk landmine sweeping operations. Evaluation of cognitive workload and fatigue directly informed customer adoption decisions for next-generation training technologies.",
    tech: ["Virtual Reality", "Human Performance Analysis", "Human Factors"],
    accent: {
      border: "hover:border-violet-500/40",
      tag: "text-violet-400 bg-violet-500/10 border-violet-500/20",
      tagFixed: "text-violet-400 bg-violet-500/10 border border-violet-500/20",
      gradient: "from-violet-500/8",
      icon: "group-hover:bg-violet-500",
      glow: "rgba(139,92,246,0.15)",
    },
  },
];

export const capabilities = [
  "Commercial & Technical AI Translation",
  "Full-cycle Business Development",
  "Multi-objective Optimisation Algorithms",
  "Deep Learning & Computer Vision",
  "Edge AI (NVIDIA Jetson, Raspberry Pi)",
  "Program Governance (PMBOK)",
  "Stakeholder Engagement & Workshop Facilitation",
  "Digital Twin & Scenario Simulation",
  "PowerBI / Tableau Data Visualisation",
  "Strategic High-Performance Coaching",
];

export const philosophy = [
  {
    title: "Seek Industry-Aligned Research",
    desc: "My PhD wasn't confined to a lab — it was integrated with Rail Manufacturing CRC and Downer Group to solve existing business problems. Real-world friction creates the best innovations.",
  },
  {
    title: "Bridge the Valley of Death",
    desc: "The most dangerous gap in innovation is between a working prototype and a deployed product. I specialise in building the roadmaps, governance structures, and partnerships that close it.",
  },
  {
    title: "Integrate Your Passions",
    desc: "Merging professional expertise with personal passion creates a unique brand. Applying AI to sport and founding a commercial photography studio didn't just expand my skill set — it distinguished me as an innovator.",
  },
];

export const talks = [
  {
    title: "Decision Support Systems for Rolling Stock Maintenance",
    venue: "Telkom University Purwokerto Campus",
    date: "June 2025",
    topic: "AI-based Decision Support Systems",
  },
  {
    title: "Smarter Than Ever: The Future of AI Applications",
    venue: "UCSI University KL Campus",
    date: "March 2025",
    topic: "AI-based Decision Support Systems",
  },
];

export const supervision = [
  {
    type: "PhD",
    students: [
      {
        name: "Zheng Cai",
        topic:
          "Knowledge-Guided Learning for Expensive Constrained Multi-Objective Optimisation in Real-World Applications.",
      },
      {
        name: "Fazal Ghaffar",
        topic: "Designing Intelligent Deep Neural Network Models for Object Detection.",
      },
      {
        name: "Dr. Xinjie Deng",
        status: "Completed",
        topic:
          "Advanced Lightweight Deep Learning Models for Aerial Image Classification.",
      },
    ],
  },
  {
    type: "Honours & Internship",
    students: [
      {
        name: "Shakir Hussain Naushad Mohamed",
        topic: "Advanced Light Weight Model for Human Behavior Analysis.",
      },
      {
        name: "Hao Feng Chan",
        topic: "Advanced Computer Vision Models for Human Motion Analysis on Edge Computing.",
      },
      {
        name: "Dexter Sing Fong Leong",
        topic: "Markerless Human Motion Analytics using Computer Vision.",
      },
      {
        name: "Wui Chung Alton Chau",
        topic: "Optimising Face Embedding Sizes and Accuracy in Facial Recognition System.",
      },
    ],
  },
];

export const techStack = {
  software: ["Python", "Pandas", "NumPy", "Scikit-Learn", "PyTorch", "TensorFlow", "Docker", "CI/CD", "PowerBI", "Tableau", "LaTeX"],
  hardware: ["NVIDIA Jetson", "Unitree Go2 Robotics", "Raspberry Pi", "Fibre Optic Seismic Sensing"],
  certifications: [
    "Project Management Fundamentals (AIM)",
    "WorkSafe Victoria White Card",
    "Level 2 First Aid (St John Ambulance)",
    "UA Level 2 Development Coach",
  ],
  memberships: ["Graduate Member, Engineers Australia", "Editorial Board — Jurnal INFOTEL"],
  languages: ["English", "Mandarin", "Cantonese", "Bahasa (Malay)"],
};