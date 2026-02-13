import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavbarSimple from "@/components/NavbarSimple";
import HeroNew from "@/components/HeroNew";
import About from "@/components/About";
import Ecosystem from "@/components/Ecosystem";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Differential from "@/components/Differential";
import ServiceModel from "@/components/ServiceModel";
import FinalCTA from "@/components/FinalCTA";
import FooterSimple from "@/components/FooterSimple";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <NavbarSimple />
      <HeroNew />
      <About />
      <Ecosystem />
      <Services />
      <Process />
      <Differential />
      <ServiceModel />
      <FinalCTA />
      <FooterSimple />
    </div>
  );
};

export default Index;
