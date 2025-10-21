"use client";
import {
  backgroundFirstColorDark,
  backgroundFirstColorLight,
  backgroundSecondColorDark,
  backgroundSecondColorLight,
  gradientColorFirstTextDark,
  gradientColorSecondTextLight,
} from "../Color";
import Loader from "../Loader";
import useProjects from "./hooks/usePojects";
import ProjectList from "./ProjectList";


export default function ProjectComponent() {
  const {
    t,
    data,
    projectTypes,
    projectType,
    setProjectType,
    loading,
    locale,
    deviceType,
    setShowAll,
    showAll,
    key,
  } = useProjects();

  return (
    <section
      id="projects"
      className={`py-20 ${backgroundSecondColorDark} ${backgroundFirstColorLight} relative`}
    >
      <div className="container mx-auto px-6 transition-all duration-300">
        {/* 🔹 Title and Filters */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-extrabold mb-4 reveal ${gradientColorFirstTextDark} ${gradientColorSecondTextLight}`}
          >
            {t("title")}
          </h2>

          <ul
            className={`flex flex-wrap justify-center flex-col md:flex-row items-center gap-6 
            p-6 mx-auto w-full max-w-5xl 
            ${backgroundSecondColorLight} ${backgroundFirstColorDark} 
            rounded-2xl shadow-lg`}
          >
            {projectTypes.map((item) => (
              <li
                key={item}
                className={`text-base w-full md:w-fit sm:text-lg font-medium 
                px-6 py-3 rounded-xl cursor-pointer 
                transition-all duration-300 ease-in-out 
                text-white
                transform-gpu origin-center
                hover:scale-110 hover:shadow-md hover:mx-0 md:hover:mx-3
                ${backgroundSecondColorDark} ${backgroundFirstColorLight}
                ${
                  projectType === item
                    ? "ring-2 ring-blue-500 scale-105"
                    : ""
                }`}
                onClick={() => setProjectType(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* 🔹 Loader or Project List */}
        {loading ? (
          <div className="w-full my-4 flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            <ProjectList data={data} localeKey={key} />

            {/* 🔹 Show More / Show Less button */}
            {deviceType === "mobile" && ( <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300
                ${
                  showAll
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white`}
              >
                {showAll ? t("showLess") ?? "Show Less" : t("showMore") ?? "Show More"}
              </button>
            </div>)}
           
          </>
        )}
      </div>
    </section>
  );
}
