import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowRight,
  Star,
  Zap,
  MessageCircle,
  Users,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pricingPlans = [
  {
    name: "Starter",
    subtitle: "Para emprendedores",
    price: "$4,999",
    period: "/mes",
    description: "Perfecto para negocios que inician con mensajería profesional.",
    icon: MessageCircle,
    features: [
      "Gestión de 1 canal de mensajería",
      "Hasta 500 conversaciones/mes",
      "Respuestas rápidas predefinidas",
      "Reportes básicos mensuales",
      "Soporte por email",
      "1 usuario incluido"
    ],
    cta: "Comenzar ahora",
    popular: false
  },
  {
    name: "Growth",
    subtitle: "Para PyMEs",
    price: "$9,999",
    period: "/mes",
    description: "Ideal para empresas en crecimiento que buscan escalar.",
    icon: Zap,
    features: [
      "Gestión de 3 canales de mensajería",
      "Hasta 2,000 conversaciones/mes",
      "Chatbot básico incluido",
      "CRM Kommo configurado",
      "Automatizaciones básicas",
      "Reportes semanales",
      "Soporte prioritario",
      "3 usuarios incluidos"
    ],
    cta: "Escalar mi negocio",
    popular: true
  },
  {
    name: "Pro",
    subtitle: "Para empresas",
    price: "$19,999",
    period: "/mes",
    description: "Solución completa para equipos de ventas y atención.",
    icon: Users,
    features: [
      "Gestión de canales ilimitados",
      "Conversaciones ilimitadas",
      "Chatbot avanzado personalizado",
      "CRM Kommo + automatizaciones",
      "Integraciones personalizadas",
      "Reportes diarios + dashboard",
      "Account manager dedicado",
      "Usuarios ilimitados",
      "Capacitación mensual"
    ],
    cta: "Hablar con ventas",
    popular: false
  }
];

const addons = [
  {
    name: "Chatbot Avanzado",
    price: "$3,999/mes",
    description: "Flujos conversacionales complejos con IA"
  },
  {
    name: "Capacitación Extra",
    price: "$2,499/sesión",
    description: "Sesiones de entrenamiento para tu equipo"
  },
  {
    name: "Integraciones Custom",
    price: "Desde $4,999",
    description: "Conecta Kommo con tus sistemas existentes"
  },
  {
    name: "Consultoría Estratégica",
    price: "$5,999/mes",
    description: "Acompañamiento mensual para optimizar resultados"
  }
];

const faqs = [
  {
    question: "¿Los precios incluyen la licencia de Kommo?",
    answer: "No, los precios de nuestros servicios son adicionales a la licencia de Kommo. Te ayudamos a elegir el plan de Kommo ideal para tu negocio."
  },
  {
    question: "¿Hay contrato de permanencia?",
    answer: "Trabajamos con contratos mensuales. Puedes cancelar cuando quieras con 30 días de anticipación."
  },
  {
    question: "¿Qué pasa si necesito más conversaciones?",
    answer: "Podemos crear un plan personalizado o actualizar tu plan actual según tus necesidades."
  },
  {
    question: "¿Incluyen configuración inicial?",
    answer: "Sí, todos nuestros planes incluyen la configuración inicial de canales, usuarios y flujos básicos."
  }
];

const PreciosPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Precios transparentes
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6"
          >
            Planes para cada <span className="text-gradient">etapa</span><br />
            de tu negocio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Precios en MXN + IVA. Sin costos ocultos. Escala cuando lo necesites.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-10 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-card rounded-2xl p-8 shadow-card border ${
                  plan.popular ? 'border-primary ring-2 ring-primary/20 scale-105' : 'border-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full gradient-hero text-white text-sm font-medium">
                      <Star className="w-3 h-3" /> Recomendado
                    </span>
                  </div>
                )}
                
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4">
                  <plan.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="font-display text-2xl font-bold text-foreground">
                  {plan.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-4">
                  {plan.subtitle}
                </p>
                <p className="text-muted-foreground text-sm mb-4 h-12">
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
                    className={`w-full ${plan.popular ? 'gradient-hero text-primary-foreground shadow-soft' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    {plan.cta} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Servicios Adicionales
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Potencia tu plan con estos servicios complementarios.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border shadow-card"
              >
                <h3 className="font-display font-bold text-foreground mb-1">
                  {addon.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-2">
                  {addon.price}
                </p>
                <p className="text-muted-foreground text-sm">
                  {addon.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Preguntas Frecuentes
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border shadow-card"
              >
                <h3 className="font-display font-bold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-10 md:p-16 text-center text-white max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold mb-4"
            >
              ¿Necesitas un plan personalizado?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg mb-8 max-w-xl mx-auto"
            >
              Cuéntanos sobre tu negocio y te crearemos una propuesta a la medida.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/#contacto">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Solicitar cotización <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PreciosPage;
