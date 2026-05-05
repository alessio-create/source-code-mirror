import { motion } from "framer-motion";

const problems = [
  {
    n: "I.",
    title: "Stai vivendo una separazione difficile.",
    description: "Il conflitto tra coniugi può diventare logorante. Senza una guida esperta, le decisioni dettate dall'emozione lasciano conseguenze che durano anni.",
  },
  {
    n: "II.",
    title: "Temi per il futuro dei tuoi figli.",
    description: "Affidamento, collocamento e mantenimento sono questioni delicatissime. Ogni passaggio incide direttamente sul loro benessere quotidiano.",
  },
  {
    n: "III.",
    title: "Non sai a chi rivolgerti.",
    description: "Termini tecnici, tribunali, scadenze. Senza un professionista dedicato, il rischio è restare bloccati o perdere diritti fondamentali.",
  },
  {
    n: "IV.",
    title: "Ti senti solo, senza protezione.",
    description: "Affrontare un percorso legale familiare senza supporto è estremamente stressante. Hai bisogno di competenza, ma anche di umanità.",
  },
];

const ProblemsSection = () => (
  <section className="section-padding bg-card relative">
    <div className="container mx-auto px-4 md:px-8 relative">
      <motion.div
        className="max-w-3xl mb-16 md:mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow mb-6">Ti Riconosci?</p>
        <h2 className="font-serif font-medium text-4xl md:text-5xl lg:text-6xl text-brand-midnight tracking-[-0.02em] leading-[1.05] text-balance">
          I momenti in cui <em className="italic font-normal text-brand-midnight/70">serve davvero</em> qualcuno al tuo fianco.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-midnight/15 border border-brand-midnight/15">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            className="bg-card p-8 md:p-12 hover:bg-brand-garden/30 transition-colors duration-500 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <p className="display-numeral text-3xl text-brand-midnight/50 mb-6">{p.n}</p>
            <h3 className="font-serif font-medium text-2xl md:text-3xl text-brand-midnight mb-4 tracking-[-0.02em] leading-tight">
              {p.title}
            </h3>
            <p className="text-brand-midnight/70 leading-[1.8] text-base">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemsSection;
