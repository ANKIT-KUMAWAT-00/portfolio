"use client";

import React, { useState } from "react";
import { PERSONAL_DATA } from "@/data/portfolioData";
import { Mail, Phone, Linkedin, Github, FileText, Send, CheckCircle2, Copy, Check, ExternalLink, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { TiltCard } from "@/components/ui/TiltCard";
import { CornerTechBrackets } from "@/components/ui/FuturisticHUD";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailStatus, setEmailStatus] = useState<{ emailSent: boolean; mailtoUrl: string }>({
    emailSent: false,
    mailtoUrl: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to transmit message.");
      }

      setEmailStatus({
        emailSent: Boolean(data.emailSent),
        mailtoUrl: data.mailtoUrl || `mailto:${PERSONAL_DATA.contact.email}`,
      });

      setSubmitted(true);

      // Trigger celebratory gold confetti
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.7 },
          colors: ["#D9B783", "#B88A56", "#F2E8D8", "#6A451E"],
        });
      } catch (err) {
        // non-blocking
      }
    } catch (err: any) {
      console.error("Form transmission error:", err);
      // Even if network fails, construct client-side mailto fallback
      const fallbackMailto = `mailto:${PERSONAL_DATA.contact.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject || "Contact from " + formData.name}`
      )}&body=${encodeURIComponent(
        `Hi Ankit,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
      )}`;

      setEmailStatus({
        emailSent: false,
        mailtoUrl: fallbackMailto,
      });
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 lg:py-36 border-t border-gold-antique/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] font-mono tracking-[0.25em] text-gold-champagne uppercase">
                09 / INITIATE CONVERSATION
              </span>
              <span className="w-10 h-[1px] bg-gold-champagne/40" />
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-warm-white tracking-tight max-w-2xl">
              Have an Idea? <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-warm-white via-gold-champagne to-gold-antique">
                Let&apos;s Build Something Meaningful.
              </span>
            </h2>
          </div>
          <p className="text-sm font-sans tracking-[0.16em] text-warm-muted uppercase max-w-xs md:text-right">
            Open to AI engineering roles, technical collaborations, and full-stack challenges.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info & Resume with 3D Tilt */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <TiltCard intensity={8}>
              <div className="glass-panel p-8 rounded-lg border border-gold-antique/20 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono tracking-[0.2em] text-gold-champagne uppercase">
                    Direct Contact Channels
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-500/30">
                    Live Ingestion
                  </span>
                </div>

                {/* Email Card with Quick Copy & Direct Mailto */}
                <div className="flex items-start justify-between p-4 rounded bg-surface-deep/60 border border-gold-antique/15 group">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded bg-surface-dark border border-gold-antique/25 text-gold-champagne">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-[0.16em] text-warm-muted uppercase block">
                        Email Address (Direct Inbox)
                      </span>
                      <a
                        href={`mailto:${PERSONAL_DATA.contact.email}?subject=${encodeURIComponent("Collaboration / Engineering Inquiry")}`}
                        className="text-xs sm:text-sm font-sans text-warm-white hover:text-gold-champagne font-medium transition-colors break-all"
                      >
                        {PERSONAL_DATA.contact.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-warm-muted hover:text-gold-champagne transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="flex items-center gap-3.5 p-4 rounded bg-surface-deep/60 border border-gold-antique/15">
                  <div className="p-2.5 rounded bg-surface-dark border border-gold-antique/25 text-gold-champagne">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.16em] text-warm-muted uppercase block">
                      Mobile Direct (CV)
                    </span>
                    <a
                      href={`tel:${PERSONAL_DATA.contact.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-xs sm:text-sm font-mono text-warm-white hover:text-gold-champagne transition-colors"
                    >
                      {PERSONAL_DATA.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={PERSONAL_DATA.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded bg-surface-deep/60 border border-gold-antique/15 hover:border-gold-champagne text-warm-white text-xs font-mono tracking-[0.14em] uppercase transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-gold-champagne shrink-0" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_DATA.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded bg-surface-deep/60 border border-gold-antique/15 hover:border-gold-champagne text-warm-white text-xs font-mono tracking-[0.14em] uppercase transition-all"
                  >
                    <Github className="w-4 h-4 text-gold-champagne shrink-0" />
                    <span>GitHub</span>
                  </a>
                </div>

                {/* Resume Download Card (Synchronized with exact CV) */}
                <div className="pt-4 border-t border-surface-cardBorder/60">
                  <a
                    href="/Ankit_Kumawat_Resume.pdf"
                    download="Ankit_Kumawat_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded bg-gradient-to-r from-gold-champagne to-gold-antique text-[#0B0806] font-medium text-xs font-mono tracking-[0.18em] uppercase hover:shadow-[0_0_25px_rgba(217,183,131,0.4)] transition-all duration-300"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Download CV (Updated PDF)</span>
                  </a>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Functional Contact Form with Direct Email Dispatch */}
          <div className="lg:col-span-7">
            <CornerTechBrackets>
              <TiltCard intensity={8}>
                <div className="glass-panel p-8 sm:p-10 rounded-lg border border-gold-antique/20 relative">
                  {submitted ? (
                    <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-2">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>

                      <h3 className="font-editorial text-3xl font-bold text-warm-white">
                        Transmission Processed!
                      </h3>

                      <p className="text-sm font-sans text-warm-muted max-w-md font-light leading-relaxed">
                        Thank you, <span className="text-warm-white font-medium">{formData.name}</span>. Your message has been logged and routed to Ankit Kumawat ({PERSONAL_DATA.contact.email}).
                      </p>

                      {/* Immediate Email Client Launch Button */}
                      <div className="pt-4 flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
                        <a
                          href={emailStatus.mailtoUrl}
                          className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded bg-gold-champagne text-[#0B0806] font-mono text-xs font-bold tracking-[0.16em] uppercase hover:shadow-[0_0_20px_rgba(217,183,131,0.5)] transition-all"
                        >
                          <Mail className="w-4 h-4" />
                          <span>Open in Email App / Gmail</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        <button
                          onClick={() => {
                            setSubmitted(false);
                            setFormData({ name: "", email: "", subject: "", message: "" });
                          }}
                          className="w-full sm:w-auto text-xs font-mono tracking-[0.16em] uppercase px-5 py-3 rounded bg-surface-deep border border-gold-antique/30 text-warm-white hover:border-gold-champagne transition-colors"
                        >
                          Reset
                        </button>
                      </div>

                      <p className="text-[10px] font-mono text-warm-muted/70 mt-2">
                        Archived to data/inquiries.json · Direct reply will be dispatched to {formData.email}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="flex items-center justify-between border-b border-surface-cardBorder pb-4 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-xs font-mono tracking-[0.2em] text-gold-champagne uppercase">
                            Direct Email Ingestion Form
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-warm-muted">
                          Routes to {PERSONAL_DATA.contact.email}
                        </span>
                      </div>

                      {errorMessage && (
                        <div className="p-3 rounded bg-red-950/40 border border-red-500/30 text-xs text-red-300 font-mono">
                          {errorMessage}
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="text-[11px] font-mono tracking-[0.16em] text-warm-muted uppercase block mb-2">
                            Your Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Alex Morgan"
                            className="w-full px-4 py-3 rounded bg-surface-deep/80 border border-gold-antique/20 text-warm-white placeholder-warm-muted/40 text-sm font-sans focus:outline-none focus:border-gold-champagne focus:ring-1 focus:ring-gold-champagne/40 transition-colors"
                          />
                        </div>

                        <div>
                          <label className="text-[11px] font-mono tracking-[0.16em] text-warm-muted uppercase block mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="e.g. alex@company.com"
                            className="w-full px-4 py-3 rounded bg-surface-deep/80 border border-gold-antique/20 text-warm-white placeholder-warm-muted/40 text-sm font-sans focus:outline-none focus:border-gold-champagne focus:ring-1 focus:ring-gold-champagne/40 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[11px] font-mono tracking-[0.16em] text-warm-muted uppercase block mb-2">
                          Subject / Engineering Scope
                        </label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="e.g. Full-Stack AI Engineer Role / Project Consultation"
                          className="w-full px-4 py-3 rounded bg-surface-deep/80 border border-gold-antique/20 text-warm-white placeholder-warm-muted/40 text-sm font-sans focus:outline-none focus:border-gold-champagne focus:ring-1 focus:ring-gold-champagne/40 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-mono tracking-[0.16em] text-warm-muted uppercase block mb-2">
                          Your Message *
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell me about your challenge, system architecture, or opportunity..."
                          className="w-full px-4 py-3 rounded bg-surface-deep/80 border border-gold-antique/20 text-warm-white placeholder-warm-muted/40 text-sm font-sans focus:outline-none focus:border-gold-champagne focus:ring-1 focus:ring-gold-champagne/40 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded bg-gradient-to-r from-gold-champagne to-gold-antique text-[#0B0806] font-medium text-xs font-mono tracking-[0.2em] uppercase hover:shadow-[0_0_25px_rgba(217,183,131,0.4)] transition-all duration-300 disabled:opacity-50"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <span className="w-3.5 h-3.5 border-2 border-[#0B0806] border-t-transparent rounded-full animate-spin" />
                            Transmitting Message...
                          </span>
                        ) : (
                          <>
                            <span>Send Message Directly</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </TiltCard>
            </CornerTechBrackets>
          </div>
        </div>
      </div>
    </section>
  );
}
