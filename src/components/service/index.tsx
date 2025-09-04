"use client";
import React, { useState } from "react";
// import the component
import { servicesData } from "./serviceData";
import ServiceCard from "./servicecard";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Service } from "@/lib/types/types";
// put your services array in a separate file

export default function ServiceComponent() {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const t = useTranslations("services");
  const pathname = usePathname();
  const lang = (pathname.split("/")[1] || "en") as 'en' | 'ar';
  return (
    <section id="services" className="py-20 dark:bg-[#0a0f1a] bg-white   relative ">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 reveal bg-gradient-to-r from-[#30C59B] to-[#00A3FF] bg-clip-text text-transparent">
         {t('services_title')}
          </h2>
          <p
            className="text-lg  max-w-3xl mx-auto reveal dark:text-white text-black"
            style={{ transitionDelay: "150ms" }}
          >
            {t('services_description')}
          </p>
        </div>

        {/* Services Grid */}
        <div
          id="services-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              delay={index * 50}
              lang={lang}
              onClick={(s) => setActiveService(s)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeService && (
  <div
    id="service-modal"
    className="fixed inset-0 dark:bg-black/50 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50"
    onClick={() => setActiveService(null)}
  >
    <div
      className="dark:bg-[#0d1625]/80 bg-amber-50/70 rounded-2xl p-8 max-w-2xl w-full border-4 border-[#30C59B] backdrop-blur-md"
      onClick={(e) => e.stopPropagation()}
    >
      <h3
        id="modal-title"
        className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-[#30C59B] to-[#00A3FF] bg-clip-text text-transparent"
      >
        {activeService.title[lang]}
      </h3>
      <div
        id="modal-body"
        className="dark:text-gray-300 text-black leading-relaxed"
        dangerouslySetInnerHTML={{ __html: activeService.details[lang] }}
      />
      <button
        onClick={() => setActiveService(null)}
        className="mt-6 px-6 py-2 bg-[#30C59B]/90 text-white rounded-xl hover:bg-[#00A3FF] transition"
      >
        إغلاق
      </button>
    </div>
  </div>
)}
    </section>
  );
}
