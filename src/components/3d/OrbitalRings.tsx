"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface OrbitalRingsProps {
  reducedMotion?: boolean;
}

export function OrbitalRings({ reducedMotion = false }: OrbitalRingsProps) {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (reducedMotion) return;

    const time = state.clock.getElapsedTime();
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    // Smooth subtle mouse reaction on main group
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouseX * 0.25,
        0.04
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -mouseY * 0.15,
        0.04
      );
    }

    // Individual gyroscopic ring orbits
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.08;
      ring1Ref.current.rotation.x = Math.sin(time * 0.2) * 0.15 + 0.35;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.05;
      ring2Ref.current.rotation.y = Math.cos(time * 0.25) * 0.2 - 0.45;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.y += delta * 0.03;
      ring3Ref.current.rotation.x = Math.sin(time * 0.15) * 0.1 + 0.8;
    }
  });

  return (
    <group ref={groupRef} position={[2.8, -0.2, -1.8]}>
      {/* Primary Glowing Bronze Orbital Ring (Behind & Around Portrait) */}
      <mesh ref={ring1Ref} rotation={[0.4, 0.2, 0.8]}>
        <torusGeometry args={[3.6, 0.035, 32, 128]} />
        <meshStandardMaterial
          color="#D9B783"
          roughness={0.16}
          metalness={0.94}
          emissive="#6A451E"
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Secondary Antique Gold Ring */}
      <mesh ref={ring2Ref} rotation={[-0.5, 0.6, -0.4]}>
        <torusGeometry args={[2.9, 0.026, 32, 128]} />
        <meshStandardMaterial
          color="#B88A56"
          roughness={0.22}
          metalness={0.92}
          emissive="#38210F"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Outer Fine Champagne Orbit */}
      <mesh ref={ring3Ref} rotation={[0.9, -0.3, 0.2]}>
        <torusGeometry args={[4.4, 0.018, 24, 128]} />
        <meshStandardMaterial
          color="#F2E8D8"
          roughness={0.12}
          metalness={0.98}
          emissive="#855B2E"
          emissiveIntensity={0.35}
        />
      </mesh>

      {/* Orbit Anchor Node - Small metallic sphere on ring */}
      <mesh position={[3.6, 0, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color="#F2E8D8"
          roughness={0.1}
          metalness={1.0}
          emissive="#D9B783"
          emissiveIntensity={0.6}
        />
      </mesh>
    </group>
  );
}
/* counter-rotating rings */
// unmount error
