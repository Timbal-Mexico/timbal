import { Linkedin, MessageCircle, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../public/logo.svg";

const FooterSimple = () => {
  const currentYear = new Date().getFullYear();

  // 📌 ACTUALIZA ESTOS DATOS CON TUS CONTACTOS REALES
  const contactInfo = {
    whatsapp: "https://wa.me/523323848561",
    linkedin: "https://linkedin.com/company/timbal",
    email: "contacto@timbal.com.mx",
    phone: "+52 1 33 2384 8561",
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src={logo} alt="Timbal Logo" className="h-10 brightness-0 invert" />
            </Link>
            <p className="text-background/70 text-sm">
              Ordenamos las conversaciones que mueven tu empresa.
            </p>
          </div>

          {/* Productos */}
          <div>
            <h3 className="font-semibold text-background mb-4">Soluciones</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a href="/#paquetes" className="hover:text-background transition-colors">
                  Sales Core
                </a>
              </li>
              <li>
                <a href="/#paquetes" className="hover:text-background transition-colors">
                  Service
                </a>
              </li>
              <li>
                <a href="/#paquetes" className="hover:text-background transition-colors">
                  Operations
                </a>
              </li>
              <li>
                <a href="/#paquetes" className="hover:text-background transition-colors">
                  Full Control
                </a>
              </li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h3 className="font-semibold text-background mb-4">Empresa</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a href="/#como-trabajamos" className="hover:text-background transition-colors">
                  Cómo trabajamos
                </a>
              </li>
              <li>
                <a href="/#paquetes" className="hover:text-background transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="/aviso-privacidad" className="hover:text-background transition-colors">
                  Aviso de privacidad
                </a>
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
              <div className="flex items-center gap-4 pt-2">
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
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
            <p className="text-background/70 text-sm italic">
              No vendemos software. Vendemos orden, control y visibilidad.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSimple;
