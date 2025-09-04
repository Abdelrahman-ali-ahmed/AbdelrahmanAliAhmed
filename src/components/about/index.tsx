import { adminDb } from "@/lib/firebase/firebaseAdmin";
import { HomeData, localeMap } from "@/lib/types/types";
import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";
import Image from "next/image";
import React from "react";

export default async function AboutComponent() {
      const t = await getTranslations("home");
  const cookieStore = await cookies(); // ✅ await here
  const locale = cookieStore.get("NEXT_LOCALE")?.value ?? "en"; 
  const key = localeMap[locale] ?? "eng";
const docRef = adminDb?.collection("content").doc("home");
const snap = docRef ? await docRef.get() : null;
const data: HomeData | null = snap?.exists ? (snap.data() as HomeData) : null;
  return (
    <section id="about" className="py-20 ">
      <div className="container mx-auto px-6 transition-all duration-300 ">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side text */}
          <div className="lg:w-1/2 reveal">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              {t('who')}<br />
            <span className="gradient-text"> {data?.title[key]??t('subtitle')}</span>
            </h2>
            <p className="text-lg dark:text-gray-300 text-black mb-4 leading-relaxed">
             {data?.content[key]??t('description')}
            </p>
          </div>

          {/* Right side image */}
        <div
  className="lg:w-1/2 reveal bg-white dark:bg-gradient-to-r from-[#30C59B] to-[#00A3FF] rounded-2xl shadow-2xl p-2"
  style={{ transitionDelay: "200ms" }}
>
  <Image
    src="/Ibda-Digtal.png"
    alt="فريق إبدأ ديجيتال"
    width={600}
    height={400}
    className="rounded-2xl w-full"
    priority
  />
</div>
        </div>
      </div>
    </section>
  );
}
