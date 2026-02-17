import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const words = ["ventas", "resultados"];

const HeroNew = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeoutDelay = isDeleting ? 70 : 120;

    if (!isDeleting && displayedWord === currentWord) {
      timeoutDelay = 1600;
      const timeout = setTimeout(() => setIsDeleting(true), timeoutDelay);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedWord === "") {
      timeoutDelay = 800;
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, timeoutDelay);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      const nextLength = displayedWord.length + (isDeleting ? -1 : 1);
      setDisplayedWord(currentWord.slice(0, nextLength));
    }, timeoutDelay);

    return () => clearTimeout(timeout);
  }, [displayedWord, isDeleting, wordIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative overflow-hidden min-h-screen flex items-center justify-center bg-background px-6 py-24">
      <div className="max-w-5xl w-full text-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05]"
        >
          <span className="relative inline-block">
            Soluciones Digitales que convierte prospectos en{" "}
            <span className="inline-block min-w-[6ch] align-baseline">
              {displayedWord}
            </span>
            &nbsp;
              <span
              className="pointer-events-none text-gradient -top-6 sm:-top-8 inline-block leading-none text-[1.3em] sm:text-[1.4em] md:text-[1.5em]"
              style={{ fontFamily: '"Permanent Marker", cursive' }}
            >
              reales
            </span>
            .
          
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            size="lg"
            className="group relative overflow-hidden rounded-full h-12 px-9 text-base font-semibold text-primary-foreground bg-gradient-to-r from-primary via-secondary to-primary shadow-[0_0_25px_rgba(129,140,248,0.6)] transition-all duration-300 hover:shadow-[0_0_45px_rgba(129,140,248,0.9)] hover:scale-105 focus-visible:scale-105"
            onClick={() => scrollToSection("diferencial")}
          >
            <span className="relative z-10">Descubre más</span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-secondary via-primary to-secondary" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroNew;
