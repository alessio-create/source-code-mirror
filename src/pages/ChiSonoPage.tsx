import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import PageHero from "@/components/PageHero";

const ChiSonoPage = () => (
  <div className="bg-brand-ivory min-h-screen">
    <Header />
    <PageHero
      label="Lo Studio"
      title="Chi Sono"
      description="Oltre 20 anni di esperienza nel diritto di famiglia al servizio delle persone e delle famiglie."
      stat={{ value: "20+", label: "Anni di esperienza\nal tuo fianco" }}
      testimonial={{
        text: "Un'avvocata che unisce competenza e cuore. Mi ha seguita con pazienza in ogni fase della separazione, facendomi sentire sempre tutelata.",
        author: "Giulia P.",
        role: "Cliente, Lissone",
        rating: 5,
      }}
    />

    <AboutSection />

    {/* Timeline */}
    <section className="section-padding bg-card">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-brand-midnight mb-3">Percorso</p>
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
                <span className="text-brand-midnight font-bold text-lg">{item.year}</span>
              </div>
              <div className="border-l-2 border-brand-midnight pl-6 pb-2">
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
