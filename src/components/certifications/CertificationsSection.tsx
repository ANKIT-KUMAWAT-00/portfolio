"use client";

import React, { useState } from "react";
import { CERTIFICATIONS } from "@/data/portfolioData";
import { Award, GraduationCap, Calendar, CheckCircle, ExternalLink } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

export function CertificationsSection() {
  const [filter, setFilter] = useState<"all" | "certification" | "training">("all");

  const filteredItems =
    filter === "all" ? CERTIFICATIONS : CERTIFICATIONS.filter((c) => c.type === filter);

  return (
    <section id="certifications" className="relative py-28 lg:py-36 border-t border-gold-antique/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] font-mono tracking-[0.25em] text-gold-champagne uppercase">
                06 / CREDENTIALS & SPECIALIZATIONS
              </span>
              <span className="w-10 h-[1px] bg-gold-champagne/40" />
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-warm-white tracking-tight">
              Certificates & Training.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`text-xs font-mono tracking-[0.16em] uppercase px-4 py-2 rounded transition-all duration-300 ${
                filter === "all"
                  ? "bg-gold-champagne text-[#0B0806] font-semibold"
                  : "bg-surface-dark/70 text-warm-muted hover:text-warm-white border border-gold-antique/15"
              }`}
            >
              All ({CERTIFICATIONS.length})
            </button>
            <button
              onClick={() => setFilter("certification")}
              className={`text-xs font-mono tracking-[0.16em] uppercase px-4 py-2 rounded transition-all duration-300 ${
                filter === "certification"
                  ? "bg-gold-champagne text-[#0B0806] font-semibold"
                  : "bg-surface-dark/70 text-warm-muted hover:text-warm-white border border-gold-antique/15"
              }`}
            >
              Certificates
            </button>
            <button
              onClick={() => setFilter("training")}
              className={`text-xs font-mono tracking-[0.16em] uppercase px-4 py-2 rounded transition-all duration-300 ${
                filter === "training"
                  ? "bg-gold-champagne text-[#0B0806] font-semibold"
                  : "bg-surface-dark/70 text-warm-muted hover:text-warm-white border border-gold-antique/15"
              }`}
            >
              Training Programs
            </button>
          </div>
        </div>

        {/* Certifications Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <TiltCard key={idx} intensity={12}>
              <div className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-lg border border-gold-antique/20 flex flex-col justify-between h-full group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded bg-surface-deep/80 border border-gold-antique/25 text-gold-champagne group-hover:scale-105 transition-transform">
                      {item.type === "certification" ? (
                        <Award className="w-4 h-4" />
                      ) : (
                        <GraduationCap className="w-4 h-4" />
                      )}
                    </div>
                    <span className="text-[9px] font-mono tracking-[0.16em] uppercase px-2.5 py-0.5 rounded bg-surface-deep/80 text-gold-champagne border border-gold-antique/25">
                      {item.type === "certification" ? "CERTIFICATE" : "TRAINING"}
                    </span>
                  </div>

                  <h3 className="font-editorial text-xl font-bold text-warm-white mb-2 group-hover:text-gold-champagne transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-sans text-warm-muted uppercase tracking-[0.12em] mb-4">
                    Issuer / Institution: <span className="text-warm-white font-medium">{item.issuer}</span>
                  </p>
                </div>

                <div className="pt-4 border-t border-surface-cardBorder/40 flex items-center justify-between text-[11px] font-mono text-warm-muted">
                  <span className="inline-flex items-center gap-1.5 text-gold-champagne/80">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gold-champagne hover:text-warm-white transition-colors"
                    >
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                      <span>Verify Credential</span>
                      <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                    </a>
                  ) : (
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle className="w-3 h-3" />
                      CV Verified
                    </span>
                  )}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
