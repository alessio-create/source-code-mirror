import { motion } from "framer-motion";
import { CheckCircle2, Briefcase, FileText, Scale, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";

const features = [
  "Controversie patrimoniali tra coniugi ed ex coniugi",
  "Divisioni ereditarie e successioni",
  "Donazioni e patti di famiglia",
  "Questioni immobiliari connesse alla famiglia",
  "Contratti e accordi prematrimoniali",
  "Recupero crediti in ambito familiare",
  "Risarcimento danni in ambito familiare",
  "Mediazione civile e negoziazione assistita",
];

const areas = [
  { icon: Home, title: "Patrimonio e immobili", desc: "Divisione di beni immobili, assegnazione della casa coniugale e risoluzione di controversie sulla proprietà." },
  { icon: FileText, title: "Successioni", desc: "Gestione delle eredità, impugnazione di testamenti, divisioni ereditarie e tutela della quota di legittima." },
  { icon: Scale, title: "Contrattualistica", desc: "Redazione e revisione di accordi prematrimoniali, patti di famiglia e contratti tra familiari." },
  { icon: Briefcase, title: "Contenzioso civile", desc: "Assistenza in giudizio per controversie patrimoniali, recupero crediti e risarcimento danni." },
];

const DirittoCivilePage = () => (
  <div className="bg-brand-ivory min-h-screen">
    <Header />
    <PageHero
      label="Servizi"
      title="Diritto Civile"
      description="Controversie civilistiche con attenzione alle questioni patrimoniali e successorie connesse alla famiglia."
      stat={{ value: "300+", label: "Cause civili\ngestite con successo" }}
      testimonial={{
        text: "Una professionista impeccabile. Ha risolto una complessa divisione ereditaria che si trascinava da anni, trovando un accordo equo per tutti gli eredi.",
        author: "Roberto C.",
        role: "Divisione ereditaria — Varedo",
        rating: 5,
      }}
    />

    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl mb-6">Tutela del patrimonio familiare</h2>
            <div className="space-y-5 text-brand-smoke text-base leading-relaxed">
              <p>Le questioni patrimoniali e successorie sono spesso strettamente legate al diritto di famiglia. La mia esperienza ventennale mi consente di affrontare queste problematiche con una visione d'insieme che integra gli aspetti familiari e civilistici.</p>
              <p>Che si tratti di una divisione ereditaria contestata, di un accordo prematrimoniale da redigere o di una controversia sulla proprietà dopo una separazione, il mio approccio privilegia sempre la ricerca di soluzioni negoziali prima di ricorrere al contenzioso.</p>
              <p>Quando il tribunale diventa inevitabile, ti garantisco un'assistenza rigorosa e determinata per la tutela dei tuoi diritti patrimoniali.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <h3 className="text-xl mb-6">I miei servizi</h3>
            <div className="space-y-4">
              {features.map((f, i) => (
                <motion.div key={f} className="flex items-start gap-3" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <CheckCircle2 className="w-5 h-5 text-brand-midnight mt-0.5 shrink-0" />
                  <span className="text-brand-smoke text-base">{f}</span>
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
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-brand-midnight mb-3">Aree di intervento</p>
          <h2 className="text-3xl md:text-4xl">Competenze civilistiche</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((a, i) => (
            <motion.div key={a.title} className="bg-brand-ivory p-8 rounded-2xl border border-border text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="w-14 h-14 bg-brand-midnight/10 flex items-center justify-center rounded-xl mx-auto mb-5">
                <a.icon className="w-6 h-6 text-brand-midnight" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl mb-3">{a.title}</h3>
              <p className="text-brand-smoke leading-relaxed text-sm">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
    <Footer />
  </div>
);

export default DirittoCivilePage;
