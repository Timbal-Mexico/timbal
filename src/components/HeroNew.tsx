import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { ParticleNetwork } from "./ui/particle-network";
import { useEffect } from "react";

const HeroNew = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 100]); // 0.2x speed for background

  const openCalendly = () => {
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/timbalsoluciones/30min'
      });
      return false;
    }
    return true;
  };

  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    head?.appendChild(script);

    const style = document.createElement('link');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('href', 'https://assets.calendly.com/assets/external/widget.css');
    head?.appendChild(style);

    return () => {
      head?.removeChild(script);
      head?.removeChild(style);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Faster stagger for smoother flow
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" } // Smoother, simpler ease
    },
  };

  return (
    <section id="inicio" className="relative overflow-hidden min-h-screen flex items-center justify-center bg-background px-6 py-24">
      {/* Background Graphic (Technology/Business/CRM Theme) */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-[0.20] pointer-events-none bg-cover bg-center bg-no-repeat mix-blend-overlay grayscale"
        style={{
          y: backgroundY,
          backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop')", // More abstract/tech background
        }}
        aria-hidden="true"
      />
      
      {/* Interactive Particles with Parallax handled internally */}
      <div className="absolute inset-0 z-0">
        <ParticleNetwork />
      </div>

      <div className="relative z-10 max-w-5xl w-full text-center space-y-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <h1 className="font-display font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-6">
            <motion.span className="block sm:inline-block sm:mr-4">
              <motion.span variants={itemVariants} className="inline-block mr-3">Más</motion.span>
              <motion.span variants={itemVariants} className="inline-block">Control.</motion.span>
            </motion.span>
            <motion.span className="block sm:inline-block sm:mr-4">
              <motion.span variants={itemVariants} className="inline-block mr-3">Más</motion.span>
              <motion.span variants={itemVariants} className="inline-block">Seguimiento.</motion.span>

            </motion.span>
            <motion.span className="block sm:inline-block">
              <span className="font-bold pb-2 inline-block" style={{ color: 'hsl(270 41% 40%)'  }}>
                <motion.span variants={itemVariants} className="inline-block mr-3">Más</motion.span>
                <motion.span variants={itemVariants} className="inline-block">Ventas.</motion.span>
              </span>
            </motion.span>
          </h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10"
          >
            Unificamos tus canales, organizamos tus oportunidades y automatizamos el seguimiento para que tu negocio tenga un proceso comercial claro, medible y enfocado en ventas.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button
              size="lg"
              className="group relative overflow-hidden rounded-full h-14 px-10 text-lg font-semibold text-primary-foreground bg-gradient-to-r from-primary via-secondary to-primary shadow-[0_0_30px_rgba(129,140,248,0.5)] transition-all duration-500 hover:shadow-[0_0_50px_rgba(129,140,248,0.8)] hover:scale-105 focus-visible:scale-105"
              onClick={openCalendly}
            >
              <span className="relative z-10 flex items-center gap-2">
                Agenda una llamada
              </span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-secondary via-primary to-secondary" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroNew;
