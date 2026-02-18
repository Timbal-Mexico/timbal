import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Check, X, ArrowRight, Zap, Star, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import { useToast } from "@/hooks/use-toast";

const plans = [
  {
    name: "Kommo Starter",
    description: "Servicio base para implementar Kommo CRM en tu operación.",
    price: 25000,
    features: [
      "Kommo CRM",
      "2 usuarios - Plan anual",
      "Configuración inicial",
      "1 embudo de ventas",
      "6 horas de capacitación",
      "Soporte vía email"
    ],
    notIncluded: [],
    cta: "Elegir Kommo Starter",
    highlight: false,
    icon: Zap
  },
  {
    name: "Kommo Advance",
    description: "Service core para escalar tu operación comercial con Kommo.",
    price: 55000,
    features: [
      "5 usuarios Kommo - Plan anual",
      "Configuración completa del entorno",
      "Diseño de hasta 3 embudos personalizados",
      "Conexión de WhatsApp + redes sociales",
      "Automatizaciones intermedias",
      "Reglas automáticas de asignación de leads",
      "Tareas automáticas por etapa",
      "Campos personalizados avanzados",
      "16 horas de capacitación estratégica",
      "Manual de uso personalizado",
      "Soporte prioritario vía Zoom (primer mes)"
    ],
    notIncluded: [],
    cta: "Elegir Kommo Advance",
    highlight: true,
    icon: Star
  },
  {
    name: "Ecommerce 360 Starter",
    description: "Implementación de tienda Shopify integrada con Kommo y logística.",
    price: 38000,
    features: [
      "Tienda en Shopify",
      "Configuración inicial de la tienda",
      "Instalación y configuración de plantilla profesional estándar",
      "Configuración de métodos de pago",
      "Configuración de impuestos",
      "Configuración básica de envíos",
      "Carga inicial de hasta 40 productos",
      "Creación de páginas básicas (Inicio, Catálogo, Contacto, Políticas)",
      "Configuración básica SEO (títulos y descripciones generales)",
      "1 usuario Kommo – Plan anual",
      "Configuración inicial del entorno en Kommo",
      "Creación de 1 pipeline ecommerce",
      "Integración automática tienda → CRM",
      "Automatización básica de seguimiento",
      "Configuración de tareas automáticas por etapa",
      "Integración con Envia",
      "Configuración básica de reglas de envío",
      "Pruebas operativas de despacho",
      "Dominio web incluido (1 año)",
      "5 cuentas de correo corporativo",
      "Configuración técnica inicial",
      "16 horas de capacitación estratégica",
      "Uso de tienda y gestión de pedidos",
      "Uso de CRM y flujo operativo completo",
      "Sesiones distribuidas durante la implementación"
    ],
    notIncluded: [],
    cta: "Elegir Paquete Ecommerce",
    highlight: false,
    icon: ShieldCheck
  }
];

const WHATSAPP_NUMBER = "523328712448";

const USD_API_PRIMARY = "https://api.exchangerate-api.com/v4/latest/MXN";
const USD_API_FALLBACK = "https://open.er-api.com/v6/latest/MXN";

function round2(n: number) {
  return Math.round(n * 100) / 100;
}

