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
      "Configuración inicial del entorno",
      "Diseño de 1 embudo de ventas",
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
    price: 25000,
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

  const kommoPlansData = [
    {
      name: "Básico",
      basePrice: 15,
      features: [
        "Pipeline de ventas",
        "Integración con email",
        "Tareas y recordatorios",
        "App móvil"
      ],
      color: "bg-blue-500",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      name: "Avanzado",
      basePrice: 25,
      features: [
        "Automatización de ventas (Digital Pipeline)",
        "Chatbot y plantillas de IA",
        "Integración con redes sociales",
        "Métricas avanzadas"
      ],
      popular: true,
      color: "bg-purple-500",
      textColor: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      name: "Empresarial",
      basePrice: 45,
      features: [
        "Auditoría de actividad",
        "Monitoreo de actividad",
        "Soporte prioritario",
        "Límites extendidos"
      ],
      color: "bg-indigo-500",
      textColor: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

  const [kommoPlanType, setKommoPlanType] = useState<"Básico" | "Avanzado" | "Empresarial">("Avanzado");
  const [kommoUsers, setKommoUsers] = useState(1);
  const [kommoMonths, setKommoMonths] = useState(12);

  const getKommoPrice = () => {
    const plan = kommoPlansData.find(p => p.name === kommoPlanType);
    if (!plan) return 0;
    
    // Base price in USD
    const usdTotal = plan.basePrice * kommoUsers * kommoMonths;

    // Convert based on selected currency
    if (currency === "MXN") {
      // Assuming a default rate if API fails, but ideally we use the fetched rate
      // Since we don't have direct access to the rate inside this render function easily without state,
      // let's assume we can inverse the calculation or just display USD for simplicity if that was the intention.
      // But the request says "selector de tipo de cambio afecte".
      // We need to use the `usdRate` state.
      
      // Since the API fetches "MXN base", 1 USD = 1 / rateUsd (if rateUsd is MXN->USD? No, API is usually 1 Base -> Target)
      // The API is: https://api.exchangerate-api.com/v4/latest/MXN
      // So rates.USD is how many USD you get for 1 MXN. e.g. 0.05
      // So 1 USD = 1 / 0.05 MXN = 20 MXN.
      
      if (usdRate) {
         // usdRate is value of 1 MXN in USD.
         // Price in MXN = Price in USD / usdRate
         return Math.round(usdTotal / usdRate);
      }
      return Math.round(usdTotal * 20); // Fallback
    }
    
    if (currency === "EUR") {
       // We need USD -> EUR rate.
       // We have MXN -> USD and MXN -> EUR.
       // 1 MXN = rateUsd USD
       // 1 MXN = rateEur EUR
       // 1 USD = (rateEur / rateUsd) EUR
       
       if (usdRate && eurRate) {
          return Math.round(usdTotal * (eurRate / usdRate));
       }
       return Math.round(usdTotal * 0.92); // Fallback
    }

    return usdTotal;
  };

  const getKommoPricePerUser = () => {
    const plan = kommoPlansData.find(p => p.name === kommoPlanType);
    const baseUsd = plan ? plan.basePrice : 0;
    
    if (currency === "MXN") {
       if (usdRate) return Math.round(baseUsd / usdRate);
       return Math.round(baseUsd * 20);
    }
    if (currency === "EUR") {
       if (usdRate && eurRate) return Math.round(baseUsd * (eurRate / usdRate));
       return Math.round(baseUsd * 0.92);
    }
    return baseUsd;
  }

  const handleKommoUsersChange = (val: number) => {
    if (val < 1) setKommoUsers(1);
    else setKommoUsers(val);
  };

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
        <div className="grid md:grid-cols-4 gap-8 max-w-[90rem] mx-auto items-stretch">
          {/* Kommo Interactive Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-full md:col-span-1"
          >
            <Card className="h-full flex flex-col border-border bg-card/50 transition-all duration-300 hover:shadow-xl hover:border-primary/40">
               <CardHeader className="pb-4">
                 <div className="flex items-center justify-between mb-4">
                   <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                     <img src="/images/kommo_logo_icon.png" alt="Kommo" className="w-8 h-8 object-contain" />
                   </div>
                   <div className="bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                     <Star className="w-3 h-3 fill-current" /> Partner Oficial
                   </div>
                 </div>
                 <CardTitle className="text-xl font-bold">Licencia Kommo</CardTitle>
                 <CardDescription className="text-xs">
                   Contrata tu licencia oficial directamente con nosotros.
                 </CardDescription>
               </CardHeader>

               <CardContent className="flex-grow space-y-6">
                 {/* Plan Type Selector */}
                 <div className="space-y-2">
                   <label className="text-xs font-semibold text-muted-foreground">Tipo de Plan</label>
                   <div className="grid grid-cols-3 gap-1 bg-muted/50 p-1 rounded-lg">
                     {kommoPlansData.map((p) => (
                       <button
                         key={p.name}
                         onClick={() => setKommoPlanType(p.name as any)}
                         className={`text-[10px] py-1.5 rounded-md transition-all font-medium border ${
                           kommoPlanType === p.name
                             ? `bg-white shadow-sm border-transparent ${p.textColor}`
                             : "text-muted-foreground hover:text-foreground border-transparent hover:bg-white/50"
                         }`}
                         style={kommoPlanType === p.name ? { boxShadow: `0 2px 8px -2px ${p.color.replace('bg-', 'rgba(').replace('-500', ', 0.3)')}` } : {}}
                       >
                         {p.name}
                       </button>
                     ))}
                   </div>
                 </div>

                {/* Users Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-muted-foreground flex justify-between">
                    <span>Usuarios</span>
                    <span className="text-primary font-bold">{kommoUsers}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="1"
                    value={kommoUsers}
                    onChange={(e) => handleKommoUsersChange(parseInt(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>1</span>
                    <span>10+</span>
                  </div>
                </div>

                {/* Duration Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-muted-foreground">Duración</label>
                  <div className="grid grid-cols-4 gap-1">
                    {[6, 9, 12, 24].map((m) => (
                      <button
                        key={m}
                        onClick={() => setKommoMonths(m)}
                        className={`text-[10px] py-1 border rounded-md transition-all ${
                          kommoMonths === m
                            ? "border-primary bg-primary/5 text-primary font-bold"
                            : "border-border bg-transparent text-muted-foreground hover:border-primary/30"
                        }`}
                      >
                        {m} m
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pricing Display */}
                <div className="bg-muted/30 rounded-xl p-4 border border-border/50 text-center">
                  {kommoUsers > 10 ? (
                    <div className="py-2">
                      <p className="font-bold text-lg text-primary mb-1">Cotización Especial</p>
                      <p className="text-xs text-muted-foreground">Para equipos grandes</p>
                    </div>
                  ) : (
                    <>
                      <div className="text-xs text-muted-foreground mb-1">Precio Total Estimado</div>
                      <div className="text-3xl font-bold text-foreground">
                        {currency === "USD" ? `$${getKommoPrice().toLocaleString()}` : formatMoney(getKommoPrice(), currency).replace(currency === "EUR" ? "€" : "$", currency === "EUR" ? "€" : "$")} <span className="text-sm font-normal text-muted-foreground">{currency}</span>
                      </div>
                      <div className="text-[10px] text-muted-foreground mt-1">
                        {currency === "USD" ? `$${getKommoPricePerUser()}` : formatMoney(getKommoPricePerUser(), currency).replace(currency === "EUR" ? "€" : "$", currency === "EUR" ? "€" : "$")} {currency} / usuario / mes
                      </div>
                    </>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-2 pt-2">
                  <p className="text-xs font-semibold">Incluye:</p>
                  {kommoPlansData.find(p => p.name === kommoPlanType)?.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Check className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  className="w-full rounded-full"
                  size="lg"
                >
                  <a
                    href={buildWhatsAppUrl(
                      kommoUsers > 10 
                        ? `Licencia Kommo Enterprise (+10 usuarios)` 
                        : `Licencia Kommo ${kommoPlanType} (${kommoUsers} usuarios, ${kommoMonths} meses)`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {kommoUsers > 10 ? "Contactar Ventas" : "Contratar Licencia"}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

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
              
              {plan.name.includes("Ecommerce") && (
                <div className="absolute top-4 right-4 md:-top-5 md:-right-5 z-40 pointer-events-none transform md:rotate-12 transition-transform duration-300 group-hover:scale-105">
                   <div className="relative flex items-center justify-center h-28 w-28">
                      <div className="absolute inset-0 bg-red-500 rounded-full blur-md opacity-40 animate-pulse"></div>
                      <div className="relative h-24 w-24 bg-gradient-to-br from-red-600 to-pink-600 rounded-full flex flex-col items-center justify-center text-white shadow-xl border-4 border-white/20 p-1">
                        <span className="text-[10px] font-bold uppercase leading-tight tracking-wider">Hasta el</span>
                        <span className="text-2xl font-black uppercase leading-none my-0 tracking-tighter scale-110">31</span>
                        <span className="text-[10px] font-bold uppercase leading-tight tracking-wider">de Marzo</span>
                      </div>
                   </div>
                </div>
              )}
              
              <Card className={`h-full flex flex-col transition-all duration-300 will-change-transform transform-gpu overflow-visible relative
                ${plan.name.includes("Ecommerce") || plan.name.includes("Starter")
                  ? "border-primary/50 shadow-2xl bg-purple-500/5 hover:bg-purple-500/10 hover:shadow-purple-500/20 group-hover:border-transparent group-hover:ring-[3px] group-hover:ring-gradient-to-r group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-red-500" 
                  : plan.highlight 
                    ? "border-primary shadow-2xl bg-card" 
                    : "border-border hover:border-primary/60 hover:shadow-2xl bg-card/50"
                }`}>
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${plan.highlight ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
                    <plan.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="mt-2 text-sm h-10">{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  {plan.name.includes("Ecommerce") && (
                    <div className="mb-8">
                       <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold">
                          {formatMoney(displayFromMXN(plan.price), currency)}
                        </span>
                        <span className="text-sm font-semibold text-muted-foreground">{currency}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Pago único de implementación + IVA
                      </p>
                    </div>
                  )}

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
