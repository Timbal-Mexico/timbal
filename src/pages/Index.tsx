import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavbarSimple from "@/components/NavbarSimple";
import HeroNew from "@/components/HeroNew";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Process from "@/components/Process";
import KommoPartner from "@/components/KommoPartner";
import ForWho from "@/components/ForWho";
import Benefits from "@/components/Benefits";
import Packages from "@/components/Packages";
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
      <Problem />
      <Solution />
      <Process />
      <KommoPartner />
      <ForWho />
      <Benefits />
      <Packages />
      <FinalCTA />
      <FooterSimple />
    </div>
  );
};

export default Index;
