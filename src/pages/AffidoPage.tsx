import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import BrandIcon from "@/components/BrandIcon";

const features = [
  "Affidamento condiviso e esclusivo",
  "Collocamento prevalente del minore",
  "Regolamentazione del diritto di visita",
  "Mantenimento dei figli minori e maggiorenni",
  "Modifica delle condizioni di affidamento",
  "Tutela in caso di inadempimento dell'altro genitore",
  "Ascolto del minore in sede giudiziale",
  "Mediazione familiare e composizione dei conflitti",
];

const principles = [
  { icon: "futuro-figli" as const, title: "Interesse del minore", desc: "Ogni decisione è guidata dal superiore interesse del bambino, il principio cardine del diritto minorile." },
  { icon: "minori" as const, title: "Bigenitorialità", desc: "Il diritto del minore a mantenere un rapporto equilibrato e continuativo con entrambi i genitori." },
  { icon: "riservatezza" as const, title: "Protezione", desc: "Tutela dei minori in situazioni di conflitto, violenza o inadempimento degli obblighi genitoriali." },
  { icon: "aggiornamento" as const, title: "Ascolto", desc: "Il minore ha diritto di essere ascoltato in tutte le questioni che lo riguardano, nel rispetto della sua età." },
];

const AffidoPage = () => (
  <div className="bg-brand-ivory min-h-screen">
    <Header />
    <PageHero
      label="Servizi"
      title="Affido Figli"
      description="Tutela dei minori e interesse del bambino al centro di ogni scelta. Assistenza specializzata per garantire il benessere dei tuoi figli."
      stat={{ value: "100%", label: "Dedizione alla\ntutela dei minori" }}
      testimonial={{
        text: "Grazie all'Avv. Di Vietro, i miei figli hanno potuto mantenere un rapporto sereno con entrambi i genitori. Un'avvocata che mette i bambini al primo posto.",
        author: "Francesca M.",
        role: "Affidamento condiviso — Seregno",
        rating: 5,
      }}
    />

    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl mb-6">I tuoi figli al primo posto</h2>
            <div className="space-y-5 text-brand-smoke text-base leading-relaxed">
              <p>Nelle situazioni di separazione e divorzio, la questione dell'affidamento dei figli è quella che richiede la maggiore delicatezza e competenza. Il benessere dei minori deve essere sempre la priorità assoluta.</p>
              <p>L'affidamento condiviso è il regime ordinario previsto dalla legge: entrambi i genitori mantengono la responsabilità genitoriale e partecipano attivamente alla vita dei figli. Solo in casi eccezionali il giudice dispone l'affidamento esclusivo.</p>
              <p>Ti assisto nella definizione di accordi che tutelino i tuoi figli e il tuo rapporto con loro, cercando sempre soluzioni equilibrate che favoriscano la serenità di tutta la famiglia.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <h3 className="text-xl mb-6">Servizi di tutela minorile</h3>
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

    <section className="section-padding bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-brand-midnight mb-3">I principi guida</p>
          <h2 className="text-3xl md:text-4xl">Il superiore interesse del minore</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, i) => (
            <motion.div key={p.title} className="bg-brand-ivory p-8 border border-brand-midnight/15 text-center lift-hover" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="text-brand-midnight mx-auto mb-6 flex justify-center">
                <BrandIcon name={p.icon} size={56} />
              </div>
              <h3 className="text-xl mb-3 font-serif">{p.title}</h3>
              <p className="text-brand-midnight/70 leading-relaxed text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
    <Footer />
  </div>
);

export default AffidoPage;
