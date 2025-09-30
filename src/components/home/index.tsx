

import React from 'react';
import { Button } from "@/components/ui/button";
import { getTranslations } from 'next-intl/server';
import Link from "next/link";
import {  gradientColor, gradientColorBorderDark, gradientColorBorderLight, gradientColorLeft, gradientColorRight, gradientColorTextDark, gradientTextColor, hoverButtonColorDark, hoverButtonColorLight } from '../Color';
import { getPosts } from './logic/getHome';
import TypingText from '../TypingText';
import NetworkBackgroundWrapper from '../NetworkBackground/NetworkBackgroundWrapper';

export default async function HomeComponent() {
  const t = await getTranslations("home");
  const {title, content} = await getPosts  ();
console.log(title);

  return (
    <div className={`min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white transition-all duration-300 relative overflow-hidden`}>
      <NetworkBackgroundWrapper />
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 content-overlay">
        <div className="w-full max-w-6xl px-4">
          <div className="max-w-4xl text-center mt-18 space-y-10 px-4 mx-auto content-backdrop rounded-3xl py-12">
            <h1 className={`text-6xl font-bold ${gradientTextColor}`}>
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              <TypingText text={title} />
            </p>
           

            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="#contact"> 
  <Button
    size="lg"
    className={`relative px-8 py-3 ${gradientColor} text-white 
               hover:shadow-lg hover:scale-105 transition-all duration-300
               before:absolute before:inset-0 before:-z-10 before:rounded-2xl 
               before:bg-gradient-to-r before:${gradientColorLeft} before:${gradientColorRight} 
               before:blur-lg before:opacity-50 hover:before:opacity-80`}
  >
    {t("cta")}
  </Button></Link>
  <Link href="#about">
 

  <Button
    variant="outline"
    size="lg"
    className={`px-8 py-3 border-2 ${gradientColorBorderLight} ${gradientColorBorderDark} ${gradientColorBorderDark} ${hoverButtonColorDark} ${hoverButtonColorLight} hover:text-white  transition-all duration-300`}
  >
    {t("learnMore")}
  </Button> </Link>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}
