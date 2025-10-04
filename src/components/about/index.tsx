import React from "react";
import { getPosts } from "../home/logic/getHome";
import { backgroundFirstColorDark, backgroundSecondColorLight, gradientColorTextDark, gradientColorTextLight } from "../Color";

export default async function AboutComponent() {
  const { title, content, t } = await getPosts();

  return (
    <section
      id="about"
      className={`py-20 ${backgroundSecondColorLight} ${backgroundFirstColorDark} relative z-10    transition-all duration-300`}
    >
      <div className="container mx-auto px-6 ">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full reveal">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              {t("who")} <br />
              <span className={`${gradientColorTextDark} ${gradientColorTextLight}`} >{title ?? t("subtitle")}</span>
            </h2>
            <p className="dark:text-gray-300 text-black mb-4 leading-relaxed text-xl">
              {content ?? t("description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
