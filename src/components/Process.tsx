import { motion } from "framer-motion";
import { Search, PenTool, Cog, GraduationCap, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico",
    description: "Entendemos cómo entra y se maneja la comunicación hoy.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Diseño",
    description: "Creamos procesos y flujos claros.",
  },
  {
    icon: Cog,
    number: "03",
    title: "Implementación",
    description: "Configuramos el CRM y automatizaciones.",
  },
  {
    icon: GraduationCap,
    number: "04",
    title: "Capacitación",
    description: "Entrenamos al equipo para usarlo bien.",
  },
];

const Process = () => {
  return (
    <section id="como-trabajamos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              No improvisamos.{" "}
              <span className="text-gradient">Implementamos.</span>
            </h2>
          </motion.div>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="h-full p-6 bg-background rounded-2xl border border-border shadow-card">
                  {/* Number */}
                  <span className="font-display text-5xl font-bold text-primary/10">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mt-4 mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (not on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
