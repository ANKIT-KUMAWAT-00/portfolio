"use client";

import React, { useRef } from "react";
import Image from "next/image";

interface HeroPortraitProps {
  mouseParallax?: { x: number; y: number };
}

export function HeroPortrait({ mouseParallax }: HeroPortraitProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle interactive parallax offset based on pointer
  const offsetX = (mouseParallax?.x || 0) * -12;
  const offsetY = (mouseParallax?.y || 0) * -8;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[88vh] flex items-end justify-center lg:justify-end pointer-events-none select-none"
      style={{
        transform: `translate3d(${offsetX}px, ${offsetY}px, 0)`,
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Golden Chiaroscuro Atmospheric Backlight Halo */}
      <div
        className="absolute w-[340px] h-[340px] lg:w-[480px] lg:h-[480px] rounded-full blur-[80px] opacity-45 pointer-events-none -z-10"
        style={{
          background: "radial-gradient(circle, rgba(217, 183, 131, 0.5) 0%, rgba(184, 138, 86, 0.25) 45%, transparent 70%)",
          transform: "translate(10%, -10%)",
        }}
      />

      {/* The Verified Original Portrait of Ankit Kumawat */}
      <div className="relative w-[320px] sm:w-[420px] md:w-[480px] lg:w-[580px] xl:w-[640px] h-full max-h-[820px] flex items-end">
        <Image
          src="/portrait-ankit.webp"
          alt="Ankit Kumawat — Full-Stack AI/ML Engineer"
          width={1086}
          height={1448}
          priority
          quality={95}
          className="w-full h-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
        />

        {/* Cinematic Bottom Fog / Ambient Occlusion Gradient Fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-28 lg:h-40 pointer-events-none"
          style={{
            background: "linear-gradient(to top, #0B0806 10%, rgba(11, 8, 6, 0.8) 45%, transparent 100%)",
          }}
        />

        {/* Subtle Right Rim Light Glow Effect */}
        <div
          className="absolute top-1/4 right-0 w-32 h-64 rounded-full blur-2xl opacity-25 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, #D9B783 0%, transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}
/* shadow spread adjusted */
// firefox clipping bug
