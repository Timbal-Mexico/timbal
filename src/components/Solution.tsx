import { motion } from "framer-motion";
import { 
  TrendingUp, 
  HeadphonesIcon, 
  Settings2, 
  BarChart3 
} from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Ventas",
    description: "Captura, seguimiento y cierre de leads",
  },
  {
    icon: HeadphonesIcon,
    title: "Atención al cliente",
    description: "Entregas, garantías e incidencias",
  },
  {
    icon: Settings2,
    title: "Operación interna",
    description: "Solicitudes y control entre áreas",
  },
  {
    icon: BarChart3,
    title: "Dirección",
    description: "Visibilidad y toma de decisiones",
  },
];

const Solution = () => {
  return (
    <section className="py-24 bg-background">
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
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Timbal convierte conversaciones en{" "}
              <span className="text-gradient">procesos</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Timbal diseña e implementa sistemas de comunicación empresarial
              basados en CRM para ventas, atención al cliente, operación interna
              y dirección.
            </p>
          </motion.div>

          {/* Pillars */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 bg-card rounded-3xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elevated text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <pillar.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
