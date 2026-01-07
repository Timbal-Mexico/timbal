import { motion } from "framer-motion";
import { 
  MapPin, 
  Users, 
  Award, 
  Heart,
  Target,
  Lightbulb,
  Handshake,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Heart,
    title: "Pasión",
    description: "Amamos lo que hacemos y eso se refleja en cada proyecto que emprendemos."
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Siempre buscamos nuevas formas de mejorar la comunicación digital de nuestros clientes."
  },
  {
    icon: Handshake,
    title: "Compromiso",
    description: "Tu éxito es nuestro éxito. Nos involucramos 100% en cada proyecto."
  },
  {
    icon: Rocket,
    title: "Resultados",
    description: "Nos enfocamos en métricas tangibles que impactan tu negocio positivamente."
  }
];

const stats = [
  { number: "50+", label: "Clientes satisfechos" },
  { number: "1M+", label: "Mensajes gestionados" },
  { number: "3", label: "Años de experiencia" },
  { number: "98%", label: "Tasa de retención" }
];

const NosotrosPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                Sobre Nosotros
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Somos <span className="text-gradient">Timbal</span>,<br />
                tu aliado digital en Guadalajara
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Nacimos con la misión de ayudar a las empresas mexicanas a 
                conectar mejor con sus clientes a través de la mensajería conversacional. 
                Somos un equipo apasionado por la tecnología y el marketing digital.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Guadalajara, Jalisco, México</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center">
                <div className="w-32 h-32 rounded-2xl gradient-hero flex items-center justify-center animate-float">
                  <Users className="w-16 h-16 text-white" />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border"
            >
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Nuestra Misión
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Empoderar a las empresas mexicanas con herramientas de comunicación 
                digital de clase mundial, permitiéndoles conectar de manera más 
                efectiva y humana con sus clientes a través de la mensajería conversacional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-card border border-border"
            >
              <div className="w-14 h-14 rounded-xl gradient-cta flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Nuestra Visión
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ser la agencia líder en marketing conversacional en México, 
                reconocida por transformar la manera en que las empresas 
                se comunican con sus clientes y por impulsar su crecimiento 
                a través de la innovación tecnológica.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nuestros Valores
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Los principios que guían cada decisión y proyecto que emprendemos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 text-center shadow-card border border-border hover:shadow-elevated transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6"
          >
            ¿Quieres conocernos mejor?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto mb-8"
          >
            Agenda una llamada con nosotros y descubre cómo podemos ayudar a tu negocio.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/#contacto">
              <Button size="lg" className="gradient-hero text-primary-foreground shadow-soft">
                Contáctanos
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NosotrosPage;
