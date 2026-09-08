"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SkillNode {
  name: string;
  position: [number, number, number];
  color: string;
}

const SKILL_NODES: SkillNode[] = [
  { name: "Python", position: [2.2, 0.8, 0.5], color: "#D9B783" },
  { name: "LangGraph", position: [-2.1, 1.2, 0.4], color: "#F2E8D8" },
  { name: "FastAPI", position: [1.4, -1.8, 0.8], color: "#B88A56" },
  { name: "Next.js", position: [-1.6, -1.5, -0.6], color: "#D9B783" },
  { name: "pgvector", position: [0.2, 2.3, -0.4], color: "#F2E8D8" },
  { name: "OpenCV", position: [-0.3, -2.4, 0.5], color: "#B88A56" },
  { name: "TensorFlow", position: [2.0, -0.7, -1.2], color: "#D9B783" },
  { name: "Docker", position: [-2.3, 0.2, -1.1], color: "#F2E8D8" },
  { name: "Supabase", position: [0.8, 1.5, 1.6], color: "#B88A56" },
  { name: "TypeScript", position: [-1.0, 1.8, 1.2], color: "#D9B783" },
  { name: "Redis", position: [1.7, 1.8, -1.0], color: "#F2E8D8" },
  { name: "PostgreSQL", position: [-1.8, -0.8, 1.4], color: "#B88A56" },
];

function SkillCluster({ hoveredSkill, setHoveredSkill }: { hoveredSkill: string | null; setHoveredSkill: (s: string | null) => void }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    // Continuous subtle 3D rotation
    groupRef.current.rotation.y += delta * 0.2;
    groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.15;
  });

  return (
    <group ref={groupRef}>
      {/* Central Core Lattice */}
      <mesh>
        <icosahedronGeometry args={[1.3, 1]} />
        <meshStandardMaterial
          color="#B88A56"
          wireframe
          roughness={0.2}
          emissive="#38210F"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Orbiting Concentric Energy Ring */}
      <mesh rotation={[0.8, 0.4, 0]}>
        <torusGeometry args={[2.8, 0.015, 16, 64]} />
        <meshStandardMaterial color="#D9B783" emissive="#6A451E" emissiveIntensity={0.8} />
      </mesh>

      {/* Interactive 3D Nodes */}
      {SKILL_NODES.map((node) => {
        const isHovered = hoveredSkill === node.name;

        return (
          <group
            key={node.name}
            position={node.position}
            onPointerOver={(e) => {
              e.stopPropagation();
              setHoveredSkill(node.name);
            }}
            onPointerOut={() => setHoveredSkill(null)}
          >
            <mesh>
              <sphereGeometry args={[isHovered ? 0.22 : 0.14, 16, 16]} />
              <meshStandardMaterial
                color={node.color}
                emissive={node.color}
                emissiveIntensity={isHovered ? 2.5 : 1.2}
                roughness={0.1}
              />
            </mesh>

            {/* Orbiting Ring around Node when hovered */}
            {isHovered && (
              <mesh rotation={[1, 0, 0]}>
                <torusGeometry args={[0.35, 0.02, 8, 32]} />
                <meshBasicMaterial color="#F2E8D8" />
              </mesh>
            )}
          </group>
        );
      })}
    </group>
  );
}

export function InteractiveSkills3D() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[360px] sm:h-[420px] rounded-lg bg-surface-dark/70 border border-gold-antique/20 overflow-hidden group">
      {/* HUD Overlay Label */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 font-mono text-[11px] text-warm-muted">
        <span className="w-2 h-2 rounded-full bg-gold-champagne animate-pulse" />
        <span>3D NEURAL SKILLS CLUSTER</span>
      </div>

      {hoveredSkill && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded bg-gold-champagne text-[#0B0806] font-mono text-xs font-bold tracking-wider animate-fadeIn">
          {hoveredSkill} // ACTIVE
        </div>
      )}

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        className="cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={1.2} />
        <pointLight position={[4, 4, 4]} color="#D9B783" intensity={2} />
        <pointLight position={[-4, -4, -2]} color="#B88A56" intensity={1.5} />
        <SkillCluster hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
      </Canvas>

      {/* Hint text bottom */}
      <div className="absolute bottom-3 left-0 w-full text-center pointer-events-none text-[10px] font-mono tracking-[0.2em] text-warm-muted/60 uppercase">
        Hover nodes to inspect AI & Systems Cluster
      </div>
    </div>
  );
}
