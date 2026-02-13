import { motion } from "framer-motion";
import { CheckCircle2, Target, Lightbulb, Layers } from "lucide-react";

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-background overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Quiénes Somos
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6">
              Socio estratégico en la construcción de <span className="text-gradient">ecosistemas comerciales inteligentes.</span>
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="flex items-center gap-2 font-bold text-xl mb-2">
                  <Target className="w-5 h-5 text-primary" /> Nuestra Misión
                </h3>
                <p className="text-muted-foreground">
                  Integramos tecnología y talento humano para crear sistemas que mejoran la forma en que las empresas venden, operan y crecen.
                </p>
              </div>

              <div>
                <h3 className="flex items-center gap-2 font-bold text-xl mb-2">
                  <Lightbulb className="w-5 h-5 text-primary" /> Lo Que Hacemos
                </h3>
                <p className="text-muted-foreground mb-4">
                  No vendemos herramientas. Diseñamos e implementamos el ecosistema comercial que las conecta.
                </p>
              </div>

              <div>
                <h3 className="flex items-center gap-2 font-bold text-xl mb-2">
                  <Layers className="w-5 h-5 text-primary" /> Qué Ofrecemos
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {["Integración comercial completa", "Arquitectura de procesos", "Automatización estratégica", "Capacitación por rol", "Soporte y acompañamiento"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 aspect-square sm:aspect-video lg:aspect-square">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 mix-blend-overlay z-10" />
               <img 
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                 alt="Timbal Team Strategy" 
                 className="w-full h-full object-cover"
               />
               
               {/* Floating Card */}
               <div className="absolute bottom-6 left-6 right-6 z-20 bg-background/90 backdrop-blur-md p-6 rounded-xl border border-border shadow-lg">
                 <p className="font-display font-bold text-lg mb-1">Más que software</p>
                 <p className="text-sm text-muted-foreground">
                   "Las herramientas son el medio, no el fin. Diseñamos estructura que libera capacidad humana."
                 </p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
