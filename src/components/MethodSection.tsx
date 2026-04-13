import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Primo Colloquio",
    description: "Un incontro conoscitivo gratuito e riservato per ascoltare la tua storia, comprendere la situazione e valutare insieme le opzioni disponibili.",
  },
  {
    number: "02",
    title: "Analisi e Strategia",
    description: "Studio approfondito del caso e definizione di una strategia legale su misura, con un preventivo chiaro e trasparente dei costi e dei tempi.",
  },
  {
    number: "03",
    title: "Azione Legale",
    description: "Avvio della procedura con determinazione e competenza, privilegiando sempre la soluzione più rapida e meno conflittuale, nell'interesse tuo e dei tuoi figli.",
  },
  {
    number: "04",
    title: "Risoluzione e Tutela",
    description: "Conclusione della pratica con la massima tutela dei tuoi diritti. Resto a disposizione anche dopo, per qualsiasi necessità futura.",
  },
];

const MethodSection = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        className="text-center mb-16 md:mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-brand-smoke mb-4">Il Metodo</p>
        <h2 className="text-4xl md:text-5xl mb-6">Come lavoriamo insieme</h2>
        <p className="text-brand-smoke text-lg max-w-2xl mx-auto">
          Un percorso chiaro e strutturato, pensato per darti sicurezza in ogni fase.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            className="relative p-8 rounded-2xl border border-border bg-card group hover:premium-shadow-lg transition-all duration-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-midnight scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <span className="text-5xl font-serif font-bold text-brand-garden block mb-4">{step.number}</span>
            <h3 className="text-xl md:text-2xl mb-3">{step.title}</h3>
            <p className="text-brand-smoke leading-relaxed text-[15px]">{step.description}</p>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-brand-smoke/40" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MethodSection;
