import { useState, useEffect } from 'react';
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  return progress;
}
