import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, FileText, Users, Shield, Scale } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

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

const DivorziPage = () => (
  <div className="bg-brand-ivory min-h-screen">
    <Header />

    <section className="pt-32 pb-20 bg-brand-midnight text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 70% 50%, hsl(var(--brand-smoke)) 0%, transparent 70%)` }} />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-brand-smoke hover:text-brand-accent-red transition-colors mb-8 text-sm font-medium">
            ← Torna alla home
          </Link>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-brand-accent-red mb-4">Servizi</p>
          <h1 className="text-4xl md:text-6xl leading-tight mb-6">Divorzi</h1>
          <p className="text-brand-smoke text-lg md:text-xl max-w-2xl leading-relaxed">
            Definizione dei rapporti patrimoniali e personali tra coniugi con competenza, riservatezza e attenzione alla tutela dei diritti di ciascuno.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl mb-6">Verso un nuovo inizio</h2>
            <div className="space-y-5 text-brand-smoke text-lg leading-relaxed">
              <p>Il divorzio segna la fine del vincolo matrimoniale e l'inizio di una nuova fase di vita. Con la riforma del "Divorzio Breve", i tempi si sono notevolmente ridotti, rendendo possibile ottenere lo scioglimento del matrimonio in tempi ragionevoli.</p>
              <p>Ti assisto nella scelta del percorso più adatto alla tua situazione, che sia il divorzio congiunto davanti al tribunale, la negoziazione assistita o il divorzio in comune, valutando sempre tutte le implicazioni economiche e personali.</p>
              <p>L'obiettivo è raggiungere una definizione equa dei rapporti patrimoniali, garantendo la tutela dei figli e il rispetto dei diritti di entrambe le parti.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <h3 className="text-2xl mb-6">I miei servizi per il divorzio</h3>
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
              <p className="text-3xl md:text-4xl font-bold text-brand-accent-red mb-2">{stat.value}</p>
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
