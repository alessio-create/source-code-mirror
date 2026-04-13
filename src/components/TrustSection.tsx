import { motion } from "framer-motion";
import { Shield, BookOpen, Users, HeartHandshake, Scale, GraduationCap } from "lucide-react";

const trustPoints = [
  { icon: GraduationCap, title: "Università Cattolica di Milano", desc: "Formazione giuridica d'eccellenza" },
  { icon: Scale, title: "Specializzazione esclusiva", desc: "Diritto di famiglia, minori e persone" },
  { icon: Shield, title: "Massima riservatezza", desc: "Ogni caso trattato con discrezione totale" },
  { icon: Users, title: "Centinaia di famiglie", desc: "Assistite con successo negli anni" },
  { icon: HeartHandshake, title: "Approccio umano", desc: "Rigore tecnico e comprensione empatica" },
  { icon: BookOpen, title: "Aggiornamento costante", desc: "Sempre al passo con le nuove normative" },
];

const testimonials = [
  {
    text: "Donatella mi ha guidata in una separazione difficile con una calma incredibile. Mi sono sentita protetta e ascoltata fin dal primo giorno.",
    name: "Laura B.",
    role: "Separazione consensuale",
  },
  {
    text: "Professionista seria e molto onesta. Ha saputo gestire il conflitto per l'affido dei figli evitando inutili guerre e cercando il loro bene.",
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
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-brand-smoke mb-4">Perché sceglierci</p>
        <h2 className="text-4xl md:text-5xl mb-6">Garanzie di fiducia</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-24">
        {trustPoints.map((t, i) => (
          <motion.div
            key={t.title}
            className="p-6 rounded-2xl border border-border bg-card text-center group hover:premium-shadow transition-all duration-400"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div className="w-12 h-12 bg-brand-midnight/5 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-midnight group-hover:scale-110 transition-all duration-300">
              <t.icon className="w-6 h-6 text-brand-midnight group-hover:text-primary-foreground transition-colors duration-300" strokeWidth={1.5} />
            </div>
            <h4 className="font-semibold text-foreground mb-1">{t.title}</h4>
            <p className="text-brand-smoke text-sm">{t.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Testimonials */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-brand-smoke mb-4">Testimonianze</p>
        <h2 className="text-4xl md:text-5xl">Storie di chi si è affidato a noi</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="bg-card border border-border rounded-2xl p-8 relative hover:premium-shadow-lg transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <svg className="w-8 h-8 text-brand-garden mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z"/>
            </svg>
            <p className="text-foreground text-lg leading-relaxed mb-6 italic font-serif">{t.text}</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-midnight rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                {t.name[0]}
              </div>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-brand-smoke text-sm">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
