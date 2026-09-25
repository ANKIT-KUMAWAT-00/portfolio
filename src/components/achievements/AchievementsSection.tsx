"use client";

import React from "react";
import { ACHIEVEMENTS } from "@/data/portfolioData";
import { Trophy, Star, Award, Code2, Calendar } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

export function AchievementsSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case "leetcode-100":
        return <Code2 className="w-5 h-5 text-gold-champagne" />;
      case "leetcode-badge":
        return <Star className="w-5 h-5 text-gold-champagne" />;
      case "hackerrank-python":
        return <Award className="w-5 h-5 text-gold-champagne" />;
      case "hackathon-rank7":
        return <Trophy className="w-5 h-5 text-gold-champagne" />;
      default:
        return <Trophy className="w-5 h-5 text-gold-champagne" />;
    }
  };

  return (
    <section className="relative py-28 lg:py-36 border-t border-gold-antique/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] font-mono tracking-[0.25em] text-gold-champagne uppercase">
                05 / VERIFIED ACCOLADES
              </span>
              <span className="w-10 h-[1px] bg-gold-champagne/40" />
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-warm-white tracking-tight">
              Verified Milestones.
            </h2>
          </div>
          <p className="text-sm font-sans tracking-[0.16em] text-warm-muted uppercase max-w-xs md:text-right">
            Quantified algorithmic performance, hackathon standing, and competitive milestones from CV.
          </p>
        </div>

        {/* 4 Large Statistic Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item) => (
            <TiltCard key={item.id} intensity={14}>
              <div className="glass-panel glass-panel-hover p-8 rounded-lg border border-gold-antique/20 flex flex-col justify-between h-full group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-2.5 rounded bg-surface-deep/80 border border-gold-antique/25 group-hover:border-gold-champagne transition-colors">
                      {getIcon(item.id)}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[9px] font-mono tracking-[0.16em] uppercase px-2.5 py-1 rounded bg-gold-antique/15 text-gold-champagne border border-gold-antique/30">
                      <Calendar className="w-2.5 h-2.5" />
                      {item.date}
                    </span>
                  </div>

                  <div className="font-editorial text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-warm-white via-gold-champagne to-gold-antique tracking-tight mb-3">
                    {item.metric}
                  </div>

                  <h3 className="font-editorial text-lg font-bold text-warm-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-warm-muted font-sans font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-surface-cardBorder/40 flex items-center justify-between text-[10px] font-mono text-warm-muted">
                  <span>CV Verified</span>
                  <span className="text-emerald-400 font-mono">100% Authentic</span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
