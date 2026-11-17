"use client";

import React from "react";
import { PERSONAL_DATA } from "@/data/portfolioData";
import { Code2, Trophy, Star, Infinity as InfinityIcon, Github, Linkedin, Mail } from "lucide-react";

export function StatsDock() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-4 h-4 text-gold-champagne shrink-0" />;
      case "Trophy":
        return <Trophy className="w-4 h-4 text-gold-champagne shrink-0" />;
      case "Star":
        return <Star className="w-4 h-4 text-gold-champagne shrink-0" />;
      case "Infinity":
        return <InfinityIcon className="w-4 h-4 text-gold-champagne shrink-0" />;
      default:
        return <Code2 className="w-4 h-4 text-gold-champagne shrink-0" />;
    }
  };

  return (
    <div className="w-full border-t border-gold-antique/20 bg-[#0B0806]/70 backdrop-blur-md py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Metric Items Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 w-full md:w-auto">
          {PERSONAL_DATA.stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-3 group">
              <div className="p-2 rounded bg-surface-deep/60 border border-gold-antique/20 group-hover:border-gold-champagne/50 transition-colors">
                {getIcon(stat.icon)}
              </div>
              <div className="flex flex-col">
                <span className="font-editorial text-lg sm:text-xl font-bold text-warm-white tracking-wide">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.14em] text-warm-muted uppercase">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Links on the Right */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href={PERSONAL_DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-gold-antique/25 text-warm-muted hover:text-gold-champagne hover:border-gold-champagne hover:bg-gold-antique/10 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_DATA.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-gold-antique/25 text-warm-muted hover:text-gold-champagne hover:border-gold-champagne hover:bg-gold-antique/10 transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_DATA.contact.email}`}
            className="p-2.5 rounded-full border border-gold-antique/25 text-warm-muted hover:text-gold-champagne hover:border-gold-champagne hover:bg-gold-antique/10 transition-all duration-300"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
