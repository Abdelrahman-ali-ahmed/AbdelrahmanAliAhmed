import { ServiceCardProps } from "@/lib/types/types";
import { useRef } from "react";

function ServiceCard({ service, delay, onClick,lang }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const { width, height } = rect;

    const rotateX = (y / height - 0.9) * -30;
    const rotateY = (x / width - 0.9) * 30;

    card.style.transition = "none"; // instant response
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={cardRef}
      className={`glass-effect p-6 rounded-2xl reveal card-glow flex flex-col items-center 
      text-center cursor-pointer border-4 ${service.colorClass} dark:border-gray-600 dark:hover:border-[#30C59B] border-black  hover:border-[#00A3FF]`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(service)}
    >
      <div className="service-icon-container w-16 h-16 mb-5 rounded-xl flex items-center justify-center">
        <div className="">{ service.icon} </div>
         
      </div>
      <h3 className="text-xl font-bold mb-3 flex-grow font-bold bg-gradient-to-r from-[#30C59B] to-[#00A3FF] bg-clip-text text-transparent ">{service.title[lang]}</h3>
      <p className="dark:text-gray-400 text-sm text-black ">{service.description[lang]}</p>
    </div>
  );
}

export default ServiceCard;