"use client";

import React from "react";
import Link from "next/link";
import { PERSONAL_DATA } from "@/data/portfolioData";
import { HeroPortrait } from "./HeroPortrait";
import { StatsDock } from "./StatsDock";
import { ArrowRight, Mail, ChevronDown } from "lucide-react";
import { useMousePosition } from "@/hooks/useMousePosition";
import { FuturisticHUD } from "@/components/ui/FuturisticHUD";

export function Hero() {
  const mouse = useMousePosition();

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-24 lg:pt-28">
      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 relative z-10 my-auto">
        {/* Left Column: Headlines & Actions */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-left pt-6 lg:pt-0">
          {/* Top Telemetry & Category Pill */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 md:mb-6">
            <div className="flex items-center gap-3">
              <span className="text-[11px] md:text-xs font-mono font-medium tracking-[0.25em] text-gold-champagne uppercase">
                {PERSONAL_DATA.title}
              </span>
              <span className="w-10 h-[1px] bg-gradient-to-r from-gold-champagne/60 to-transparent" />
            </div>
            <FuturisticHUD />
          </div>

          {/* Main Huge Editorial Title */}
          <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[96px] font-bold tracking-tight leading-[0.95] text-warm-white mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-warm-white via-[#EFE2CE] to-gold-champagne drop-shadow-sm">
              Ankit
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-warm-white via-[#EFE2CE] to-gold-antique drop-shadow-sm">
              Kumawat
            </span>
          </h1>

          {/* Supporting Headline */}
          <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-gold-champagne font-medium tracking-normal leading-snug mb-5 max-w-lg">
            Building the future with <br className="hidden sm:inline" />
            <span className="italic text-warm-white">AI & Software.</span>
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base text-warm-muted font-sans font-light leading-relaxed max-w-md mb-8">
            {PERSONAL_DATA.heroDescription}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#projects"
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded bg-gradient-to-r from-gold-champagne to-gold-antique text-[#0B0806] font-medium text-xs tracking-[0.16em] uppercase hover:shadow-[0_0_25px_rgba(217,183,131,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded bg-[#17100C]/80 hover:bg-surface-deep border border-gold-antique/30 hover:border-gold-champagne text-warm-white font-medium text-xs tracking-[0.16em] uppercase hover:shadow-[0_0_20px_rgba(217,183,131,0.2)] transition-all duration-300"
            >
              <span>Contact Me</span>
              <Mail className="w-4 h-4 text-gold-champagne group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Column: Hero Portrait with interactive 3D parallax */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          <HeroPortrait mouseParallax={{ x: mouse.normalizedX, y: mouse.normalizedY }} />
        </div>
      </div>

      {/* Far Right Vertical Scroll Indicator */}
      <div className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-20 pointer-events-auto">
        <span
          className="text-[10px] font-mono tracking-[0.3em] text-warm-muted/70 uppercase"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          SCROLL DOWN
        </span>
        <a
          href="#about"
          className="w-8 h-8 rounded-full border border-gold-antique/30 flex items-center justify-center text-gold-champagne/80 hover:text-gold-champagne hover:border-gold-champagne hover:scale-110 transition-all duration-300 animate-bounce"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>

      {/* Bottom Achievement & Metric Dock */}
      <div className="relative z-20 w-full mt-4 lg:mt-0">
        <StatsDock />
      </div>
    </section>
  );
}
