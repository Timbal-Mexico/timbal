import { motion } from "framer-motion";
import {
  MessageSquare,
  Bot,
  BarChart3,
  Zap,
  Users,
  Smartphone,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: MessageSquare,
    title: "Gestión de Mensajería",
    description:
      "Centraliza WhatsApp, Instagram, Facebook y más en una sola plataforma. Responde más rápido, vende más.",
  },
  {
    icon: Bot,
    title: "Chatbots Inteligentes",
    description:
      "Automatiza respuestas 24/7 con bots conversacionales que califican leads y agendan citas automáticamente.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reportes",
    description:
      "Dashboards en tiempo real para medir el rendimiento de tu equipo y optimizar tus conversiones.",
  },
  {
    icon: Zap,
    title: "Automatización de Ventas",
    description:
      "Flujos de trabajo automáticos que nutren a tus prospectos y cierran ventas sin intervención manual.",
  },
  {
    icon: Users,
    title: "CRM Conversacional",
    description:
      "Implementación y configuración de Kommo CRM adaptado a las necesidades de tu negocio.",
  },
  {
    icon: Smartphone,
    title: "Campañas de WhatsApp",
    description:
      "Envíos masivos personalizados con alta tasa de apertura. Templates aprobados y segmentación inteligente.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nuestros servicios
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Todo lo que necesitas para{" "}
            <span className="text-gradient">dominar la mensajería</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluciones integrales para empresas que quieren convertir
            conversaciones en ventas.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-card border-border hover:shadow-card transition-all duration-300 group hover:border-primary/30">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
