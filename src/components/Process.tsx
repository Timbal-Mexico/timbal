import { motion } from "framer-motion";
import { Search, PenTool, Cog, GraduationCap, ArrowRight } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico",
    description: "Entendemos cómo entra y se maneja la comunicación hoy.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Diseño",
    description: "Creamos procesos y flujos claros.",
  },
  {
    icon: Cog,
    number: "03",
    title: "Implementación",
    description: "Configuramos el CRM y automatizaciones.",
  },
  {
    icon: GraduationCap,
    number: "04",
    title: "Capacitación",
    description: "Entrenamos al equipo para usarlo bien.",
  },
];

const Process = () => {
  const logos = [
    // Clients
    ...[
       { name: "Coffee Break", src: "/images/clientes/coffeebreak.webp" },
       { name: "Expo Ceramicas", src: "/images/clientes/expoceramicas.png" },
       { name: "Kuzka", src: "/images/clientes/kuzka.jpeg" },
       { name: "Land4Fun", src: "/images/clientes/land4fun.jpg" },
       { name: "Mama Lov", src: "/images/clientes/mamalov_logo_blanco.svg", className: "invert" },
       { name: "Brassa Armada", src: "/images/clientes/brassaarmada.svg" },
     ].map((client, i) => (
       <img 
         key={client.name + i}
         src={client.src} 
         alt={client.name}
         className={`max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 ${client.className || ''}`}
       />
     ))
  ];

  return (
    <section id="como-trabajamos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              No improvisamos.{" "}
              <span className="text-gradient">Implementamos.</span>
            </h2>
          </motion.div>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="h-full p-6 bg-background rounded-2xl border border-border shadow-card">
                  {/* Number */}
                  <span className="font-display text-5xl font-bold text-primary/10">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mt-4 mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (not on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Clients carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-12"
          >
            <h3 className="font-display text-xl font-semibold text-foreground text-center mb-6">
              Confían en nosotros
            </h3>

            <TooltipProvider>
              <Swiper
                modules={[Autoplay, Navigation, Pagination, A11y]}
                spaceBetween={24}
                slidesPerView={5}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  640: { slidesPerView: 3 },
                  1024: { slidesPerView: 5 }
                }}
                className="client-swiper"
                aria-label="Clientes que confían en nosotros"
              >
                {logos.map((logo, idx) => (
                  <SwiperSlide key={idx} className="flex items-center justify-center">
                    <div className="logo flex items-center justify-center w-44 h-20 bg-card rounded-md p-3 shadow-sm">
                      {logo}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </TooltipProvider>

            <style>{`
              .client-swiper .logo svg, .client-swiper .logo img { width: 100%; height: 100%; object-fit: contain; display: block; filter: grayscale(100%); transition: filter 300ms ease, transform 300ms ease, opacity 200ms ease; }
              .client-swiper .logo { padding: 6px; background: rgba(255,255,255,0.9); border-radius: 8px; }
              .client-swiper .logo img { background: transparent; padding: 2px; border-radius: 6px; box-shadow: 0 1px 2px rgba(2,6,23,0.06); border: 1px solid rgba(2,6,23,0.04); }
              .client-swiper .logo:hover svg, .client-swiper .logo:hover img { filter: none; transform: scale(1.02); opacity: 1; }
              .client-swiper .swiper-slide { display: flex; align-items: center; justify-content: center; }
              @media (prefers-reduced-motion: reduce) { .client-swiper .swiper-wrapper { animation: none; } }
            `}</style>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
