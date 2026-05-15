import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import BrandIcon from "@/components/BrandIcon";

const features = [
  "Separazione consensuale con negoziazione assistita",
  "Separazione giudiziale e contenzioso",
  "Accordi sulle condizioni economiche",
  "Assegnazione della casa coniugale",
  "Regolamentazione dei rapporti con i figli",
  "Modifica delle condizioni di separazione",
];

const steps = [
  { icon: "civile" as const, title: "Analisi della situazione", desc: "Valutiamo insieme ogni aspetto legale, patrimoniale ed emotivo per individuare la strategia migliore." },
  { icon: "famiglie-assistite" as const, title: "Negoziazione", desc: "Cerchiamo sempre l'accordo consensuale per ridurre tempi, costi e stress emotivo per tutta la famiglia." },
  { icon: "riservatezza" as const, title: "Tutela dei diritti", desc: "Proteggiamo i tuoi interessi e quelli dei tuoi figli con rigore tecnico e sensibilità umana." },
  { icon: "specializzazione" as const, title: "Risoluzione", desc: "Definiamo accordi chiari e duraturi, omologati dal tribunale per garantire certezza giuridica." },
];

import SEO from "@/components/SEO";

const SeparazioniPage = () => (
  <div className="bg-brand-ivory min-h-screen">
    <SEO
      title="Separazioni — Avv. Di Vietro | Diritto di Famiglia"
      description="Separazione consensuale o giudiziale, negoziazione assistita. Assistenza legale completa a Milano e in Brianza per tutelare te e la tua famiglia."
      path="/separazioni"
    />
    <Header />
    <PageHero
      label="Servizi"
      title="Separazioni"
      description="Assistenza legale completa per affrontare la separazione con consapevolezza, proteggendo i tuoi diritti e il benessere della tua famiglia."
      stat={{ value: "85%", label: "Risolte in via\nconsensuale" }}
      testimonial={{
        text: "La Dott.ssa Di Vietro ci ha guidato in una separazione consensuale in soli 3 mesi. Professionalità e umanità straordinarie.",
        author: "Marco R.",
        role: "Separazione consensuale, Monza",
        rating: 5,
      }}
    />

    {/* Content */}
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl mb-6">Separazione consensuale o giudiziale?</h2>
            <div className="space-y-5 text-brand-smoke text-base leading-relaxed">
              <p>La separazione è un momento che segna un cambiamento profondo nella vita di una famiglia. Il mio obiettivo è guidarti attraverso questo percorso con chiarezza e determinazione, cercando sempre la soluzione migliore per te e per i tuoi figli.</p>
              <p>Quando possibile, privilegio la separazione consensuale e la negoziazione assistita: percorsi più rapidi, meno costosi e meno conflittuali. Quando il dialogo non è possibile, ti assisto con esperienza e competenza nella separazione giudiziale.</p>
              <p>Ogni situazione è unica e merita un approccio personalizzato. Durante il primo colloquio, analizzeremo insieme la tua situazione per individuare la strategia più efficace.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <h3 className="text-xl mb-6">Cosa posso fare per te</h3>
            <div className="space-y-4">
              {features.map((f, i) => (
                <motion.div key={f} className="flex items-baseline gap-4 border-b border-brand-midnight/15 py-3" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <span className="display-numeral text-sm text-brand-midnight/40 not-italic font-normal tracking-normal w-8 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-brand-midnight text-base">{f}</span>
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
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-brand-midnight mb-3">Il metodo</p>
          <h2 className="text-3xl md:text-4xl">Come lavoro</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.title} className="bg-brand-ivory p-8 border border-brand-midnight/15 text-center lift-hover" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="text-brand-midnight mx-auto mb-6 flex justify-center">
                <BrandIcon name={s.icon} size={56} />
              </div>
              <h3 className="text-xl mb-3 font-serif">{s.title}</h3>
              <p className="text-brand-midnight/70 leading-relaxed text-sm">{s.desc}</p>
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
