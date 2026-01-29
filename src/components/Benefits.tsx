import { motion } from "framer-motion";
import { 
  Target, 
  Shield, 
  UserCheck, 
  LineChart, 
  Lightbulb,
  CheckCircle2
} from "lucide-react";

const benefits = [
  {
    icon: Target,
    text: "Menos leads perdidos",
  },
  {
    icon: Shield,
    text: "Más control sobre la operación",
  },
  {
    icon: UserCheck,
    text: "Menos dependencia de personas",
  },
  {
    icon: LineChart,
    text: "Información real para dirección",
  },
  {
    icon: Lightbulb,
    text: "Mejores decisiones basadas en datos",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Lo que ganas con{" "}
              <span className="text-secondary">Timbal</span>
            </h2>
          </motion.div>

          {/* Benefits grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 p-5 bg-background/5 rounded-xl border border-background/10 hover:bg-background/10 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                <p className="font-medium">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
