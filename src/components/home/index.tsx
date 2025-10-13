import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  backgroundFirstColorDark,
  backgroundSecondColorLight,
  gradientColor,
  gradientColorBorderDark,
  gradientColorBorderLight,
  gradientColorLeft,
  gradientColorRight,
  hoverButtonColorDark,
  hoverButtonColorLight,
  gradientTextColor,
} from "../Color";
import { getPosts } from "./logic/getHome";
import TypingText from "../TypingText";
import NetworkBackgroundWrapper from "../NetworkBackground/NetworkBackgroundWrapper";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

export default async function HomeComponent() {
  const { title, content, CVLink, t } = await getPosts();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white transition-all duration-300 relative overflow-hidden">
      <NetworkBackgroundWrapper />

      {/* Centered content */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-6">
        <div className="max-w-6xl w-full py-12">
          {/* Main content: Left (text) + Right (image) */}
          <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-10 md:gap-20">
            {/* Left Side - Title, Typing, Location */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 w-full md:w-1/2">
              <h1 className={`text-4xl md:text-6xl font-bold ${gradientTextColor}`}>
                {t("title")}
              </h1>

              <p className="text-md sm:text-xl text-gray-600 dark:text-gray-300">
                <TypingText
                  text1={title}
                  text2={t("typing_string")}
                  text3={t("typing_string2")}
                />
              </p>

              <p
                className={`flex items-center justify-center md:justify-start w-fit text-lg sm:text-xl font-bold px-6 py-3 rounded-full ${backgroundSecondColorLight} ${backgroundFirstColorDark} text-white shadow-md`}
              >
                <FaLocationDot className="mr-2 text-white" />
                {t("location")}
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center md:justify-end w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#0965C0] to-[#C53A94] rounded-full blur-lg opacity-40 animate-pulse" />
                <Image
                  src="/Abdelrahman.jpg"
                  alt="Abdelrahman"
                  width={220}
                  height={220}
                  className="rounded-full relative z-10 shadow-lg border-4 border-transparent dark:border-gray-800 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mt-5 md:mt-0"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Buttons Section Below */}
          <div className="flex flex-col items-center gap-4 mt-10">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#contact">
                <Button
                  size="lg"
                  className={`relative px-8 py-3 ${gradientColor} text-white hover:shadow-lg hover:scale-105 transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gradient-to-r before:${gradientColorLeft} before:${gradientColorRight} before:blur-lg before:opacity-50 hover:before:opacity-80`}
                >
                  {t("cta")}
                </Button>
              </Link>

              <Link href="#about">
                <Button
                  variant="outline"
                  size="lg"
                  className={`px-8 py-3 border-2 ${gradientColorBorderLight} ${gradientColorBorderDark} ${hoverButtonColorDark} ${hoverButtonColorLight} hover:text-white transition-all duration-300`}
                >
                  {t("learnMore")}
                </Button>
              </Link>
            </div>

            <Link
              href={CVLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center w-full"
            >
              <Button
                variant="outline"
                size="lg"
                className={`px-8 py-3 border-2 ${backgroundFirstColorDark} ${backgroundSecondColorLight} ${hoverButtonColorDark} ${hoverButtonColorLight} text-white hover:text-white transition-all duration-300`}
              >
                {t("get_cv")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
