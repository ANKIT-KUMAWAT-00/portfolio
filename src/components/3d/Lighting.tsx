"use client";

import React from "react";

export function Lighting() {
  return (
    <>
      {/* Deep Obsidian Background Fog */}
      <color attach="background" args={["#0B0806"]} />
      <fog attach="fog" args={["#0B0806", 5, 25]} />

      {/* Deep Warm Bronze Ambient Base */}
      <ambientLight color="#24160F" intensity={1.6} />

      {/* Primary Golden Chiaroscuro Key Light (Behind Portrait) */}
      <pointLight
        position={[2.6, 0.4, -1.8]}
        color="#D9B783"
        intensity={5.5}
        distance={14}
        decay={2}
      />

      {/* Sculptural Specular Rim Light */}
      <pointLight
        position={[4.8, 2.2, -3.2]}
        color="#F2E8D8"
        intensity={3.2}
        distance={10}
        decay={2}
      />

      {/* Directional Frontal Warm Light */}
      <directionalLight
        position={[-2, 4, 5]}
        color="#F2E8D8"
        intensity={1.4}
      />

      {/* Column Edge Accent Light on Left */}
      <spotLight
        position={[-6, 4, -1]}
        target-position={[-7.5, 0, -4.5]}
        color="#B88A56"
        intensity={3.5}
        angle={0.6}
        penumbra={0.8}
      />

      {/* Low Ground Ember Glow */}
      <pointLight
        position={[0, -4, 0]}
        color="#B88A56"
        intensity={1.8}
        distance={12}
        decay={2}
      />
    </>
  );
}
