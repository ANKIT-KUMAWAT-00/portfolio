import React from 'react';
export default function Lighting() {
  return <><ambientLight intensity={1} /><directionalLight position={[10, 10, 5]} /></>;
}
// overexposed lighting bug
