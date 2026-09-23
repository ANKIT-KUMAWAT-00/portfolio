"use client";

import React from "react";
import { EDUCATION } from "@/data/portfolioData";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

export function EducationSection() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-gold-antique/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] font-mono tracking-[0.25em] text-gold-champagne uppercase">
                07 / ACADEMIC BACKGROUND
              </span>
              <span className="w-10 h-[1px] bg-gold-champagne/40" />
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-bold text-warm-white tracking-tight">
              Education & Foundations.
            </h2>
          </div>
          <p className="text-sm font-sans tracking-[0.16em] text-warm-muted uppercase max-w-xs md:text-right">
            Formal computer science training and academic trajectory from CV.
          </p>
        </div>

        {/* Education 3-Card Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EDUCATION.map((edu, idx) => (
            <TiltCard key={idx} intensity={10}>
              <div className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-lg border border-gold-antique/20 flex flex-col justify-between h-full group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded bg-surface-deep/80 border border-gold-antique/25 text-gold-champagne">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <span className="font-editorial text-2xl font-bold text-gold-champagne">
                      {edu.grade}
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl font-bold text-warm-white mb-1.5 group-hover:text-gold-champagne transition-colors">
                    {edu.degree}
                  </h3>

                  <p className="text-xs font-sans text-warm-white/90 font-medium mb-3">
                    {edu.institution}
                  </p>

                  {edu.highlights && (
                    <p className="text-xs text-warm-muted font-light leading-relaxed mb-4">
                      {edu.highlights[0]}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-surface-cardBorder/40 flex items-center justify-between text-[11px] font-mono text-warm-muted">
                  <span className="inline-flex items-center gap-1.5 text-gold-champagne/80">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
