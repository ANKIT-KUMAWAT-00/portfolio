export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  period: string; // Exact date from CV
  stackString: string; // Exact stack line from CV
  headline: string;
  description: string;
  problem: string;
  architecture: string;
  bulletPoints: string[]; // Verbatim from CV
  keyFeatures: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl: string | null;
  featured: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[]; // Verbatim from CV
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  skills: { name: string; tag?: string }[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  badge: string;
  type: "certification" | "training";
  linkText?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade: string;
  highlights?: string[];
}

export const PERSONAL_DATA = {
  name: "Ankit Kumawat",
  shortName: "AK.",
  title: "Full-Stack AI/ML Engineer",
  heroSubtitle: "Building the Future with AI & Software.",
  heroDescription:
    "I build intelligent applications, scalable backend systems and modern digital experiences that solve real-world problems.",
  aboutHeadline: "Beyond the Code.",
  aboutParagraphs: [
    "I am a Full-Stack AI/ML Engineer and Computer Science undergraduate at Lovely Professional University. My work bridges the gap between deep algorithmic machine learning and robust, high-performance distributed software architectures.",
    "From engineering autonomous multi-agent pipelines with LangGraph and vector similarity databases to crafting pixel-perfect, accessible full-stack applications with Next.js and TypeScript, I build production-ready systems grounded in reliability, performance, and user-centric design.",
    "Driven by continuous problem solving, competitive programming, and secure software development, I actively architect intelligent solutions that create tangible real-world impact.",
  ],
  contact: {
    email: "ankitkumawat9509207175@gmail.com",
    phone: "+91-9928446504",
    location: "Punjab / Rajasthan, India",
    github: "https://github.com/ANKIT-KUMAWAT-00",
    linkedin: "https://linkedin.com/in/ankit-kumawat",
    leetcode: "https://leetcode.com/u/ankitkumawat/",
    hackerrank: "https://www.hackerrank.com/profile/ankitkumawat",
  },
  stats: [
    { label: "Engineering Focus", value: "AI / ML", icon: "Code2" },
    { label: "Hackathon Standing", value: "Rank 7", icon: "Trophy" },
    { label: "LeetCode Problems", value: "100+", icon: "Star" },
    { label: "Ideas to Build", value: "∞", icon: "Infinity" },
  ],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "internpilot",
    number: "01",
    title: "InternPilot — AI Internship Agent",
    category: "Autonomous Agentic AI & Automation",
    period: "Aug 2026 – Oct 2026",
    stackString: "LangGraph, Next.js, FastAPI, Gemini API, pgvector, Redis, Docker",
    headline: "Autonomous multi-agent workflow that searches, evaluates, and tailors internship applications.",
    description:
      "InternPilot is an autonomous AI internship assistant powered by LangGraph state machines and FastAPI. It embeds job descriptions with pgvector for semantic match scoring, orchestrates evaluation chains, and dynamically tailors candidate applications under a strict database-enforced human approval gate.",
    problem:
      "Manual internship applications suffer from generic tailoring, time inefficiencies, and lack of real-time market alignment, while unsupervised AI bots risk sending inaccurate or unverified applications.",
    architecture:
      "Engineered with a LangGraph state machine orchestrating search, evaluation, ranking, and tailoring phases. Powered by FastAPI, PostgreSQL with pgvector, Redis rate-limiting, and JWT authentication. An absolute database-enforced human-in-the-loop approval gate ensures zero applications dispatch without explicit user consent.",
    bulletPoints: [
      "Orchestrated an autonomous AI internship assistant that searches, evaluates, and tailors internship applications using LangGraph.",
      "Implemented job-description embeddings with pgvector, JWT authentication, Redis rate limiting, and Dockerized services.",
      "Engineered a database-enforced approval workflow that guarantees no application is sent without explicit user approval.",
    ],
    keyFeatures: [
      "Autonomous multi-step internship discovery and semantic relevancy scoring",
      "High-dimensional job-description vector embeddings using pgvector",
      "Stateful agentic decision graph implemented via LangGraph",
      "Database-enforced human-in-the-loop approval workflow (zero automated spam)",
      "Distributed containerized microservices architecture with Docker and Redis rate-limiting",
      "Cryptographically secure JWT session management and API authorization",
    ],
    technologies: ["LangGraph", "Next.js", "FastAPI", "Gemini API", "pgvector", "Redis", "Docker", "JWT", "PostgreSQL"],
    githubUrl: "https://github.com/ANKIT-KUMAWAT-00",
    liveUrl: null,
    featured: true,
  },
  {
    id: "resumeiq",
    number: "02",
    title: "ResumeIQ AI",
    category: "Full-Stack SaaS & Resume Intelligence",
    period: "Jul 2026 – Sep 2026",
    stackString: "Next.js, React, TypeScript, Supabase, Gemini API, Tailwind CSS",
    headline: "Full-stack SaaS platform analyzing resumes against strict ATS rubrics with actionable scoring.",
    description:
      "ResumeIQ AI is an enterprise-ready SaaS application that processes PDF and DOCX resumes, extracts structural data, and leverages Gemini API prompt engineering to generate deep ATS scoring, keyword-gap analyses, and customized career improvements.",
    problem:
      "Job seekers are rejected by automated Applicant Tracking Systems (ATS) due to unparsed layouts, missing semantic keywords, and poor bullet-point impact metrics.",
    architecture:
      "Next.js App Router frontend with Supabase PostgreSQL for row-level security and authentication. Server-side session verification, Gemini API custom evaluation schemas, and integrated Razorpay payment gateway for tiered subscription billing.",
    bulletPoints: [
      "Developed a full-stack SaaS platform to analyze PDF/DOCX resumes and generate AI-powered ATS scores.",
      "Integrated the Gemini API with custom prompt engineering for resume analysis and personalized recommendations; implemented Supabase authentication and server-side sessions.",
      "Delivered a production-ready product with secure user accounts and Razorpay subscription billing.",
    ],
    keyFeatures: [
      "Deep PDF and DOCX document parsing and section breakdown",
      "AI-powered ATS matching score with quantified keyword density assessment",
      "Personalized, role-tailored bullet-point improvement recommendations",
      "Custom multi-shot prompt engineering utilizing Google Gemini API",
      "Supabase OAuth authentication and secure server-side session handling",
      "End-to-end Razorpay subscription billing and invoice management",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "Gemini API", "Tailwind CSS", "Razorpay"],
    githubUrl: "https://github.com/ANKIT-KUMAWAT-00",
    liveUrl: null,
    featured: true,
  },
  {
    id: "auth-system",
    number: "03",
    title: "Four-Layer Secure Authentication System",
    category: "Computer Vision & Identity Defense",
    period: "Apr 2026 – May 2026",
    stackString: "Python, OpenCV, Face Recognition, Flask, OTP API",
    headline: "Zero-trust biometric and multi-factor defense system combining vision and cryptography.",
    description:
      "A four-tier authentication architecture designed so no single compromised vector can grant access. Integrates cryptographic credentials, dynamic email OTP tokens, real-time hand gesture verification via OpenCV, and deep facial recognition confirmation.",
    problem:
      "Standard 2FA credentials can be intercepted through session hijacking, credential stuffing, or phishing attacks. Sensitive systems demand independent biological and contextual verification.",
    architecture:
      "Engineered with Python, Flask, OpenCV, and dlib/Face Recognition models. Tracks real-time spatial hand landmarks for user-specific secret gestures, validates facial embedding distances, and executes automated device/network anomaly detection to force re-authentication.",
    bulletPoints: [
      "Architected a four-factor authentication system (password, email OTP, hand-gesture verification, and facial recognition) so that a single compromised factor alone cannot grant access.",
      "Used computer vision to verify a user-specific hand gesture in real time, followed by facial recognition for final identity confirmation; added new device/network detection that forces re-authentication.",
      "Delivered a working end-to-end login flow in which a stolen password or OTP alone cannot grant access.",
    ],
    keyFeatures: [
      "Layer 1: High-entropy hashed password credentials with salt protection",
      "Layer 2: Time-synchronized dynamic email OTP token verification",
      "Layer 3: Real-time OpenCV hand-gesture computer vision recognition",
      "Layer 4: Deep facial recognition embedding distance confirmation",
      "Environmental context detection: detects new IP/device signatures to force re-authentication",
      "Zero-trust fail-closed security policy enforcing all four verification pillars",
    ],
    technologies: ["Python", "OpenCV", "Face Recognition", "Flask", "OTP API", "NumPy"],
    githubUrl: "https://github.com/ANKIT-KUMAWAT-00",
    liveUrl: null,
    featured: true,
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Web Development Intern",
    company: "CodeValues Pvt. Limited",
    period: "Aug 2026 – Present",
    location: "Remote / Hybrid",
    responsibilities: [
      "Developing and maintaining responsive web application features using modern front-end and back-end technologies as part of the development team.",
      "Collaborating on REST API integration and database interactions to support core application functionality.",
      "Participating in code reviews, debugging, and version control practices to ensure clean, maintainable code delivery.",
    ],
    highlights: ["REST API Architecture", "Database Interactions", "Collaborative Code Reviews", "Production Bug Fixing"],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", tag: "AI/ML Core" },
      { name: "JavaScript", tag: "Full-Stack" },
      { name: "TypeScript", tag: "Type-Safe" },
      { name: "C", tag: "Low-Level" },
      { name: "C++", tag: "DSA & Systems" },
      { name: "SQL", tag: "Relational" },
      { name: "HTML/CSS", tag: "Markup & Style" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", tag: "Component UI" },
      { name: "Next.js", tag: "App Router" },
      { name: "Tailwind CSS", tag: "Utility Styling" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", tag: "Async Runtime" },
      { name: "Express.js", tag: "REST Services" },
      { name: "FastAPI", tag: "High-Perf Python" },
      { name: "REST APIs", tag: "Integration" },
      { name: "WebSockets", tag: "Real-Time" },
      { name: "Electron", tag: "Desktop Apps" },
    ],
  },
  {
    category: "Libraries",
    skills: [
      { name: "TensorFlow", tag: "Deep Learning" },
      { name: "Scikit-learn", tag: "Classical ML" },
      { name: "OpenCV", tag: "Computer Vision" },
      { name: "NumPy", tag: "Matrix Math" },
      { name: "Pandas", tag: "Data Frames" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", tag: "Relational Enterprise" },
      { name: "MongoDB", tag: "NoSQL Document" },
      { name: "MySQL", tag: "Relational" },
      { name: "SQLite", tag: "Embedded" },
      { name: "Supabase", tag: "Postgres BaaS" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", tag: "VCS" },
      { name: "GitHub", tag: "Collaboration" },
      { name: "Linux", tag: "Kernel & Shell" },
      { name: "VS Code", tag: "Development IDE" },
    ],
  },
];

export const SOFT_SKILLS = [
  "Problem-solving",
  "Team Collaboration",
  "Adaptability",
  "Continuous Learning",
];

export const ACHIEVEMENTS = [
  {
    id: "leetcode-100",
    metric: "100+",
    title: "Solved 100+ problems on LeetCode",
    date: "Present",
    description: "Consistent problem solving in Data Structures and Algorithms with a focus on graph algorithms, dynamic programming, and binary search.",
    badge: "Algorithmic Mastery",
  },
  {
    id: "leetcode-badge",
    metric: "50 Days",
    title: "Earned the 50 Days badge on LeetCode",
    date: "Jul 2026",
    description: "Earned the 50 Days badge on LeetCode for 50 days of regular coding and dedication.",
    badge: "Jul 2026 Badge",
  },
  {
    id: "hackerrank-python",
    metric: "Multiple",
    title: "Earned multiple Python badges on HackerRank",
    date: "Nov 2025",
    description: "Earned multiple Python mastery badges validating deep fluency in advanced syntax, data structures, and functional paradigms.",
    badge: "HackerRank Verified",
  },
  {
    id: "hackathon-rank7",
    metric: "Rank 7",
    title: "Secured 7th rank in the CSE category at the “CSE Section of the Year 2024” hackathon",
    date: "Oct 2024",
    description: "Secured 7th place in the prestigious CSE category among competing engineering teams in October 2024.",
    badge: "Oct 2024 Award",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Django, HTML and Web Development",
    issuer: "Udemy",
    date: "Sep 2026",
    badge: "Certificate",
    type: "certification",
    linkText: "Certificate",
  },
  {
    title: "Agentic AI",
    issuer: "Oracle",
    date: "Sep 2026",
    badge: "Certificate",
    type: "certification",
    linkText: "Certificate",
  },
  {
    title: "OOPS and DSA",
    issuer: "CipherSchools",
    date: "Jul 2026",
    badge: "Certificate",
    type: "certification",
    linkText: "Certificate",
  },
  {
    title: "Summer Training Internship – DSA and OOPS",
    issuer: "CipherSchools",
    date: "Jul 2026 – Aug 2026",
    badge: "Certificate",
    type: "training",
    linkText: "Certificate",
  },
  {
    title: "Java",
    issuer: "LPU",
    date: "Jan 2026 – May 2026",
    badge: "Certificate",
    type: "training",
    linkText: "Certificate",
  },
  {
    title: "C++ with OOPS",
    issuer: "LPU",
    date: "Jul 2025 – Jan 2026",
    badge: "Certificate",
    type: "training",
    linkText: "Certificate",
  },
  {
    title: "Data Structures and Algorithms (DSA)",
    issuer: "LPU",
    date: "Jul 2025 – Jan 2026",
    badge: "Certificate",
    type: "training",
    linkText: "Certificate",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Lovely Professional University",
    period: "Aug 2024 – Present",
    location: "Punjab, India",
    grade: "CGPA – 7.32",
    highlights: [
      "Core coursework: Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks.",
    ],
  },
  {
    degree: "Intermediate",
    institution: "MG English International School",
    period: "Mar 2023 – Mar 2024",
    location: "Jaipur, Rajasthan",
    grade: "70%",
    highlights: ["Science & Mathematics focus with strong foundation in analytical reasoning."],
  },
  {
    degree: "Matriculation",
    institution: "MG English International School",
    period: "Mar 2021 – Mar 2022",
    location: "Jaipur, Rajasthan",
    grade: "80%",
    highlights: ["Graduated with distinction and academic honors."],
  },
];

export const NAV_LINKS = [
  { label: "ABOUT ME", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "ENGINEERING", href: "#engineering" },
  { label: "CERTIFICATIONS", href: "#certifications" },
  { label: "CONTACT ME", href: "#contact" },
];
// expanded InternPilot details
