import React from "react";
import getExperience from "./logic/getExperience";
import { gradientColor, gradientTextColor } from "../Color";

export default async function ExperienceComponent() {
  const { data, t, key } = await getExperience();
  console.log("experience", data);
  console.log("key", key);

  // Determine border and circle alignment for RTL/LTR
  const isArabic = key === "ar";
  const borderPosition = isArabic ? "border-r-2 pr-6" : "border-l-2 pl-6";
  const circlePosition = isArabic ? "-right-[36px]" : "-left-[36px]";

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <h2
        className={`text-4xl font-bold mb-10 h-fit text-center ${gradientTextColor}`}
      >
        {t("title")}
      </h2>

      <div className="max-w-3xl mx-auto px-6 relative">
        {/* Timeline container */}
        <div
          className={`relative ${borderPosition} border-gray-300 dark:border-gray-700`}
        >
          {data.map((exp, index) => (
            <div key={index} className="mb-10 relative">
              {/* Circle */}
              <span
                className={`absolute ${circlePosition} top-0 w-6 h-6 rounded-full ${gradientColor} shadow-md`}
              ></span>

              {/* Content Card */}
              <div className="p-5 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-md transition-all duration-300 hover:scale-[1.02]">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <h3 className="text-lg font-semibold">{exp.name}</h3>
                  <span className="text-sm text-gray-500">
                    {exp.isPresent
                      ? t("present") ?? "Present"
                      : `${exp.startDate} → ${exp.endDate}`}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  <strong>{exp.field}</strong> — {exp.place}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
