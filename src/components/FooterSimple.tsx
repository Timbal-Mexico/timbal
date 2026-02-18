import { Linkedin, MessageCircle, Mail, Phone, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const FooterSimple = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    whatsapp: "https://wa.me/523328712448",
    linkedin: "https://linkedin.com/company/timbal",
    email: "contacto@timbal.com.mx",
    phone: "+52 33 2871 2448",
    address: "Guadalajara, Jalisco, México",
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="/logo.svg" alt="Timbal Logo" className="h-10 brightness-0 invert" />
            </Link>
            <p className="text-background/70 text-sm">
              Implementamos sistemas comerciales con CRM, automatización y datos para convertir leads en ventas.
            </p>
          </div>

          {/* Soluciones */}
          <div>
            <h3 className="font-semibold text-background mb-4">Soluciones</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <Link to="/#diferencial" className="hover:text-background transition-colors">
                  Sistema de Ventas 360°
                </Link>
              </li>
              <li>
                <Link to="/#diferencial" className="hover:text-background transition-colors">
                  Implementación CRM Comercial
                </Link>
              </li>
              <li>
                <Link to="/#diferencial" className="hover:text-background transition-colors">
                  Ecommerce Inteligente
                </Link>
              </li>
              <li>
                <Link to="/#diferencial" className="hover:text-background transition-colors">
                  Automatización Post-Venta
                </Link>
              </li>
            </ul>
          </div>

          

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-background mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <Link to="/aviso-privacidad" className="hover:text-background transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/terminos-condiciones" className="hover:text-background transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-background mb-4">Contacto</h3>
            <div className="space-y-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-sm text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 text-sm text-background/70 hover:text-background transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{contactInfo.phone}</span>
              </a>
              <p className="flex items-start gap-3 text-sm text-background/70">
                <span className="mt-0.5">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                    />
                  </svg>
                </span>
                <span>{contactInfo.address}</span>
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/timbal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/timbal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors"
                  aria-label="Facebook"
                >
                   <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-background/50 text-sm">
              © {currentYear} Timbal. Todos los derechos reservados.
            </p>
            <p className="text-background/70 text-sm max-w-xl text-center md:text-right">
              Nos enfocamos en resultados que generan ventas, concentramos datos que se convierten en
              decisiones y te permiten trabajar mejor.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSimple;
