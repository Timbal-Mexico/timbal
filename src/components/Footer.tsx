import { MessageCircle, Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-2xl font-bold">Timbal</span>
            </div>
            <p className="text-secondary-foreground/70 max-w-sm mb-6">
              Agencia de marketing digital especializada en mensajería
              conversacional. Tu aliado estratégico en Guadalajara.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Facebook].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Servicios</h4>
            <ul className="space-y-3 text-secondary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Gestión de Mensajería
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Chatbots
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  CRM Conversacional
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Automatización
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Empresa</h4>
            <ul className="space-y-3 text-secondary-foreground/70">
              <li>
                <a href="#nosotros" className="hover:text-primary transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#kommo" className="hover:text-primary transition-colors">
                  Kommo Partners
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/50 text-sm">
            © {currentYear} Timbal. Todos los derechos reservados.
          </p>
          <p className="text-secondary-foreground/50 text-sm flex items-center gap-1">
            Hecho con <span className="text-primary">♥</span> en Guadalajara
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
