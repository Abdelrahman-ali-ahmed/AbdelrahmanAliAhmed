import AboutComponent from "@/components/about";
import ClientWrapper from "@/components/ClientWrapper";
import ContactForm from "@/components/ConatactForm";
import ExperienceComponent from "@/components/Experience";
import HomeComponent from "@/components/home";
import ProjectComponent from "@/components/Project";
import TechnologyComponent from "@/components/Technology";



export default async function Home() {



  return (
    <ClientWrapper>
    <HomeComponent />
    <AboutComponent />
    <TechnologyComponent />
   <ExperienceComponent />
<ProjectComponent />
<ContactForm />
    </ClientWrapper>
  );
}
