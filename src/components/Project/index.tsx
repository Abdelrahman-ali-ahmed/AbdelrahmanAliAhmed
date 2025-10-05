import {  backgroundFirstColorLight, backgroundSecondColorDark,  gradientColorFirstTextDark, gradientColorSecondTextLight} from "../Color";
import { getProjects } from "./Logic/getProjects";
import ProjectList from "./ProjectList";



export default async function ProjectComponent() {
  const { t, key, data } = await getProjects ();

  return (
    <section
      id="projects"
      className={`py-20  ${backgroundSecondColorDark} ${backgroundFirstColorLight} relative`}
    >
      <div className="container mx-auto px-6 transition-all duration-300">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 reveal ${gradientColorFirstTextDark} ${gradientColorSecondTextLight}`}>
            {t("services_title")}
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto reveal dark:text-white text-black"
            style={{ transitionDelay: "150ms" }}
          >
            {t("services_description")}
          </p>
        </div>

        {/* Display projects fetched from Firestore */}
        <ProjectList data={data} localeKey={key} />
      </div>
    </section>
  );
}
