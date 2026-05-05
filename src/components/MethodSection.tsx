import { motion } from "framer-motion";

const steps = [
  {
    number: "I.",
    title: "Consulenza Personalizzata",
    description: "Un incontro conoscitivo riservato per ascoltare la tua storia e valutare con calma le opzioni disponibili.",
  },
  {
    number: "II.",
    title: "Strategia su Misura",
    description: "Studio approfondito del caso e definizione di un piano legale chiaro, con preventivo trasparente.",
  },
  {
    number: "III.",
    title: "Passi Successivi Chiari",
    description: "Avvio della procedura con determinazione, privilegiando la soluzione più rapida nell'interesse tuo e dei tuoi figli.",
  },
];

const MethodSection = () => (
  <section className="section-padding bg-brand-ivory">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        className="text-center max-w-2xl mx-auto mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow eyebrow-center mb-6">Il Metodo</p>
        <h2 className="font-serif font-medium text-4xl md:text-5xl lg:text-6xl text-brand-midnight tracking-[-0.02em] leading-[1.05] mb-6 text-balance">
          Un percorso chiaro, in <em className="italic font-normal text-brand-midnight/70">tre tempi</em>.
        </h2>
        <p className="text-brand-midnight/70 text-base md:text-lg leading-[1.7]">
          Senza sorprese, senza tecnicismi inutili: solo la strada più lineare per arrivare alla soluzione.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto border-t border-brand-midnight/15 mb-16">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            className={`py-12 px-6 md:px-10 ${i < steps.length - 1 ? "md:border-r border-brand-midnight/15" : ""} border-b border-brand-midnight/15 md:border-b`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <p className="display-numeral text-6xl md:text-7xl text-brand-midnight/40 mb-6">{step.number}</p>
            <h3 className="font-serif font-medium text-2xl md:text-3xl text-brand-midnight tracking-[-0.02em] mb-4 leading-tight">
              {step.title}
            </h3>
            <p className="text-brand-midnight/70 leading-[1.8] text-base">{step.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a href="#contatti" className="btn-primary">
          Consulenza Riservata
        </a>
      </motion.div>
    </div>
  </section>
);

export default MethodSection;
