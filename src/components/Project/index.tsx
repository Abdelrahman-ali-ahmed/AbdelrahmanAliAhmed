  "use client";
import {  backgroundFirstColorDark, backgroundFirstColorLight, backgroundSecondColorDark,  backgroundSecondColorLight,  gradientColorFirstTextDark, gradientColorSecondTextLight} from "../Color";
import Loader from "../Loader";
import useProjects from "./hooks/usePojects";
import ProjectList from "./ProjectList";



export default function ProjectComponent() {
  const { t, data, projectTypes, projectType, setProjectType, loading, locale, key } =useProjects();

  return (
    <section
      id="projects"
      className={`py-20  ${backgroundSecondColorDark} ${backgroundFirstColorLight} relative`}
    >
      <div className="container mx-auto px-6 transition-all duration-300">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 reveal ${gradientColorFirstTextDark} ${gradientColorSecondTextLight}`}>
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
      className={`text-base w-full md:w-fit  sm:text-lg font-medium 
      px-6 py-3 rounded-xl cursor-pointer 
      transition-all duration-300 ease-in-out 
      text-white
      transform-gpu origin-center
      hover:scale-110 hover:shadow-md  hover:mx-0 md:hover:mx-3
      ${backgroundSecondColorDark} ${backgroundFirstColorLight}`}
      onClick={() => setProjectType(item)}
    >
      {item}
    </li>
  ))}
</ul>

        </div>
{loading?(
  <div className="w-full my-4 flex justify-center items-center">
  <Loader/>
</div>):(
  <ProjectList data={data} localeKey={key} />
)}

      </div>
    </section>
  );
}
