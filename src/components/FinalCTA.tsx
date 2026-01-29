import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const FinalCTA = () => {
  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
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

          {/* CTA Button */}
          <Button
            size="lg"
            className="gradient-hero text-primary-foreground border-0 shadow-soft hover:opacity-90 transition-all text-lg px-10 py-7 group"
          >
            <Calendar className="w-6 h-6 mr-3" />
            Agendar diagnóstico
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Closing message */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-xl text-muted-foreground italic"
          >
            Timbal no te ayuda a generar más leads.
            <br />
            <span className="text-foreground font-semibold not-italic">
              Te ayuda a no perder los que ya tienes.
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
