import { motion } from "framer-motion";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";

const features = [
  "Divorzio consensuale e congiunto",
  "Divorzio giudiziale e contenzioso",
  "Negoziazione assistita per il divorzio",
  "Divorzio breve (6 mesi / 12 mesi)",
  "Assegno divorzile e revisione condizioni",
  "Divisione del patrimonio comune",
  "Questioni relative alla casa coniugale",
  "Accordi sui figli maggiorenni non autosufficienti",
];

import SEO from "@/components/SEO";

const DivorziPage = () => (
  <div className="bg-brand-ivory min-h-screen">
    <SEO
      title="Divorzi — Avv. Di Vietro | Diritto di Famiglia"
      description="Divorzio consensuale, giudiziale e divorzio breve. Definizione dei rapporti patrimoniali e personali tra coniugi con competenza e riservatezza."
      path="/divorzi"
    />
    <Header />
    <PageHero
      label="Servizi"
      title="Divorzi"
      description="Definizione dei rapporti patrimoniali e personali tra coniugi con competenza, riservatezza e attenzione alla tutela dei diritti di ciascuno."
      stat={{ value: "500+", label: "Famiglie assistite\ncon successo" }}
      testimonial={{
        text: "Dopo anni di conflitto, l'Avv. Di Vietro ha trovato una soluzione equa in tempi rapidissimi. Non avrei potuto chiedere di meglio.",
        author: "Laura S.",
        role: "Divorzio consensuale, Desio",
        rating: 5,
      }}
    />

    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl mb-6">Verso un nuovo inizio</h2>
            <div className="space-y-5 text-brand-smoke text-base leading-relaxed">
              <p>Il divorzio segna la fine del vincolo matrimoniale e l'inizio di una nuova fase di vita. Con la riforma del "Divorzio Breve", i tempi si sono notevolmente ridotti, rendendo possibile ottenere lo scioglimento del matrimonio in tempi ragionevoli.</p>
              <p>Ti assisto nella scelta del percorso più adatto alla tua situazione, che sia il divorzio congiunto davanti al tribunale, la negoziazione assistita o il divorzio in comune, valutando sempre tutte le implicazioni economiche e personali.</p>
              <p>L'obiettivo è raggiungere una definizione equa dei rapporti patrimoniali, garantendo la tutela dei figli e il rispetto dei diritti di entrambe le parti.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <h3 className="text-xl mb-6">I miei servizi per il divorzio</h3>
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

    {/* Stats */}
    <section className="py-16 bg-brand-midnight">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: "Divorzi gestiti" },
            { value: "85%", label: "Risolti consensualmente" },
            { value: "20+", label: "Anni di esperienza" },
            { value: "100%", label: "Riservatezza" },
          ].map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <p className="text-3xl md:text-4xl font-bold text-brand-midnight mb-2">{stat.value}</p>
              <p className="text-brand-smoke text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
    <Footer />
  </div>
);

export default DivorziPage;
