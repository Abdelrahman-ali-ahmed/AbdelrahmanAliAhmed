"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingText({ text1,text2,text3 }: { text1: string,text2: string,text3: string }) {
  return (
    <TypeAnimation
      sequence={[
        text1,   // use your server-fetched text
        1000,
        text2,
        1000,
        text3,
        1000,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className="text-2xl font-bold text-center mt-10"
    />
  );
}
