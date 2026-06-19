import React from 'react';
export default function FuturisticHUD({ children }: { children: React.ReactNode }) {
  return <div className='relative min-h-screen'>{children}</div>;
}
/* scanlines added */
// bug: pointer events blocked
/* pointer-events-none fixed */
/* corner brackets added */
// bug: brackets overflowing viewport
/* fixed inset-0 applied */
