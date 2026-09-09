"use client";

import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitalRings } from "./OrbitalRings";
import { ParticleField } from "./ParticleField";
import { ClassicalStructure } from "./ClassicalStructure";
import { QuantumCore } from "./QuantumCore";
import { CyberGrid } from "./CyberGrid";
import { NeuralConstellation } from "./NeuralConstellation";
import { ContactVortex } from "./ContactVortex";
import { Lighting } from "./Lighting";

interface MasterSceneRigProps {
  scrollProgress: number;
  reducedMotion: boolean;
}

function MasterSceneRig({ scrollProgress, reducedMotion }: MasterSceneRigProps) {
  const heroGroupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (reducedMotion) return;

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    // Camera movement trajectory through the website
    // Near z=7.8 at top, moving deeper into the space, tilting down subtly as user descends
    const targetZ = 7.8 - scrollProgress * 1.5;
    const targetY = -scrollProgress * 2.2 + mouseY * 0.25;
    const targetX = mouseX * 0.45;

    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.05);
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05);

    // Keep camera smoothly directed with soft perspective
    state.camera.lookAt(targetX * 0.3, -scrollProgress * 2.0, 0);

    // Hero group visibility fade when scrolled far away
    if (heroGroupRef.current) {
      const heroVisibility = Math.max(0, 1 - scrollProgress * 4.5);
      heroGroupRef.current.visible = heroVisibility > 0.01;
      heroGroupRef.current.scale.setScalar(heroVisibility);
    }
  });

  return (
    <>
      <Lighting />

      {/* Hero Visual Elements (Orbital Rings & Classical Bust/Columns) */}
      <group ref={heroGroupRef}>
        <OrbitalRings reducedMotion={reducedMotion} />
        <ClassicalStructure />
      </group>

      {/* About Section: Quantum AI Core */}
      <QuantumCore scrollProgress={scrollProgress} />

      {/* Projects Section: Cyber Perspective Grid */}
      <CyberGrid scrollProgress={scrollProgress} />

      {/* Skills Section: Neural Constellation Network */}
      <NeuralConstellation scrollProgress={scrollProgress} />

      {/* Contact Section: Singularity Vortex */}
      <ContactVortex scrollProgress={scrollProgress} />

      {/* Persistent Global Particle Embers */}
      <ParticleField count={900} reducedMotion={reducedMotion} />
    </>
  );
}

export function Global3DScene() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    if (window.innerWidth < 768 || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4)) {
      setIsLowPower(true);
    }

    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? Math.min(Math.max(window.scrollY / total, 0), 1) : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
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
          <MasterSceneRig scrollProgress={scrollProgress} reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
    </div>
  );
}
