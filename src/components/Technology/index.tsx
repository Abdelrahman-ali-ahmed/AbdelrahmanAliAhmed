
import Image from 'next/image';
import React from 'react';
import { getTechnology } from './logic/getTechnology';


export default async function TechnologyComponent() {
  // i18n
const{data,t}=await getTechnology()
console.log("tech",data);
  return (
       <section className="py-12 container mx-auto px-6">
      {/* Title */}
      <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        {t("title")} ({data?.length})
      </h2>

      {/* Grid */}
      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-center">
        {data?.map((technology) => (
          <div
            key={technology.id}
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
    </section>

  );
}
