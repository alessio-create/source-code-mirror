import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Quando è opportuno rivolgersi a un avvocato?",
    a: "È consigliabile contattare un avvocato specializzato in diritto di famiglia non appena si presenta una situazione di conflitto o incertezza nei rapporti familiari. Una consulenza tempestiva permette di valutare le opzioni disponibili e di agire nel modo più efficace per tutelare i propri diritti e quelli dei minori coinvolti.",
  },
  {
    q: "Come scegliere un buon avvocato divorzista?",
    a: "È importante cercare un professionista specializzato esclusivamente in diritto di famiglia, che dimostri non solo competenza tecnica ma anche capacità di ascolto ed empatia. Lo studio legale Di Vietro opera dal proprio studio di Bovisio Masciago con una gestione agevole delle pratiche presso i tribunali competenti.",
  },
  {
    q: "Quali sono i costi per una separazione o un divorzio?",
    a: "I costi variano significativamente a seconda che la procedura sia consensuale o giudiziale. Durante il primo colloquio informativo, forniamo sempre un preventivo dettagliato e trasparente, basato sulla complessità del caso e sulle necessità del cliente.",
  },
  {
    q: "Quanto tempo richiede una pratica di divorzio?",
    a: "Con le nuove normative (Divorzio Breve), i tempi si sono notevolmente ridotti. Una procedura consensuale può concludersi in pochi mesi, mentre una giudiziale richiede tempi più lunghi dettati dal calendario del tribunale.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding bg-brand-ivory">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-6">Domande Frequenti</p>
            <h2 className="font-serif font-medium text-4xl md:text-5xl text-brand-midnight tracking-[-0.02em] leading-[1.05] mb-6 text-balance">
              Risposte ai tuoi <em className="italic font-normal text-brand-midnight/70">dubbi</em>.
            </h2>
            <p className="text-brand-midnight/70 leading-[1.8]">
              Le domande che riceviamo più spesso, raccolte per offrirti subito un primo orientamento.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-brand-midnight/15">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-brand-midnight/15">
                  <button
                    className="flex justify-between items-start w-full py-6 md:py-7 text-left group"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="display-numeral text-base text-brand-midnight/40 not-italic font-normal tracking-normal w-8 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-xl md:text-2xl text-brand-midnight tracking-[-0.01em] leading-snug">
                        {faq.q}
                      </span>
                    </span>
                    <motion.span
                      animate={{ rotate: open === i ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 ml-4 mt-1.5"
                    >
                      <Plus className="w-5 h-5 text-brand-midnight" strokeWidth={1.25} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 pl-13 ml-13 text-brand-midnight/75 leading-[1.8] text-base md:text-lg max-w-2xl" style={{ paddingLeft: "3.25rem" }}>
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
