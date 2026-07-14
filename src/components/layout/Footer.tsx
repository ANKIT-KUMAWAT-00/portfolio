"use client";

import React from "react";
import Link from "next/link";
import { PERSONAL_DATA, NAV_LINKS } from "@/data/portfolioData";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#080605] border-t border-gold-antique/15 pt-16 pb-12 overflow-hidden">
      {/* Subtle Animated Gold Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-champagne/60 to-transparent animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 pb-12 border-b border-surface-cardBorder/40">
          {/* Identity Left */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-editorial text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-warm-white via-gold-champagne to-gold-antique">
                {PERSONAL_DATA.shortName}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-champagne" />
              <span className="text-xs font-mono tracking-[0.2em] text-warm-muted uppercase">
                {PERSONAL_DATA.name}
              </span>
            </div>
            <p className="text-xs font-sans text-gold-champagne/80 tracking-wider">
              {PERSONAL_DATA.title}
            </p>
          </div>

          {/* Quick Nav Middle */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono tracking-[0.16em] uppercase">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-warm-muted hover:text-gold-champagne transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Socials & Back to Top Right */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-gold-antique/25 text-warm-muted hover:text-gold-champagne hover:border-gold-champagne transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-gold-antique/25 text-warm-muted hover:text-gold-champagne hover:border-gold-champagne transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_DATA.contact.email}`}
              className="p-2.5 rounded-full border border-gold-antique/25 text-warm-muted hover:text-gold-champagne hover:border-gold-champagne transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-surface-deep border border-gold-antique/30 text-gold-champagne hover:border-gold-champagne hover:scale-105 transition-all"
              title="Scroll to Top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-warm-muted/60 gap-4">
          <p>© {new Date().getFullYear()} Ankit Kumawat. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Architected with Next.js, Three.js & Tailwind CSS</span>
            <span className="w-1 h-1 rounded-full bg-gold-champagne/40" />
            <span className="text-gold-champagne/80">Cinematic Portfolio Edition</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
