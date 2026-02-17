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

  const onOpen = (p: typeof problems[number]) => {
    setSelected(p);
    setOpen(true);
  };

  useEffect(() => {
    if (!carouselApi || open) return;
    const id = setInterval(() => {
      try {
        carouselApi.scrollNext();
      } catch {
        // noop
      }
    }, 3500);
    return () => clearInterval(id);
  }, [carouselApi, open]);

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

        {/* Problemáticas que resolvemos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="relative">
            <Carousel opts={{ align: "start", loop: true }} setApi={setCarouselApi}>
              <CarouselContent>
                {problems.map((p) => (
                  <CarouselItem key={p.id} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full border-border/60 bg-primary/5 backdrop-blur-sm hover:border-primary/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20">
                      <CardContent className="p-6 flex flex-col gap-4 h-full items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                          {p.icon && <p.icon className="w-6 h-6" />}
                        </div>
                        <h4 className="text-xl font-semibold text-foreground leading-snug">
                          {p.question}
                        </h4>
                        <div className="mt-auto pt-2">
                          <Button
                            size="sm"
                            className="rounded-full px-4 h-9 gradient-hero text-primary-foreground shadow-soft hover:opacity-90"
                            onClick={() => onOpen(p)}
                          >
                            Ver Solucion
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
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
