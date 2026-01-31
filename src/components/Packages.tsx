import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, X, ChevronLeft, ChevronRight, TrendingUp, HeadphonesIcon, Settings2, Users, Zap, BarChart3 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { PopupModal } from "react-calendly";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Render Icon Component
const IconRenderer = ({ icon: Icon, className = "" }) => {
  return <Icon className={className} />;
};

const packages = [
  {
    id: 1,
    icon: TrendingUp,
    name: "TIMBAL SALES CORE",
    subtitle: "Sistema de Ventas Conversacionales",
    color: "from-green-500 to-emerald-600",
    borderColor: "border-green-500/30",
    bgColor: "bg-green-500/5",
    description: "Diseña e implementa el sistema completo de gestión de leads y ventas dentro del CRM.",
    features: [
      "Diseño de arquitectura CRM para ventas",
      "Conexión de canales (WhatsApp, Web, Meta, Google, TikTok)",
      "Pipeline de ventas personalizado",
      "Automatizaciones (asignación, seguimiento, bots)",
      "Reportes: Leads, Conversión, ROI por canal",
      "Capacitación completa del equipo"
    ],
    tagline: "Convertimos cada lead en una conversación controlada y medible.",
    pricing: [
      { users: "Hasta 3 usuarios", price: "$45,000 MXN" },
      { users: "4 a 6 usuarios", price: "$55,000 MXN" },
      { users: "7 a 10 usuarios", price: "$65,000 MXN" },
      { users: "+10 usuarios", price: "desde $75,000 MXN" },
    ],
    maintenance: "$18,000 – $30,000 MXN anuales"
  },
  {
    id: 2,
    icon: HeadphonesIcon,
    name: "TIMBAL SERVICE",
    subtitle: "Atención al Cliente y Postventa",
    color: "from-blue-500 to-cyan-600",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/5",
    description: "Extiende el CRM a atención al cliente para ordenar entregas, garantías e incidencias.",
    features: [
      "Pipeline de atención al cliente",
      "Seguimiento de entregas",
      "Gestión de garantías e incidencias",
      "Reglas de escalamiento automático",
      "Encuestas de satisfacción",
      "Historial completo por cliente"
    ],
    tagline: "El servicio también vende, cuando está bien controlado.",
    pricing: [
      { users: "Hasta 3 usuarios", price: "$25,000 MXN" },
      { users: "4 a 6 usuarios", price: "$32,000 MXN" },
      { users: "7 a 10 usuarios", price: "$40,000 MXN" },
    ],
    maintenance: "$12,000 – $20,000 MXN anuales"
  },
  {
    id: 3,
    icon: Settings2,
    name: "TIMBAL OPS",
    subtitle: "Operación Interna y Control",
    color: "from-orange-500 to-red-600",
    borderColor: "border-orange-500/30",
    bgColor: "bg-orange-500/5",
    description: "Ordena solicitudes entre áreas, aprobaciones y seguimientos de forma estructurada.",
    features: [
      "Pipelines internos personalizados",
      "Solicitudes estructuradas entre áreas",
      "Flujos de aprobación automáticos",
      "Escalamientos inteligentes",
      "Definición de SLA internos",
      "Reportes de cumplimiento"
    ],
    tagline: "La operación deja de depender de perseguir personas.",
    pricing: [
      { users: "Hasta 5 usuarios", price: "$30,000 MXN" },
      { users: "6 a 10 usuarios", price: "$42,000 MXN" },
      { users: "+10 usuarios", price: "$55,000 MXN" },
    ],
    maintenance: "$15,000 – $25,000 MXN anuales"
  },
  {
    id: 4,
    icon: Users,
    name: "TIMBAL PEOPLE",
    subtitle: "Reclutamiento y Recursos Humanos",
    color: "from-purple-500 to-violet-600",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-500/5",
    description: "Convierte el CRM en un sistema de gestión de candidatos centralizado.",
    features: [
      "Pipeline de reclutamiento",
      "Gestión de vacantes",
      "Registro y seguimiento de candidatos",
      "Historial de entrevistas",
      "Comunicación centralizada",
      "Reportes de avance y tiempos"
    ],
    tagline: "El talento también se gestiona con procesos, no con chats.",
    pricing: [
      { users: "1 a 2 usuarios", price: "$20,000 MXN" },
      { users: "3 a 5 usuarios", price: "$28,000 MXN" },
      { users: "+5 usuarios", price: "$35,000 MXN" },
    ],
    maintenance: "$10,000 – $18,000 MXN anuales"
  },
  {
    id: 5,
    icon: Zap,
    name: "TIMBAL FULL CONTROL",
    subtitle: "Transformación Completa",
    color: "from-yellow-500 to-amber-600",
    borderColor: "border-yellow-500/30",
    bgColor: "bg-yellow-500/5",
    description: "Implementación integral de Timbal como sistema operativo de comunicación.",
    features: [
      "Sales Core + Service + Ops + People",
      "Arquitectura integral entre áreas",
      "Automatizaciones transversales",
      "Dashboards ejecutivos unificados",
      "Capacitación por rol",
      "Documentación completa"
    ],
    tagline: "Toda la empresa hablando en un solo idioma.",
    pricing: [
      { users: "Hasta 10 usuarios", price: "$120,000 MXN" },
      { users: "11 a 20 usuarios", price: "$150,000 MXN" },
      { users: "+20 usuarios", price: "desde $180,000 MXN" },
    ],
    maintenance: "$45,000 – $70,000 MXN anuales",
    featured: true
  },
  {
    id: 6,
    icon: BarChart3,
    name: "TIMBAL DIRECTOR VIEW",
    subtitle: "Información y Gobierno",
    color: "from-slate-700 to-slate-900",
    borderColor: "border-slate-500/30",
    bgColor: "bg-slate-500/5",
    description: "Dashboards ejecutivos para dirección con visibilidad clara sin operar.",
    features: [
      "Dashboards ejecutivos personalizados",
      "Ventas vs meta y ROI por canal",
      "Conversión y tiempos de atención",
      "Motivos de pérdida",
      "Estado de todas las áreas",
      "Accesos de solo lectura"
    ],
    tagline: "Gobernar con datos, no con suposiciones.",
    pricing: [
      { users: "Setup inicial", price: "$20,000 – $35,000 MXN" },
    ],
    maintenance: "Acompañamiento: $7,000 – $15,000 MXN mensual (opcional)"
  }
];

