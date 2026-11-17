"use client";

import React, { useState, useEffect } from "react";
import { X, Download, Mail, FileText, Check, ZoomIn, ZoomOut, ExternalLink } from "lucide-react";
import { PERSONAL_DATA } from "@/data/portfolioData";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  const [copied, setCopied] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

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

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setIsZoomed(false); // Reset zoom on close
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-2xl animate-fadeIn">
      {/* Backdrop Click Dismiss */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-5xl h-[95vh] max-h-[960px] flex flex-col bg-[#120D0A] border border-gold-antique/30 rounded-xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#1A120D] border-b border-gold-antique/20 shrink-0">
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
                FULL-STACK AI/ML ENGINEER // COMPLETE DOCUMENT VIEW
              </span>
            </div>
          </div>

          {/* Action Buttons Right */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Zoom / Fit View Toggle */}
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-deep border border-gold-antique/30 text-warm-white hover:text-gold-champagne text-xs font-mono transition-colors"
              title={isZoomed ? "Fit whole page" : "Zoom in"}
            >
              {isZoomed ? (
                <>
                  <ZoomOut className="w-3.5 h-3.5 text-gold-champagne" />
                  <span className="hidden sm:inline">Fit Page</span>
                </>
              ) : (
                <>
                  <ZoomIn className="w-3.5 h-3.5 text-gold-champagne" />
                  <span className="hidden sm:inline">Zoom In</span>
                </>
              )}
            </button>

            {/* Copy Email */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-deep border border-gold-antique/30 text-warm-white hover:text-gold-champagne text-xs font-mono transition-colors"
              title="Copy email address"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5 text-gold-champagne" />}
              <span className="hidden md:inline">{copied ? "Copied" : "Copy Email"}</span>
            </button>

            {/* Direct Download PDF */}
            <a
              href="/Ankit_Kumawat_Resume.pdf"
              download="Ankit_Kumawat_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded bg-gradient-to-r from-gold-champagne to-gold-antique text-[#0B0806] font-mono text-xs font-bold tracking-wider hover:shadow-[0_0_15px_rgba(217,183,131,0.5)] transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-lg bg-surface-deep/80 hover:bg-surface-deep text-warm-muted hover:text-warm-white border border-gold-antique/20 transition-colors ml-1"
              aria-label="Close CV popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Display Area: Shows the WHOLE CV without cutting off */}
        <div className="flex-1 w-full min-h-0 bg-[#080604] p-2 sm:p-4 flex items-center justify-center overflow-auto">
          <div
            className={`transition-all duration-300 flex items-center justify-center ${
              isZoomed
                ? "w-full max-w-[960px] my-auto py-4"
                : "h-full w-full max-h-full"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/cv-preview.webp"
              alt="Ankit Kumawat — Official Curriculum Vitae"
              className={`rounded shadow-[0_15px_50px_rgba(0,0,0,0.9)] border border-neutral-300 transition-all ${
                isZoomed
                  ? "w-full h-auto block"
                  : "max-h-[calc(95vh-120px)] w-auto max-w-full object-contain block mx-auto"
              }`}
            />
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-[#17100C] border-t border-gold-antique/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono shrink-0">
          <div className="flex items-center gap-3 text-warm-muted text-[11px]">
            <span className="text-warm-white font-medium">Lovely Professional University (CGPA 7.32)</span>
            <span className="w-1 h-1 rounded-full bg-gold-antique/40 hidden sm:inline" />
            <span className="hidden sm:inline">CodeValues Pvt. Ltd.</span>
            <span className="w-1 h-1 rounded-full bg-gold-antique/40 hidden md:inline" />
            <span className="text-gold-champagne hidden md:inline">LangGraph · FastAPI · Next.js · OpenCV</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={onClose}
              className="text-gold-champagne hover:text-warm-white transition-colors text-[11px] underline underline-offset-4"
            >
              Initiate Contact &rarr;
            </a>
            <button
              onClick={onClose}
              className="px-3 py-1 rounded bg-surface-deep border border-gold-antique/30 text-warm-white hover:border-gold-champagne text-[11px] transition-colors"
            >
              Close (ESC)
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
        VIEW CV
      </span>
    </button>
  );
}
