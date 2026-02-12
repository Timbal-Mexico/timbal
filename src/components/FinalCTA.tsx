import { useState } from "react";
import { PopupModal } from "react-calendly";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const FinalCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-blue-700/90 z-0" />
      
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Timbal no ayuda a generar más leads.
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Ayudamos a no perder los que ya estás pagando y a convertirlos en crecimiento real.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="h-14 px-8 text-lg rounded-full shadow-xl hover:scale-105 transition-transform"
              onClick={() => setIsModalOpen(true)}
            >
              Agenda un diagnóstico estratégico
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <p className="mt-8 text-white/60 text-sm">
            Somos arquitectos de ecosistemas comerciales digitales.
          </p>
        </motion.div>
      </div>
      <PopupModal
        url="https://calendly.com/timbalcomunicaciones/30min"
        onModalClose={() => setIsModalOpen(false)}
        open={isModalOpen}
        rootElement={document.getElementById("root")!}
      />
    </section>
  );
};

export default FinalCTA;
