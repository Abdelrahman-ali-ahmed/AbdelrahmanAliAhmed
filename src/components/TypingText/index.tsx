"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingText({ text }: { text: string }) {
  return (
    <TypeAnimation
      sequence={[
        text,   // use your server-fetched text
        1000,
        "Built with Tailwind ⚡",
        1000,
        "Powered by Firebase 🔥",
        1000,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className="text-2xl font-bold text-center mt-10"
    />
  );
}
