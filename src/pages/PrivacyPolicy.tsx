import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background pt-32 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Aviso de Privacidad
          </h1>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            {/* 1. Identidad del Responsable */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Identidad del Responsable
              </h2>
              <p>
                <strong className="text-foreground">Timbal Comunicaciones</strong> es el responsable de
                recopilar, procesar y proteger tus datos personales. Para cualquier
                duda sobre este aviso, puedes contactarnos en:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Correo: contacto@timbal.com.mx</li>
                <li>WhatsApp: +52 1 33 2384 8561</li>
              </ul>
            </section>

            {/* 2. Datos que Recopilamos */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Datos que Recopilamos
              </h2>
              <p>
                Cuando interactúas con nuestro sitio web o utilizas nuestros servicios,
                podemos recopilar los siguientes datos personales:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Nombre completo</li>
                <li>Correo electrónico</li>
                <li>Número de teléfono / WhatsApp</li>
                <li>Nombre de tu empresa</li>
                <li>Información sobre tu negocio y procesos</li>
                <li>Datos de navegación (cookies, IP, navegador)</li>
              </ul>
            </section>

            {/* 3. Finalidad del Tratamiento */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. Finalidad del Tratamiento de Datos
              </h2>
              <p>
                Utilizamos tus datos personales para:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Procesar y responder a tu solicitud de diagnóstico</li>
                <li>Enviar información sobre nuestros servicios</li>
                <li>Agendar citas y reuniones contigo</li>
                <li>Mejorar nuestra plataforma y experiencia de usuario</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
                <li>Prevenir fraude y asegurar la seguridad</li>
              </ul>
            </section>

            {/* 4. Base Legal */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Base Legal para el Tratamiento
              </h2>
              <p>
                El tratamiento de tus datos se realiza con base en:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Tu consentimiento explícito</li>
                <li>Ejecución de un contrato o servicio solicitado</li>
                <li>Cumplimiento de obligaciones legales</li>
                <li>Intereses legítimos de Timbal Comunicaciones</li>
              </ul>
            </section>

            {/* 5. Compartición de Datos */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Compartición de Datos
              </h2>
              <p>
                Timbal Comunicaciones no venderá, rentará ni compartirá tus datos
                personales con terceros, excepto:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>
                  Con prestadores de servicios que nos ayudan a operar nuestro sitio
                  (hosting, correo, analytics)
                </li>
                <li>Cuando sea requerido por ley o autoridades competentes</li>
                <li>
                  Con tu consentimiento previo y explícito para fines específicos
                </li>
              </ul>
            </section>

            {/* 6. Derechos del Usuario */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Tus Derechos
              </h2>
              <p>
                Tienes derecho a:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Acceder a tus datos personales</li>
                <li>Solicitar la rectificación de datos incorrectos</li>
                <li>Solicitar la eliminación de tus datos</li>
                <li>Optar por no recibir comunicaciones de marketing</li>
                <li>Solicitar la portabilidad de tus datos</li>
                <li>Revocar tu consentimiento en cualquier momento</li>
              </ul>
              <p className="mt-4">
                Para ejercer estos derechos, contáctanos a contacto@timbal.com.mx
              </p>
            </section>

            {/* 7. Seguridad de Datos */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. Seguridad de Datos
              </h2>
              <p>
                Implementamos medidas de seguridad técnicas y administrativas para
                proteger tus datos personales contra acceso no autorizado, alteración,
                divulgación o destrucción. Sin embargo, no podemos garantizar
                seguridad absoluta en internet.
              </p>
            </section>

            {/* 8. Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                8. Cookies y Tecnologías de Rastreo
              </h2>
              <p>
                Nuestro sitio utiliza cookies para:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Mejorar la experiencia del usuario</li>
                <li>Recordar preferencias</li>
                <li>Análisis de tráfico y comportamiento del sitio</li>
                <li>Marketing y publicidad personalizada</li>
              </ul>
              <p className="mt-4">
                Puedes controlar las cookies a través de la configuración de tu
                navegador.
              </p>
            </section>

            {/* 9. Retención de Datos */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                9. Retención de Datos
              </h2>
              <p>
                Retenemos tus datos personales mientras sea necesario para:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Proporcionar nuestros servicios</li>
                <li>Cumplir con obligaciones legales</li>
                <li>Resolver disputas y hacer valer nuestros derechos</li>
              </ul>
              <p className="mt-4">
                Una vez que ya no sea necesario, eliminaremos o anonimizaremos tus datos.
              </p>
            </section>

            {/* 10. Cambios en el Aviso */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                10. Cambios a este Aviso
              </h2>
              <p>
                Timbal Comunicaciones se reserva el derecho de modificar este aviso de
                privacidad en cualquier momento. Los cambios serán publicados en esta
                página. Tu uso continuado del sitio constituye aceptación de los cambios.
              </p>
            </section>

            {/* 11. Contacto */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                11. Contacto
              </h2>
              <p>
                Si tienes preguntas sobre este aviso de privacidad o cómo manejamos
                tus datos, por favor contáctanos:
              </p>
              <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border/50">
                <p>
                  <strong className="text-foreground">Timbal Comunicaciones</strong>
                </p>
                <p>Correo: contacto@timbal.com.mx</p>
                <p>WhatsApp: +52 1 33 2384 8561</p>
              </div>
            </section>

            {/* Footer */}
            <section className="pt-8 border-t border-border/50 mt-12">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Última actualización:</strong> 28 de enero de 2026
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Este aviso de privacidad cumple con la Ley Federal de Protección de
                Datos Personales en Posesión de Particulares (LFPDPPP) de México.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
