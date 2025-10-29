"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Technology } from "@/lib/types/types";

export default function TechnologyList({ data }: { data: Technology[] }) {
  const [deviceType, setDeviceType] = useState("desktop");
  const [showAll, setShowAll] = useState(false);

  // Detect device type
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 957) {
        setDeviceType("mobile");
      } else if (window.innerWidth <= 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Limit visible items on mobile
  const visibleTech =
    deviceType === "mobile" && !showAll ? data.slice(0, 5) : data;

  return (
    <>
      {/* Grid */}
      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-center">
        {visibleTech?.map((technology) => (
          <div
            key={technology.publicId}
            className="rounded-xl overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-105"
          >
            <div className="p-[2px] rounded-xl bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
              <div className="bg-white dark:bg-[#0a0f1a] rounded-xl overflow-hidden">
                {/* Image */}
                <div className="w-full h-40 flex justify-center items-center overflow-hidden">
                  <Image
                    src={technology?.logo}
                    alt={technology?.name}
                    width={80}
                    height={80}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-4 text-center">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                    {technology?.name}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {deviceType === "mobile" && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              showAll
                ? "bg-red-500 hover:bg-red-600"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </>
  );
}
