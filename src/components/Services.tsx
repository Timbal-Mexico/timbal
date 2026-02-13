import { useState } from "react";
import { PopupModal } from "react-calendly";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  ShoppingBag,
  Rocket,
  BarChart,
  CheckCircle2,
  ArrowRight,
  XCircle,
  Zap,
  ChevronDown,
  Target,
  RefreshCw,
  LineChart
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const services = [
  {
    id: "sistema-360",
    icon: Rocket,
    title: "Sistema de Ventas 360°",
    subtitle: "Producto Estrella",
    category: "Integral",
    description: "La solución completa para empresas que venden por redes sociales, WhatsApp o quieren lanzar ecommerce.",
    problem: "Leads sin seguimiento, ventas desordenadas en WhatsApp y falta de control comercial.",
    process: [
      "Setup de tienda online optimizada",
      "Integración total con CRM",
      "Automatización de embudos",
      "Configuración de envíos y logística"
    ],
    results: [
      "Control total de tus ventas",
      "Seguimiento automático de leads",
      "Panel de métricas centralizado"
    ],
    features: [
      "Tienda Online + CRM",
      "Embudos de Venta",
      "Automatización WhatsApp",
      "Gestión de Envíos"
    ],
    resultSummary: "De prospecto a cliente recurrente, en automático."
  },
  {
    id: "crm-comercial",
    icon: MessageSquare,
    title: "Implementación CRM",
    subtitle: "Optimización Comercial",
    category: "Ventas",
    description: "Para empresas que ya venden pero están desorganizadas. Ordenamos tu proceso comercial.",
    problem: "Vendedores saturados, pérdida de información y seguimiento manual ineficiente.",
    process: [
      "Diseño de pipeline de ventas",
      "Automatización de asignación de leads",
      "Integración con Meta Ads",
      "Scripts y plantillas de venta"
    ],
    results: [
      "Mayor tasa de cierre",
      "Trazabilidad de cada prospecto",
      "Equipo de ventas alineado"
    ],
    features: [
      "Pipeline Visual",
      "Asignación Automática",
      "Integración Ads",
      "Dashboard Conversión"
    ],
    resultSummary: "Tu equipo de ventas, organizado y eficiente."
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    title: "Ecommerce Inteligente",
    subtitle: "Tienda + Automatización",
    category: "Ventas Online",
    description: "No solo una tienda bonita… sino una máquina que vende sola las 24/7.",
    problem: "Tiendas que no venden, carritos abandonados y procesos manuales de gestión.",
    process: [
      "Diseño UX enfocado a conversión",
      "Automatización de carritos abandonados",
      "Email marketing conectado a CRM",
      "Integración logística automática"
    ],
    results: [
      "Recuperación de ventas perdidas",
      "Gestión de pedidos automática",
      "Experiencia de compra fluida"
    ],
    features: [
      "Diseño Estratégico",
      "Recuperación Carritos",
      "Email Marketing",
      "Logística Auto"
    ],
    resultSummary: "Ventas online conectadas con tu operación."
  },
  {
    id: "post-venta",
    icon: RefreshCw,
    title: "Automatización Post-Venta",
    subtitle: "Experiencia y Retención",
    category: "Fidelización",
    description: "Convierte compradores en clientes leales. El dinero real está en la recompra.",
    problem: "Perder clientes después de la primera venta por falta de seguimiento y atención.",
    process: [
      "Automatización notificaciones de envío",
      "Seguimiento post-compra automático",
      "Solicitud automática de reseñas",
      "Campañas de reactivación"
    ],
    results: [
      "Incremento en LTV (Valor de Vida)",
      "Más reseñas positivas",
      "Ingresos recurrentes"
    ],
    features: [
      "Notificaciones Envío",
      "Encuestas Satisfacción",
      "Solicitud Reseñas",
      "Fidelización"
    ],
    resultSummary: "Clientes felices que vuelven a comprar."
  },
  {
    id: "control-metricas",
    icon: LineChart,
    title: "Control y Métricas",
    subtitle: "Inteligencia Comercial",
    category: "Gestión",
    description: "Deja de adivinar. Toma decisiones basadas en datos reales de tu negocio.",
    problem: "Ceguera operativa: no saber cuánto cuesta un lead o cuál es el retorno de inversión.",
    process: [
      "Centralización de datos",
      "Configuración de dashboard",
      "Cálculo de ROAS y CPA",
      "Análisis de tasa de cierre"
    ],
    results: [
      "Visibilidad financiera total",
      "Optimización de presupuesto",
      "Decisiones estratégicas"
    ],
    features: [
      "Dashboard Central",
      "Costo por Lead",
      "ROAS en vivo",
      "Tasa de Cierre"
    ],
    resultSummary: "El control total de tu negocio en un panel."
  }
];

