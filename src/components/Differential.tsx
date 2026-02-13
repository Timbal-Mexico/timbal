import { motion } from "framer-motion";
import { Check, X, TrendingUp, Clock, Target, Zap, Shield, Users, BarChart3, XCircle, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const metrics = [
  {
    icon: TrendingUp,
    value: "Conversión",
    label: "Más Cierres Reales",
    description: "Convertimos leads perdidos en ventas concretas."
  },
  {
    icon: Clock,
    value: "Eficiencia",
    label: "Menos Caos Operativo",
    description: "Eliminamos el trabajo manual repetitivo."
  },
  {
    icon: Target,
    value: "Control",
    label: "Visibilidad Total",
    description: "Claridad absoluta sobre dónde está tu dinero."
  }
];

const comparisonData = [
  {
    feature: "Enfoque Principal",
    others: "Vender licencias y software",
    timbal: "Sistemas Digitales de Venta",
    icon: Zap
  },
  {
    feature: "Implementación",
    others: "Configuración técnica aislada",
    timbal: "Alineación de Procesos + Personas + Tecnología",
    icon: Users
  },
  {
    feature: "Resultado Entregado",
    others: "Software instalado (pero sin uso)",
    timbal: "Maquinaria de ventas operando y generando",
    icon: BarChart3
  },
  {
    feature: "Soporte Post-Venta",
    others: "Tickets de soporte lentos",
    timbal: "Acompañamiento estratégico continuo",
    icon: Shield
  }
];

const Differential = () => {
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Diferencial Timbal
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              No somos otra agencia de marketing. <br />
              <span className="text-gradient">Somos arquitectos de negocio.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Mientras otros se enfocan en conseguir más leads (que a menudo se desperdician), 
              nosotros construimos la infraestructura para que cada oportunidad cuente.
            </p>
          </motion.div>
        </div>

        {/* Metrics Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-border/50 hover:border-primary/50 transition-colors bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-4xl font-bold text-foreground mb-2">{metric.value}</h3>
                    <h4 className="font-semibold text-primary mb-2">{metric.label}</h4>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Section */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Visual Infographic / Philosophy */}
          <motion.div 
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <div className="p-8 rounded-3xl bg-primary text-primary-foreground relative overflow-hidden shadow-xl">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               <h3 className="text-2xl font-bold mb-4 relative z-10">La Filosofía Timbal</h3>
               <p className="text-primary-foreground/90 leading-relaxed relative z-10 mb-6">
                 Creemos que la tecnología sin estrategia es gasto, no inversión. 
                 Nuestro objetivo no es venderte una herramienta, es darte control total sobre tu crecimiento.
               </p>
               <div className="space-y-4 relative z-10">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                     <Check className="w-5 h-5" />
                   </div>
                   <span className="font-medium">Orden antes que automatización</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                     <Check className="w-5 h-5" />
                   </div>
                   <span className="font-medium">Procesos claros, luego software</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                     <Check className="w-5 h-5" />
                   </div>
                   <span className="font-medium">Datos reales para decisiones reales</span>
                 </div>
               </div>
             </div>
          </motion.div>

          {/* Comparison Table */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-3xl border border-border shadow-lg overflow-hidden">
              <div className="hidden sm:grid grid-cols-3 bg-muted/50 p-4 border-b border-border text-sm font-bold uppercase tracking-wider text-muted-foreground">
                <div className="col-span-1">Criterio</div>
                <div className="col-span-1 text-center text-red-500/80">Agencia Tradicional</div>
                <div className="col-span-1 text-center text-primary">Timbal</div>
              </div>
              
              <div className="divide-y divide-border">
                {comparisonData.map((row, index) => {
                  const Icon = row.icon;
                  return (
                    <div key={index} className="grid grid-cols-1 sm:grid-cols-3 p-6 hover:bg-muted/20 transition-colors items-center border-b border-border/50 last:border-0 gap-4 sm:gap-0">
                      
                      {/* Feature Name */}
                      <div className="col-span-1 font-medium text-foreground text-base sm:text-base flex items-center gap-3 mb-2 sm:mb-0">
                        <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        {row.feature}
                      </div>

                      {/* Mobile Comparison Grid */}
                      <div className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-0">
                        
                        {/* Others (Bad) */}
                        <div className="bg-red-50/50 sm:bg-transparent p-4 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-red-100 flex flex-col items-center gap-2 text-center">
                          <span className="sm:hidden text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Agencia Tradicional</span>
                          <XCircle className="w-6 h-6 text-red-500/80" />
                          <span className="text-sm text-muted-foreground leading-tight">{row.others}</span>
                        </div>

                        {/* Timbal (Good) */}
                        <div className="bg-green-50/50 sm:bg-transparent p-4 sm:p-0 rounded-xl sm:rounded-none border sm:border-0 border-green-100 flex flex-col items-center gap-2 text-center">
                          <span className="sm:hidden text-xs font-bold text-primary uppercase tracking-wider mb-1">Timbal</span>
                          <CheckCircle2 className="w-6 h-6 text-green-500" />
                          <span className="text-sm font-bold text-foreground leading-tight">{row.timbal}</span>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Differential;