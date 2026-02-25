import { motion } from "framer-motion";
import { Calendar, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";

const NavbarSimple = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const openCalendly = () => {
    setIsCalendlyOpen(true);
  };

  const scrollToSection = (id: string) => {
    if (id === "inicio") {
      if (location.pathname !== "/") {
        navigate("/#inicio");
        setIsOpen(false);
        return;
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
      return;
    }
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      setIsOpen(false);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "Inicio", id: "inicio" },
    { name: "Soluciones", id: "diferencial" },
    { name: "Testimonios", id: "testimonios" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="Timbal Logo" className="h-10" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  {link.name}
                </button>
              ))}
              <Button
                onClick={openCalendly}
                className="gradient-hero text-primary-foreground border-0 shadow-soft hover:opacity-90 transition-opacity"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Diagnóstico
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden py-4 space-y-4"
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <Button
                onClick={openCalendly}
                className="w-full gradient-hero text-primary-foreground border-0 hover:opacity-90 transition-opacity"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Agendar diagnóstico
              </Button>
            </motion.div>
          )}

          {/* About Dialog */}
          <Dialog open={isAboutOpen} onOpenChange={(open) => setIsAboutOpen(open)}>
            <DialogContent className="max-w-4xl p-0 overflow-hidden border-none bg-card">
              <div className="grid md:grid-cols-5 h-full">
                {/* Cover Image & Logo */}
                <div className="md:col-span-2 relative h-48 md:h-auto bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                    alt="Equipo Timbal" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/40 mix-blend-multiply" />
                  <div className="absolute bottom-6 left-6 z-10">
                    <img src="/logo.svg" alt="Timbal Logo" className="h-8 brightness-0 invert opacity-90" />
                    <p className="text-white/80 text-xs mt-2 font-medium tracking-wide uppercase">
                      Soluciones Digitales
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-6 md:p-8 max-h-[85vh] overflow-y-auto">
                  <div className="flex justify-between items-start mb-6">
                    <DialogTitle className="font-display text-2xl md:text-3xl font-bold text-foreground">
                      Quienes somos
                    </DialogTitle>
                    <DialogClose asChild>
                      <button className="rounded-full p-2 hover:bg-muted transition-colors -mr-2 -mt-2">
                        <X className="w-5 h-5 text-muted-foreground" />
                      </button>
                    </DialogClose>
                  </div>

                  <div className="space-y-6 text-sm text-muted-foreground">
                    <div>
                      <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                        <span className="w-1 h-4 bg-primary rounded-full" />
                        MISIÓN
                      </h4>
                      <p className="leading-relaxed">
                        Diseñamos e implementamos sistemas operativos basados en tecnología, procesos y talento humano que permiten a las organizaciones trabajar con mayor claridad, control y efectividad, desde áreas comerciales hasta reclutamiento y operación interna.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                        <span className="w-1 h-4 bg-secondary rounded-full" />
                        VISIÓN
                      </h4>
                      <p className="leading-relaxed">
                        Convertirnos en una firma referente en implementación de sistemas tecnológicos y operativos centrados en personas, capaz de integrar múltiples plataformas y metodologías para mejorar áreas comerciales, de talento y de gestión empresarial.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                        <span className="w-1 h-4 bg-accent rounded-full" />
                        VALORES
                      </h4>
                      <ul className="grid gap-3">
                        {[
                          { title: "La tecnología sirve a las personas", desc: "Automatizamos procesos, no relaciones humanas." },
                          { title: "Sistemas antes que improvisación", desc: "Creamos estructura que libera capacidad humana." },
                          { title: "Datos con criterio humano", desc: "Medimos, pero interpretamos con contexto." },
                          { title: "Implementación real", desc: "No entregamos herramientas — dejamos sistemas funcionando." },
                          { title: "Aprendizaje aplicado", desc: "Probamos, medimos y mejoramos continuamente." },
                          { title: "Claridad operativa", desc: "Si no se entiende, no está bien diseñado." },
                          { title: "Colaboración con el cliente", desc: "No imponemos — construimos con el equipo." }
                        ].map((item, i) => (
                          <li key={i} className="flex gap-2 items-start">
                            <span className="text-primary font-bold mt-0.5">•</span>
                            <span>
                              <strong className="text-foreground">{item.title}</strong>
                              <span className="block text-xs opacity-80 mt-0.5">{item.desc}</span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </motion.nav>

      {/* Calendly Modal */}
      <PopupModal
        url="https://calendly.com/timbalcomunicaciones/30min"
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById("root")!}
      />
    </>
  );
};

export default NavbarSimple;
