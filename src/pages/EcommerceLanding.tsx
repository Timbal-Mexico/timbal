import { motion } from "framer-motion";
import { Check, ShoppingCart, Zap, MessageSquare, Truck, Globe, ShieldCheck, ArrowRight, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const EcommerceLanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = {
    tienda: [
      "Configuración inicial de la tienda",
      "Instalación y configuración de plantilla profesional estándar",
      "Configuración de métodos de pago",
      "Configuración de impuestos",
      "Configuración básica de envíos",
      "Carga inicial de hasta 40 productos",
      "Creación de páginas básicas (Inicio, Catálogo, Contacto, Políticas)",
      "Configuración básica SEO (títulos y descripciones generales)"
    ],
    crm: [
      "Configuración inicial del entorno en Kommo",
      "Creación de 1 pipeline ecommerce",
      "Integración automática tienda → CRM",
      "Automatización básica de seguimiento",
      "Configuración de tareas automáticas por etapa"
    ],
    logistica: [
      "Integración con Envia",
      "Configuración básica de reglas de envío",
      "Pruebas operativas de despacho"
    ],
    infraestructura: [
      "Dominio web incluido (1 año)",
      "5 cuentas de correo corporativo",
      "Configuración técnica inicial"
    ],
    capacitacion: [
      "16 horas de capacitación estratégica",
      "Uso de tienda y gestión de pedidos",
      "Uso de CRM y flujo operativo completo",
      "Sesiones distribuidas durante la implementación"
    ]
  };

  const WHATSAPP_NUMBER = "5213334474747";
  const buildWhatsAppUrl = () => {
    const base = `https://wa.me/${WHATSAPP_NUMBER}`;
    const params = new URLSearchParams({
      text: "Hola, me interesa el paquete Ecommerce 360 Starter. ¿Podrían darme más información?",
      utm_source: "landing_ecommerce",
      utm_medium: "cta_button"
    });
    return `${base}?${params.toString()}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mini Header Legal */}
      <header className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="container mx-auto">
          <Link to="/">
            <img src="/logo.svg" alt="Timbal" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay grayscale" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 text-sm font-bold mb-6 border border-purple-500/20">
                <Star className="w-4 h-4 fill-purple-600" />
                <span>SOLUCIÓN INTEGRAL ECOMMERCE</span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Más Control. Más Seguimiento.<br />
                <span className="text-gradient">Más Ventas.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
                Implementamos tu sistema comercial completo: Tienda Shopify + CRM Kommo + Logística automatizada. Deja de perder ventas por desorden.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="rounded-full text-lg h-14 px-8 gradient-hero text-primary-foreground shadow-lg shadow-purple-500/25 hover:scale-105 transition-transform"
                  onClick={() => window.open(buildWhatsAppUrl(), '_blank')}
                >
                  <Zap className="w-5 h-5 mr-2 fill-current" />
                  Solicitar implementación
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl font-bold mb-6">El problema no es tu producto,<br/>es la falta de sistema.</h2>
            <p className="text-lg text-muted-foreground">
              La mayoría de tiendas fracasan porque operan manualmente: pierden leads en WhatsApp, olvidan seguimientos y se ahogan en guías de envío.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Sin seguimiento = Venta perdida</h3>
                  <p className="text-muted-foreground">El 80% de las ventas ocurren después del 5to contacto. Si no tienes CRM, estás dejando dinero en la mesa.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Caos operativo</h3>
                  <p className="text-muted-foreground">Copiar y pegar datos de guías de envío consume horas que deberías usar para vender.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/30 p-8 rounded-2xl border border-border/50">
              <h3 className="font-bold text-xl mb-6">La Solución: Ecommerce 360</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Todos los leads entran directo al CRM.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Seguimiento automatizado por WhatsApp.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Guías de envío generadas en 1 clic.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Tu equipo enfocado en cerrar ventas.</span>
                </li>
              </ul>
              <div className="mt-8 text-center">
                <Button 
                  className="w-full gradient-hero text-primary-foreground"
                  onClick={() => window.open(buildWhatsAppUrl(), '_blank')}
                >
                  Solicitar implementación
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 border-border hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4 text-green-600">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <CardTitle>Tienda Shopify</CardTitle>
                <CardDescription>
                  Diseño profesional y optimizado para conversión, lista para recibir pagos.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card/50 border-border hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <CardTitle>CRM Integrado</CardTitle>
                <CardDescription>
                  Kommo CRM conectado para gestionar leads y automatizar seguimiento.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card/50 border-border hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4 text-orange-600">
                  <Truck className="w-6 h-6" />
                </div>
                <CardTitle>Logística Resuelta</CardTitle>
                <CardDescription>
                  Integración con Envia.com para gestión de guías y envíos automatizados.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing & Promo Section */}
      <section id="detalles" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column: Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-3xl font-bold mb-4">Todo lo que necesitas para operar</h2>
                  <p className="text-muted-foreground">
                    Desglosamos cada componente de tu ecosistema digital. Sin letras chiquitas.
                  </p>
                </div>

                <Accordion type="single" collapsible className="w-full" defaultValue="tienda">
                  <AccordionItem value="tienda">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center gap-3">
                        <ShoppingCart className="w-5 h-5 text-primary" />
                        Tienda en Shopify
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 pt-2">
                        {features.tienda.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="crm">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center gap-3">
                        <MessageSquare className="w-5 h-5 text-primary" />
                        CRM y Automatización
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 pt-2">
                        {features.crm.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="logistica">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center gap-3">
                        <Truck className="w-5 h-5 text-primary" />
                        Logística y Envíos
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 pt-2">
                        {features.logistica.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="infraestructura">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-primary" />
                        Infraestructura Digital
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 pt-2">
                        {features.infraestructura.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="capacitacion">
                    <AccordionTrigger className="text-lg font-semibold">
                      <div className="flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                        Capacitación y Soporte
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 pt-2">
                        {features.capacitacion.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Right Column: Pricing Card */}
              <div className="relative">
                {/* Promo Sticker */}
                <div className="absolute -top-6 -right-6 z-20 pointer-events-none transform rotate-12">
                   <div className="relative flex items-center justify-center h-32 w-32">
                      <div className="absolute inset-0 bg-red-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
                      <div className="relative h-28 w-28 bg-gradient-to-br from-red-600 to-pink-600 rounded-full flex flex-col items-center justify-center text-white shadow-2xl border-4 border-white/20 p-2 transform transition-transform hover:scale-110">
                        <span className="text-xs font-bold uppercase leading-tight tracking-wider">Hasta el</span>
                        <span className="text-3xl font-black uppercase leading-none my-1 tracking-tighter">31</span>
                        <span className="text-xs font-bold uppercase leading-tight tracking-wider">de Marzo</span>
                      </div>
                   </div>
                </div>

                <Card className="border-primary/50 shadow-2xl bg-purple-500/5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500" />
                  <CardHeader className="text-center pb-2 pt-8">
                    <CardTitle className="text-3xl font-bold">Ecommerce 360 Starter</CardTitle>
                    <CardDescription className="text-lg">Paquete Todo Incluido</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-6 pt-6">
                    <div>
                      <span className="text-sm text-muted-foreground line-through decoration-red-500 decoration-2 text-lg">$38,000 MXN</span>
                      <div className="flex items-center justify-center gap-2 mt-2">
                        <span className="text-6xl font-black text-foreground tracking-tight">$25,000</span>
                        <span className="text-xl font-medium text-muted-foreground self-end mb-2">MXN</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">+ IVA • Pago único de implementación</p>
                    </div>

                    <div className="bg-background/50 rounded-xl p-6 border border-border/50 text-left space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="p-1 rounded-full bg-green-100 text-green-600"><Check className="w-4 h-4" /></div>
                        <span className="font-medium">Tienda Shopify Lista para Vender</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-1 rounded-full bg-green-100 text-green-600"><Check className="w-4 h-4" /></div>
                        <span className="font-medium">CRM Kommo Automatizado</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-1 rounded-full bg-green-100 text-green-600"><Check className="w-4 h-4" /></div>
                        <span className="font-medium">1 Año de Dominio Web</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-1 rounded-full bg-green-100 text-green-600"><Check className="w-4 h-4" /></div>
                        <span className="font-medium">Capacitación a tu equipo</span>
                      </div>
                    </div>

                    <Button 
                      size="lg" 
                      className="w-full h-14 text-lg rounded-xl gradient-hero text-primary-foreground shadow-lg hover:opacity-90 transition-all"
                      onClick={() => window.open(buildWhatsAppUrl(), '_blank')}
                    >
                      Quiero aprovechar esta oferta
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Oferta válida por tiempo limitado. Consulta términos y condiciones.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="py-12 bg-background border-t border-border/50 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-6">
          <p className="mb-4">
            © {new Date().getFullYear()} Timbal Comunicaciones. Todos los derechos reservados.
          </p>
          <div className="flex justify-center gap-6">
            <Link to="/aviso-privacidad" className="hover:text-foreground transition-colors">
              Aviso de Privacidad
            </Link>
            <Link to="/terminos-condiciones" className="hover:text-foreground transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EcommerceLanding;