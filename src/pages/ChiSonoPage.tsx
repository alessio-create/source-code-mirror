import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

const ChiSonoPage = () => (
  <div className="bg-brand-ivory min-h-screen">
    <Header />

    <section className="pt-32 pb-20 bg-brand-midnight text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 40% 60%, hsl(var(--brand-smoke)) 0%, transparent 70%)` }} />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-brand-smoke hover:text-brand-accent-red transition-colors mb-8 text-sm font-medium">
            ← Torna alla home
          </Link>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-brand-accent-red mb-4">Lo Studio</p>
          <h1 className="text-4xl md:text-6xl leading-tight mb-6">Chi Sono</h1>
          <p className="text-brand-smoke text-lg md:text-xl max-w-2xl leading-relaxed">
            Oltre 20 anni di esperienza nel diritto di famiglia al servizio delle persone e delle famiglie.
          </p>
        </motion.div>
      </div>
    </section>

    <AboutSection />

    {/* Timeline */}
    <section className="section-padding bg-card">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-brand-accent-red mb-3">Percorso</p>
          <h2 className="text-3xl md:text-4xl">La mia formazione</h2>
        </motion.div>
        <div className="space-y-8">
          {[
            { year: "2003", title: "Laurea in Giurisprudenza", desc: "Università Cattolica del Sacro Cuore di Milano, con tesi in diritto di famiglia." },
            { year: "2005", title: "Abilitazione all'esercizio della professione", desc: "Iscrizione all'Albo degli Avvocati di Monza e della Brianza." },
            { year: "2010", title: "Specializzazione in diritto di famiglia", desc: "Formazione avanzata in mediazione familiare e diritto minorile." },
            { year: "2015", title: "Studio Legale Di Vietro", desc: "Apertura dello studio a Bovisio Masciago, punto di riferimento per il diritto di famiglia in Brianza." },
          ].map((item, i) => (
            <motion.div key={item.year} className="flex gap-6" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="shrink-0 w-16 text-right">
                <span className="text-brand-accent-red font-bold text-lg">{item.year}</span>
              </div>
              <div className="border-l-2 border-brand-accent-red pl-6 pb-2">
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-brand-smoke leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <FAQSection />
    <CTASection />
    <Footer />
  </div>
);

export default ChiSonoPage;
