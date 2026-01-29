import { motion } from "framer-motion";
import { 
  Users, 
  MessageSquare, 
  Briefcase, 
  Target,
  XCircle
} from "lucide-react";

const criteria = [
  {
    icon: Users,
    text: "10 a 60 colaboradores",
  },
  {
    icon: MessageSquare,
    text: "Ventas o atención por WhatsApp / web",
  },
  {
    icon: Briefcase,
    text: "Equipo comercial u operativo activo",
  },
  {
    icon: Target,
    text: "Dirección involucrada en el cambio",
  },
];

const ForWho = () => {
  return (
    <section className="py-24 bg-background">
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
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Timbal es para empresas que{" "}
              <span className="text-gradient">ya tienen complejidad</span>
            </h2>
          </motion.div>

          {/* Criteria */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {criteria.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 p-5 bg-primary/5 rounded-xl border border-primary/10"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Warning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 p-6 bg-muted rounded-2xl border border-border"
          >
            <XCircle className="w-8 h-8 text-muted-foreground flex-shrink-0" />
            <p className="text-muted-foreground">
              Si buscas solo un bot o automatización fría,{" "}
              <span className="text-foreground font-semibold">
                Timbal no es para ti.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
