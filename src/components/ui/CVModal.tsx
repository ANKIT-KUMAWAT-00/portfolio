"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Download, Mail, ExternalLink, FileText, Check, Maximize2, Minimize2 } from "lucide-react";
import { PERSONAL_DATA } from "@/data/portfolioData";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  const [copied, setCopied] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn">
      {/* Backdrop Click Dismiss */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div
        className={`relative z-10 w-full max-h-[92vh] flex flex-col bg-[#120D0A] border border-gold-antique/30 rounded-xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden transition-all duration-300 ${
          zoomed ? "max-w-6xl" : "max-w-4xl"
        }`}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#1A120D] border-b border-gold-antique/20">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-surface-deep border border-gold-antique/30 text-gold-champagne">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-editorial text-lg sm:text-xl font-bold text-warm-white">
                  Ankit Kumawat
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                  VERIFIED CV
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-[0.16em] text-gold-champagne block">
                FULL-STACK AI/ML ENGINEER // LATEST REVISION
              </span>
            </div>
          </div>

          {/* Action Buttons Right */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setZoomed(!zoomed)}
              className="hidden sm:p-2 text-warm-muted hover:text-warm-white transition-colors"
              title={zoomed ? "Standard view" : "Expanded view"}
              aria-label="Toggle zoom"
            >
              {zoomed ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-deep border border-gold-antique/30 text-warm-white hover:text-gold-champagne text-xs font-mono transition-colors"
              title="Copy email address"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5 text-gold-champagne" />}
              <span className="hidden md:inline">{copied ? "Copied" : "Copy Email"}</span>
            </button>

            <a
              href="/Ankit_Kumawat_Resume.pdf"
              download="Ankit_Kumawat_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded bg-gradient-to-r from-gold-champagne to-gold-antique text-[#0B0806] font-mono text-xs font-bold tracking-wider hover:shadow-[0_0_15px_rgba(217,183,131,0.5)] transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-surface-deep/80 hover:bg-surface-deep text-warm-muted hover:text-warm-white border border-gold-antique/20 transition-colors ml-1"
              aria-label="Close CV popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document View */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 flex justify-center bg-[#0B0806]/95">
          <div className="relative w-full max-w-[820px] bg-white rounded-lg shadow-2xl overflow-hidden border border-neutral-300">
            {/* The Crisp Rendered CV Image */}
            <Image
              src="/cv-preview.webp"
              alt="Ankit Kumawat — Official Curriculum Vitae"
              width={1530}
              height={1980}
              priority
              quality={95}
              className="w-full h-auto object-contain block"
            />
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="px-5 py-3.5 bg-[#17100C] border-t border-gold-antique/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-4 text-warm-muted">
            <span>Lovely Professional University</span>
            <span className="w-1 h-1 rounded-full bg-gold-antique/40" />
            <span>CodeValues Pvt. Ltd.</span>
            <span className="w-1 h-1 rounded-full bg-gold-antique/40" />
            <span className="text-gold-champagne">LangGraph · FastAPI · Next.js</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={onClose}
              className="text-gold-champagne hover:text-warm-white transition-colors underline underline-offset-4"
            >
              Initiate Contact &rarr;
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded bg-surface-deep border border-gold-antique/30 text-warm-white hover:border-gold-champagne transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FloatingCVButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 left-6 z-40 group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-surface-dark/95 to-surface-deep/95 border border-gold-champagne/40 text-warm-white shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(217,183,131,0.25)] hover:border-gold-champagne hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-xl"
      aria-label="View Ankit Kumawat CV"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-champagne opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold-champagne" />
      </span>
      <FileText className="w-4 h-4 text-gold-champagne group-hover:rotate-12 transition-transform" />
      <span className="text-xs font-mono tracking-wider font-semibold text-warm-white group-hover:text-gold-champagne">
        POPUP CV
      </span>
    </button>
  );
}