// Modal Component
const PackageModal = ({ pkg, isOpen, onClose, onCalendly }) => {
  if (!pkg) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            key="modal-content"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-background rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-muted rounded-lg z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content */}
            <div className="p-8">
              {/* Header */}
              <div className="mb-8">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${pkg.color} flex items-center justify-center mb-4`}>
                  <IconRenderer icon={pkg.icon} className="text-white w-7 h-7" />
                </div>
                {pkg.featured && (
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-xs font-bold rounded-full">
                      RECOMENDADO
                    </span>
                  </div>
                )}
                <h2 className="font-display text-4xl font-bold text-foreground mb-2">
                  {pkg.name}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">{pkg.subtitle}</p>
                <p className={`text-base font-semibold p-4 rounded-lg bg-gradient-to-r ${pkg.color} text-white mb-6`}>
                  "{pkg.tagline}"
                </p>
                <p className="text-foreground text-base leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  ¿Qué incluye?
                </h3>
                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Inversión
                </h3>
                <div className="p-6 rounded-xl border border-border/50 bg-muted/20 mb-4">
                  <div className="space-y-4">
                    {pkg.pricing.map((price, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{price.users}</span>
                        <span className="font-display text-xl font-bold text-primary">
                          {price.price}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border/50 mt-4 pt-4">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Mantenimiento anual:</span> {pkg.maintenance}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button
                onClick={onCalendly}
                className="w-full gradient-hero text-primary-foreground border-0 hover:opacity-90 transition-opacity text-lg py-6 group"
              >
                Agendar diagnóstico
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Packages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const openCalendly = () => {
    setIsCalendlyOpen(true);
  };

  const openModal = (pkg: any) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  // Swiper handles slide transitions and animations.

  return (
    <section id="paquetes" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Paquetes Comerciales
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Desliza para explorar nuestras soluciones. Haz clic en cualquier paquete para ver más detalles.
            </p>
          </motion.div>

          {/* Slider Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12 px-4"
          >
            <div className="relative">
              {/* Navigation Buttons */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                <button className="swiper-button-prev p-3 rounded-full bg-primary text-primary-foreground hover:opacity-80 transition-opacity hover:scale-110 active:scale-95">
                  <ChevronLeft className="w-6 h-6" />
                </button>
              </div>

              <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={24}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                breakpoints={{ 320: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
                navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
                pagination={{ clickable: true }}
                className="my-packages-swiper px-4"
                aria-label="Paquetes comerciales"
              >
                {packages.map((pkg, index) => (
                  <SwiperSlide key={pkg.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      onClick={() => openModal(pkg)}
                      className={`relative rounded-2xl border transition-all hover:shadow-lg cursor-pointer p-6 ${pkg.borderColor} ${pkg.bgColor}`}
                    >
                      {pkg.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-xs font-bold rounded-full">
                            RECOMENDADO
                          </span>
                        </div>
                      )}

                      <div className={pkg.featured ? "mt-10" : ""}>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${pkg.color} flex items-center justify-center mb-4`}>
                          <IconRenderer icon={pkg.icon} className="text-white w-6 h-6" />
                        </div>
                        <h3 className="font-display text-lg font-bold text-foreground mb-2">
                          {pkg.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-3">{pkg.subtitle}</p>
                        <p className={`text-xs font-semibold p-2 rounded-lg bg-gradient-to-r ${pkg.color} text-white mb-4 italic`}>
                          "{pkg.tagline}"
                        </p>

                        <div className="mb-4 p-3 rounded-lg border border-border/50 bg-muted/20">
                          <h4 className="font-semibold text-foreground text-sm mb-2">Inversión desde:</h4>
                          <p className="font-display text-lg font-bold text-primary">
                            {pkg.pricing[0].price}
                          </p>
                        </div>

                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(pkg);
                          }}
                          className="w-full gradient-hero text-primary-foreground border-0 hover:opacity-90 transition-opacity text-sm py-2 group"
                        >
                          Ver detalles
                          <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                <button className="swiper-button-next p-3 rounded-full bg-primary text-primary-foreground hover:opacity-80 transition-opacity hover:scale-110 active:scale-95">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </motion.div>



          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center p-8 rounded-2xl border border-primary/20 bg-primary/5"
          >
            <p className="text-lg font-semibold text-foreground mb-4">
              ¿No sabes por dónde empezar?
            </p>
            <p className="text-muted-foreground mb-6">
              Agenda un diagnóstico gratuito. Analizamos tu proceso actual y recomendamos la solución ideal.
            </p>
            <Button
              onClick={openCalendly}
              className="gradient-hero text-primary-foreground border-0 hover:opacity-90 transition-opacity"
            >
              Agendar diagnóstico gratuito
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Package Modal */}
      <PackageModal
        pkg={selectedPackage}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCalendly={openCalendly}
      />

      <PopupModal
        url="https://calendly.com/timbalcomunicaciones/30min"
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById("root")!}
      />
    </section>
  );
};

export default Packages;
