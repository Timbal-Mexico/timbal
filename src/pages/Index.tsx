import NavbarSimple from "@/components/NavbarSimple";
import HeroNew from "@/components/HeroNew";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Process from "@/components/Process";
import ForWho from "@/components/ForWho";
import Benefits from "@/components/Benefits";
import FinalCTA from "@/components/FinalCTA";
import FooterSimple from "@/components/FooterSimple";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavbarSimple />
      <HeroNew />
      <Problem />
      <Solution />
      <Process />
      <ForWho />
      <Benefits />
      <FinalCTA />
      <FooterSimple />
    </div>
  );
};

export default Index;
