import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Users, FileText, Shield, Scale } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const features = [
  "Separazione consensuale con negoziazione assistita",
  "Separazione giudiziale e contenzioso",
  "Accordi sulle condizioni economiche",
  "Assegnazione della casa coniugale",
  "Regolamentazione dei rapporti con i figli",
  "Modifica delle condizioni di separazione",
];

const steps = [
  { icon: FileText, title: "Analisi della situazione", desc: "Valutiamo insieme ogni aspetto legale, patrimoniale ed emotivo per individuare la strategia migliore." },
  { icon: Users, title: "Negoziazione", desc: "Cerchiamo sempre l'accordo consensuale per ridurre tempi, costi e stress emotivo per tutta la famiglia." },
  { icon: Shield, title: "Tutela dei diritti", desc: "Proteggiamo i tuoi interessi e quelli dei tuoi figli con rigore tecnico e sensibilità umana." },
  { icon: Scale, title: "Risoluzione", desc: "Definiamo accordi chiari e duraturi, omologati dal tribunale per garantire certezza giuridica." },
];

const SeparazioniPage = () => (
  <div className="bg-brand-ivory min-h-screen">
    <Header />

    {/* Hero */}
    <section className="pt-32 pb-20 bg-brand-midnight text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 30% 50%, hsl(var(--brand-smoke)) 0%, transparent 70%)` }} />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-brand-smoke hover:text-brand-accent-red transition-colors mb-8 text-sm font-medium">
            ← Torna alla home
          </Link>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-brand-accent-red mb-4">Servizi</p>
          <h1 className="text-4xl md:text-6xl leading-tight mb-6">Separazioni</h1>
          <p className="text-brand-smoke text-lg md:text-xl max-w-2xl leading-relaxed">
            Assistenza legale completa per affrontare la separazione con consapevolezza, proteggendo i tuoi diritti e il benessere della tua famiglia.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Content */}
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl mb-6">Separazione consensuale o giudiziale?</h2>
            <div className="space-y-5 text-brand-smoke text-lg leading-relaxed">
              <p>La separazione è un momento che segna un cambiamento profondo nella vita di una famiglia. Il mio obiettivo è guidarti attraverso questo percorso con chiarezza e determinazione, cercando sempre la soluzione migliore per te e per i tuoi figli.</p>
              <p>Quando possibile, privilegio la separazione consensuale e la negoziazione assistita: percorsi più rapidi, meno costosi e meno conflittuali. Quando il dialogo non è possibile, ti assisto con esperienza e competenza nella separazione giudiziale.</p>
              <p>Ogni situazione è unica e merita un approccio personalizzato. Durante il primo colloquio, analizzeremo insieme la tua situazione per individuare la strategia più efficace.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <h3 className="text-2xl mb-6">Cosa posso fare per te</h3>
            <div className="space-y-4">
              {features.map((f, i) => (
                <motion.div key={f} className="flex items-start gap-3" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <CheckCircle2 className="w-5 h-5 text-brand-accent-red mt-0.5 shrink-0" />
                  <span className="text-brand-smoke text-lg">{f}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="section-padding bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-brand-accent-red mb-3">Il metodo</p>
          <h2 className="text-3xl md:text-4xl">Come lavoro</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.title} className="bg-brand-ivory p-8 rounded-2xl border border-border text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="w-14 h-14 bg-brand-accent-red/10 flex items-center justify-center rounded-xl mx-auto mb-5">
                <s.icon className="w-6 h-6 text-brand-accent-red" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl mb-3">{s.title}</h3>
              <p className="text-brand-smoke leading-relaxed text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
    <Footer />
  </div>
);

export default SeparazioniPage;
