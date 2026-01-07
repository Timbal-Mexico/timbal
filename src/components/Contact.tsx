import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  return (
    <section id="contacto" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Contacto
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              ¿Listo para{" "}
              <span className="text-gradient">transformar</span> tu comunicación?
            </h2>

            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Platiquemos sobre cómo podemos ayudarte a automatizar y mejorar la
              comunicación con tus clientes. Agenda una llamada sin compromiso.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono</p>
                  <p className="font-semibold text-foreground">
                    +52 33 1234 5678
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground">
                    hola@timbal.mx
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ubicación</p>
                  <p className="font-semibold text-foreground">
                    Guadalajara, Jalisco, México
                  </p>
                </div>
              </div>
            </div>

            {/* CTA WhatsApp */}
            <Button
              size="lg"
              className="gradient-hero text-primary-foreground border-0 shadow-soft hover:opacity-90 transition-all group"
            >
              <Send className="w-5 h-5 mr-2" />
              Escríbenos por WhatsApp
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card border border-border rounded-3xl p-8 shadow-card">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Envíanos un mensaje
              </h3>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nombre
                    </label>
                    <Input
                      placeholder="Tu nombre"
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Empresa
                    </label>
                    <Input
                      placeholder="Tu empresa"
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Teléfono
                  </label>
                  <Input
                    type="tel"
                    placeholder="+52 33 1234 5678"
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensaje
                  </label>
                  <Textarea
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows={4}
                    className="bg-background border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-cta text-secondary-foreground hover:opacity-90 transition-opacity"
                >
                  Enviar mensaje
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
