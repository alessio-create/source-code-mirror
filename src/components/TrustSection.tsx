import { motion } from "framer-motion";

const trustPoints = [
  { title: "Università Cattolica di Milano", desc: "Formazione giuridica d'eccellenza" },
  { title: "Specializzazione Esclusiva", desc: "Diritto di famiglia, minori e persone" },
  { title: "Massima Riservatezza", desc: "Ogni caso trattato con discrezione totale" },
  { title: "Centinaia di Famiglie", desc: "Assistite con successo negli anni" },
  { title: "Approccio Umano", desc: "Rigore tecnico e comprensione empatica" },
  { title: "Aggiornamento Costante", desc: "Sempre al passo con le nuove normative" },
];

const testimonials = [
  {
    text: "Donatella mi ha guidata in una separazione difficile con una calma incredibile. Mi sono sentita protetta e ascoltata fin dal primo giorno.",
    name: "Laura B.",
    role: "Separazione consensuale",
  },
  {
    text: "Professionista seria e molto onesta. Ha saputo gestire il conflitto per l'affido evitando inutili guerre e cercando il bene dei figli.",
    name: "Marco T.",
    role: "Affido minori",
  },
  {
    text: "In un momento di grande confusione, l'Avvocato Di Vietro ha portato chiarezza. Eccellente supporto tecnico e grande umanità.",
    name: "Silvia R.",
    role: "Diritto di famiglia",
  },
];

const TrustSection = () => (
  <section className="section-padding bg-brand-ivory">
    <div className="container mx-auto px-4 md:px-8">
      {/* Trust badges */}
      <motion.div
        className="max-w-3xl mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow mb-6">Fiducia &amp; Competenza</p>
        <h2 className="font-serif font-semibold text-4xl md:text-5xl text-brand-midnight tracking-[-0.02em] leading-[1.05] text-balance">
          Le ragioni per cui i clienti <em className="not-italic font-semibold text-brand-midnight">tornano</em>.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-midnight/15 border border-brand-midnight/15 mb-32">
        {trustPoints.map((t, i) => (
          <motion.div
            key={t.title}
            className="bg-brand-ivory p-8 md:p-10 group hover:bg-card transition-colors duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <span className="display-numeral text-2xl text-brand-midnight/40 not-italic font-normal tracking-normal block mb-6">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h4 className="font-serif font-semibold text-xl text-brand-midnight mb-2 tracking-[-0.01em]">{t.title}</h4>
            <p className="text-brand-midnight/70 text-sm leading-relaxed">{t.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Testimonials */}
      <motion.div
        className="max-w-3xl mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="eyebrow mb-6">Testimonianze</p>
        <h2 className="font-serif font-semibold text-4xl md:text-5xl text-brand-midnight tracking-[-0.02em] leading-[1.05] text-balance">
          Storie di chi si è <em className="not-italic font-semibold text-brand-midnight">affidato</em> a noi.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="border-l-2 border-brand-midnight/20 pl-6 md:pl-8 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <p className="display-numeral text-5xl text-brand-midnight/30 leading-none mb-4">"</p>
            <p className="font-serif text-brand-midnight text-lg md:text-xl italic leading-[1.6] mb-8 font-normal">
              {t.text}
            </p>
            <div className="border-t border-brand-midnight/15 pt-4">
              <p className="text-brand-midnight font-medium text-sm uppercase tracking-[0.2em]">{t.name}</p>
              <p className="text-brand-midnight/60 text-xs mt-2 uppercase tracking-[0.2em]">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
