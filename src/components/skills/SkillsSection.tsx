"use client";

import React, { useState } from "react";
import { SKILL_GROUPS, SOFT_SKILLS } from "@/data/portfolioData";
import { Terminal, Code, Cpu, Database, Wrench, Sparkles, Network } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { InteractiveSkills3D } from "@/components/3d/InteractiveSkills3D";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = ["ALL", ...SKILL_GROUPS.map((g) => g.category)];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Code className="w-4 h-4 text-gold-champagne" />;
      case "Frontend":
        return <Terminal className="w-4 h-4 text-gold-champagne" />;
      case "Backend":
        return <Terminal className="w-4 h-4 text-gold-champagne" />;
      case "Libraries":
        return <Cpu className="w-4 h-4 text-gold-champagne" />;
      case "Databases":
        return <Database className="w-4 h-4 text-gold-champagne" />;
      case "Tools":
        return <Wrench className="w-4 h-4 text-gold-champagne" />;
      default:
        return <Sparkles className="w-4 h-4 text-gold-champagne" />;
    }
  };

  const filteredGroups =
    activeCategory === "ALL"
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.category === activeCategory);

  return (
    <section id="engineering" className="relative py-28 lg:py-36 border-t border-gold-antique/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] font-mono tracking-[0.25em] text-gold-champagne uppercase">
                04 / CORE STACK & SYSTEMS
              </span>
              <span className="w-10 h-[1px] bg-gold-champagne/40" />
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-warm-white tracking-tight">
              Technical Arsenal.
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-gold-champagne/80">
            <Network className="w-4 h-4 text-gold-champagne animate-pulse" />
            <span>3D CLUSTER VISUALIZER</span>
          </div>
        </div>

        {/* Embedded Interactive 3D Skills Sphere Widget */}
        <div className="mb-14">
          <InteractiveSkills3D />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-mono tracking-[0.16em] uppercase px-4 py-2 rounded transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gold-champagne text-[#0B0806] font-semibold shadow-[0_0_15px_rgba(217,183,131,0.35)]"
                  : "bg-surface-dark/70 text-warm-muted hover:text-warm-white border border-gold-antique/15 hover:border-gold-antique/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group, gIdx) => (
            <TiltCard key={gIdx} intensity={10}>
              <div className="glass-panel glass-panel-hover p-6 rounded-lg border border-gold-antique/20 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-surface-cardBorder">
                    <div className="p-2 rounded bg-surface-deep/80 border border-gold-antique/25">
                      {getCategoryIcon(group.category)}
                    </div>
                    <h3 className="font-editorial text-xl font-bold text-warm-white tracking-wide">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="group/pill inline-flex items-center gap-2 px-3 py-1.5 rounded bg-surface-deep/60 border border-gold-antique/20 hover:border-gold-champagne hover:bg-gold-antique/10 transition-all duration-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-champagne/60 group-hover/pill:bg-gold-champagne group-hover/pill:scale-125 transition-all" />
                        <span className="text-xs font-sans text-warm-white font-medium">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-surface-cardBorder/40 flex items-center justify-between text-[10px] font-mono text-warm-muted">
                  <span>CV Category</span>
                  <span className="text-gold-champagne font-bold">
                    {group.skills.length} Items
                  </span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Soft Skills Section directly from CV */}
        <div className="mt-12 glass-panel p-6 rounded-lg border border-gold-antique/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-gold-champagne shrink-0" />
            <span className="text-xs font-mono tracking-[0.16em] uppercase text-warm-white">
              Soft Skills (Verbatim CV):
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {SOFT_SKILLS.map((item, i) => (
              <span
                key={i}
                className="text-xs font-mono text-gold-champagne/90 px-3 py-1 rounded bg-surface-deep/80 border border-gold-antique/25"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
