"use client";

import React from "react";
import { PERSONAL_DATA } from "@/data/portfolioData";
import { Github, Linkedin, ExternalLink, GitBranch, Star, Code2, Terminal } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

export function EngineeringSection() {
  const publicRepos = [
    {
      name: "InternPilot",
      description: "Autonomous AI internship assistant orchestrating search, evaluation & dynamic tailoring via LangGraph & pgvector.",
      language: "Python / TypeScript",
      stars: "Public",
      forks: "Active",
      url: "https://github.com/ANKIT-KUMAWAT-00/Internship-Agent",
      liveUrl: null,
    },
    {
      name: "ResumeIQ-AI",
      description: "Full-stack SaaS application analyzing PDF/DOCX resumes with Google Gemini prompt engineering and ATS scoring.",
      language: "TypeScript / Next.js",
      stars: "Public",
      forks: "Active",
      url: "https://github.com/ANKIT-KUMAWAT-00/resumeiq-ai",
      liveUrl: "https://resumeiq-ai-pink.vercel.app",
    },
    {
      name: "Four-Layer-Auth-System",
      description: "Multi-factor zero-trust biometric system combining real-time OpenCV hand gestures and facial recognition.",
      language: "JavaScript / Python",
      stars: "Public",
      forks: "Active",
      url: "https://github.com/ANKIT-KUMAWAT-00/secure-os-scheduler",
      liveUrl: null,
    },
  ];

  return (
    <section id="engineering-activity" className="relative py-28 lg:py-36 border-t border-gold-antique/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] font-mono tracking-[0.25em] text-gold-champagne uppercase">
                08 / REPOSITORY ARCHITECTURE
              </span>
              <span className="w-10 h-[1px] bg-gold-champagne/40" />
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-warm-white tracking-tight">
              Engineering Activity.
            </h2>
          </div>
          <p className="text-sm font-sans tracking-[0.16em] text-warm-muted uppercase max-w-xs md:text-right">
            Open-source repositories, algorithmic profiles, and engineering source code from CV.
          </p>
        </div>

        {/* Profile Connect Banner with 3D Tilt */}
        <TiltCard intensity={6}>
          <div className="glass-panel p-8 rounded-lg border border-gold-antique/20 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-surface-deep border border-gold-champagne/40 flex items-center justify-center text-gold-champagne">
                <Github className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-[0.2em] text-gold-champagne uppercase block">
                  Official GitHub Handle
                </span>
                <h3 className="font-editorial text-2xl font-bold text-warm-white">
                  ANKIT-KUMAWAT-00
                </h3>
                <p className="text-xs text-warm-muted font-sans font-light mt-0.5">
                  Full-stack applications, LangGraph agents, and computer vision models.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <a
                href={PERSONAL_DATA.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-gold-champagne text-[#0B0806] text-xs font-mono tracking-[0.14em] uppercase font-semibold hover:shadow-[0_0_20px_rgba(217,183,131,0.4)] transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Explore GitHub</span>
              </a>
              <a
                href={PERSONAL_DATA.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-surface-deep border border-gold-antique/30 hover:border-gold-champagne text-warm-white text-xs font-mono tracking-[0.14em] uppercase transition-all"
              >
                <Linkedin className="w-4 h-4 text-gold-champagne" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </TiltCard>

        {/* Repositories Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {publicRepos.map((repo, idx) => (
            <TiltCard key={idx} intensity={12}>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-panel-hover p-6 rounded-lg border border-gold-antique/20 flex flex-col justify-between h-full group block"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-warm-white group-hover:text-gold-champagne transition-colors">
                      <Terminal className="w-4 h-4 text-gold-champagne" />
                      <span className="font-editorial text-xl font-bold">{repo.name}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-warm-muted group-hover:text-gold-champagne transition-colors" />
                  </div>

                  <p className="text-xs text-warm-muted font-sans font-light leading-relaxed mb-6">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-surface-cardBorder/40 flex items-center justify-between text-[11px] font-mono text-warm-muted">
                  <span className="text-gold-champagne">{repo.language}</span>
                  <span className="flex items-center gap-1.5 text-warm-white/70">
                    <GitBranch className="w-3 h-3" />
                    {repo.forks}
                  </span>
                </div>
              </a>
            </TiltCard>
          ))}
        </div>

        {/* Algorithmic Platforms Strip with 3D Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <TiltCard intensity={8}>
            <div className="glass-panel p-6 rounded-lg border border-gold-antique/15 flex items-center justify-between h-full">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded bg-surface-deep border border-gold-antique/25 text-gold-champagne">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-[0.2em] text-warm-muted uppercase block">
                    Competitive Platform
                  </span>
                  <span className="font-editorial text-lg text-warm-white font-bold block">
                    LeetCode Engineering Profile
                  </span>
                  <span className="text-xs text-gold-champagne font-mono">
                    100+ Problems · 50 Days Badge (Jul 2026)
                  </span>
                </div>
              </div>
            </div>
          </TiltCard>

          <TiltCard intensity={8}>
            <div className="glass-panel p-6 rounded-lg border border-gold-antique/15 flex items-center justify-between h-full">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded bg-surface-deep border border-gold-antique/25 text-gold-champagne">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-[0.2em] text-warm-muted uppercase block">
                    Verified Skills
                  </span>
                  <span className="font-editorial text-lg text-warm-white font-bold block">
                    HackerRank Certification
                  </span>
                  <span className="text-xs text-gold-champagne font-mono">
                    Multiple Python Badges (Nov 2025)
                  </span>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
