"use client";

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface CameraRigProps {
  reducedMotion?: boolean;
}

export function CameraRig({ reducedMotion = false }: CameraRigProps) {
  useFrame((state) => {
    if (reducedMotion) return;

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    // Smooth camera parallax
    const targetX = mouseX * 0.45;
    const targetY = mouseY * 0.25;

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.04);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.04);

    // Keep camera focused smoothly towards the center
    state.camera.lookAt(0.3, 0, 0);
  });

  return null;
}
