"use client";

import React from "react";
import { PROJECTS, PERSONAL_DATA } from "@/data/portfolioData";
import { ProjectVisuals } from "./ProjectVisuals";
import { Github, ExternalLink, CheckCircle, Layers, AlertCircle, Calendar } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { CornerTechBrackets } from "@/components/ui/FuturisticHUD";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-28 lg:py-36 border-t border-gold-antique/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 lg:mb-28 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] font-mono tracking-[0.25em] text-gold-champagne uppercase">
                02 / FEATURED SYSTEMS
              </span>
              <span className="w-10 h-[1px] bg-gold-champagne/40" />
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-warm-white tracking-tight">
              Crafted Architectures.
            </h2>
          </div>
          <div className="flex flex-col md:items-end">
            <span className="text-xs font-mono text-gold-champagne tracking-wider">
              CYBERNETIC SCHEMATICS // 3D HUD
            </span>
            <p className="text-xs font-sans tracking-[0.16em] text-warm-muted uppercase max-w-sm md:text-right mt-1">
              Production systems, autonomous agent workflows, and biometric defense systems.
            </p>
          </div>
        </div>

        {/* Project Case Studies (Alternating Large Cinematic Cards with 3D Tilt) */}
        <div className="space-y-24 lg:space-y-36">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Visual Architecture Column with 3D Tilt */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  } w-full`}
                >
                  <CornerTechBrackets>
                    <TiltCard intensity={10}>
                      <ProjectVisuals projectId={project.id} />
                    </TiltCard>
                  </CornerTechBrackets>
                </div>

                {/* Content Case Study Column */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  } flex flex-col justify-center`}
                >
                  {/* Top Meta: Number, Category & Exact CV Date */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-editorial text-3xl sm:text-4xl font-bold text-gold-champagne/80">
                      /{project.number}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-gold-champagne/90 bg-surface-deep/80 px-2.5 py-1 rounded border border-gold-antique/20">
                        <Calendar className="w-3 h-3" />
                        {project.period}
                      </span>
                      <span className="text-[10px] font-mono tracking-[0.16em] text-gold-antique uppercase px-2.5 py-1 rounded bg-surface-deep/60 border border-gold-antique/20">
                        {project.category.split("·")[0]}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-warm-white mb-2">
                    {project.title}
                  </h3>

                  {/* Stack String direct from CV */}
                  <p className="text-xs font-mono text-gold-champagne/90 mb-4 tracking-wide">
                    {project.stackString}
                  </p>

                  {/* Verbatim Bullet Points from CV */}
                  <div className="mb-6 space-y-2.5 p-4 rounded bg-surface-dark/60 border border-gold-antique/15">
                    <span className="text-[10px] font-mono tracking-[0.18em] text-gold-champagne uppercase block mb-1">
                      CV Technical Bullet Points:
                    </span>
                    {project.bulletPoints.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs text-warm-white/90">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-champagne shrink-0 mt-1.5" />
                        <span className="font-light leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Architecture & Problem context */}
                  <div className="space-y-3 mb-6">
                    <div className="p-3.5 rounded bg-surface-dark/80 border border-gold-antique/15 text-xs">
                      <div className="flex items-center gap-2 text-gold-champagne font-semibold text-[11px] mb-1 font-mono">
                        <Layers className="w-3.5 h-3.5" />
                        <span>TECHNICAL ARCHITECTURE & CONSTRAINTS</span>
                      </div>
                      <p className="text-warm-muted/90 font-light leading-relaxed">
                        {project.architecture}
                      </p>
                    </div>
                  </div>

                  {/* Technologies Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded bg-surface-deep/50 text-gold-champagne/90 border border-gold-antique/20 hover:border-gold-champagne/60 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    {/* Live Project URL (if deployed) */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-gradient-to-r from-gold-champagne to-gold-antique text-[#0B0806] font-mono text-xs font-bold tracking-[0.14em] uppercase hover:shadow-[0_0_20px_rgba(217,183,131,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Project Demo</span>
                      </a>
                    )}

                    {/* Direct Project GitHub Repository */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-surface-deep border border-gold-antique/30 hover:border-gold-champagne text-warm-white hover:text-gold-champagne text-xs font-mono tracking-[0.14em] uppercase hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span>{project.liveUrl ? "Source Code" : "Project Repository"}</span>
                    </a>

                    <span className="text-[11px] font-mono text-warm-muted/70 italic flex items-center gap-1.5 ml-auto">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {project.liveUrl ? "Live Production" : "Production Architecture"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
