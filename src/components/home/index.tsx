'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import NetworkBackground from '../NetworkBackground';
export default function HomeComponent() {
  const t = useTranslations("home");

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white transition-all duration-300 relative overflow-hidden">
      <NetworkBackground className="z-0" />
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 content-overlay">
        <div className="w-full max-w-6xl px-4">
          <div className="max-w-4xl text-center mt-18 space-y-10 px-4 mx-auto content-backdrop rounded-3xl py-12">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-[#30C59B] to-[#00A3FF] bg-clip-text text-transparent">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              { t('subtitle')}
            </p>
           

            <div className="flex gap-4 justify-center flex-wrap">
  <Button
    size="lg"
    onClick={() => window.location.href = "#contact"}
    className="relative px-8 py-3 bg-gradient-to-r from-[#30C59B] to-[#00A3FF] text-white 
               hover:shadow-lg hover:scale-105 transition-all duration-300
               before:absolute before:inset-0 before:-z-10 before:rounded-2xl 
               before:bg-gradient-to-r before:from-[#30C59B] before:to-[#00A3FF] 
               before:blur-lg before:opacity-50 hover:before:opacity-80"
  >
    {t("cta")}
  </Button>

  <Button
    variant="outline"
    onClick={() => window.location.href = "#about"}
    size="lg"
    className="px-8 py-3 border-2 border-[#30C59B] text-[#30C59B] hover:bg-[#30C59B] hover:text-white transition-all duration-300"
  >
    {t("learnMore")}
  </Button>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}
