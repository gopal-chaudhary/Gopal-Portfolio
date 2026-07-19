export const hero = {
  name: "Gopal Chaudhary",
  roles: [
    "Software Engineer",
    "Backend Engineer",
    "Full Stack Developer",
    "C++ Developer",
    "AI Engineer",
    "Systems Thinker",
  ],
  tagline: "Building scalable software, production systems, AI workflows and high-performance applications.",
  description:
    "Software Engineer experienced in C++, TypeScript, Node.js, Angular, Go and AI systems. I care about clean architecture, performance, and shipping software people actually rely on.",
};

export const contact = {
  email: "gopal.se.dev@gmail.com",
  phone: "+91 7009931144",
  location: "Punjab, India",
  availability: "Open to SDE, Backend, Full Stack and AI Engineering roles",
  github: "https://github.com/gopal-chaudhary",
  linkedin: "https://www.linkedin.com/in/mr-gopal/",
  leetcode: "https://leetcode.com/u/gopal-chaudhary/",
};

export const about = {
  heading: "About",
  eyebrow: "Engineer. Systems thinker. Builder.",
  paragraphs: [
    "I'm a Software Engineer who enjoys the full stack — from low-level C++ memory management at Autodesk to designing a 19-table PostgreSQL schema for a marketplace I co-founded.",
    "I care about the boring things that make production software good: clean architecture, observability, tests that actually catch bugs, and APIs that don't surprise you.",
    "Lately I've been building AI systems — agentic workflows, RAG pipelines, and MCP tooling — and shipping them into real products.",
  ],
  highlights: [
    { label: "Focus", value: "Backend · Systems · AI" },
    { label: "Currently", value: "Co-founder @ TheWorkingZone" },
    { label: "Previously", value: "SDE Intern @ Autodesk" },
    { label: "Education", value: "B.Tech CSE · LPU · 8.3 CGPA" },
  ],
};

export type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  stack: string[];
  achievements: string[];
  accent: string;
};

export const experiences: Experience[] = [
  {
    company: "TheWorkingZone",
    role: "Co-Founder & Backend Engineer",
    duration: "Jan 2026 — Present",
    location: "Pune, India",
    stack: ["Node.js", "TypeScript", "Express", "PostgreSQL", "Sequelize", "Socket.io", "AWS", "Supabase", "JWT", "Sentry", "Jest"],
    achievements: [
      "Co-founded a three-tier marketplace (Worker · Contractor · Client) targeting India's informal workforce; shipped MVP live on the Play Store.",
      "Architected and independently built the backend — 19-table PostgreSQL schema via Sequelize supporting 3 distinct job flows.",
      "Deployed on AWS with env-based config across dev/staging/prod, pooled vs. direct PostgreSQL, Supabase for query traffic.",
      "Hardened the API with Zod validation, rate limiting, Sentry monitoring, Pino structured logs, and a Jest suite in CI.",
    ],
    accent: "from-blue-500/40 to-indigo-500/30",
  },
  {
    company: "Autodesk",
    role: "Software Development Engineer Intern",
    duration: "Jun 2025 — Dec 2025",
    location: "Pune, India",
    stack: ["C++", "Python", "System Design", "CMake", "Debugging", "Data Pipelines"],
    achievements: [
      "Resolved 8+ production memory leaks across simulation workflows, reducing customer-reported crashes.",
      "Redesigned a 40-year-old simulation data API with the Product Owner, improving response time by 60%.",
      "Introduced a modular unit testing pattern, cutting test execution time by 30%.",
      "Delivered 5+ production C++ features and a data-export utility generating standardized JSON for downstream AI workflows.",
    ],
    accent: "from-orange-500/40 to-amber-500/30",
  },
  {
    company: "RTRA",
    role: "Web Developer",
    duration: "Jun 2024 — Jun 2025",
    location: "Jalandhar, India",
    stack: ["MongoDB", "Express", "React", "Node.js", "REST"],
    achievements: [
      "Delivered and maintained a MERN website serving 500+ users.",
      "Reduced page load time by 35% through frontend optimization and improved deployment workflow.",
    ],
    accent: "from-emerald-500/40 to-teal-500/30",
  },
];

export type SkillCategory = { category: string; skills: string[] };

export const skillCategories: SkillCategory[] = [
  { category: "Languages", skills: ["C++", "TypeScript", "Python", "Java", "Go", "JavaScript", "SQL"] },
  { category: "Frontend", skills: ["React", "Angular", "Redux", "Tailwind", "Three.js", "Ionic"] },
  { category: "Backend", skills: ["Node.js", "Express", "Go", "REST APIs", "Socket.io", "Sequelize"] },
  { category: "Databases", skills: ["PostgreSQL", "MongoDB", "Supabase", "SQL"] },
  { category: "Cloud & DevOps", skills: ["AWS", "Docker", "GitHub Actions", "Jenkins", "CMake"] },
  { category: "AI", skills: ["LLMs", "RAG", "Agentic AI", "MCP", "Prompt Engineering", "Generative AI"] },
  { category: "Systems", skills: ["System Design", "Memory Management", "Multi-threading", "Performance Opt", "Data Pipelines"] },
];

export type Project = {
  title: string;
  category: "Backend" | "AI" | "Full Stack" | "Systems" | "Mobile";
  description: string;
  problem: string;
  solution: string;
  impact: string[];
  stack: string[];
  featured?: boolean;
  github?: string;
  live?: string;
  year: string;
};

