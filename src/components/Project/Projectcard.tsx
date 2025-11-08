"use client";

import { useRef } from "react";
import { backgroundFirstColorDark, backgroundSecondColorLight, gradientColorBorderHoverDark, gradientColorBorderHoverLight, gradientColorFirstTextLight, gradientColorSeconedTextDark } from "../Color";
import { Project } from "@/lib/types/types";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  delay: number;
  lang: "eng" | "ar" ;
  onClick: (project: Project) => void;
}

export default function ProjectCard({ project, delay, lang, onClick }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    // Use requestAnimationFrame to batch DOM updates and prevent forced reflow
    requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const { width, height } = rect;

      const rotateX = (y / height - 0.9) * -30;
      const rotateY = (x / width - 0.9) * 30;

      // Use CSS custom properties for better performance
      card.style.setProperty('--rotate-x', `${rotateX}deg`);
      card.style.setProperty('--rotate-y', `${rotateY}deg`);
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    // Reset transform using CSS custom properties
    requestAnimationFrame(() => {
      card.style.setProperty('--rotate-x', '0deg');
      card.style.setProperty('--rotate-y', '0deg');
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(project)}
      style={{ 
        transitionDelay: `${delay}ms`,
        transform: 'perspective(1000px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))',
        willChange: 'transform', // Optimize for animations
      }}
      className={`glass-effect p-6 rounded-2xl reveal card-glow flex flex-col items-center text-center cursor-pointer border-4 
      border-transparent ${gradientColorBorderHoverLight}  ${gradientColorBorderHoverDark } ${backgroundSecondColorLight} ${backgroundFirstColorDark} shadow-lg transition-transform duration-300 ease-out`}
    >
      <div className="w-full h-40 rounded-xl overflow-hidden mb-5">
        <Image
          src={project?.imageUrl}
          alt={project?.title["eng"]}
          width={240}
          height={160}
          loading="lazy"
          className="w-full h-full object-cover rounded-xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <h3 className={`text-lg font-bold mb-2 ${gradientColorSeconedTextDark} ${gradientColorFirstTextLight}  `}>
        {project?.title[lang]}
      </h3>
      <p className="text-sm dark:text-gray-300 text-gray-700 line-clamp-2 mb-2">
        {project?.content[lang]}
      </p>
      <p className="text-xs ">{project.category}</p>
    </div>
  );
}