function formatMoney(value: number, currency: "MXN" | "USD" | "EUR") {
  if (currency === "USD") {
    return `US$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  if (currency === "EUR") {
    return `€${value.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
  return `$${value.toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

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
  const { toast } = useToast();
  const [currency, setCurrency] = useState<"MXN" | "USD" | "EUR">(
    (typeof window !== "undefined" && (localStorage.getItem("currency_preference") as "MXN" | "USD" | "EUR")) ||
      "MXN",
  );
  const [usdRate, setUsdRate] = useState<number | null>(null);
  const [eurRate, setEurRate] = useState<number | null>(null);
  const [loadingRate, setLoadingRate] = useState(false);

  async function fetchUsdRate() {
    setLoadingRate(true);
    try {
      const r1 = await fetch(USD_API_PRIMARY);
      if (!r1.ok) throw new Error("primary");
      const d1 = await r1.json();
      const rateUsd = d1?.rates?.USD ?? d1?.rates?.usd;
      const rateEur = d1?.rates?.EUR ?? d1?.rates?.eur;
      if (typeof rateUsd === "number") {
        setUsdRate(rateUsd);
      }
      if (typeof rateEur === "number") {
        setEurRate(rateEur);
      }
      if (typeof rateUsd !== "number" && typeof rateEur !== "number") {
        throw new Error("invalid");
      }
      return true;
    } catch {
      try {
        const r2 = await fetch(USD_API_FALLBACK);
        if (!r2.ok) throw new Error("fallback");
        const d2 = await r2.json();
        const rateUsd2 = d2?.rates?.USD ?? d2?.rates?.usd;
        const rateEur2 = d2?.rates?.EUR ?? d2?.rates?.eur;
        if (typeof rateUsd2 === "number") {
          setUsdRate(rateUsd2);
        }
        if (typeof rateEur2 === "number") {
          setEurRate(rateEur2);
        }
        if (typeof rateUsd2 !== "number" && typeof rateEur2 !== "number") {
          throw new Error("invalid");
        }
        return true;
      } catch {
        toast({
          title: "Error al obtener tipo de cambio",
          description: "Mostrando precios en MXN.",
        });
        setCurrency("MXN");
        localStorage.setItem("currency_preference", "MXN");
        return false;
      } finally {
        setLoadingRate(false);
      }
    } finally {
      setLoadingRate(false);
    }
  }

  useEffect(() => {
    if ((currency === "USD" && usdRate == null) || (currency === "EUR" && eurRate == null)) {
      fetchUsdRate();
    }
  }, [currency]);

  const handleCurrencyChange = async (next: "MXN" | "USD" | "EUR") => {
    if (next !== "MXN") {
      const needsUsd = next === "USD" && usdRate == null;
      const needsEur = next === "EUR" && eurRate == null;
      if (needsUsd || needsEur) {
        const ok = await fetchUsdRate();
        if (!ok) return;
      }
    }
    setCurrency(next);
    localStorage.setItem("currency_preference", next);
  };

  function displayFromMXN(mxn: number) {
    if (currency === "USD" && typeof usdRate === "number") {
      return round2(mxn * usdRate);
    }
    if (currency === "EUR" && typeof eurRate === "number") {
      return round2(mxn * eurRate);
    }
    return round2(mxn);
  }

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
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="inline-flex items-center rounded-full border border-border/60 bg-background/60 p-1 text-xs">
              {(["MXN", "USD", "EUR"] as const).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => handleCurrencyChange(c)}
                  className={`px-3 py-1 rounded-full transition-colors ${
                    currency === c
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted/60"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            {loadingRate && (currency === "USD" || currency === "EUR") && (
              <span className="text-xs text-muted-foreground">Actualizando tipo de cambio…</span>
            )}
          </div>
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
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">
                        {formatMoney(displayFromMXN(plan.price), currency)}
                      </span>
                      <span className="text-sm font-semibold text-muted-foreground">{currency}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {plan.name.includes("Ecommerce") ? "Pago único de implementación + IVA" : "Pago único de implementación"}
                    </p>
                  </div>

                  {plan.name.includes("Ecommerce") ? (
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="tienda">
                        <AccordionTrigger className="text-foreground rounded-lg px-3 hover:bg-gradient-to-r hover:from-primary/10 hover:via-indigo-500/10 hover:to-purple-500/10">
                          <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground">Tienda en Shopify</span>
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            {[
                              "Configuración inicial de la tienda",
                              "Instalación y configuración de plantilla profesional estándar",
                              "Configuración de métodos de pago",
                              "Configuración de impuestos",
                              "Configuración básica de envíos",
                              "Carga inicial de hasta 40 productos",
                              "Creación de páginas básicas (Inicio, Catálogo, Contacto, Políticas)",
                              "Configuración básica SEO (títulos y descripciones generales)"
                            ].map((item) => (
                              <div key={item} className="flex items-start gap-3 text-sm">
                                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span className="text-foreground">{item}</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="crm">
                        <AccordionTrigger className="text-foreground rounded-lg px-3 hover:bg-gradient-to-r hover:from-primary/10 hover:via-indigo-500/10 hover:to-purple-500/10">
                          <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground">CRM en Kommo</span>
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            {[
                              "1 usuario Kommo – Plan anual",
                              "Configuración inicial del entorno",
                              "Creación de 1 pipeline ecommerce",
                              "Integración automática tienda → CRM",
                              "Automatización básica de seguimiento",
                              "Configuración de tareas automáticas por etapa"
                            ].map((item) => (
                              <div key={item} className="flex items-start gap-3 text-sm">
                                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span className="text-foreground">{item}</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="logistica">
                        <AccordionTrigger className="text-foreground rounded-lg px-3 hover:bg-gradient-to-r hover:from-primary/10 hover:via-indigo-500/10 hover:to-purple-500/10">
                          <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground">Integración logística</span>
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            {[
                              "Integración con Envia",
                              "Configuración básica de reglas de envío",
                              "Pruebas operativas de despacho"
                            ].map((item) => (
                              <div key={item} className="flex items-start gap-3 text-sm">
                                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span className="text-foreground">{item}</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="infraestructura">
                        <AccordionTrigger className="text-foreground rounded-lg px-3 hover:bg-gradient-to-r hover:from-primary/10 hover:via-indigo-500/10 hover:to-purple-500/10">
                          <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground">Infraestructura digital</span>
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            {[
                              "Dominio web incluido (1 año)",
                              "5 cuentas de correo corporativo",
                              "Configuración técnica inicial"
                            ].map((item) => (
                              <div key={item} className="flex items-start gap-3 text-sm">
                                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span className="text-foreground">{item}</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="capacitacion">
                        <AccordionTrigger className="text-foreground rounded-lg px-3 hover:bg-gradient-to-r hover:from-primary/10 hover:via-indigo-500/10 hover:to-purple-500/10">
                          <span className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground">Capacitación y acompañamiento</span>
                          </span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            {[
                              "16 horas de capacitación estratégica",
                              "Uso de tienda",
                              "Gestión de pedidos",
                              "Uso de CRM",
                              "Flujo operativo completo",
                              "Sesiones distribuidas durante el proceso de implementación"
                            ].map((item) => (
                              <div key={item} className="flex items-start gap-3 text-sm">
                                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span className="text-foreground">{item}</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
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
                  )}
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
