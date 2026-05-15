import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import BrandIcon from "@/components/BrandIcon";

const features = [
  "Amministrazione di sostegno",
  "Interdizione e inabilitazione",
  "Tutela delle persone fragili e anziane",
  "Nomina e vigilanza dell'amministratore",
  "Modifiche e revoche dei provvedimenti",
  "Tutela dei diritti fondamentali della persona",
  "Protezione patrimoniale del beneficiario",
  "Rapporti con i servizi sociali e sanitari",
];

const cases = [
  { icon: "umanita" as const, title: "Persone anziane", desc: "Tutela di genitori o nonni che non riescono più a gestire autonomamente i propri affari quotidiani e patrimoniali." },
  { icon: "persone" as const, title: "Disabilità e fragilità", desc: "Protezione giuridica per persone con disabilità fisiche o psichiche che necessitano di assistenza nelle decisioni." },
  { icon: "riservatezza" as const, title: "Dipendenze e vulnerabilità", desc: "Supporto legale per soggetti in situazioni di dipendenza o vulnerabilità che rischiano di compromettere il proprio patrimonio." },
  { icon: "civile" as const, title: "Gestione patrimoniale", desc: "Quando un familiare non è più in grado di amministrare i propri beni, conti correnti o immobili in sicurezza." },
];

import SEO from "@/components/SEO";

const DirittoPersonePage = () => (
  <div className="bg-brand-ivory min-h-screen">
    <SEO
      title="Diritto delle Persone — Amministrazione di Sostegno"
      description="Amministrazione di sostegno, interdizione e tutela delle persone fragili. Assistenza legale a Milano e in Brianza."
      path="/diritto-persone"
    />
    <Header />
    <PageHero
      label="Servizi"
      title="Diritto delle Persone"
      description="Amministrazione di sostegno, interdizione, inabilitazione e tutela dei diritti fondamentali delle persone fragili."
      stat={{ value: "150+", label: "Amministrazioni\ndi sostegno gestite" }}
      testimonial={{
        text: "L'Avv. Di Vietro ha gestito l'amministrazione di sostegno di mio padre con una sensibilità e competenza rare. Ci ha guidati in ogni passaggio burocratico.",
        author: "Elena V.",
        role: "Amministrazione di sostegno, Limbiate",
        rating: 5,
      }}
    />

    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl mb-6">Proteggere chi non può proteggersi</h2>
            <div className="space-y-5 text-brand-smoke text-base leading-relaxed">
              <p>Il diritto delle persone si occupa della tutela giuridica di chi, a causa di infermità o menomazioni fisiche o psichiche, si trova nell'impossibilità di provvedere ai propri interessi.</p>
              <p>L'amministrazione di sostegno, introdotta dalla Legge 6/2004, è lo strumento più flessibile e meno invasivo per proteggere le persone fragili, limitando il meno possibile la loro autonomia e dignità.</p>
              <p>Ti assisto nella scelta della misura di protezione più adatta, dalla presentazione del ricorso fino alla nomina dell'amministratore, garantendo che ogni decisione sia presa nel rispetto della volontà e del benessere del beneficiario.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <h3 className="text-xl mb-6">I miei servizi</h3>
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
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-brand-midnight mb-3">Quando serve</p>
          <h2 className="text-3xl md:text-4xl">Situazioni in cui posso aiutarti</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, i) => (
            <motion.div key={c.title} className="bg-brand-ivory p-8 border border-brand-midnight/15 text-center lift-hover" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="text-brand-midnight mx-auto mb-6 flex justify-center">
                <BrandIcon name={c.icon} size={56} />
              </div>
              <h3 className="text-xl mb-3 font-serif">{c.title}</h3>
              <p className="text-brand-midnight/70 leading-relaxed text-sm">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
    <Footer />
  </div>
);

export default DirittoPersonePage;
