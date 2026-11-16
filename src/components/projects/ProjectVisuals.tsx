"use client";

import React from "react";
import { ShieldCheck, CheckCircle2, Lock, Cpu, Database, Eye, Sparkles } from "lucide-react";

interface VisualProps {
  projectId: string;
}

export function ProjectVisuals({ projectId }: VisualProps) {
  if (projectId === "internpilot") {
    return (
      <div className="w-full h-full min-h-[380px] bg-[#0E0A07] rounded-lg border border-gold-antique/20 p-6 flex flex-col justify-between relative overflow-hidden group">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-radial opacity-30 pointer-events-none" />

        {/* Header Terminal Bar */}
        <div className="flex items-center justify-between border-b border-surface-cardBorder pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="text-[11px] font-mono text-warm-muted ml-2">internpilot-agent-graph.v1</span>
          </div>
          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-gold-antique/15 text-gold-champagne border border-gold-antique/30">
            LangGraph State Machine
          </span>
        </div>

        {/* Pipeline Architecture Diagram */}
        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-center gap-3 p-2.5 rounded bg-surface-deep/40 border border-gold-antique/15">
            <div className="w-6 h-6 rounded bg-gold-antique/20 flex items-center justify-center text-gold-champagne text-[10px] font-bold">
              01
            </div>
            <div className="flex-1">
              <span className="text-warm-white font-medium">Job Scraping & Ingestion</span>
              <span className="text-[10px] text-warm-muted block">Crawls target internships across verified portals</span>
            </div>
            <span className="text-[10px] text-green-400 font-mono">COMPLETE</span>
          </div>

          <div className="flex items-center gap-3 p-2.5 rounded bg-surface-deep/40 border border-gold-antique/15">
            <div className="w-6 h-6 rounded bg-gold-antique/20 flex items-center justify-center text-gold-champagne text-[10px] font-bold">
              02
            </div>
            <div className="flex-1">
              <span className="text-warm-white font-medium">pgvector Semantic Embeddings</span>
              <span className="text-[10px] text-warm-muted block">Cosine similarity matching candidate profile to JD</span>
            </div>
            <span className="text-[10px] text-gold-champagne font-mono">94.2% MATCH</span>
          </div>

          <div className="flex items-center gap-3 p-2.5 rounded bg-surface-deep/40 border border-gold-antique/15">
            <div className="w-6 h-6 rounded bg-gold-antique/20 flex items-center justify-center text-gold-champagne text-[10px] font-bold">
              03
            </div>
            <div className="flex-1">
              <span className="text-warm-white font-medium">Gemini API Dynamic Tailoring</span>
              <span className="text-[10px] text-warm-muted block">Generates tailored resume bullets & cover note</span>
            </div>
            <span className="text-[10px] text-blue-400 font-mono">READY</span>
          </div>

          {/* Critical Human in the Loop Gate */}
          <div className="p-3 rounded bg-amber-950/30 border border-amber-600/40 mt-3">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-[11px] mb-1">
              <Lock className="w-3.5 h-3.5" />
              <span>STRICT HUMAN APPROVAL GATEWAY</span>
            </div>
            <p className="text-[10px] text-warm-muted leading-tight">
              Database-enforced constraint: Zero automated email dispatching without explicit user cryptographic authorization.
            </p>
          </div>
        </div>

        {/* Bottom Docker / Redis Indicator */}
        <div className="mt-4 pt-3 border-t border-surface-cardBorder flex items-center justify-between text-[10px] font-mono text-warm-muted">
          <span>Docker Microservices · Redis Rate-Limit: 60 req/min</span>
          <span className="flex items-center gap-1.5 text-green-400">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Graph Active
          </span>
        </div>
      </div>
    );
  }

  if (projectId === "resumeiq") {
    return (
      <div className="w-full h-full min-h-[380px] bg-[#0E0A07] rounded-lg border border-gold-antique/20 p-6 flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-radial opacity-30 pointer-events-none" />

        {/* Dashboard Top Header */}
        <div className="flex items-center justify-between border-b border-surface-cardBorder pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold-champagne" />
            <span className="text-xs font-mono text-warm-white font-semibold">ResumeIQ AI — ATS Diagnostic Matrix</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-900/30 text-emerald-400 border border-emerald-500/30">
            Analysis Verified
          </span>
        </div>

        {/* ATS Score Display */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="p-3 rounded bg-surface-deep/50 border border-gold-antique/15 text-center">
            <span className="text-[10px] font-mono text-warm-muted block uppercase">Overall ATS Score</span>
            <span className="font-editorial text-3xl font-bold text-gold-champagne">91/100</span>
            <span className="text-[9px] text-emerald-400 block mt-0.5">Top 5% Tier</span>
          </div>
          <div className="p-3 rounded bg-surface-deep/50 border border-gold-antique/15 text-center">
            <span className="text-[10px] font-mono text-warm-muted block uppercase">Keyword Density</span>
            <span className="font-editorial text-3xl font-bold text-warm-white">96%</span>
            <span className="text-[9px] text-warm-muted block mt-0.5">18/19 Keywords</span>
          </div>
          <div className="p-3 rounded bg-surface-deep/50 border border-gold-antique/15 text-center">
            <span className="text-[10px] font-mono text-warm-muted block uppercase">Impact Metrics</span>
            <span className="font-editorial text-3xl font-bold text-warm-white">88%</span>
            <span className="text-[9px] text-emerald-400 block mt-0.5">Quantified Points</span>
          </div>
        </div>

        {/* AI Recommendations List */}
        <div className="space-y-2 text-xs font-sans">
          <span className="text-[10px] font-mono tracking-[0.16em] text-gold-champagne uppercase block mb-1">
            Gemini Prompt Recommendations
          </span>
          <div className="p-2 rounded bg-surface-card/60 border border-gold-antique/10 flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
            <span className="text-[11px] text-warm-white">Replaced passive verbs with quantified engineering outcomes</span>
          </div>
          <div className="p-2 rounded bg-surface-card/60 border border-gold-antique/10 flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
            <span className="text-[11px] text-warm-white">Formatted PDF schema to prevent ATS column truncation</span>
          </div>
        </div>

        {/* Billing & Auth Footer */}
        <div className="mt-4 pt-3 border-t border-surface-cardBorder flex items-center justify-between text-[10px] font-mono text-warm-muted">
          <span>Supabase Auth · Server Sessions</span>
          <span className="text-gold-champagne">Razorpay Tier: Pro Monthly</span>
        </div>
      </div>
    );
  }

  // Four-Layer Secure Auth
  return (
    <div className="w-full h-full min-h-[380px] bg-[#0E0A07] rounded-lg border border-gold-antique/20 p-6 flex flex-col justify-between relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-radial opacity-30 pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-surface-cardBorder pb-3 mb-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-gold-champagne" />
          <span className="text-xs font-mono text-warm-white font-semibold">Zero-Trust 4-Factor Authentication</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-600/30">
          Enforced Fail-Closed
        </span>
      </div>

      {/* 4 Authentication Layers */}
      <div className="grid grid-cols-2 gap-2.5 font-mono text-xs">
        {/* Layer 1 */}
        <div className="p-2.5 rounded bg-surface-deep/50 border border-gold-antique/15">
          <div className="flex items-center justify-between text-warm-white mb-1">
            <span className="text-[10px] text-gold-champagne font-bold">L1: Credential</span>
            <Lock className="w-3 h-3 text-gold-champagne" />
          </div>
          <span className="text-[10px] text-warm-muted block">Salted SHA-256 Hash</span>
          <span className="text-[9px] text-emerald-400 font-mono mt-1 block">✓ Verified</span>
        </div>

        {/* Layer 2 */}
        <div className="p-2.5 rounded bg-surface-deep/50 border border-gold-antique/15">
          <div className="flex items-center justify-between text-warm-white mb-1">
            <span className="text-[10px] text-gold-champagne font-bold">L2: Email OTP</span>
            <Cpu className="w-3 h-3 text-gold-champagne" />
          </div>
          <span className="text-[10px] text-warm-muted block">Time-Synchronized 6-Digit</span>
          <span className="text-[9px] text-emerald-400 font-mono mt-1 block">✓ Verified</span>
        </div>

        {/* Layer 3 */}
        <div className="p-2.5 rounded bg-surface-deep/50 border border-gold-antique/15">
          <div className="flex items-center justify-between text-warm-white mb-1">
            <span className="text-[10px] text-gold-champagne font-bold">L3: Hand Gesture</span>
            <Eye className="w-3 h-3 text-gold-champagne" />
          </div>
          <span className="text-[10px] text-warm-muted block">OpenCV Landmark Tracking</span>
          <span className="text-[9px] text-emerald-400 font-mono mt-1 block">✓ Landmark Match</span>
        </div>

        {/* Layer 4 */}
        <div className="p-2.5 rounded bg-surface-deep/50 border border-gold-antique/15">
          <div className="flex items-center justify-between text-warm-white mb-1">
            <span className="text-[10px] text-gold-champagne font-bold">L4: Face Embed</span>
            <ShieldCheck className="w-3 h-3 text-gold-champagne" />
          </div>
          <span className="text-[10px] text-warm-muted block">Deep Vector Distance</span>
          <span className="text-[9px] text-emerald-400 font-mono mt-1 block">✓ Euclidean &lt; 0.42</span>
        </div>
      </div>

      {/* Network Anomaly Detection Alert */}
      <div className="p-2.5 rounded bg-surface-deep/70 border border-gold-antique/20 mt-3 text-[11px] font-mono">
        <span className="text-gold-champagne block font-semibold mb-0.5">
          Network & Device Anomaly Detection
        </span>
        <span className="text-warm-muted text-[10px] block">
          Auto-invalidates session and mandates full 4-tier re-auth upon unknown IP/MAC signatures.
        </span>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-surface-cardBorder flex items-center justify-between text-[10px] font-mono text-warm-muted">
        <span>Flask · Python · OpenCV</span>
        <span className="text-green-400">All 4 Factors Required</span>
      </div>
    </div>
  );
}
/* stroke-dasharray animation */
// CPU usage spike
/* offscreen pause */
