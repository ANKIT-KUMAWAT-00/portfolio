"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ContactVortexProps {
  scrollProgress: number; // 0 to 1
}

export function ContactVortex({ scrollProgress }: ContactVortexProps) {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Active in Contact & Footer (progress > 0.80)
    let visibility = 0;
    if (scrollProgress >= 0.78) {
      visibility = (scrollProgress - 0.78) / 0.22;
      visibility = Math.max(0, Math.min(1, visibility));
    }

    groupRef.current.visible = visibility > 0.02;
    groupRef.current.scale.setScalar(visibility * 1.2);

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.4;
      ringRef.current.rotation.x = 1.2;
    }

    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.3;
    }

    const mouseX = state.pointer.x;
    groupRef.current.position.x = mouseX * 0.5;
  });

  return (
    <group ref={groupRef} position={[0, -0.5, -3.5]}>
      {/* Central Golden Singularity Portal */}
      <mesh ref={coreRef}>
        <octahedronGeometry args={[1.2, 2]} />
        <meshStandardMaterial
          color="#D9B783"
          roughness={0.1}
          metalness={0.9}
          wireframe
          emissive="#B88A56"
          emissiveIntensity={1.5}
        />
      </mesh>

      {/* Orbiting Concentric Accretion Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[3.2, 0.04, 16, 100]} />
        <meshStandardMaterial
          color="#F2E8D8"
          roughness={0.1}
          metalness={1.0}
          emissive="#D9B783"
          emissiveIntensity={1.2}
        />
      </mesh>

      <pointLight color="#D9B783" intensity={4} distance={12} decay={2} />
    </group>
  );
}
