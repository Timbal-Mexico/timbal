import { motion } from "framer-motion";
import { Check, X, ArrowRight, Zap, Star, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "./ui/card";

const plans = [
  {
    name: "Kommo Starter",
    description: "Para iniciar tu transformación digital.",
    price: 24900,
    features: [
      "Solo CRM o Solo Tienda Online",
      "Configuración base completa",
      "Capacitación inicial al equipo",
      "Soporte por email",
      "Acceso a academia Timbal"
    ],
    notIncluded: [
      "Automatizaciones avanzadas",
      "Dashboard personalizado",
      "Estrategia mensual"
    ],
    cta: "Comenzar ahora",
    highlight: false,
    icon: Zap
  },
  {
    name: "Kommo Advance",
    description: "El equilibrio perfecto para escalar.",
    price: 49900,
    features: [
      "CRM + Tienda Online (Sistema 360°)",
      "Automatizaciones de flujo completo",
      "Embudos de venta integrados",
      "Integración ERP/Facturación",
      "Dashboard de métricas en vivo"
    ],
    notIncluded: [
      "Optimización mensual dedicada",
      "Consultoría estratégica"
    ],
    cta: "Elegir Growth",
    highlight: true,
    icon: Star
  },
  {
    name: "Scale",
    description: "Dominio total de tu mercado.",
    price: 79900,
    features: [
      "Todo lo incluido en Growth",
      "Optimización mensual de campañas",
      "Estrategia comercial recurrente",
      "Gerente de éxito dedicado",
      "Auditorías trimestrales",
      "SLA garantizado"
    ],
    notIncluded: [],
    cta: "Contactar Ventas",
    highlight: false,
    icon: ShieldCheck
  }
];

const WHATSAPP_NUMBER = "523323848561";

const buildWhatsAppUrl = (serviceName: string) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const params = new URLSearchParams({
    text: `Hola, me interesa su servicio de ${serviceName}`,
    utm_source: "web",
    utm_medium: "pricing",
    utm_campaign: `service_${serviceName.replace(/\s+/g, "_").toLowerCase()}`,
  });
  return `${base}?${params.toString()}`;
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Inversión Transparente
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Elige el nivel de <span className="text-gradient">impacto que necesitas.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Implementación profesional de sistemas que se pagan solos con los resultados que generan.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative h-full group"
            >
              {plan.highlight && (
                <div className="pointer-events-none absolute -top-5 left-1/2 -translate-x-1/2 z-20 select-none w-max bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg ring-1 ring-white/50 transition-all duration-300 group-hover:scale-105 group-hover:ring-2 group-hover:ring-white group-hover:shadow-2xl group-hover:from-blue-600 group-hover:via-indigo-600 group-hover:to-purple-700">
                  Más Vendido
                </div>
              )}
              
              <Card className={`h-full flex flex-col transition-all duration-300 will-change-transform transform-gpu overflow-visible ${plan.highlight ? "border-primary shadow-2xl bg-card" : "border-border hover:border-primary/60 hover:shadow-2xl bg-card/50"}`}>
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${plan.highlight ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                    <plan.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="mt-2 text-sm h-10">{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">
                        ${plan.price.toLocaleString('es-MX')}
                      </span>
                      <span className="text-sm font-semibold text-muted-foreground">MXN</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Pago único de implementación
                    </p>
                  </div>

                  <div className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground/50">
                        <X className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button
                    asChild
                    className={`w-full rounded-full ${plan.highlight ? "shadow-lg shadow-primary/25" : ""}`}
                    variant={plan.highlight ? "default" : "outline"}
                    size="lg"
                  >
                    <a
                      href={buildWhatsAppUrl(plan.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Me interesa su servicio <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Custom Enterprise CTA */}
        <div className="mt-20 text-center bg-muted/30 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-border/50">
          <h3 className="text-2xl font-bold mb-4">¿Necesitas una solución personalizada?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entendemos que cada empresa es única. Si tus requerimientos superan nuestros planes base, 
            nuestro equipo de ingeniería comercial diseñará una propuesta a tu medida.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-full px-8"
          >
            <a
              href={buildWhatsAppUrl("Contacto con equipo de ventas")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Me interesa su servicio
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
