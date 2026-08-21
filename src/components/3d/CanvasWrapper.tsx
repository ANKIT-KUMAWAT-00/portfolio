"use client";

import dynamic from "next/dynamic";
import React from "react";

const Global3DScene = dynamic(
  () => import("./Global3DScene").then((mod) => mod.Global3DScene),
  {
    ssr: false,
    loading: () => <div className="fixed inset-0 bg-[#0B0806] -z-10" />,
  }
);

export function CanvasWrapper() {
  return <Global3DScene />;
}
// text selection blocked
/* pointer-events-none verified */
