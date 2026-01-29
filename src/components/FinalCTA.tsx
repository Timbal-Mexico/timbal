import { motion } from "framer-motion";
import { Calendar, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const FinalCTA = () => {
  const [isLoading, setIsLoading] = useState(false);

  const openCalendly = () => {
    window.open("https://calendly.com/timbalcomunicaciones/30min", "_blank");
  };

  const scrollToWhatsApp = () => {
    window.open("https://wa.me/523323848561", "_blank");
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Aquí va la lógica de envío del formulario
    // Por ahora simularemos el envío
    setTimeout(() => {
      setIsLoading(false);
      alert("¡Gracias! Nos pondremos en contacto pronto.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          {/* Title */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Antes de cotizar,{" "}
            <span className="text-gradient">diagnosticamos</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10">
            Agenda una sesión para entender tu proceso y ver si Timbal es para ti.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={openCalendly}
              size="lg"
              className="gradient-hero text-primary-foreground border-0 shadow-soft hover:opacity-90 transition-all text-lg px-10 py-7 group w-full sm:w-auto"
            >
              <Calendar className="w-6 h-6 mr-3" />
              Agendar diagnóstico
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={scrollToWhatsApp}
              variant="outline"
              size="lg"
              className="text-lg px-10 py-7 group w-full sm:w-auto"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Contactar por WhatsApp
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto bg-muted/50 rounded-2xl p-8 border border-border/50 mb-16"
        >
          <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
            O cuéntanos sobre tu empresa
          </h3>
          
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Tu nombre"
                required
                className="px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
              />
              <input
                type="email"
                placeholder="Tu email"
                required
                className="px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
              />
            </div>
            
            <input
              type="text"
              placeholder="Nombre de tu empresa"
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
            />
            
            <input
              type="tel"
              placeholder="Teléfono / WhatsApp"
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
            />
            
            <select
              required
              className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground focus:outline-none focus:border-primary"
            >
              <option value="">Selecciona el paquete de interés</option>
              <option value="sales-core">TIMBAL SALES CORE</option>
              <option value="service">TIMBAL SERVICE</option>
              <option value="ops">TIMBAL OPS</option>
              <option value="people">TIMBAL PEOPLE</option>
              <option value="full-control">TIMBAL FULL CONTROL</option>
              <option value="director-view">TIMBAL DIRECTOR VIEW</option>
              <option value="not-sure">No estoy seguro</option>
            </select>
            
            <textarea
              placeholder="Cuéntanos brevemente tu situación actual"
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary resize-none"
            />
            
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full gradient-hero text-primary-foreground border-0 hover:opacity-90 transition-opacity text-lg py-6"
            >
              {isLoading ? "Enviando..." : "Enviar solicitud"}
            </Button>
          </form>
        </motion.div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-xl text-muted-foreground italic mb-4">
            Timbal no te ayuda a generar más leads.
            <br />
            <span className="text-foreground font-semibold not-italic">
              Te ayuda a no perder los que ya tienes.
            </span>
          </p>
          <p className="text-sm text-muted-foreground">
            Responderemos tu solicitud en las próximas 24 horas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
