import { Suspense } from "react";
import ClientWrapper from "@/components/ClientWrapper";
import HomeComponent from "@/components/home";
import dynamic from "next/dynamic";
import Loader from "@/components/Loader";

// Lazy load below-the-fold components for better initial load performance
const AboutComponent = dynamic(() => import("@/components/about"), {
  loading: () => <div className="min-h-[400px]" />,
});
const TechnologyComponent = dynamic(() => import("@/components/Technology"), {
  loading: () => <div className="min-h-[400px]" />,
});
const ExperienceComponent = dynamic(() => import("@/components/Experience"), {
  loading: () => <div className="min-h-[400px]" />,
});
const ProjectComponent = dynamic(() => import("@/components/Project"), {
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center">
      <Loader />
    </div>
  ),
});
const ContactForm = dynamic(() => import("@/components/ConatactForm"), {
  loading: () => <div className="min-h-[400px]" />,
});

export default async function Home() {
  return (
    <ClientWrapper>
      {/* Above-the-fold: Load immediately */}
      <HomeComponent />
      
      {/* Below-the-fold: Lazy load with Suspense boundaries */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <AboutComponent />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <TechnologyComponent />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <ExperienceComponent />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-[600px] flex items-center justify-center"><Loader /></div>}>
        <ProjectComponent />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <ContactForm />
      </Suspense>
    </ClientWrapper>
  );
}
