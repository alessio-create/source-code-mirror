import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-brand-smoke mb-4">Domande Frequenti</p>
          <h2 className="text-3xl md:text-4xl mb-6">Risposte ai tuoi dubbi</h2>
          <p className="text-brand-smoke text-base">Domande e risposte nel campo del diritto di famiglia</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-xl overflow-hidden transition-all duration-300">
              <button
                className="flex justify-between items-center w-full p-6 cursor-pointer font-semibold text-brand-midnight text-left text-lg hover:bg-brand-ivory/50 transition"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.q}
                <ChevronDown
                  className={`w-5 h-5 shrink-0 ml-4 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-brand-smoke leading-relaxed">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
