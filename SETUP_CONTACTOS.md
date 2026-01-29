📋 CONFIGURACIÓN DE CONTACTOS REALES - TIMBAL WEB

Para que la web esté completamente lista para salir al mercado, necesitas actualizar estos datos:

═══════════════════════════════════════════════════════════════════════════════

1️⃣ FOOTER (FooterSimple.tsx)
Líneas 8-13 - Reemplaza los datos placeholder:

  const contactInfo = {
    whatsapp: "https://wa.me/523300000000",    // ← CAMBIA AL NÚMERO REAL
    linkedin: "https://linkedin.com/company/timbal",  // ← CAMBIA AL LINKEDIN
    email: "info@timbal.mx",                   // ← CAMBIA AL EMAIL REAL
    phone: "+52 330 000 0000",                 // ← CAMBIA AL TELÉFONO
  };

═══════════════════════════════════════════════════════════════════════════════

2️⃣ CONTACTO (FinalCTA.tsx)
Línea 11 - Reemplaza el número de WhatsApp:

  const scrollToWhatsApp = () => {
    window.open("https://wa.me/523300000000", "_blank"); // ← CAMBIA AQUÍ
  };

═══════════════════════════════════════════════════════════════════════════════

3️⃣ FORMULARIO DE CONTACTO (FinalCTA.tsx)
El formulario está configurado pero necesita una acción backend:

Línea 17 - La función handleFormSubmit envía un POST a:
  - Puedes enviar a tu email
  - Puedes integrar con Zapier, Make.com, etc.
  - O crear un endpoint en tu backend

Sugerencia rápida con EmailJS (sin backend):
1. Crear cuenta en emailjs.com
2. Copiar credenciales (Service ID, Template ID)
3. Reemplazar la función handleFormSubmit

═══════════════════════════════════════════════════════════════════════════════

4️⃣ NAVBAR (NavbarSimple.tsx)
Ya tiene links a los sections:
  - Soluciones (#paquetes)
  - Cómo trabajamos (#como-trabajamos)
  - Contacto (#contacto)

No necesita cambios, todo está listo.

═══════════════════════════════════════════════════════════════════════════════

✅ CHECKLIST DE COMPLETITUD

Información integrada en la web:

[✅] Identidad base (logo, colores, tipografía)
[✅] Mensaje único ("Ordenamos las conversaciones...")
[✅] 4 pilares de solución (Ventas, Servicio, Ops, Dirección)
[✅] Proceso de 4 pasos (Diagnóstico, Diseño, Implementación, Capacitación)
[✅] 6 paquetes comerciales con precios
[✅] Beneficios claros
[✅] CTA "Agendar diagnóstico"
[✅] Formulario de contacto
[⚠️] Datos de contacto REALES (pendiente tu configuración)
[⚠️] Integración de formulario con backend/email (pendiente)

═══════════════════════════════════════════════════════════════════════════════

🚀 SIGUIENTE PASO

Completa los datos de contacto arriba y la web estará 100% lista para:
- Salir al mercado
- Respaldar al equipo comercial
- Captar leads

═══════════════════════════════════════════════════════════════════════════════
