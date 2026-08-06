import dynamic from 'next/dynamic';
import React from 'react';
const Scene = dynamic(() => import('./Scene3D'), { ssr: false });
export default function CanvasWrapper() {
  return <div className='fixed inset-0 pointer-events-none z-0'><Scene /></div>;
}
