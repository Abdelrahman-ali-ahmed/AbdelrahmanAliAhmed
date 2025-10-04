import AboutComponent from "@/components/about";
import ClientWrapper from "@/components/ClientWrapper";
import ContactForm from "@/components/ConatactForm";
import HomeComponent from "@/components/home";
import ServiceComponent from "@/components/service";
import TechnologyComponent from "@/components/Technology";



export default async function Home() {



  return (
    <ClientWrapper>
      <HomeComponent/>
      <AboutComponent />
      <ServiceComponent />
      <TechnologyComponent />
      <ContactForm  /> 
    </ClientWrapper>
  );
}
