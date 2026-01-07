import { motion } from "framer-motion";
import { 
  MessageCircle, 
  Bot, 
  BarChart3, 
  Zap, 
  Users, 
  Target,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: MessageCircle,
    title: "Gestión de Mensajería",
    description: "Centralizamos todas tus conversaciones de WhatsApp, Instagram, Facebook y más en una sola plataforma.",
    features: [
      "Bandeja de entrada unificada",
      "Respuestas rápidas personalizadas",
      "Etiquetado y segmentación de contactos",
      "Historial completo de conversaciones",
      "Integración con múltiples canales"
    ],
    color: "from-primary to-primary/80"
  },
  {
    icon: Bot,
    title: "Chatbots Inteligentes",
    description: "Automatiza respuestas y atención al cliente 24/7 con chatbots diseñados a la medida de tu negocio.",
    features: [
      "Diseño de flujos conversacionales",
      "Respuestas automáticas inteligentes",
      "Captura de leads automatizada",
      "Integración con tu CRM",
      "Escalamiento a agentes humanos"
    ],
    color: "from-accent to-accent/80"
  },
  {
    icon: BarChart3,
    title: "CRM Conversacional",
    description: "Implementamos y configuramos Kommo para que gestiones tus ventas y relaciones con clientes.",
    features: [
      "Configuración personalizada de Kommo",
      "Pipelines de ventas automatizados",
      "Reportes y analytics en tiempo real",
      "Integraciones con tus herramientas",
      "Capacitación de tu equipo"
    ],
    color: "from-primary to-accent"
  },
  {
    icon: Zap,
    title: "Automatización de Marketing",
    description: "Crea secuencias automatizadas que nutren leads y convierten prospectos en clientes.",
    features: [
      "Campañas de WhatsApp marketing",
      "Secuencias de seguimiento automático",
      "Triggers basados en comportamiento",
      "A/B testing de mensajes",
      "Métricas de conversión"
    ],
    color: "from-accent to-primary"
  },
  {
    icon: Users,
    title: "Atención al Cliente",
    description: "Mejora la experiencia de tus clientes con una atención rápida, personalizada y eficiente.",
    features: [
      "Protocolo de atención definido",
      "Tiempos de respuesta optimizados",
      "Scripts de conversación",
      "Encuestas de satisfacción",
      "Reportes de desempeño"
    ],
    color: "from-primary/90 to-accent/90"
  },
  {
    icon: Target,
    title: "Consultoría Estratégica",
    description: "Te ayudamos a definir la mejor estrategia de comunicación digital para tu negocio.",
    features: [
      "Diagnóstico de canales actuales",
      "Plan de comunicación digital",
      "Estrategia omnicanal",
      "KPIs y objetivos claros",
      "Acompañamiento mensual"
    ],
    color: "from-accent/90 to-primary/90"
  }
];

const ServiciosPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6"
          >
            Nuestros Servicios
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6"
          >
            Soluciones de <span className="text-gradient">mensajería</span><br />
            para tu negocio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Desde la gestión de mensajes hasta la automatización completa, 
            tenemos el servicio perfecto para impulsar tu comunicación digital.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6"
          >
            ¿Listo para transformar tu comunicación?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto mb-8"
          >
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a vender más.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/precios">
              <Button size="lg" className="gradient-hero text-primary-foreground shadow-soft">
                Ver precios <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/#contacto">
              <Button size="lg" variant="outline">
                Contactar ahora
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiciosPage;
