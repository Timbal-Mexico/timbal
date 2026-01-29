import { motion } from "framer-motion";
import { 
  UserX, 
  Smartphone, 
  Clock, 
  Frown, 
  EyeOff,
  AlertTriangle
} from "lucide-react";

const problems = [
  {
    icon: UserX,
    text: "Leads que nadie atiende a tiempo",
  },
  {
    icon: Smartphone,
    text: "WhatsApps personales sin control",
  },
  {
    icon: Clock,
    text: "Seguimientos olvidados",
  },
  {
    icon: Frown,
    text: "Clientes molestos por falta de respuesta",
  },
  {
    icon: EyeOff,
    text: "Dirección sin visibilidad real",
  },
];

const Problem = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Title */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-12">
            El problema no son los leads.{" "}
            <span className="text-gradient">Es lo que pasa después.</span>
          </h2>

          {/* Problems grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-background rounded-2xl shadow-card border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <p className="text-foreground font-medium text-left">
                  {problem.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Closing statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-2xl"
          >
            <AlertTriangle className="w-6 h-6" />
            <p className="text-lg font-semibold">
              Cuando la comunicación no está ordenada, se pierde dinero.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
