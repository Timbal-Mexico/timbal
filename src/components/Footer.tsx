import { MessageCircle, Instagram, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-2xl font-bold">Timbal</span>
            </Link>
            <p className="text-background/70 max-w-sm mb-6">
              Agencia de marketing digital especializada en mensajería
              conversacional. Tu aliado estratégico en Guadalajara.
            </p>
            <a href="https://www.kommo.com/es/socios/encontrar-socio/comunicaciones-digitales-timbal/" target="_blank" rel="noopener noreferrer" aria-label="Kommo partner" className="inline-block mb-4">
              <img src="/images/partners/kommo_partner_light.svg" alt="Kommo partner" className="h-10 w-auto rounded-md shadow-sm border border-background/20" />
            </a>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Facebook].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary/30 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Servicios</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <Link to="/servicios" className="hover:text-accent transition-colors">
                  Gestión de Mensajería
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-accent transition-colors">
                  Chatbots
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-accent transition-colors">
                  CRM Conversacional
                </Link>
              </li>
              <li>
                <Link to="/precios" className="hover:text-accent transition-colors">
                  Precios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Empresa</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <Link to="/nosotros" className="hover:text-accent transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/kommo" className="hover:text-accent transition-colors">
                  Kommo Partners
                </Link>
              </li>
              <li>
                <Link to="/#contacto" className="hover:text-accent transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} Timbal. Todos los derechos reservados.
          </p>
          <p className="text-background/50 text-sm flex items-center gap-1">
            Hecho con <span className="text-accent">♥</span> en Guadalajara
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
