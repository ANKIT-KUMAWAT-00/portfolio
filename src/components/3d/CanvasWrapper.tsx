import React from 'react';
export default function CanvasWrapper({ children }: { children: React.ReactNode }) {
  return <div className='fixed inset-0 pointer-events-none z-0'>{children}</div>;
}
// R3F Canvas added
// SSR Canvas crash error
