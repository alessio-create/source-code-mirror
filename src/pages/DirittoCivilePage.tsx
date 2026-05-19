import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import BrandIcon from "@/components/BrandIcon";

const features = [
  "Controversie patrimoniali tra coniugi ed ex coniugi",
  "Divisioni ereditarie e successioni",
  "Donazioni e patti di famiglia",
  "Questioni immobiliari connesse alla famiglia",
  "Contratti e accordi prematrimoniali",
  "Recupero crediti in ambito familiare",
  "Risarcimento danni in ambito familiare",
  "Problematiche lavorative e diritto del lavoro",
  "Mediazione civile e negoziazione assistita",
];

const areas = [
  { icon: "famiglia" as const, title: "Patrimonio e immobili", desc: "Divisione di beni immobili, assegnazione della casa coniugale e risoluzione di controversie sulla proprietà." },
  { icon: "aggiornamento" as const, title: "Successioni", desc: "Gestione delle eredità, impugnazione di testamenti, divisioni ereditarie e tutela della quota di legittima." },
  { icon: "specializzazione" as const, title: "Lavoro e contrattualistica", desc: "Problematiche lavorative trattate con la collega della sede di Milano, accordi prematrimoniali, patti di famiglia e contratti tra familiari." },
  { icon: "civile" as const, title: "Contenzioso civile", desc: "Assistenza in giudizio per controversie patrimoniali, recupero crediti e risarcimento danni." },
];

import SEO from "@/components/SEO";

const DirittoCivilePage = () => (
  <div className="bg-brand-ivory min-h-screen">
    <SEO
      title="Diritto Civile — Successioni e Patrimonio | Avv. Di Vietro"
      description="Controversie patrimoniali, successioni e divisioni ereditarie. Assistenza legale civile connessa alla famiglia in Brianza e Milano."
      path="/diritto-civile"
    />
    <Header />
    <PageHero
      label="Servizi"
      title="Diritto Civile"
      description="Controversie civilistiche con attenzione alle questioni patrimoniali e successorie connesse alla famiglia."
      stat={{ value: "300+", label: "Cause civili\ngestite con successo" }}
      testimonial={{
        text: "Una professionista impeccabile. Ha risolto una complessa divisione ereditaria che si trascinava da anni, trovando un accordo equo per tutti gli eredi.",
        author: "Roberto C.",
        role: "Divisione ereditaria, Varedo",
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
              <p>Mi occupo inoltre di <strong>problematiche lavorative e di diritto del lavoro</strong>, materia che seguo insieme alla collega della sede di Milano: dalle vertenze sui rapporti di lavoro alle implicazioni economiche e contributive che si intrecciano spesso con la vita familiare.</p>
              <p>Che si tratti di una divisione ereditaria contestata, di un accordo prematrimoniale da redigere o di una controversia sulla proprietà dopo una separazione, il mio approccio privilegia sempre la ricerca di soluzioni negoziali prima di ricorrere al contenzioso.</p>
              <p>Quando il tribunale diventa inevitabile, ti garantisco un'assistenza rigorosa e determinata per la tutela dei tuoi diritti patrimoniali.</p>
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
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-brand-midnight mb-3">Aree di intervento</p>
          <h2 className="text-3xl md:text-4xl">Competenze civilistiche</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((a, i) => (
            <motion.div key={a.title} className="bg-brand-ivory p-8 border border-brand-midnight/15 text-center lift-hover" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="text-brand-midnight mx-auto mb-6 flex justify-center">
                <BrandIcon name={a.icon} size={56} />
              </div>
              <h3 className="text-xl mb-3 font-serif">{a.title}</h3>
              <p className="text-brand-midnight/70 leading-relaxed text-sm">{a.desc}</p>
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
