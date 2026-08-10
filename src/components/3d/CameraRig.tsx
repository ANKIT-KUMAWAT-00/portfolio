import { useFrame } from '@react-three/fiber';
import React from 'react';
export default function CameraRig({ children }: { children: React.ReactNode }) {
  return <group>{children}</group>;
}
