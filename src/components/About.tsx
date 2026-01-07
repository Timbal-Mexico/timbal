import { motion } from "framer-motion";
import { MapPin, Users, Target, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Resultados",
    description: "Nos enfocamos en métricas que impactan tu negocio.",
  },
  {
    icon: Users,
    title: "Cercanía",
    description: "Somos tu equipo extendido, no solo proveedores.",
  },
  {
    icon: Heart,
    title: "Pasión",
    description: "Amamos lo que hacemos y se nota en cada proyecto.",
  },
];

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 gradient-hero rounded-3xl opacity-20 blur-2xl" />
              
              <div className="relative bg-background/10 backdrop-blur-sm rounded-3xl p-8 border border-secondary-foreground/10">
                {/* Location Badge */}
                <div className="inline-flex items-center gap-2 bg-primary/20 rounded-full px-4 py-2 mb-6">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    Guadalajara, Jalisco
                  </span>
                </div>

                <h3 className="font-display text-3xl font-bold mb-4">
                  Desde el corazón de México
                </h3>
                
                <p className="text-secondary-foreground/80 leading-relaxed mb-6">
                  Nacimos en la Perla Tapatía con una misión clara: ayudar a las
                  empresas mexicanas y latinoamericanas a dominar el arte de la
                  comunicación digital.
                </p>

                <p className="text-secondary-foreground/80 leading-relaxed">
                  Nuestro equipo combina experiencia técnica con un profundo
                  entendimiento del mercado local. Sabemos cómo se comunican tus
                  clientes porque somos parte de la misma cultura.
                </p>

                {/* Team visual representation */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-12 h-12 rounded-full gradient-hero border-2 border-secondary flex items-center justify-center"
                      >
                        <span className="text-primary-foreground font-bold text-sm">
                          {["T", "I", "M", "B"][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="font-display font-bold">Equipo Timbal</div>
                    <div className="text-sm text-secondary-foreground/60">
                      +10 especialistas
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Sobre Nosotros
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              Más que una agencia,{" "}
              <span className="text-primary">tu aliado digital</span>
            </h2>

            <p className="text-secondary-foreground/80 text-lg mb-10 leading-relaxed">
              En Timbal entendemos que cada mensaje es una oportunidad de
              conexión. Por eso nos especializamos en crear experiencias
              conversacionales que enamoran a tus clientes y hacen crecer tu
              negocio.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold mb-1">
                      {value.title}
                    </h4>
                    <p className="text-secondary-foreground/70">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