const Services = () => {
  const [selectedId, setSelectedId] = useState<string | null>(services[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="servicios" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nuestras Soluciones
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Simplificamos lo complejo. <br />
            <span className="text-gradient">Tecnología con propósito.</span>
          </h2>
        </div>

        {/* Desktop Layout (Split View) */}
        <div className="hidden lg:grid grid-cols-12 gap-8">
          {/* Left Column: Navigation List */}
          <div className="col-span-4 space-y-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedId(service.id)}
                className={cn(
                  "w-full text-left p-6 rounded-2xl transition-all duration-300 border-2 group relative overflow-hidden",
                  selectedId === service.id
                    ? "bg-background border-primary shadow-lg scale-[1.02]"
                    : "bg-background/50 border-transparent hover:bg-background hover:border-border/50"
                )}
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                    selectedId === service.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground group-hover:text-primary"
                  )}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={cn(
                      "font-bold text-lg transition-colors",
                      selectedId === service.id ? "text-primary" : "text-foreground"
                    )}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                {selectedId === service.id && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute inset-y-0 right-0 w-1.5 bg-primary"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Column: Content Display */}
          <div className="col-span-8 bg-background rounded-3xl p-8 border border-border/50 shadow-sm min-h-[600px] relative overflow-hidden">
            <AnimatePresence mode="wait">
              {services.map((service) => (
                service.id === selectedId && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col"
                  >
                    {/* Header Content */}
                    <div className="flex items-start justify-between mb-8">
                      <div>
                        <h3 className="text-3xl font-bold text-foreground mb-2">{service.title}</h3>
                        <p className="text-lg text-muted-foreground">{service.description}</p>
                      </div>
                      <div className="hidden xl:block">
                        <Button variant="outline" className="gap-2" onClick={() => setIsModalOpen(true)}>
                          Agendar Diagnóstico <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Problem / Solution Split */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div className="bg-destructive/5 p-6 rounded-xl border border-destructive/10">
                        <h4 className="flex items-center gap-2 font-bold text-destructive mb-3">
                          <XCircle className="w-5 h-5" /> El Problema
                        </h4>
                        <p className="text-foreground/80 text-sm leading-relaxed">
                          {service.problem}
                        </p>
                      </div>
                      <div className="bg-green-500/5 p-6 rounded-xl border border-green-500/10">
                        <h4 className="flex items-center gap-2 font-bold text-green-600 mb-3">
                          <CheckCircle2 className="w-5 h-5" /> La Solución
                        </h4>
                        <ul className="space-y-2">
                          {service.results.map((result, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div className="mb-8">
                      <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-yellow-500" /> Características Clave
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/50">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                              {/* Simple Index or Icon */}
                              <span className="text-xs font-bold">{i + 1}</span>
                            </div>
                            <span className="text-sm font-medium text-foreground/90">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer / Summary */}
                    <div className="mt-auto pt-6 border-t border-border flex items-center justify-between bg-muted/20 -mx-8 -mb-8 px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <Target className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-primary uppercase tracking-wider">Impacto Esperado</p>
                          <p className="text-sm font-medium text-foreground">{service.resultSummary}</p>
                        </div>
                      </div>
                      <Button className="xl:hidden" size="sm" onClick={() => setIsModalOpen(true)}>
                        Agendar Diagnóstico
                      </Button>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Layout (Accordion Stack) */}
        <div className="lg:hidden space-y-4">
          {services.map((service) => (
            <div key={service.id} className="bg-background rounded-2xl border border-border overflow-hidden transition-all duration-300">
              <button
                onClick={() => setSelectedId(selectedId === service.id ? null : service.id)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                    selectedId === service.id ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                  )}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                  </div>
                </div>
                <ChevronDown className={cn(
                  "w-5 h-5 text-muted-foreground transition-transform duration-300",
                  selectedId === service.id ? "rotate-180" : ""
                )} />
              </button>
              
              <AnimatePresence>
                {selectedId === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-border bg-muted/10"
                  >
                    <div className="p-6 space-y-6">
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      
                      <div className="bg-destructive/5 p-4 rounded-xl border border-destructive/10">
                        <h4 className="flex items-center gap-2 font-bold text-destructive text-sm mb-2">
                          <XCircle className="w-4 h-4" /> El Problema
                        </h4>
                        <p className="text-xs text-foreground/80">{service.problem}</p>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-bold text-foreground text-sm flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500" /> Resultados Clave
                        </h4>
                        <ul className="space-y-2 pl-2 border-l-2 border-primary/20">
                          {service.results.map((r, i) => (
                            <li key={i} className="text-sm text-muted-foreground">{r}</li>
                          ))}
                        </ul>
                      </div>

                      <Button className="w-full gap-2" onClick={() => setIsModalOpen(true)}>
                        Agendar Diagnóstico <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
      <PopupModal
        url="https://calendly.com/timbalcomunicaciones/30min"
        onModalClose={() => setIsModalOpen(false)}
        open={isModalOpen}
        rootElement={document.getElementById("root")!}
      />
    </section>
  );
};

export default Services;
