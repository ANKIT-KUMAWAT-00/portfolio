"use client";

import React, { useState, useEffect } from "react";
import { Activity, Radio, Cpu, ShieldCheck } from "lucide-react";

export function FuturisticHUD() {
  const [latency, setLatency] = useState(14);
  const [frequencies, setFrequencies] = useState<number[]>([40, 65, 30, 85, 55, 90, 45, 70, 35, 80, 60, 75]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 6) + 11); // 11ms to 17ms
      setFrequencies((prev) =>
        prev.map(() => Math.floor(Math.random() * 70) + 20)
      );
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:flex items-center gap-6 font-mono text-[10px] tracking-[0.16em] text-warm-muted/80 bg-surface-dark/60 border border-gold-antique/15 px-4 py-2 rounded-full backdrop-blur-md">
      {/* System Status Indicator */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="text-warm-white font-semibold">SYS // ONLINE</span>
      </div>

      <span className="w-[1px] h-3 bg-gold-antique/20" />

      {/* Latency Telemetry */}
      <div className="flex items-center gap-1.5 text-gold-champagne/90">
        <Activity className="w-3 h-3" />
        <span>{latency}ms LATENCY</span>
      </div>

      <span className="w-[1px] h-3 bg-gold-antique/20" />

      {/* AI Engine Target */}
      <div className="flex items-center gap-1.5 text-warm-white/90">
        <Cpu className="w-3 h-3 text-gold-champagne" />
        <span>LANGGRAPH // ACTIVE</span>
      </div>

      <span className="w-[1px] h-3 bg-gold-antique/20" />

      {/* Real-Time Waveform Frequency Visualizer */}
      <div className="flex items-end gap-[2px] h-3.5 px-1" title="Neural telemetry frequency">
        {frequencies.map((height, i) => (
          <span
            key={i}
            className="w-[2px] bg-gradient-to-t from-gold-antique to-gold-champagne rounded-t transition-all duration-300"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export function CornerTechBrackets({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Top Left Bracket */}
      <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-gold-champagne/50 pointer-events-none -translate-x-1 -translate-y-1" />
      {/* Top Right Bracket */}
      <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-gold-champagne/50 pointer-events-none translate-x-1 -translate-y-1" />
      {/* Bottom Left Bracket */}
      <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-gold-champagne/50 pointer-events-none -translate-x-1 translate-y-1" />
      {/* Bottom Right Bracket */}
      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-gold-champagne/50 pointer-events-none translate-x-1 translate-y-1" />
      {children}
    </div>
  );
}