export const projects: Project[] = [
  {
    title: "Railway Station Navigation System",
    category: "Full Stack",
    year: "2024 — 2025",
    featured: true,
    description: "Accessible mobile navigation for Indian railway stations with AR guidance and a custom Go routing engine.",
    problem: "Railway stations are difficult to navigate for elderly and visually impaired users, with no real-time indoor guidance.",
    solution: "Built a mobile platform: 8+ Node.js REST APIs, 20+ Angular components, a custom Go routing engine, Leaflet + OpenStreetMap for 3D mapping, plus voice and AR guidance.",
    impact: [
      "Voice-guided navigation for visually impaired users",
      "AR-based directional overlays",
      "Real-time routing via custom Go engine",
      "8+ REST APIs powering 20+ mobile components",
    ],
    stack: ["Angular", "Node.js", "Go", "OpenStreetMap", "Leaflet", "Ionic", "AR"],
    github: "https://github.com/gopal-chaudhary",
  },
  {
    title: "TheWorkingZone Backend",
    category: "Backend",
    year: "2026",
    featured: true,
    description: "Production backend for a 3-tier informal-workforce marketplace — 19 relational tables, real-time messaging, deployed on AWS.",
    problem: "India's informal workforce lacks a trusted digital layer connecting Workers, Contractors and Clients with verified job flows.",
    solution: "Designed a 19-table PostgreSQL schema via Sequelize supporting 3 job flows, layered JWT auth, Socket.io messaging, and shipped a production deployment on AWS with pooled and direct PG paths.",
    impact: [
      "MVP shipped live on the Play Store",
      "19 interconnected relational tables",
      "Env-based dev/staging/prod on AWS",
      "Sentry monitoring · Pino logs · Jest in CI",
    ],
    stack: ["Node.js", "TypeScript", "Express", "PostgreSQL", "Sequelize", "Socket.io", "AWS", "Supabase"],
  },
  {
    title: "C++ Simulation Data Export",
    category: "Systems",
    year: "2025",
    featured: true,
    description: "Native C++ utility generating standardized JSON exports from a 40-year-old simulation engine, unblocking downstream AI pipelines.",
    problem: "Simulation data was locked in a legacy binary format, requiring manual conversion before it could feed AI workflows.",
    solution: "Built a production C++ .exe that produces 100% standardized JSON, plus refactored the surrounding API for a 60% response-time win and modular unit tests.",
    impact: [
      "Eliminated manual data conversion end-to-end",
      "60% faster simulation data API",
      "30% faster test execution",
      "Resolved 8+ production memory leaks",
    ],
    stack: ["C++", "CMake", "Python", "System Design"],
  },
  {
    title: "Agentic AI Workflows",
    category: "AI",
    year: "2025",
    description: "Experimental agentic workflows using MCP tooling, RAG, and LLM orchestration for structured task automation.",
    problem: "LLMs alone struggle with long-horizon, tool-augmented tasks that require state and structured outputs.",
    solution: "Composed MCP-based tool servers with RAG retrieval and typed agent loops, using Zod-validated tool schemas and observability hooks.",
    impact: ["MCP tool servers", "RAG over local corpora", "Typed agent loops", "Zod-validated tool IO"],
    stack: ["TypeScript", "LLMs", "MCP", "RAG", "Node.js"],
  },
];

export const stats = [
  { value: 800, suffix: "+", label: "LeetCode Problems" },
  { value: 1900, suffix: "+", label: "LeetCode Rating" },
  { value: 19, suffix: "", label: "DB Tables Designed" },
  { value: 6000, suffix: "+", label: "Production LOC" },
  { value: 15, suffix: "+", label: "Projects Shipped" },
  { value: 2, suffix: "+", label: "Years Experience" },
];

export const achievements = [
  {
    title: "Knight on LeetCode",
    description: "1900+ contest rating with 800+ problems solved across DS&A, graphs and DP.",
    tag: "Competitive",
  },
  {
    title: "HackerRank 5★ SQL",
    description: "Top-tier badge for advanced SQL problem solving.",
    tag: "Databases",
  },
  {
    title: "SDE Intern @ Autodesk",
    description: "Shipped production C++ features into simulation software used by engineers worldwide.",
    tag: "Industry",
  },
  {
    title: "Co-Founder @ TheWorkingZone",
    description: "Designed backend architecture and shipped MVP for a 3-tier marketplace live on Play Store.",
    tag: "Founder",
  },
  {
    title: "Google Dev Hackathon Finalist",
    description: "Top 10 nationally for an AI-powered agriculture platform.",
    tag: "Hackathon",
  },
  {
    title: "Production Ownership",
    description: "Resolved 8+ memory leaks, cut API response time by 60%, and reduced test time by 30% at Autodesk.",
    tag: "Impact",
  },
];

export const certifications = [
  { title: "Cloud Computing", provider: "NPTEL" },
  { title: "Data Structures & Algorithms", provider: "Cypher School" },
  { title: "Data Structures & Algorithms", provider: "Hitbullseye" },
  { title: "Generative AI, LLMs & Prompt Engineering", provider: "DeepLearning.AI · Coursera" },
  { title: "Full Stack Development", provider: "LinkedIn Learning" },
  { title: "MERN Stack", provider: "LinkedIn Learning" },
];

export const timeline = [
  { year: "2022", event: "Started B.Tech Computer Science @ LPU" },
  { year: "2024", event: "Joined RTRA as Web Developer" },
  { year: "2025", event: "Software Engineer Intern @ Autodesk" },
  { year: "2026", event: "Co-founded TheWorkingZone" },
];
