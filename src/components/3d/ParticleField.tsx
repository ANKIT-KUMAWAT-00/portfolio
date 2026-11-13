"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleFieldProps {
  count?: number;
  reducedMotion?: boolean;
}

export function ParticleField({ count = 900, reducedMotion = false }: ParticleFieldProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  // Generate particle data once
  const particles = useMemo(() => {
    const temp = [];
    const colors = [
      new THREE.Color("#D9B783"), // champagne gold
      new THREE.Color("#B88A56"), // antique gold
      new THREE.Color("#F2E8D8"), // warm white
      new THREE.Color("#825A2C"), // deep bronze
    ];

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.45) * 26;
      const y = (Math.random() - 0.4) * 18;
      const z = (Math.random() - 0.5) * 16 - 2;

      const scale = Math.random() * 0.038 + 0.012;
      const speedY = (Math.random() * 0.08 + 0.03) * (Math.random() > 0.3 ? 1 : -1);
      const speedX = (Math.random() - 0.5) * 0.04;
      const freq = Math.random() * 2 + 0.5;
      const color = colors[Math.floor(Math.random() * colors.length)];

      temp.push({ x, y, z, origY: y, scale, speedY, speedX, freq, color });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Set initial colors
  React.useEffect(() => {
    if (!meshRef.current) return;
    for (let i = 0; i < count; i++) {
      meshRef.current.setColorAt(i, particles[i].color);
    }
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true;
    }
  }, [count, particles]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      const p = particles[i];

      if (!reducedMotion) {
        // Natural floating Brownian drift
        p.y += p.speedY * delta;
        p.x += Math.sin(time * p.freq + i) * 0.003;

        // Wrap around boundaries
        if (p.y > 9) p.y = -9;
        if (p.y < -9) p.y = 9;
      }

      dummy.position.set(p.x, p.y, p.z);
      dummy.scale.set(p.scale, p.scale, p.scale);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </instancedMesh>
  );
}
// unfocus pause issue
/* clock.getElapsedTime() */
