import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, Heart, Shield, Users, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

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
  { icon: Heart, title: "Interesse del minore", desc: "Ogni decisione è guidata dal superiore interesse del bambino, il principio cardine del diritto minorile." },
  { icon: Users, title: "Bigenitorialità", desc: "Il diritto del minore a mantenere un rapporto equilibrato e continuativo con entrambi i genitori." },
  { icon: Shield, title: "Protezione", desc: "Tutela dei minori in situazioni di conflitto, violenza o inadempimento degli obblighi genitoriali." },
  { icon: BookOpen, title: "Ascolto", desc: "Il minore ha diritto di essere ascoltato in tutte le questioni che lo riguardano, nel rispetto della sua età." },
];

const AffidoPage = () => (
  <div className="bg-brand-ivory min-h-screen">
    <Header />

    <section className="pt-32 pb-20 bg-brand-midnight text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 50% 30%, hsl(var(--brand-smoke)) 0%, transparent 70%)` }} />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-brand-smoke hover:text-brand-accent-red transition-colors mb-8 text-sm font-medium">
            ← Torna alla home
          </Link>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-brand-accent-red mb-4">Servizi</p>
          <h1 className="text-4xl md:text-6xl leading-tight mb-6">Affido Figli</h1>
          <p className="text-brand-smoke text-lg md:text-xl max-w-2xl leading-relaxed">
            Tutela dei minori e interesse del bambino al centro di ogni scelta. Assistenza specializzata per garantire il benessere dei tuoi figli.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl mb-6">I tuoi figli al primo posto</h2>
            <div className="space-y-5 text-brand-smoke text-lg leading-relaxed">
              <p>Nelle situazioni di separazione e divorzio, la questione dell'affidamento dei figli è quella che richiede la maggiore delicatezza e competenza. Il benessere dei minori deve essere sempre la priorità assoluta.</p>
              <p>L'affidamento condiviso è il regime ordinario previsto dalla legge: entrambi i genitori mantengono la responsabilità genitoriale e partecipano attivamente alla vita dei figli. Solo in casi eccezionali il giudice dispone l'affidamento esclusivo.</p>
              <p>Ti assisto nella definizione di accordi che tutelino i tuoi figli e il tuo rapporto con loro, cercando sempre soluzioni equilibrate che favoriscano la serenità di tutta la famiglia.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <h3 className="text-2xl mb-6">Servizi di tutela minorile</h3>
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

    {/* Principles */}
    <section className="section-padding bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-brand-accent-red mb-3">I principi guida</p>
          <h2 className="text-3xl md:text-4xl">Il superiore interesse del minore</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, i) => (
            <motion.div key={p.title} className="bg-brand-ivory p-8 rounded-2xl border border-border text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="w-14 h-14 bg-brand-accent-red/10 flex items-center justify-center rounded-xl mx-auto mb-5">
                <p.icon className="w-6 h-6 text-brand-accent-red" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl mb-3">{p.title}</h3>
              <p className="text-brand-smoke leading-relaxed text-sm">{p.desc}</p>
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
