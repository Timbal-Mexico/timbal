import { motion } from "framer-motion";
import { MessageCircle, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const NavbarSimple = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl font-bold text-foreground">
              Timbal
            </span>
          </Link>

          {/* CTA */}
          <Button
            onClick={scrollToContact}
            className="gradient-hero text-primary-foreground border-0 shadow-soft hover:opacity-90 transition-opacity"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Agenda un diagnóstico
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavbarSimple;
