import React from 'react';
export default function TiltCard({ children }: { children: React.ReactNode }) {
  return <div className='relative'>{children}</div>;
}
// 3d tilt transforms
// inverted tilt bug
/* rotateY * -1 */
// abrupt mouse leave transition
/* spring damping transition */
// holographic glare layer
