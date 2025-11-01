import React from "react";
import { getTechnology } from "./logic/getTechnology";
import { gradientTextColor } from "../Color";
import TechnologyList from "./TechnologyList";

export default async function TechnologyComponent() {
  const { data, t } = await getTechnology();

  return (
    <section className="py-12 container mx-auto px-6">
      {/* Title */}
      <h2
        className={`text-4xl font-bold mb-10 h-fit text-center ${gradientTextColor}`}
      >
        {t("title")}
      </h2>

      {/* Client-side List */}
      <TechnologyList data={data} />
    </section>
  );
}
