// components/NetworkBackgroundWrapper.tsx
"use client";

import dynamic from "next/dynamic";

const NetworkBackground = dynamic(() => import("./index"), {
  ssr: false, // 🚀 مهم جداً يمنع التحميل على السيرفر
});

export default function NetworkBackgroundWrapper() {
  return <NetworkBackground />;
}
