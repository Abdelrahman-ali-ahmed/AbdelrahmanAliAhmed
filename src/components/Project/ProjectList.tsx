"use client";
import React, { useState } from "react";
import { Project } from "@/lib/types/types";
import { backgroundFirstColorDark, backgroundFirstColorLight, backgroundGradientReversedColorHoverDark, backgroundGradientReversedColorHoverLight, backgroundHoverFirstColorDark, backgroundHoverFirstColorLight, backgroundHoverSecondColorDark, backgroundHoverSecondColorLight, backgroundSecondColorDark, backgroundSecondColorLight, gradientColor, gradientColorBorderDark, gradientColorBorderLight, gradientTextColor } from "../Color";
import ProjectCard from "./Projectcard";

export default function ProjectList({
  localeKey,
  projectsPage,
  page,
  totalPages,
  setPage,
  showAll,
}: {
  data: Project[];
  localeKey: "eng" | "ar";
  projectsPage: Project[][];
  page: number;
  totalPages: number;
  showAll: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [activeProject, setActiveProject] = useState<Project  | null>(null);
  return (
    <>
      {/* Projects Grid */}
      <div
        id="projects-grid"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {projectsPage[page]?.map((project, index) => (
          <ProjectCard  
            key={project.publicId}
            project={project}
            delay={index * 50}
            lang={localeKey}
            onClick={setActiveProject}
          />
        ))}
      </div>
      {showAll && <div className="flex items-center gap-3 w-full justify-center mt-7">
  <button
    onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
    disabled={page === 0}
    className={`px-5 py-2 rounded ${backgroundFirstColorDark} ${backgroundSecondColorLight} ${
      page === 0 ? "opacity-50 cursor-not-allowed" : ""
    }`}
  >
    Previous
  </button>

  <p className="text-sm font-medium">
    {page + 1} / {totalPages}
  </p>

  <button
    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
    disabled={page === totalPages - 1 || totalPages === 0}
    className={`px-5 py-2 rounded ${backgroundFirstColorDark} ${backgroundSecondColorLight} ${
      page === totalPages - 1 || totalPages === 0
        ? "opacity-50 cursor-not-allowed"
        : ""
    }`}
  >
    Next
  </button>
</div>
}
    


      {/* Modal */}
      {activeProject && (
        <div
          id="project-modal"
          className="fixed inset-0 dark:bg-black/50 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setActiveProject(null)}
        >
          <div
            className={`dark:bg-black/70 bg-amber-50/70 rounded-2xl p-8 max-w-2xl w-full border-4 ${gradientColorBorderLight} ${gradientColorBorderDark   } backdrop-blur-md`}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className={`text-3xl font-extrabold mb-4 ${gradientTextColor}`}>
              {activeProject?.title[localeKey]}
            </h3>
            <p className="dark:text-gray-300 text-black leading-relaxed mb-4">
              {activeProject?.content[localeKey]}
            </p>

            {/* Optional: show category + date */}
            <p className="text-sm text-gray-400 mb-6">
              {localeKey === "ar"
                ? `الفئة: ${activeProject.category}`
                : `Category: ${activeProject.category}`}
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              {activeProject.liveLink && (
                <a
                  href={activeProject.liveLink}
                  target="_blank"
                  className={`px-4 py-2 ${backgroundFirstColorDark} ${backgroundSecondColorLight} ${backgroundHoverSecondColorDark} ${backgroundHoverFirstColorLight}  text-white rounded-xl   transition`}
                >
                  {localeKey === "ar" ? "عرض الموقع" : "Live Demo"}
                </a>
              )}
              {activeProject.src && (
                <a
                  href={activeProject.src}
                  target="_blank"
                  className={`px-4 py-2 ${backgroundSecondColorDark} ${backgroundFirstColorLight} ${backgroundHoverFirstColorDark} ${backgroundHoverSecondColorLight} text-white rounded-xl  transition`}
                >
                  GitHub
                </a>
              )}
              <button
                onClick={() => setActiveProject(null)}
                className={`ml-auto px-6 py-2 ${gradientColor} ${backgroundGradientReversedColorHoverLight} ${backgroundGradientReversedColorHoverDark} text-white rounded-xl  transition`}
              >
                {localeKey === "ar" ? "إغلاق" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
