📅 INTEGRACIÓN DE CALENDLY - TIMBAL WEB

✅ ESTADO ACTUAL:
Todos los botones "Agendar" redirigen a:
https://calendly.com/timbalcomunicaciones/30min

✅ UBICACIÓN DE LOS BOTONES:
1. Navbar (desktop y mobile)
2. Hero section (principal)
3. Packages section (todos los paquetes)
4. FinalCTA section (contacto)

═══════════════════════════════════════════════════════════════════════════════

🚀 OPCIONAL: INTEGRAR WIDGET DE CALENDLY EN LA WEB

Si prefieres que el calendario se abra dentro de la web (sin redirigir), 
sigue estos pasos:

1️⃣ INSTALAR LIBRERÍA DE CALENDLY

npm install react-calendly

2️⃣ CREAR UN COMPONENTE CALENDLY MODAL

Crea `src/components/CalendlyModal.tsx`:

```tsx
import { InlineWidget } from "react-calendly";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendlyModal = ({ isOpen, onClose }: CalendlyModalProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-background rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-muted rounded-lg"
        >
          <X className="w-6 h-6" />
        </button>

        <InlineWidget url="https://calendly.com/timbalcomunicaciones/30min" />
      </motion.div>
    </motion.div>
  );
};

export default CalendlyModal;
```

3️⃣ USAR EL MODAL EN LOS COMPONENTES

En lugar de:
```tsx
const openCalendly = () => {
  window.open("https://calendly.com/timbalcomunicaciones/30min", "_blank");
};
```

Hacer esto:
```tsx
const [showCalendly, setShowCalendly] = useState(false);

const openCalendly = () => {
  setShowCalendly(true);
};

// En el JSX:
<CalendlyModal isOpen={showCalendly} onClose={() => setShowCalendly(false)} />
```

═══════════════════════════════════════════════════════════════════════════════

⚠️ NOTA IMPORTANTE:

La integración actual (redireccionar a Calendly) es:
✅ Más rápida
✅ Funciona sin dependencias adicionales
✅ Mejor para conversión (sale de la web)
✅ Compatible con tracking (UTM parameters)

La integración con widget es:
✅ Mejora la experiencia (sin salir de la web)
❌ Requiere más configuración
❌ Puede ser más lenta

═══════════════════════════════════════════════════════════════════════════════

📊 TRACKING Y ANALYTICS

Para rastrear clics en Calendly, agrega tracking a `openCalendly()`:

```tsx
const openCalendly = () => {
  // Enviar evento a Google Analytics o similar
  if (window.gtag) {
    window.gtag('event', 'click_agendar', {
      'event_category': 'engagement',
      'event_label': 'calendly_redirect'
    });
  }
  window.open("https://calendly.com/timbalcomunicaciones/30min", "_blank");
};
```

═══════════════════════════════════════════════════════════════════════════════

✅ ESTADO FINAL:

La web está 100% lista con:
- Redirección a Calendly funcionando
- Todos los botones apuntando al mismo link
- Sin necesidad de instalaciones adicionales
- Listo para producción

═══════════════════════════════════════════════════════════════════════════════
