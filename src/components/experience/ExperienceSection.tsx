"use client";

import React from "react";
import { EXPERIENCE } from "@/data/portfolioData";
import { Calendar, MapPin, CheckCircle2, Clock, GitCommit } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { CornerTechBrackets } from "@/components/ui/FuturisticHUD";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-28 lg:py-36 border-t border-gold-antique/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] font-mono tracking-[0.25em] text-gold-champagne uppercase">
                03 / INDUSTRY EXPERIENCE
              </span>
              <span className="w-10 h-[1px] bg-gold-champagne/40" />
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-warm-white tracking-tight">
              Professional Journey.
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-gold-champagne/90">
            <Clock className="w-4 h-4 text-gold-champagne animate-spin-slow" />
            <span>CHRONOS TIMELINE // ACTIVE</span>
          </div>
        </div>

        {/* Experience Timeline with 3D Tilt */}
        <div className="relative border-l-2 border-gold-antique/30 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-16">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Glowing 3D Timeline Node */}
              <div className="absolute -left-[42px] sm:-left-[58px] top-4 w-6 h-6 rounded-full bg-[#0B0806] border-2 border-gold-champagne flex items-center justify-center shadow-[0_0_15px_rgba(217,183,131,0.6)] group-hover:scale-125 transition-transform duration-300">
                <span className="w-2.5 h-2.5 rounded-full bg-gold-champagne animate-ping" />
              </div>

              {/* Main Experience Card with 3D Perspective Tilt */}
              <CornerTechBrackets>
                <TiltCard intensity={8}>
                  <div className="glass-panel p-8 sm:p-10 rounded-lg border border-gold-antique/20 hover:border-gold-champagne/40 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-surface-cardBorder">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <GitCommit className="w-4 h-4 text-gold-champagne" />
                          <span className="text-[11px] font-mono tracking-[0.2em] text-gold-champagne uppercase">
                            {exp.role}
                          </span>
                        </div>
                        <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-warm-white">
                          {exp.company}
                        </h3>
                      </div>

                      <div className="flex flex-col sm:items-end text-xs font-mono text-warm-muted gap-1">
                        <span className="inline-flex items-center gap-1.5 text-gold-champagne font-semibold bg-surface-deep px-3 py-1 rounded border border-gold-antique/20">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[11px]">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Exact CV Responsibilities */}
                    <div className="space-y-3.5 mb-8">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-warm-white/90">
                          <CheckCircle2 className="w-4 h-4 text-gold-champagne shrink-0 mt-0.5" />
                          <span className="font-light leading-relaxed">{resp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Highlight Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-surface-cardBorder/60">
                      {exp.highlights.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-3 py-1 rounded-full bg-surface-deep/80 text-warm-white border border-gold-antique/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </CornerTechBrackets>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
