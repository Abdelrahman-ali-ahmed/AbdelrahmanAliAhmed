import AboutComponent from "@/components/about";
import ClientWrapper from "@/components/ClientWrapper";
import ContactForm from "@/components/ConatactForm";
import CustomerComponent from "@/components/customer";
import HomeComponent from "@/components/home";
import ServiceComponent from "@/components/service";



export default async function Home() {



  return (
    <ClientWrapper>
      <HomeComponent     />
      <AboutComponent />
      <ServiceComponent />
      <CustomerComponent />
      
      <ContactForm  />
       
    </ClientWrapper>
  );
}
