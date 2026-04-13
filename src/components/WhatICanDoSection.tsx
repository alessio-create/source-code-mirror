import { motion } from "framer-motion";
import { Check } from "lucide-react";

const capabilities = [
  "Separazioni consensuali e giudiziali",
  "Divorzi e negoziazione assistita",
  "Affidamento e collocamento dei figli minori",
  "Regolamentazione dei rapporti genitori-figli",
  "Amministrazione di sostegno e tutela",
  "Riconoscimento e disconoscimento di paternità",
  "Modifica delle condizioni di separazione e divorzio",
  "Assegno di mantenimento e divisione patrimoniale",
  "Costituzione e tutela delle famiglie di fatto",
  "Interdizione e inabilitazione",
  "Controversie successorie e patrimoniali familiari",
  "Consulenza legale preventiva e stragiudiziale",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const WhatICanDoSection = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        <motion.div
          className="lg:w-5/12 lg:sticky lg:top-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-brand-smoke mb-4">Cosa posso fare per te</p>
          <h2 className="text-4xl md:text-5xl mb-6">Un supporto legale completo per ogni fase della tua vita familiare</h2>
          <p className="text-brand-smoke text-lg leading-relaxed">
            Ogni situazione è unica. Ti offro un'assistenza personalizzata, dalla prima consulenza fino alla risoluzione definitiva del tuo caso.
          </p>
        </motion.div>

        <motion.div
          className="lg:w-7/12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map((cap) => (
              <motion.div
                key={cap}
                variants={itemVariants}
                className="flex items-start gap-3 p-4 rounded-xl border border-border hover:border-brand-midnight/20 hover:premium-shadow transition-all duration-300 bg-card group"
              >
                <div className="w-6 h-6 bg-brand-midnight rounded-full flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <Check className="w-3.5 h-3.5 text-primary-foreground" strokeWidth={2.5} />
                </div>
                <span className="text-foreground font-medium text-[15px] leading-snug">{cap}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhatICanDoSection;
