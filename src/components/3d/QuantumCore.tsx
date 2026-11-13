"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface QuantumCoreProps {
  scrollProgress: number; // 0 to 1
}

export function QuantumCore({ scrollProgress }: QuantumCoreProps) {
  const groupRef = useRef<THREE.Group>(null);
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const haloRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const time = state.clock.getElapsedTime();

    // Active primarily in the About section (progress ~0.10 to ~0.35)
    // Smooth opacity / scale transition based on scroll
    let visibility = 0;
    if (scrollProgress >= 0.08 && scrollProgress <= 0.38) {
      // Peak around 0.22
      visibility = 1 - Math.abs(scrollProgress - 0.22) / 0.15;
      visibility = Math.max(0, Math.min(1, visibility));
    }

    groupRef.current.visible = visibility > 0.02;
    groupRef.current.scale.setScalar(visibility * 1.35);

    // Continuous dynamic gyroscopic rotations
    if (outerRef.current) {
      outerRef.current.rotation.x += delta * 0.25;
      outerRef.current.rotation.y += delta * 0.35;
    }

    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.45;
      innerRef.current.rotation.z += delta * 0.3;
    }

    if (coreRef.current) {
      // Pulsing energy core
      const pulse = Math.sin(time * 3) * 0.15 + 1;
      coreRef.current.scale.setScalar(pulse);
    }

    if (haloRef.current) {
      haloRef.current.rotation.z += delta * 0.15;
    }

    // Gentle floating translation with mouse
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;
    groupRef.current.position.x = 4.2 + mouseX * 0.4;
    groupRef.current.position.y = 0.2 + mouseY * 0.3 + Math.sin(time * 1.5) * 0.12;
  });

  return (
    <group ref={groupRef} position={[4.2, 0.2, -3]}>
      {/* Outer Wireframe Geometric Dodecahedron */}
      <mesh ref={outerRef}>
        <dodecahedronGeometry args={[1.8, 0]} />
        <meshStandardMaterial
          color="#D9B783"
          wireframe
          roughness={0.2}
          metalness={0.9}
          emissive="#6A451E"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Inner Rotating Icosahedron Lattice */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial
          color="#F2E8D8"
          wireframe
          roughness={0.1}
          metalness={0.95}
          emissive="#B88A56"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Central Pulsing Plasma Energy Core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial
          color="#F2E8D8"
          roughness={0.05}
          metalness={0.2}
          emissive="#D9B783"
          emissiveIntensity={2.5}
        />
      </mesh>

      {/* Orbiting Quantum Data Halo */}
      <mesh ref={haloRef} rotation={[1.1, 0.4, 0]}>
        <torusGeometry args={[2.3, 0.02, 16, 64]} />
        <meshStandardMaterial
          color="#B88A56"
          roughness={0.1}
          metalness={0.9}
          emissive="#6A451E"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Point light emitted from core */}
      <pointLight color="#D9B783" intensity={3.5} distance={8} decay={2} />
    </group>
  );
}
// flat normals bug
/* computeVertexNormals() */
