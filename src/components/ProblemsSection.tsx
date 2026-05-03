import { motion } from "framer-motion";
import { AlertTriangle, Frown, HelpCircle, ShieldOff } from "lucide-react";

const problems = [
  {
    icon: Frown,
    title: "Stai vivendo una separazione difficile?",
    description: "Il conflitto tra coniugi può diventare logorante. Senza una guida esperta, rischi decisioni dettate dall'emozione con conseguenze gravi.",
  },
  {
    icon: AlertTriangle,
    title: "Temi per il futuro dei tuoi figli?",
    description: "Affidamento, collocamento e mantenimento sono questioni delicatissime. Ogni errore può compromettere il loro benessere.",
  },
  {
    icon: HelpCircle,
    title: "Non sai a chi rivolgerti?",
    description: "Termini tecnici, tribunali, scadenze — senza un professionista dedicato, il rischio è restare bloccati o perdere diritti fondamentali.",
  },
  {
    icon: ShieldOff,
    title: "Ti senti solo e senza protezione?",
    description: "Affrontare un percorso legale familiare senza supporto è estremamente stressante. Hai bisogno di competenza e umanità.",
  },
];

const ProblemsSection = () => (
  <section className="section-padding bg-card relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-brand-accent-red mb-3">Ti riconosci?</p>
        <h2 className="text-3xl md:text-4xl mb-6">I problemi che stai affrontando</h2>
        <p className="text-brand-smoke text-base max-w-2xl mx-auto">
          Se ti trovi in una di queste situazioni, sappi che non sei solo. Esiste un percorso chiaro per uscirne.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            className="p-8 rounded-2xl border border-brand-accent-red/15 bg-brand-ivory group hover:premium-shadow-lg transition-all duration-500 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-accent-red/40 group-hover:bg-brand-accent-red transition-colors duration-300" />
            <div className="w-12 h-12 bg-brand-accent-red/10 rounded-xl flex items-center justify-center mb-5">
              <p.icon className="w-6 h-6 text-brand-accent-red" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg md:text-xl mb-3">{p.title}</h3>
            <p className="text-brand-smoke leading-relaxed">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemsSection;
