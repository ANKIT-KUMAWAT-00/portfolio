"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function ClassicalStructure() {
  const columnRef = useRef<THREE.Group>(null);
  const bustRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    if (columnRef.current) {
      columnRef.current.position.x = THREE.MathUtils.lerp(
        columnRef.current.position.x,
        -7.5 + mouseX * 0.15,
        0.03
      );
    }

    if (bustRef.current) {
      bustRef.current.rotation.y = THREE.MathUtils.lerp(
        bustRef.current.rotation.y,
        -0.35 + mouseX * 0.1,
        0.02
      );
      bustRef.current.position.y = THREE.MathUtils.lerp(
        bustRef.current.position.y,
        0.4 + mouseY * 0.08,
        0.03
      );
    }
  });

  return (
    <group>
      {/* 1. Classical Fluted Pillars on Far Left (Matches reference background) */}
      <group ref={columnRef} position={[-7.5, -0.5, -4.5]}>
        {/* Main Column Shaft */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.7, 0.75, 11, 24]} />
          <meshStandardMaterial
            color="#1C140E"
            roughness={0.85}
            metalness={0.2}
            bumpScale={0.05}
          />
        </mesh>

        {/* Capital Top */}
        <mesh position={[0, 5.7, 0]}>
          <boxGeometry args={[1.9, 0.5, 1.9]} />
          <meshStandardMaterial
            color="#281A12"
            roughness={0.7}
            metalness={0.25}
          />
        </mesh>
        <mesh position={[0, 5.3, 0]}>
          <cylinderGeometry args={[1.1, 0.8, 0.4, 24]} />
          <meshStandardMaterial
            color="#281A12"
            roughness={0.75}
            metalness={0.2}
          />
        </mesh>

        {/* Base Pedestal */}
        <mesh position={[0, -5.7, 0]}>
          <boxGeometry args={[2.2, 0.7, 2.2]} />
          <meshStandardMaterial
            color="#150E09"
            roughness={0.9}
            metalness={0.15}
          />
        </mesh>

        {/* Secondary Column behind */}
        <mesh position={[-2.2, 0.5, -3]}>
          <cylinderGeometry args={[0.65, 0.7, 12, 16]} />
          <meshStandardMaterial
            color="#120A07"
            roughness={0.9}
            metalness={0.1}
          />
        </mesh>
      </group>

      {/* 2. Classical Marble / Bronze Sculptural Bust Silhouette (Matches reference background right) */}
      <group ref={bustRef} position={[4.6, 0.4, -4.2]} rotation={[0.05, -0.35, -0.02]}>
        {/* Sculptural Head - Chiaroscuro classic form */}
        <mesh position={[0, 1.1, 0]}>
          <dodecahedronGeometry args={[0.95, 2]} />
          <meshStandardMaterial
            color="#2A1B13"
            roughness={0.55}
            metalness={0.4}
            emissive="#1E120B"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Classical Curled Hair Crown */}
        <mesh position={[0, 1.7, -0.1]} rotation={[0.2, 0, 0]}>
          <torusGeometry args={[0.75, 0.35, 16, 24]} />
          <meshStandardMaterial
            color="#22150E"
            roughness={0.65}
            metalness={0.35}
          />
        </mesh>

        {/* Sculptural Neck and Torso */}
        <mesh position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.42, 0.65, 0.9, 16]} />
          <meshStandardMaterial
            color="#241710"
            roughness={0.6}
            metalness={0.35}
          />
        </mesh>

        {/* Sculptural Shoulders & Drape */}
        <mesh position={[0, -0.85, 0]} rotation={[0, 0.15, -0.05]}>
          <coneGeometry args={[1.8, 1.3, 16]} />
          <meshStandardMaterial
            color="#1B110A"
            roughness={0.75}
            metalness={0.3}
          />
        </mesh>

        {/* Pedestal plinth */}
        <mesh position={[0, -1.9, 0]}>
          <cylinderGeometry args={[0.75, 0.9, 0.8, 20]} />
          <meshStandardMaterial
            color="#140D08"
            roughness={0.85}
            metalness={0.2}
          />
        </mesh>
      </group>

      {/* 3. Dark Obsidian Rock Formations / Stone Outcrops at Base */}
      <group position={[0, -5.2, -1]}>
        <mesh position={[3.5, 0, -1]} rotation={[0.4, 0.8, 0.2]}>
          <dodecahedronGeometry args={[3.2, 1]} />
          <meshStandardMaterial
            color="#0D0907"
            roughness={0.92}
            metalness={0.15}
          />
        </mesh>
        <mesh position={[-4.5, 0.2, -2]} rotation={[-0.3, 0.5, 0.1]}>
          <dodecahedronGeometry args={[2.8, 1]} />
          <meshStandardMaterial
            color="#0A0705"
            roughness={0.95}
            metalness={0.1}
          />
        </mesh>
      </group>
    </group>
  );
}
