import { Suspense } from "react";
import ClientWrapper from "@/components/ClientWrapper";
import HomeComponent from "@/components/home";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import LocaleHandler from "@/components/LocaleHandler";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { routing } from "@/i18n/routing";
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

// Root page that directly serves default locale content
// This eliminates middleware processing and redirects for the most important request
export default async function RootPage() {
  // Directly load English messages for root path (no middleware, no redirect)
  const messages = (await import("../../messages/en.json")).default;
  return (
    <NextIntlClientProvider messages={messages}>
      <LocaleHandler locale={routing.defaultLocale} />
      <ThemeProvider attribute="class" enableSystem defaultTheme="system">
        <Navbar />
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
        <Footer />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}

