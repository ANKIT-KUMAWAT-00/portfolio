# Ankit Kumawat — Cinematic 3D Personal Portfolio

> **Full-Stack AI/ML Engineer**  
> *"Building the Future with AI & Software."*

A luxury, editorial personal digital experience crafted for **Ankit Kumawat**, featuring real-time 3D Three.js orbital physics, chiaroscuro atmospheric lighting, authentic high-resolution studio portraiture, and verified project case studies.

---

## 🏛️ System Highlights & Design Philosophy

- **Artistic 3D Environment:** Real-time Three.js / React Three Fiber interactive scene with glowing bronze gyroscopic orbital rings, classical columns, chiaroscuro sculptural forms, and an instanced particle field of 900+ floating golden embers.
- **Authentic Portrait Integration:** Direct studio cutout of Ankit Kumawat with realistic warm golden rim lighting, ambient occlusion depth grounding, and subtle pointer-driven inertia parallax.
- **Strict Single Source of Truth:** Every project, statistic, educational credential, experience timeline, and contact channel is sourced directly from Ankit's CV in `src/data/portfolioData.ts`.
- **High-Performance Architecture:** Static prerendering, WebP image delivery, instanced rendering, lazy-loaded WebGL canvas, and responsive mobile/tablet views.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14 App Router](https://nextjs.org/)
- **Language:** TypeScript 5.6
- **Styling:** Tailwind CSS with custom editorial gold palette tokens
- **3D Graphics:** Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`)
- **Typography:** Cormorant Garamond (Editorial Serif) & Inter (Precision Sans)
- **Icons:** Lucide React
- **Celebration Effects:** Canvas Confetti

---

## 🚀 Quick Start

### 1. Installation
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the live experience.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 📂 Project Architecture

```
ankit-portfolio/
├── public/
│   ├── portrait-ankit.webp         # Optimized studio portrait with alpha cutout
│   ├── portrait-ankit.png          # High-resolution original cutout
│   └── Ankit_Kumawat_Resume.pdf    # Direct CV download asset
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root HTML, Google Fonts & Meta tags
│   │   └── page.tsx                # Main composition of all 11 sections
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── CanvasWrapper.tsx   # SSR-safe dynamic canvas loader
│   │   │   ├── Scene3D.tsx         # Master Three.js scene graph
│   │   │   ├── OrbitalRings.tsx    # Multi-axis PBR bronze orbital rings
│   │   │   ├── ParticleField.tsx   # Instanced golden stardust (900 motes)
│   │   │   ├── ClassicalStructure.tsx # Procedural Greek column & classical bust
│   │   │   ├── Lighting.tsx        # Volumetric chiaroscuro light rig
│   │   │   └── CameraRig.tsx       # Mouse inertia parallax interpolation
│   │   ├── hero/
│   │   │   ├── Hero.tsx            # Desktop 2-column hero composition
│   │   │   ├── HeroPortrait.tsx    # Layered portrait with golden halo & fade
│   │   │   └── StatsDock.tsx       # Bottom glassmorphism metrics dock
│   │   ├── about/
│   │   │   └── AboutSection.tsx    # "Beyond the Code" philosophy & 6 pillars
│   │   ├── projects/
│   │   │   ├── ProjectsSection.tsx # Alternating large cinematic case studies
│   │   │   └── ProjectVisuals.tsx  # Architectural schematics & diagrams
│   │   ├── experience/
│   │   │   └── ExperienceSection.tsx # CodeValues Pvt. Ltd. internship timeline
│   │   ├── skills/
│   │   │   └── SkillsSection.tsx   # Categorized interactive technical stack
│   │   ├── achievements/
│   │   │   └── AchievementsSection.tsx # LeetCode 100+ & Hackathon rank cards
│   │   ├── certifications/
│   │   │   └── CertificationsSection.tsx # Oracle Agentic AI, Udemy, CipherSchools
│   │   ├── education/
│   │   │   └── EducationSection.tsx # LPU B.Tech CSE & High School foundation
│   │   ├── engineering/
│   │   │   └── EngineeringSection.tsx # GitHub repositories & algorithmic profiles
│   │   ├── contact/
│   │   │   └── ContactSection.tsx  # Verified contact channels & terminal form
│   │   └── layout/
│   │       ├── Navbar.tsx          # Transparent-to-dark floating gold nav
│   │       └── Footer.tsx          # Minimal luxury gold footer
│   ├── data/
│   │   └── portfolioData.ts        # Centralized typed source of truth
│   ├── hooks/
│   │   ├── useMousePosition.ts     # Throttled normalized pointer coordinates
│   │   └── useScrollProgress.ts    # Smooth window scroll listener
│   ├── lib/
│   │   └── utils.ts                # Tailwind class merge helper
│   └── styles/
│       └── globals.css             # Dark luxury theme tokens & film noise
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

---

## 🔒 Source of Truth (CV Alignment)

All facts, projects, technologies, and achievements are verified directly against Ankit Kumawat's CV:
- **InternPilot:** LangGraph, Next.js, FastAPI, Gemini API, pgvector, Redis, Docker, JWT.
- **ResumeIQ AI:** Next.js, React, TypeScript, Supabase, Gemini API, Tailwind CSS, Razorpay.
- **Four-Layer Secure Auth:** Python, OpenCV, Face Recognition, Flask, Email/OTP API.
- **Achievements:** 100+ LeetCode problems solved, 50 Days LeetCode badge (July 2026), Multiple HackerRank Python badges, Rank 7 in CSE Category at CSE Section of the Year 2024 Hackathon.
- **Education:** Lovely Professional University, B.Tech CSE, CGPA 7.32 (Aug 2024 – Present).
<!-- Final Build: 100% Passed -->
