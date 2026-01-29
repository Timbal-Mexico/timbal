import { MessageCircle, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const FooterSimple = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-xl font-bold">Timbal</span>
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary/30 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/523300000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary/30 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-background/70">
            <Link to="/aviso-privacidad" className="hover:text-background transition-colors">
              Aviso de privacidad
            </Link>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-6 text-center">
          <p className="text-background/50 text-sm">
            © {currentYear} Timbal. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSimple;
