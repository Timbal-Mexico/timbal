import { motion } from "framer-motion";
import { 
  MessageCircle, 
  Users, 
  BarChart3, 
  Zap,
  CheckCircle2,
  ArrowRight,
  Star,
  Crown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const kommoPlans = [
  {
    name: "Base",
    price: "$15",
    period: "/usuario/mes",
    description: "Ideal para empezar con la gestión de mensajería.",
    features: [
      "Bandeja de entrada unificada",
      "WhatsApp, Instagram, Facebook",
      "Hasta 2,500 contactos activos",
      "Pipeline de ventas básico",
      "App móvil incluida",
      "Soporte por email"
    ],
    popular: false
  },
  {
    name: "Avanzado",
    price: "$25",
    period: "/usuario/mes",
    description: "Para equipos que buscan automatización.",
    features: [
      "Todo lo del plan Base",
      "Chatbot sin código",
      "Automatizaciones ilimitadas",
      "Hasta 10,000 contactos activos",
      "Integraciones avanzadas",
      "Reportes personalizados",
      "Soporte prioritario"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$45",
    period: "/usuario/mes",
    description: "Solución completa para grandes equipos.",
    features: [
      "Todo lo del plan Avanzado",
      "Contactos ilimitados",
      "API completa",
      "Webhooks personalizados",
      "Multi-pipeline",
      "Roles y permisos avanzados",
      "Account manager dedicado",
      "SLA garantizado"
    ],
    popular: false
  }
];

const benefits = [
  {
    icon: MessageCircle,
    title: "Comunicación Unificada",
    description: "Gestiona WhatsApp, Instagram, Facebook, Telegram y más desde una sola bandeja."
  },
  {
    icon: Users,
    title: "CRM Conversacional",
    description: "Convierte conversaciones en ventas con pipelines visuales y automatizados."
  },
  {
    icon: BarChart3,
    title: "Analytics Avanzados",
    description: "Métricas en tiempo real de tu equipo, conversaciones y conversiones."
  },
  {
    icon: Zap,
    title: "Automatización Potente",
    description: "Crea chatbots y flujos automáticos sin necesidad de programar."
  }
];

const KommoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6"
          >
            <Crown className="w-4 h-4" />
            Partner Certificado
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6"
          >
            Somos <span className="text-gradient">Kommo Partners</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8"
          >
            Kommo es el CRM conversacional #1 del mundo. Como partners certificados, 
            te ayudamos a implementarlo y sacarle el máximo provecho para tu negocio.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#precios">
              <Button size="lg" className="gradient-hero text-primary-foreground shadow-soft">
                Ver planes Kommo <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <Link to="/#contacto">
              <Button size="lg" variant="outline">
                Agendar demo
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Por qué Kommo?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              La plataforma que transforma conversaciones en ventas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border text-center"
              >
                <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="precios" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Planes y Precios de Kommo
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Precios en USD. Facturación anual. Nosotros te ayudamos con la implementación.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {kommoPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-card rounded-2xl p-8 shadow-card border ${
                  plan.popular ? 'border-primary ring-2 ring-primary/20' : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full gradient-hero text-white text-sm font-medium">
                      <Star className="w-3 h-3" /> Más popular
                    </span>
                  </div>
                )}
                
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="font-display text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {plan.period}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/#contacto" className="block">
                  <Button 
                    className={`w-full ${plan.popular ? 'gradient-hero text-primary-foreground' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Contratar plan
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground text-sm mt-8"
          >
            * Los precios pueden variar. Contáctanos para una cotización personalizada.
          </motion.p>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-10 md:p-16 text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold mb-6"
            >
              ¿Por qué contratar Kommo con Timbal?
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
              {[
                { title: "Implementación Guiada", desc: "Te ayudamos a configurar todo desde cero" },
                { title: "Soporte en Español", desc: "Atención personalizada en tu idioma" },
                { title: "Capacitación Incluida", desc: "Entrenamos a tu equipo para el éxito" }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <Link to="/#contacto">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Agenda tu demo gratis
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KommoPage;
