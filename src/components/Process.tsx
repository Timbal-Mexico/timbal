import { useState } from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Cog, GraduationCap, HeartHandshake, ArrowRight, CheckCircle2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico Estratégico",
    description: "Analizamos tu situación actual para identificar cuellos de botella y oportunidades.",
    details: [
      "Auditoría de procesos comerciales",
      "Análisis de stack tecnológico",
      "Entrevistas con equipo clave",
      "Identificación de fugas de dinero"
    ]
  },
  {
    icon: PenTool,
    number: "02",
    title: "Diseño del Ecosistema",
    description: "Creamos el plano arquitectónico de tu nueva maquinaria de ventas.",
    details: [
      "Diseño de Customer Journey Map",
      "Definición de pipelines de venta",
      "Selección de herramientas ideales",
      "Plan de automatización"
    ]
  },
  {
    icon: Cog,
    number: "03",
    title: "Implementación",
    description: "Configuramos y conectamos todas las piezas para que funcionen como reloj.",
    details: [
      "Configuración técnica de CRM/ERP",
      "Integraciones API y Webhooks",
      "Migración de datos segura",
      "Pruebas de flujo de extremo a extremo"
    ]
  },
  {
    icon: GraduationCap,
    number: "04",
    title: "Capacitación",
    description: "Empoderamos a tu equipo para que dominen las nuevas herramientas.",
    details: [
      "Talleres prácticos por rol",
      "Creación de manuales operativos",
      "Sesiones de Roleplay",
      "Certificación interna del equipo"
    ]
  },
  {
    icon: HeartHandshake,
    number: "05",
    title: "Acompañamiento",
    description: "No te dejamos solo. Aseguramos la adopción y mejora continua.",
    details: [
      "Soporte técnico prioritario",
      "Reuniones de optimización mensual",
      "Ajustes de estrategia",
      "Escalamiento de funcionalidades"
    ]
  },
];

const Process = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  return (
    <section id="como-trabajamos" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Cómo Trabajamos
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4">
              Metodología <span className="text-gradient">Timbal</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un proceso probado para transformar tu operación comercial sin interrumpir tu negocio.
            </p>
          </motion.div>

          {/* Timeline Visual - Moved Above */}
          <div className="flex justify-center mb-12 relative z-10">
            <div className="flex items-center gap-2 md:gap-4 overflow-x-auto pb-4 max-w-full no-scrollbar px-4 mask-fade-sides">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  onClick={() => swiperInstance?.slideTo(index)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-all duration-300 border whitespace-nowrap
                    ${activeIndex === index 
                      ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105" 
                      : "bg-muted/50 text-muted-foreground border-transparent hover:bg-muted hover:border-border"}
                  `}
                >
                  <div className={`
                    w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors
                    ${activeIndex === index ? "bg-white text-primary" : "bg-background text-muted-foreground"}
                  `}>
                    {step.number}
                  </div>
                  <span className="text-sm font-medium hidden sm:inline-block">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Swiper Coverflow */}
          <div className="mb-16">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="w-full py-10"
              initialSlide={0}
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              breakpoints={{
                320: {
                  slidesPerView: 1.2,
                  spaceBetween: 20
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40
                }
              }}
            >
              {steps.map((step, index) => (
                <SwiperSlide key={index} className="max-w-md">
                  <div 
                    onMouseEnter={() => swiperInstance?.slideTo(index)}
                    className={`
                      relative rounded-3xl p-8 border transition-all duration-500 h-full min-h-[400px] flex flex-col
                      ${activeIndex === index 
                        ? "bg-card border-primary/50 shadow-2xl scale-100" 
                        : "bg-muted/30 border-transparent blur-[1px] scale-90 opacity-70 hover:opacity-100 hover:blur-0 hover:scale-95 cursor-pointer"}
                    `}
                  >
                    <div className="absolute -top-6 left-8 bg-background p-2 rounded-2xl border border-border shadow-sm">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${activeIndex === index ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                        <step.icon className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="mt-8 mb-6">
                      <span className={`text-6xl font-bold opacity-10 absolute top-4 right-8 ${activeIndex === index ? "text-primary" : "text-foreground"}`}>
                        {step.number}
                      </span>
                      <h3 className={`font-display text-2xl font-bold mb-3 ${activeIndex === index ? "text-primary" : "text-foreground"}`}>
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground font-medium">
                        {step.description}
                      </p>
                    </div>

                    {/* Details - Visible mainly on active slide */}
                    <div className={`space-y-3 mt-auto transition-opacity duration-500 ${activeIndex === index ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}>
                      <div className="h-px w-full bg-border/50 mb-4" />
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;
