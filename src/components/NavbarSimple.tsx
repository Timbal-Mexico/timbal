import { motion } from "framer-motion";
import { Calendar, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import logo from "../../public/logo.svg";
import { useState } from "react";

const NavbarSimple = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openCalendly = () => {
    window.open("https://calendly.com/timbalcomunicaciones/30min", "_blank");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "Soluciones", id: "paquetes" },
    { name: "Cómo trabajamos", id: "como-trabajamos" },
    { name: "Contacto", id: "contacto" },
  ];

  return (
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
            <img src={logo} alt="Timbal Logo" className="h-10" />
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
      </div>
    </motion.nav>
  );
};

export default NavbarSimple;
