import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Consulenza Personalizzata",
    description: "Un incontro conoscitivo gratuito e riservato per ascoltare la tua storia e valutare le opzioni disponibili.",
  },
  {
    number: "2",
    title: "Strategia su Misura",
    description: "Studio approfondito del caso e definizione di un piano legale personalizzato con preventivo chiaro e trasparente.",
  },
  {
    number: "3",
    title: "Passi Successivi Chiari",
    description: "Avvio della procedura con determinazione, privilegiando la soluzione più rapida nell'interesse tuo e dei tuoi figli.",
  },
];

const MethodSection = () => (
  <section className="section-padding bg-brand-warm">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-brand-accent-red mb-3">Come Funziona</p>
        <h2 className="text-3xl md:text-4xl mb-4">Inizia Adesso</h2>
        <p className="text-brand-smoke text-base max-w-2xl mx-auto">
          Un percorso semplice e chiaro in tre passaggi per risolvere la tua situazione legale.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            className="relative text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="w-16 h-16 bg-brand-accent-red rounded-full flex items-center justify-center mx-auto mb-6 text-card font-serif font-bold text-2xl">
              {step.number}
            </div>
            <h3 className="text-lg md:text-xl mb-3">{step.title}</h3>
            <p className="text-brand-smoke leading-relaxed">{step.description}</p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px border-t-2 border-dashed border-brand-smoke/30" />
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <a
          href="#contatti"
          className="inline-flex items-center gap-2 bg-brand-accent-red text-card px-8 py-4 rounded-md text-base font-semibold hover:opacity-90 transition btn-transition"
        >
          Consulenza Gratuita
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </motion.div>
    </div>
  </section>
);

export default MethodSection;
