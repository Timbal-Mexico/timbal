import { useEffect, useRef, useState } from "react";
import { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { motion } from "framer-motion";

const logos = [
  { src: "/images/clientes/brassaarmada.svg", alt: "Brassa Armada" },
  { src: "/images/clientes/coffeebreak.webp", alt: "Coffee Break" },
  { src: "/images/clientes/expoceramicas.png", alt: "Expocerámicas" },
  { src: "/images/clientes/kuzka.jpeg", alt: "Kuzka" },
  { src: "/images/clientes/land4fun.jpg", alt: "Land 4 Fun" },
  { src: "/images/clientes/mamalov_logo_blanco.svg", alt: "Mamalov" },
];

const AUTOPLAY_INTERVAL_MS = 3500;
const GROUP_SIZE = 4;

const ClientsLogos = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [progress, setProgress] = useState(0);
  const [activeGroup, setActiveGroup] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // Sync active group with Embla selection
  useEffect(() => {
    if (!api) return;
    const update = () => {
      const snap = api.selectedScrollSnap();
      setActiveGroup(Math.floor(snap / GROUP_SIZE));
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
    };
  }, [api]);

  // Pausar autoplay cuando no esté visible en viewport
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!api) return;

    let start: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      const paused = hovered || !visible;
      if (paused) {
        start = timestamp;
        frameId = window.requestAnimationFrame(step);
        return;
      }
      if (start == null) start = timestamp;
      const elapsed = timestamp - start;
      const pct = Math.min(100, (elapsed / AUTOPLAY_INTERVAL_MS) * 100);
      setProgress(pct);

      if (elapsed >= AUTOPLAY_INTERVAL_MS) {
        try {
          api.scrollNext();
        } catch {
          // noop
        }
        start = timestamp;
      }

      frameId = window.requestAnimationFrame(step);
    };

    frameId = window.requestAnimationFrame(step);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [api, hovered, visible]);

  return (
    <section aria-label="Clientes" className="py-10 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-border/60 bg-card/60 p-4"
          ref={wrapperRef}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Carousel
            opts={{
              align: "start",
              loop: logos.length > GROUP_SIZE,
              slidesToScroll: 1, // avanzar de uno en uno
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent className="items-center">
              {logos.map((logo, idx) => (
                <CarouselItem
                  key={idx}
                  className="basis-1/4"
                >
                  <div className="flex items-center justify-center p-4">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-12 sm:h-14 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious aria-label="Clientes anteriores" />
            <CarouselNext aria-label="Clientes siguientes" />
          </Carousel>
          {Math.ceil(logos.length / GROUP_SIZE) > 1 && (
            <div role="tablist" aria-label="Paginación de clientes" className="mt-4 flex justify-center gap-2">
              {Array.from({ length: Math.ceil(logos.length / GROUP_SIZE) }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={activeGroup === i}
                  aria-label={`Grupo ${i + 1}`}
                  onClick={() => api?.scrollTo(i * GROUP_SIZE)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    activeGroup === i ? "bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsLogos;
