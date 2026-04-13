import { motion } from "framer-motion";
import { AlertTriangle, Frown, HelpCircle, ShieldOff } from "lucide-react";

const problems = [
  {
    icon: Frown,
    title: "Stai vivendo una separazione difficile?",
    description: "Il conflitto tra coniugi può diventare logorante. Senza una guida esperta, rischi di prendere decisioni dettate dall'emozione che possono avere conseguenze gravi e durature.",
  },
  {
    icon: AlertTriangle,
    title: "Temi per il futuro dei tuoi figli?",
    description: "L'affidamento, il collocamento e il mantenimento dei minori sono questioni delicatissime. Ogni errore può compromettere il loro benessere e il tuo rapporto con loro.",
  },
  {
    icon: HelpCircle,
    title: "Non sai a chi rivolgerti?",
    description: "La confusione legale è paralizzante. Termini tecnici, tribunali, scadenze — senza un professionista dedicato, il rischio è di restare bloccati o di perdere diritti fondamentali.",
  },
  {
    icon: ShieldOff,
    title: "Ti senti solo e senza protezione?",
    description: "Affrontare un percorso legale familiare senza supporto è estremamente stressante. Hai bisogno di qualcuno che combatta per i tuoi diritti con competenza e umanità.",
  },
];

const ProblemsSection = () => (
  <section className="section-padding bg-brand-ivory relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `radial-gradient(circle at 80% 20%, hsl(var(--brand-midnight)) 0%, transparent 60%)`
    }} />
    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <motion.div
        className="text-center mb-16 md:mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-brand-smoke mb-4">Ti riconosci?</p>
        <h2 className="text-4xl md:text-5xl mb-6">I problemi che stai affrontando</h2>
        <p className="text-brand-smoke text-lg max-w-2xl mx-auto">
          Se ti trovi in una di queste situazioni, sappi che non sei solo. E che esiste un percorso chiaro per uscirne.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            className="p-8 rounded-2xl border border-destructive/15 bg-card relative overflow-hidden group hover:premium-shadow-lg transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-destructive/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-5">
              <p.icon className="w-6 h-6 text-destructive" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl md:text-2xl mb-3">{p.title}</h3>
            <p className="text-brand-smoke leading-relaxed">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemsSection;
