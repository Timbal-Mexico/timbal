import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { motion } from "framer-motion";

const logos = [
  { src: "/images/clientes/brassaarmada.svg", alt: "Brassa Armada" },
  { src: "/images/clientes/coffeebreak.webp", alt: "Coffee Break" },
  { src: "/images/clientes/expoceramicas.png", alt: "Expocerámicas" },
  { src: "/images/clientes/kuzka.jpeg", alt: "Kuzka" },
  { src: "/images/clientes/land4fun.jpg", alt: "Land 4 Fun" },
  { src: "/images/clientes/mamalov_logo_blanco.svg", alt: "Mamalov" },
  { src: "/images/clientes/mamalov_logo_blanco.webp", alt: "Mamalov" },
];

const ClientsLogos = () => {
  return (
    <section aria-label="Clientes" className="py-10 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-border/60 bg-card/60 p-4"
        >
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="items-center">
              {logos.map((logo, idx) => (
                <CarouselItem
                  key={idx}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/5 lg:basis-1/6"
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
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsLogos;
