"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS, PERSONAL_DATA } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";

interface NavbarProps {
  onOpenCV?: () => void;
}

export function Navbar({ onOpenCV }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detect active section
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#0B0806]/85 backdrop-blur-xl border-b border-gold-antique/15 py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent py-6 lg:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#"
            className="group flex items-center gap-3 text-warm-white hover:text-gold-champagne transition-colors"
          >
            <span className="font-editorial text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-warm-white via-gold-champagne to-gold-antique group-hover:scale-105 transition-transform duration-300">
              {PERSONAL_DATA.shortName}
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-gold-champagne animate-pulse-slow" />
          </Link>

          {/* Center decorative accent line (recreating reference design) */}
          <div className="hidden lg:flex items-center gap-3 opacity-30 pointer-events-none">
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-gold-champagne" />
            <span className="w-1.5 h-1.5 rotate-45 border border-gold-champagne" />
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-gold-champagne" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main Navigation">
            {NAV_LINKS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-[11px] lg:text-xs font-medium tracking-[0.22em] transition-all duration-300 relative py-1 group ${
                    isActive
                      ? "text-gold-champagne font-semibold"
                      : "text-warm-muted hover:text-warm-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-gold-champagne transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 opacity-60"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Interactive CV Popup Trigger */}
            <button
              onClick={onOpenCV}
              className="text-[10px] tracking-[0.2em] font-medium text-gold-champagne bg-surface-deep/80 border border-gold-antique/30 px-3.5 py-1.5 rounded hover:bg-gold-antique/15 hover:border-gold-champagne transition-all duration-300 flex items-center gap-1.5 shadow-[0_0_15px_rgba(217,183,131,0.2)]"
            >
              <FileText className="w-3 h-3" />
              <span>POPUP CV</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-warm-white hover:text-gold-champagne transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0B0806]/95 backdrop-blur-2xl transition-all duration-500 flex flex-col justify-center px-10 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6">
          <span className="text-[11px] font-mono tracking-[0.28em] text-gold-champagne/70 uppercase mb-2">
            Navigation Index
          </span>
          {NAV_LINKS.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-editorial text-2xl tracking-wide text-warm-white hover:text-gold-champagne transition-colors flex items-center justify-between border-b border-surface-cardBorder/40 pb-3"
            >
              <span>{item.label}</span>
              <span className="text-xs font-mono text-warm-muted">0{index + 1}</span>
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenCV) onOpenCV();
            }}
            className="mt-4 flex items-center justify-center gap-2 py-3 px-6 bg-gold-champagne text-[#0B0806] font-medium text-xs tracking-[0.2em] rounded"
          >
            <FileText className="w-4 h-4" />
            <span>POPUP CV MODAL</span>
          </button>
        </div>
      </div>
    </>
  );
}
// exports verified
