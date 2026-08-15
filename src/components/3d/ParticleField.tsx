import React from 'react';
export default function ParticleField() {
  return <group>Particles</group>;
}
// 5000 particles
// performance bottleneck
/* BufferGeometry points */
// frustum culling issue
/* frustumCulled false */
// useFrame particle drift
// delta scale bug
/* delta time scaling */
// points material with circular alpha
// black halo blending bug
/* transparent true depthWrite false */
