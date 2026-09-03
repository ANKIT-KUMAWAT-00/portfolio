"use client";

import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface NeuralConstellationProps {
  scrollProgress: number; // 0 to 1
}

export function NeuralConstellation({ scrollProgress }: NeuralConstellationProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Generate constellation nodes
  const nodeCount = 28;
  const { nodes, linePositions } = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i < nodeCount; i++) {
      const radius = 3.2 + Math.random() * 2.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      pts.push([x, y, z]);
    }

    // Connect close neighbors
    const lines: number[] = [];
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i][0] - pts[j][0];
        const dy = pts[i][1] - pts[j][1];
        const dz = pts[i][2] - pts[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < 2.4) {
          lines.push(pts[i][0], pts[i][1], pts[i][2]);
          lines.push(pts[j][0], pts[j][1], pts[j][2]);
        }
      }
    }

    return { nodes: pts, linePositions: new Float32Array(lines) };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Active during Skills & Achievements (progress ~0.55 to ~0.82)
    let visibility = 0;
    if (scrollProgress >= 0.52 && scrollProgress <= 0.85) {
      visibility = 1 - Math.abs(scrollProgress - 0.68) / 0.16;
      visibility = Math.max(0, Math.min(1, visibility));
    }

    groupRef.current.visible = visibility > 0.02;
    groupRef.current.scale.setScalar(visibility * 1.15);

    // Continuous smooth rotation
    groupRef.current.rotation.y += delta * 0.18;
    groupRef.current.rotation.x += delta * 0.08;

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;
    groupRef.current.position.x = mouseX * 0.6;
    groupRef.current.position.y = mouseY * 0.4;
  });

  return (
    <group ref={groupRef} position={[0, 0, -4]}>
      {/* Node Spheres */}
      {nodes.map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshStandardMaterial
            color="#D9B783"
            emissive="#B88A56"
            emissiveIntensity={1.8}
            roughness={0.1}
          />
        </mesh>
      ))}

      {/* Connecting Beams / Neural Synapses */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#B88A56"
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}
