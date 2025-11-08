// components/NetworkBackgroundWrapper.tsx
"use client";

import dynamic from "next/dynamic";

// Use the original optimized NetworkBackground (TSParticles)
const NetworkBackground = dynamic(() => import("./index"), {
  ssr: false, // Important: prevents server-side rendering
});

export default function NetworkBackgroundWrapper() {
  return (
    <div className="fixed inset-0 w-full h-full z-0">
      <NetworkBackground className="w-full h-full" />
    </div>
  );
}
