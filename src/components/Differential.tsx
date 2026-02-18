import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, BarChart3, Check, Database, LineChart, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";

const Differential = () => {
  const problems = [
    {
      id: "ventas-invisibles",
      question: "La pérdida invisible de ventas que no ves, pero pagas todos los días.",
      icon: AlertTriangle,
      bullets: [
        "Mapeo del flujo completo desde lead hasta cierre",
        "Detección de puntos donde se pierden oportunidades",
        "Automatización de recordatorios y seguimientos críticos",
        "Panel de control con dinero en riesgo y oportunidades recuperables",
      ],
    },
    {
      id: "atencion-leads",
      question:
        "¿Tienes certeza de que cada lead que pagas realmente fue atendido y llevado hasta su máximo potencial de venta?",
      icon: Users,
      bullets: [
        "Enrutamiento automático de leads por canal y prioridad",
        "SLA de respuesta con alertas cuando no se cumple",
        "Trazabilidad completa de cada interacción con el prospecto",
        "Reportes de conversión por vendedor y por fuente de tráfico",
      ],
    },
    {
      id: "informacion-fragmentada",
      question:
        "¿La información de tus clientes es un activo de tu empresa… o está en el WhatsApp personal de tus vendedores?",
      icon: Database,
      bullets: [
        "Centralización de conversaciones y datos de clientes en un solo sistema",
        "Perfiles completos de clientes con historial y acuerdos",
        "Accesos por rol para proteger la información estratégica",
        "Continuidad operativa aunque cambie el equipo comercial",
      ],
    },
    {
      id: "visibilidad-etapas",
      question: "¿Puedes ver en tiempo real en qué etapa está cada oportunidad comercial?",
      icon: BarChart3,
      bullets: [
        "Diseño de pipeline visual adaptado a tu operación",
        "Seguimiento por etapa con probabilidades de cierre",
        "Alertas cuando una oportunidad se estanca demasiado tiempo",
        "Vista ejecutiva del estado de cada cuenta clave",
      ],
    },
    {
      id: "dinero-pipeline",
      question:
        "¿Tienes visibilidad real de cuánto dinero hay en tu pipeline… o solo ves lo que ya está cerrado?",
      icon: LineChart,
      bullets: [
        "Cálculo automático del valor de cada oportunidad y del pipeline total",
        "Proyecciones de ingresos según probabilidad y etapa",
        "Identificación de cuellos de botella que frenan el flujo de dinero",
        "Reportes de forecast para decisiones de inversión y crecimiento",
      ],
    },
  ];

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<typeof problems[number] | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const SLIDE_DURATION = 8000;

  const onOpen = (p: typeof problems[number]) => {
    setSelected(p);
    setOpen(true);
  };

  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      try {
        const index = carouselApi.selectedScrollSnap();
        setActiveIndex(index);
        setProgress(0);
      } catch {
        // noop
      }
    };

    onSelect();
    carouselApi.on("select", onSelect);

    return () => {
      try {
        carouselApi.off("select", onSelect);
      } catch {
        // noop
      }
    };
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi || open) return;

    const start = Date.now();

    const tick = () => {
      const elapsed = Date.now() - start;
      const ratio = Math.min(elapsed / SLIDE_DURATION, 1);
      setProgress(ratio * 100);

      if (ratio === 1) {
        try {
          carouselApi.scrollNext();
        } catch {
          // noop
        }
      }
    };

    tick();
    const id = setInterval(tick, 100);
    return () => clearInterval(id);
  }, [carouselApi, open, activeIndex, SLIDE_DURATION]);

  return (
    <section id="diferencial" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Señales de que tu empresa necesita optimizar su operación
            </h2>
            <p className="text-lg text-muted-foreground">
              Identifica tu reto y conoce cómo lo abordamos.
            </p>
          </motion.div>
        </div>

        {/* Problemática profesional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 grid lg:grid-cols-2 gap-10 items-center"
        >
          <div className="relative order-1 lg:order-none z-20 lg:-mr-16">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" aria-hidden="true" />
            <div className="relative rounded-3xl overflow-hidden border border-border/60 bg-gradient-to-br from-background via-background to-primary/10 lg:scale-110 lg:-translate-y-4">
              <img
                src="/images/chica_timbal.png"
                alt="Ejecutiva de Timbal analizando reportes en una sala de juntas."
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div
            aria-label="Carrusel de problemáticas profesionales"
            className="order-2 lg:order-none relative z-10 lg:pl-12"
          >
            <div className="relative">
              <Carousel opts={{ align: "start", loop: true }} setApi={setCarouselApi}>
                <CarouselContent>
                  {problems.map((p) => (
                    <CarouselItem key={p.id} className="basis-full">
                      <Card className="h-full border-border/70 bg-primary/5 backdrop-blur-sm transition-all duration-300">
                        <CardContent className="p-6 flex flex-col gap-4 h-full">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                              {p.icon && <p.icon className="w-6 h-6" aria-hidden="true" />}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Problemática {activeIndex + 1} de {problems.length}
                            </p>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug mt-2">
                            {p.question}
                          </h3>
                          {/* <p className="text-lg text-muted-foreground">
                            Tu equipo vive estas situaciones todos los días. Entenderlas a fondo es el primer paso
                            para diseñar un sistema comercial que deje de perder oportunidades.
                          </p> */}
                          <div className="mt-4">
                            <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden" aria-hidden="true">
                              <div
                                className="h-full bg-primary transition-[width] duration-100 ease-linear"
                                style={{ width: `${progress}%` }}
                              />
                            </div>
                            <p className="sr-only">
                              La diapositiva cambiará automáticamente cada 8 segundos.
                            </p>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <Button
                              size="sm"
                              className="rounded-full px-4 h-9 gradient-hero text-primary-foreground shadow-soft hover:opacity-90"
                              onClick={() => onOpen(p)}
                            >
                              Ver Solución
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious aria-label="Problemática anterior" />
                <CarouselNext aria-label="Siguiente problemática" />
              </Carousel>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2" aria-hidden="false">
              {problems.map((p, index) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => carouselApi?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "w-6 bg-primary" : "w-2 bg-muted-foreground/40"
                  }`}
                  aria-label={`Ir a problemática ${index + 1}`}
                  aria-current={activeIndex === index}
                />
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selected?.question}</DialogTitle>
            <DialogDescription>
              Solución que Timbal implementa para este escenario.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 mt-2">
            {selected?.bullets.map((b) => (
              <div key={b} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                <p className="text-sm text-foreground">{b}</p>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Differential;
