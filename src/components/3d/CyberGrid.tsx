"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface CyberGridProps {
  scrollProgress: number; // 0 to 1
}

export function CyberGrid({ scrollProgress }: CyberGridProps) {
  const groupRef = useRef<THREE.Group>(null);
  const prism1Ref = useRef<THREE.Mesh>(null);
  const prism2Ref = useRef<THREE.Mesh>(null);
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const time = state.clock.getElapsedTime();

    // Active during Projects section (progress ~0.28 to ~0.55)
    let visibility = 0;
    if (scrollProgress >= 0.25 && scrollProgress <= 0.58) {
      visibility = 1 - Math.abs(scrollProgress - 0.42) / 0.16;
      visibility = Math.max(0, Math.min(1, visibility));
    }

    groupRef.current.visible = visibility > 0.02;

    // Grid animation: subtle movement
    if (gridRef.current) {
      gridRef.current.position.z = (time * 0.5) % 2 - 4;
    }

    // Rotating crystalline data prisms
    if (prism1Ref.current) {
      prism1Ref.current.rotation.x += delta * 0.4;
      prism1Ref.current.rotation.y += delta * 0.6;
      prism1Ref.current.position.y = 1.2 + Math.sin(time * 2) * 0.15;
    }

    if (prism2Ref.current) {
      prism2Ref.current.rotation.y -= delta * 0.5;
      prism2Ref.current.rotation.z += delta * 0.3;
      prism2Ref.current.position.y = -1.5 + Math.cos(time * 1.8) * 0.18;
    }

    // Parallax
    const mouseX = state.pointer.x;
    groupRef.current.rotation.y = mouseX * 0.12;
  });

  return (
    <group ref={groupRef} position={[0, -2.5, -4]}>
      {/* Infinite Cyber Perspective Grid */}
      <primitive
        ref={gridRef}
        object={new THREE.GridHelper(40, 40, "#D9B783", "#24160F")}
        position={[0, -1, 0]}
      />

      {/* Floating Holographic Octahedron Prism 1 (Right) */}
      <mesh ref={prism1Ref} position={[5.5, 1.2, -1]}>
        <octahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial
          color="#D9B783"
          wireframe
          roughness={0.1}
          metalness={0.95}
          emissive="#6A451E"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Floating Holographic Tetrahedron Prism 2 (Left) */}
      <mesh ref={prism2Ref} position={[-5.8, -1.5, -2]}>
        <tetrahedronGeometry args={[1.3, 0]} />
        <meshStandardMaterial
          color="#F2E8D8"
          wireframe
          roughness={0.1}
          metalness={0.9}
          emissive="#B88A56"
          emissiveIntensity={0.6}
        />
      </mesh>
    </group>
  );
}
