import { motion } from "framer-motion";

const capabilities = [
  "Separazioni consensuali e giudiziali",
  "Divorzi e negoziazione assistita",
  "Affidamento e collocamento dei figli minori",
  "Regolamentazione dei rapporti genitori-figli",
  "Amministrazione di sostegno e tutela",
  "Riconoscimento e disconoscimento di paternità",
  "Modifica delle condizioni di separazione",
  "Assegno di mantenimento e divisione patrimoniale",
  "Costituzione e tutela delle famiglie di fatto",
  "Interdizione e inabilitazione",
  "Controversie successorie familiari",
  "Consulenza preventiva e stragiudiziale",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const WhatICanDoSection = () => (
  <section className="section-padding bg-brand-ivory">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <motion.div
          className="lg:col-span-5 lg:sticky lg:top-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-6">Cosa Posso Fare per Te</p>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl text-brand-midnight tracking-[-0.02em] leading-[1.1] mb-8 text-balance">
            Un supporto legale <em className="not-italic font-semibold text-brand-midnight">completo</em> per la tua famiglia.
          </h2>
          <p className="text-brand-midnight/70 text-base leading-[1.8] mb-10 max-w-md">
            Ogni situazione è unica. Ti seguo personalmente dalla prima consulenza fino alla risoluzione, senza deleghe e senza compromessi.
          </p>
          <a href="#contatti" className="btn-primary">Consulenza Riservata</a>
        </motion.div>

        <motion.div
          className="lg:col-span-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <ul className="border-t border-brand-midnight/15">
            {capabilities.map((cap, i) => (
              <motion.li
                key={cap}
                variants={itemVariants}
                className="flex items-baseline gap-6 py-5 border-b border-brand-midnight/15 group"
              >
                <span className="display-numeral text-base text-brand-midnight/40 group-hover:text-brand-midnight transition-colors duration-300 font-normal not-italic w-8 shrink-0 tracking-normal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-brand-midnight text-base md:text-lg font-light leading-snug">
                  {cap}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhatICanDoSection;
