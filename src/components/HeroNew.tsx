import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Globe, MessageCircle, Users, Zap, Layers } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { PopupModal } from "react-calendly";

const HeroNew = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const openCalendly = () => {
    setIsCalendlyOpen(true);
  };

   const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10 opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text */}
          <div className="max-w-2xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center lg:justify-start mb-8"
            >
              <a
                href="https://www.kommo.com/es/socios/encontrar-socio/comunicaciones-digitales-timbal/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200" />
                <div className="relative flex items-center gap-2 bg-background border border-border/50 rounded-lg px-4 py-2 shadow-sm">
                  <img src="/images/partners/kommo_partner_dark.svg" alt="Kommo partner" className="h-6 w-auto" />
                  <span className="text-xs font-semibold text-muted-foreground border-l border-border pl-2 ml-2">
                    Partner Certificado
                  </span>
                </div>
              </a>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 tracking-tight"
            >
              Sistemas Digitales que convierten <span className="text-gradient">Prospectos en Ventas.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground mb-10 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Diseñamos e implementamos la infraestructura automatizada para que tu empresa escale sin caos operativo.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-lg shadow-lg shadow-primary/25 rounded-full" onClick={openCalendly}>
                Diagnóstico Estratégico
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 text-lg rounded-full border-2 hover:bg-muted/50" 
                onClick={() => scrollToSection("servicios")}
              >
                Explorar Soluciones
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Visual Ecosystem */}
          <div className="relative hidden lg:block h-[600px] w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Central Hub */}
              <div className="relative z-20 w-32 h-32 bg-background rounded-full border-4 border-primary/20 flex items-center justify-center shadow-2xl shadow-primary/20">
                 <div className="absolute inset-0 bg-primary/5 rounded-full animate-pulse" />
                 <Layers className="w-16 h-16 text-primary" />
              </div>

              {/* Orbiting Satellites */}
              <Satellite icon={Users} angle={0} delay={0} label="Ventas" />
              <Satellite icon={Zap} angle={72} delay={1} label="Automatización" />
              <Satellite icon={BarChart3} angle={144} delay={2} label="Data" />
              <Satellite icon={MessageCircle} angle={216} delay={3} label="Canales" />
              <Satellite icon={Globe} angle={288} delay={4} label="Web" />

              {/* Connecting Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-20">
                 <circle cx="50%" cy="50%" r="180" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-primary animate-[spin_60s_linear_infinite]" />
                 <circle cx="50%" cy="50%" r="120" fill="none" stroke="currentColor" strokeWidth="1" className="text-muted-foreground" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      <PopupModal
        url="https://calendly.com/timbalcomunicaciones/30min"
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById("root")!}
      />
    </section>
  );
};

// Helper component for Satellites
const Satellite = ({ icon: Icon, angle, delay, label }: { icon: any, angle: number, delay: number, label: string }) => {
  return (
    <motion.div
      className="absolute w-16 h-16 bg-card border border-border rounded-2xl shadow-lg flex flex-col items-center justify-center z-10"
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{ 
        x: Math.cos(angle * (Math.PI / 180)) * 180, 
        y: Math.sin(angle * (Math.PI / 180)) * 180,
        opacity: 1
      }}
      transition={{ duration: 1, delay: delay * 0.1, type: "spring" }}
    >
      <Icon className="w-6 h-6 text-foreground mb-1" />
      <span className="text-[10px] font-semibold text-muted-foreground uppercase">{label}</span>
      
      {/* Line to center */}
      <motion.div 
        className="absolute top-1/2 left-1/2 h-[1px] bg-gradient-to-r from-primary/50 to-transparent -z-10 origin-left"
        style={{ width: '180px', transform: `rotate(${angle + 180}deg)` }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.5 + (delay * 0.1) }}
      />
    </motion.div>
  )
}

export default HeroNew;
