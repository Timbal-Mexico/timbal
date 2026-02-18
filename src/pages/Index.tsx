import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ArrowUp, Star } from "lucide-react";
import NavbarSimple from "@/components/NavbarSimple";
import HeroNew from "@/components/HeroNew";
import Differential from "@/components/Differential";
import ClientsLogos from "@/components/ClientsLogos";
import ServiceModel from "@/components/ServiceModel";
import FooterSimple from "@/components/FooterSimple";


const Index = () => {
  const location = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const w = window as any;
    const m = "crm_plugin";
    const o = "crmPlugin";

    if (!w[m]) {
      w[m] = {
        id: "1067301",
        hash: "8535d435ffbf09071b4b3d20dd39347ec645c133384879d4eb865446aa83ffd6",
        locale: "es",
        setMeta: function (p: unknown) {
          this.params = (this.params || []).concat([p]);
        },
      };
    }

    if (!w[o]) {
      w[o] = function () {
        (w[o].q = w[o].q || []).push(arguments);
      };
    }

    if (document.getElementById(`${m}_script`)) return;

    const s = document.createElement("script");
    s.async = true;
    s.id = `${m}_script`;
    s.src = "https://gso.kommo.com/js/button.js";
    document.head?.appendChild(s);
  }, []);

  const scrollToTop = () => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  };

  const testimonials = [
    {
      name: "Land 4 Fun",
      role: "Gerente",
      text: "Lo que más nos gustó de trabajar con Timbal fue que no vendieron un sistema, vendieron una solución. Se involucraron en entender nuestra operación y adaptaron el CRM a nuestra realidad.   -Gerencia Land 4 Fun",
      rating: 5,
      avatar: "/images/clientes/profiles/landforfun.png"
    },
    {
      name: "CoffeeBreak",
      role: "Director General",
      text: "Lo más valioso es que sentimos que forman parte de nuestra empresa. No son un proveedor, son nuestro brazo comercial digital.",
      rating: 5,
      avatar: "/images/clientes/profiles/coffeebreak.png"
    },
    {
      name: "Mamalov",
      role: "Director General",
      text: "Teníamos mensajes. No teníamos control. Timbal unificó todos nuestros canales digitales en un solo sistema, nos dio estructura y trazabilidad. Hoy ninguna conversación se pierde.",
      rating: 5,
      avatar: "/images/clientes/profiles/mamalov.png"
    },
     {
      name: "Baroc",
      role: "Director General",
      text: "Con Timbal logramos identificar claramente qué dudas eran más frecuentes, organizar la atención y dar respuestas más rápidas y precisas.",
      rating: 5,
      avatar: "/images/clientes/profiles/baroc.png"
    },
     {
      name: "Expoceramicas",
      role: "Director General",
      text: "Hoy gestionamos procesos de reclutamiento con mayor orden, trazabilidad y seguimiento puntual de candidatos. Además, estructuramos un sistema para medir la experiencia de nuestros clientes y detectar áreas de mejora en tiempo real. Timbal nos ayudó a convertir procesos operativos en procesos medibles.",
      rating: 5,
      avatar: "/images/clientes/profiles/expoceramicas.png"
    },
  ];


  return (
    <div className="min-h-screen bg-background">
      <NavbarSimple />
      <HeroNew />
      <ClientsLogos />
      <Differential />
      <ServiceModel />
      <section id="testimonios" className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Testimonios
            </h2>
            <p className="text-lg text-muted-foreground">
              Historias de empresas que ordenaron su operación comercial con Timbal.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-8 md:grid-cols-3"
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="h-full rounded-2xl border border-border/60 bg-card/80 p-6 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    “{t.text}”
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={
                          i < t.rating
                            ? "w-4 h-4 text-yellow-400 fill-yellow-400"
                            : "w-4 h-4 text-muted-foreground"
                        }
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={`Foto de ${t.name}`}
                      className="w-10 h-10 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <FooterSimple />
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Volver arriba"
          className="fixed bottom-6 right-6 z-50 rounded-full bg-primary text-primary-foreground shadow-lg p-3 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Index;
