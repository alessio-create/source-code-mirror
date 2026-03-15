import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Come scegliere un buon avvocato divorzista a Milano?",
    a: "È importante cercare un professionista specializzato esclusivamente in diritto di famiglia, che dimostri non solo competenza tecnica ma anche capacità di ascolto ed empatia. La vicinanza geografica tra Milano e l'hinterland (come Bovisio-Masciago) permette una gestione agevole delle pratiche presso i tribunali competenti.",
  },
  {
    q: "Quali sono i costi per una separazione o un divorzio?",
    a: "I costi variano significativamente a seconda che la procedura sia consensuale o giudiziale. Durante il primo colloquio informativo, fornisco sempre un preventivo dettagliato e trasparente, basato sulla complessità del caso e sulle necessità del cliente.",
  },
  {
    q: "Quanto tempo richiede una pratica di divorzio?",
    a: "Con le nuove normative (Divorzio Breve), i tempi si sono notevolmente ridotti. Una procedura consensuale può concludersi in pochi mesi, mentre una giudiziale richiede tempi più lunghi dettati dal calendario del tribunale.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-padding bg-brand-warmGray">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h2 className="text-3xl md:text-4xl text-brand-darkBlue mb-12 text-center font-serif">Domande Frequenti</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card rounded-lg shadow-sm">
              <button
                className="flex justify-between items-center w-full p-6 cursor-pointer font-semibold text-brand-darkBlue text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.q}
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-brand-blue">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
