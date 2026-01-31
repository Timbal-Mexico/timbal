import { motion } from "framer-motion";
import { CheckCircle2, Award, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const benefits = [
  "Implementación oficial certificada",
  "Soporte técnico prioritario",
  "Acceso a funciones beta exclusivas",
  "Precios preferenciales para clientes",
  "Capacitación continua del equipo",
  "Integración con +100 herramientas",
];

const KommoPartner = () => {
  return (
    <section id="kommo" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">
                Partner Oficial
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Somos{" "}
              <span className="text-gradient">Kommo Partners</span>{" "}
              certificados
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Como partners oficiales de Kommo, tenemos acceso exclusivo a
              herramientas, soporte prioritario y las mejores prácticas para
              implementar el CRM conversacional líder del mercado.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="gradient-hero text-primary-foreground border-0 shadow-soft hover:opacity-90 transition-all group"
            >
              <a 
                href="https://kommo.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Conoce más sobre Kommo
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background decoration */}
              <div className="absolute inset-0 gradient-hero rounded-3xl opacity-10 blur-2xl" />
              
              {/* Main card */}
              <div className="relative h-full bg-card border border-border rounded-3xl p-4 shadow-elevated overflow-hidden flex items-center justify-center">
                 <img 
                    src="/images/certificate.jpeg" 
                    alt="Certificado Kommo Partner" 
                    className="w-full h-full object-contain rounded-2xl"
                 />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KommoPartner;
