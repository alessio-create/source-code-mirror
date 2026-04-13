import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const SolutionSection = () => (
  <section className="section-padding bg-brand-midnight relative overflow-hidden">
    <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: `radial-gradient(circle at 20% 80%, hsl(var(--brand-garden)) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, hsl(var(--brand-smoke)) 0%, transparent 50%)`
    }} />

    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
            <span className="text-primary-foreground text-sm font-medium">La soluzione esiste</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-primary-foreground mb-8 leading-tight">
            Un avvocato che capisce davvero la tua situazione
          </h2>
          <p className="text-brand-smoke text-lg leading-relaxed mb-8">
            Non sei solo un numero di pratica. Con oltre 20 anni di esperienza esclusivamente nel diritto di famiglia, ti offro un percorso legale pensato intorno a te, alla tua storia e ai tuoi bisogni reali.
          </p>
          <div className="space-y-4">
            {[
              "Ascolto autentico e comprensione della tua situazione",
              "Strategia legale personalizzata e trasparente",
              "Tutela dei tuoi diritti e di quelli dei tuoi figli",
              "Accompagnamento costante fino alla risoluzione",
            ].map((item, i) => (
              <motion.div
                key={item}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                <ArrowRight className="w-4 h-4 text-primary-foreground shrink-0" />
                <span className="text-primary-foreground/90 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-10">
            <p className="text-primary-foreground/80 text-lg italic leading-relaxed mb-6 font-serif">
              "Ogni famiglia ha una storia che merita rispetto e tutela. Il mio compito è guidarti attraverso la complessità legale con competenza e umanità, proteggendo ciò che conta di più."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center text-primary-foreground font-serif font-bold text-lg">
                D
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">Avv. Donatella Di Vietro</p>
                <p className="text-brand-smoke text-sm">Specializzata in Diritto di Famiglia</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
