import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Autoplay, Navigation } from "swiper/modules";
import { ArrowRight, Database, ShoppingCart, Truck, Users, BarChart3, MessageCircle, ChevronRight, Zap, Globe, ShieldCheck, LineChart, CheckCircle2 } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

const steps = [
  { 
    icon: MessageCircle, 
    label: "Leads & Captación", 
    description: "Captación inteligente de prospectos cualificados.",
    details: "Centralizamos la entrada de leads desde múltiples canales (Redes Sociales, Buscadores, Web) asegurando que ninguna oportunidad se pierda. Integramos formularios inteligentes y chatbots para calificación inmediata.",
    color: "bg-blue-500/10 text-blue-500 border-blue-200/20"
  },
  { 
    icon: Database, 
    label: "CRM Centralizado", 
    description: "Gestión y seguimiento automatizado.",
    details: "Organizamos tu base de datos con segmentación avanzada y pipelines de ventas claros. Automatizamos tareas repetitivas para que tu equipo se enfoque en vender, manteniendo el historial completo de cada cliente.",
    color: "bg-purple-500/10 text-purple-500 border-purple-200/20"
  },
  { 
    icon: Users, 
    label: "Equipo de Ventas", 
    description: "Cierre efectivo y procesos estandarizados.",
    details: "Empoderamos a tu equipo comercial con herramientas que agilizan el cierre. Scripts de ventas, plantillas de correo y recordatorios automáticos para aumentar la tasa de conversión.",
    color: "bg-green-500/10 text-green-500 border-green-200/20"
  },
  { 
    icon: ShoppingCart, 
    label: "Ecommerce Conectado", 
    description: "Venta en línea integrada y sin fricción.",
    details: "Sincronizamos inventarios, precios y pedidos en tiempo real entre tu tienda online y tu sistema de gestión. Experiencia de compra fluida con recuperación de carritos abandonados.",
    color: "bg-pink-500/10 text-pink-500 border-pink-200/20"
  },
  { 
    icon: Truck, 
    label: "Logística Integrada", 
    description: "Envíos optimizados y tracking en tiempo real.",
    details: "Automatizamos la generación de guías de envío y notificamos a tus clientes sobre el estado de sus pedidos automáticamente. Reducción de errores y tiempos de entrega.",
    color: "bg-orange-500/10 text-orange-500 border-orange-200/20"
  },
  { 
    icon: Users, 
    label: "Servicio Post-Venta", 
    description: "Atención al cliente y fidelización.",
    details: "Convertimos compradores en promotores mediante un servicio al cliente ágil, omnicanal y personalizado. Gestión de tickets y encuestas de satisfacción automatizadas.",
    color: "bg-cyan-500/10 text-cyan-500 border-cyan-200/20"
  },
  { 
    icon: BarChart3, 
    label: "Dirección & Control", 
    description: "Toma de decisiones basada en datos.",
    details: "Dashboards ejecutivos que te dan visibilidad total del rendimiento de tu negocio en tiempo real. Métricas clave (KPIs) para ajustar la estrategia y escalar el crecimiento.",
    color: "bg-indigo-500/10 text-indigo-500 border-indigo-200/20"
  },
];

const Ecosystem = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nuestro Enfoque
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Ecosistema <span className="text-gradient">Timbal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una arquitectura comercial viva donde cada pieza potencia a la siguiente.
            Desliza para explorar cada etapa.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* Swiper Wizard */}
          <div className="w-full max-w-sm sm:max-w-md">
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Pagination, Autoplay]}
              className="w-full aspect-[4/5] sm:aspect-[4/5]"
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              pagination={{ clickable: true }}
            >
              {steps.map((step, index) => (
                <SwiperSlide key={index} className="rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-card">
                  <div className={`h-full flex flex-col p-8 ${step.color} bg-opacity-[0.03] relative`}>
                    
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-current to-transparent" />
                    
                    <div className="relative z-10 flex-1 flex flex-col justify-center gap-6">
                      <div className={`w-16 h-16 rounded-2xl ${step.color} bg-opacity-20 flex items-center justify-center shadow-sm`}>
                        <step.icon className="w-8 h-8" />
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-foreground">{step.label}</h3>
                        <p className="text-muted-foreground font-medium">{step.description}</p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="h-px w-full bg-border/50" />
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {step.details}
                        </p>
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide opacity-70">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Solución verificada</span>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Number */}
                    <div className="absolute -bottom-4 -right-4 text-9xl font-bold opacity-[0.03] select-none">
                      {index + 1}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Interactive List / Legend (Desktop) */}
          <div className="hidden lg:flex flex-col gap-4 w-full max-w-md">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                onClick={() => swiperInstance?.slideTo(index)}
                className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-center gap-4 ${
                  activeIndex === index 
                    ? "bg-muted/50 border-primary/30 shadow-sm translate-x-4" 
                    : "bg-transparent border-transparent hover:bg-muted/20 hover:border-border/30"
                }`}
                animate={{ opacity: activeIndex === index ? 1 : 0.5 }}
                whileHover={{ scale: 1.02, x: activeIndex === index ? 16 : 4 }}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  activeIndex === index ? step.color.replace('bg-opacity-[0.03]', 'bg-opacity-20') : "bg-muted text-muted-foreground"
                }`}>
                  <step.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold ${activeIndex === index ? "text-foreground" : "text-muted-foreground"}`}>
                    {step.label}
                  </h4>
                </div>
                {activeIndex === index && (
                  <motion.div layoutId="active-indicator" className="text-primary">
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Indicator */}
        <div className="lg:hidden mt-8 flex justify-center gap-2">
          {steps.map((_, index) => (
            <div 
              key={index} 
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;