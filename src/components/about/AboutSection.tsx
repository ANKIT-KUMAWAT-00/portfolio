"use client";

import React from "react";
import { PERSONAL_DATA } from "@/data/portfolioData";
import { Cpu, Globe, Database, Eye, ShieldCheck, Sparkles, Terminal, Activity } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { CornerTechBrackets } from "@/components/ui/FuturisticHUD";

export function AboutSection() {
  const pillars = [
    {
      icon: Cpu,
      title: "Agentic AI & LLMs",
      description:
        "Architecting stateful multi-agent decision graphs using LangGraph, Gemini API, and vector embeddings with strict database-enforced human approval gates.",
      tag: "AGENTIC // SYSTEM",
    },
    {
      icon: Globe,
      title: "Full-Stack Web Systems",
      description:
        "Building responsive, high-performance web applications using Next.js App Router, React, TypeScript, and modern design systems.",
      tag: "REACT // NEXT.JS",
    },
    {
      icon: Database,
      title: "Backend & Vector Pipelines",
      description:
        "Engineering distributed REST APIs with FastAPI and Node.js, high-speed Redis caching, and high-dimensional semantic search with PostgreSQL pgvector.",
      tag: "FASTAPI // PGVECTOR",
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description:
        "Implementing real-time biometric identity pipelines, dynamic spatial hand-gesture verification, and facial embedding recognition via OpenCV.",
      tag: "OPENCV // VISION",
    },
    {
      icon: ShieldCheck,
      title: "Secure Identity & Auth",
      description:
        "Designing zero-trust multi-factor authentication systems with session anomaly detection, password hashing, and tokenized email OTP gates.",
      tag: "ZERO-TRUST // AUTH",
    },
    {
      icon: Terminal,
      title: "Algorithmic Precision",
      description:
        "Disciplined problem-solving with 100+ solved LeetCode challenges, continuous streak achievements, and competitive hackathon standings.",
      tag: "LEETCODE // 100+",
    },
  ];

  return (
    <section id="about" className="relative py-28 lg:py-36 border-t border-gold-antique/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] font-mono tracking-[0.25em] text-gold-champagne uppercase">
                01 / PHILOSOPHY & IDENTITY
              </span>
              <span className="w-10 h-[1px] bg-gold-champagne/40" />
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-warm-white tracking-tight">
              {PERSONAL_DATA.aboutHeadline}
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-gold-champagne/80">
            <Activity className="w-4 h-4 text-gold-champagne animate-pulse" />
            <span>NEURAL CORE ACTIVE</span>
          </div>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Authentic Biography & Philosophy */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <CornerTechBrackets>
              <TiltCard intensity={8}>
                <div className="glass-panel p-8 rounded-lg relative overflow-hidden border border-gold-antique/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-radial opacity-30 pointer-events-none" />
                  <span className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-gold-champagne uppercase mb-4">
                    <Sparkles className="w-3.5 h-3.5" /> Full-Stack AI/ML Engineer
                  </span>
                  <div className="space-y-4 text-warm-white/90 font-sans font-light text-sm md:text-base leading-relaxed">
                    {PERSONAL_DATA.aboutParagraphs.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </CornerTechBrackets>

            {/* Core Values Card */}
            <TiltCard intensity={6}>
              <div className="border border-gold-antique/15 bg-surface-dark/70 backdrop-blur-md p-6 rounded-lg flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.2em] text-warm-muted uppercase block">
                    Current Academic Foundation
                  </span>
                  <span className="font-editorial text-lg text-warm-white font-medium">
                    Lovely Professional University
                  </span>
                  <span className="text-xs text-gold-champagne block mt-0.5 font-mono">
                    B.Tech Computer Science and Engineering (CGPA – 7.32)
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full border border-gold-antique/30 flex items-center justify-center text-gold-champagne text-xs font-mono">
                  CSE
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: 6 Engineering Capabilities with 3D Tilt */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <TiltCard key={idx} intensity={12}>
                  <div className="glass-panel glass-panel-hover p-6 rounded-lg flex flex-col justify-between border border-gold-antique/15 h-full group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded bg-surface-deep/80 border border-gold-antique/25 flex items-center justify-center text-gold-champagne group-hover:border-gold-champagne group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[9px] font-mono tracking-wider px-2 py-0.5 rounded bg-gold-antique/15 text-gold-champagne border border-gold-antique/25">
                          {pillar.tag}
                        </span>
                      </div>
                      <h3 className="font-editorial text-xl font-bold text-warm-white mb-2 group-hover:text-gold-champagne transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-warm-muted leading-relaxed font-sans font-light">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
