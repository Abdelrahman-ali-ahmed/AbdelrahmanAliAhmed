"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Technology } from "@/lib/types/types";
import {
  backgroundFirstColorDark,
  backgroundHoverFirstColorLight,
  backgroundHoverSecondColorDark,
  backgroundSecondColorLight,
} from "../Color";
export default function TechnologyList({ data  }: { data: Technology[]  }) {
  return (
    <div className="py-10 overflow-hidden" dir="ltr"> 
      <Marquee
        pauseOnHover
        direction="left"
        speed={100}
        gradient={false}
      >
        {data.map((technology) => (
          <div
            key={technology.publicId}
            className={`mx-10 flex-shrink-0 w-32 h-32 flex items-center justify-center rounded-xl ${backgroundFirstColorDark} ${backgroundHoverSecondColorDark} ${backgroundHoverFirstColorLight} ${backgroundSecondColorLight} transition-all duration-300 shadow-md`}
          >
            <Image
              src={technology.logo}
              alt={technology.name}
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
