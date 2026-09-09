"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitalRings } from "./OrbitalRings";
import { ParticleField } from "./ParticleField";
import { ClassicalStructure } from "./ClassicalStructure";
import { Lighting } from "./Lighting";
import { CameraRig } from "./CameraRig";

export function Scene3D() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);

    // Detect mobile or low power devices
    if (window.innerWidth < 768 || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)) {
      setIsLowPower(true);
    }

    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 7.8], fov: 45, near: 0.1, far: 50 }}
        dpr={isLowPower ? [1, 1.25] : [1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <Lighting />
          <CameraRig reducedMotion={reducedMotion} />
          <OrbitalRings reducedMotion={reducedMotion} />
          <ClassicalStructure />
          <ParticleField
            count={isLowPower ? 400 : 900}
            reducedMotion={reducedMotion}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
