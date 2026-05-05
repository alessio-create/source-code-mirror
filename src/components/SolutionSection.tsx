import { motion } from "framer-motion";
import monogram from "@/assets/logo-monogram.svg";

const benefits = [
  "Ascolto autentico e comprensione della tua situazione",
  "Strategia legale personalizzata e trasparente",
  "Tutela dei tuoi diritti e di quelli dei tuoi figli",
  "Accompagnamento costante fino alla risoluzione",
];

const SolutionSection = () => (
  <section className="section-padding bg-brand-midnight relative overflow-hidden">
    {/* Monogram watermark */}
    <img
      src={monogram}
      alt=""
      aria-hidden
      className="absolute -right-32 top-10 w-[520px] opacity-[0.06] pointer-events-none select-none"
    />

    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow mb-8 text-brand-ivory/70 [&::before]:bg-brand-ivory/40">La Soluzione</p>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl text-brand-ivory leading-[1.05] tracking-[-0.02em] mb-10 text-balance">
            Un avvocato che <em className="not-italic font-semibold text-brand-ivory">capisce</em> davvero la tua situazione.
          </h2>
          <p className="drop-cap text-brand-ivory/75 text-base md:text-lg leading-[1.8] mb-12 max-w-2xl [&::first-letter]:!text-brand-ivory">
            Non sei un numero di pratica. Con oltre vent'anni di esperienza esclusiva nel diritto di famiglia, costruisco un percorso legale pensato intorno a te.
          </p>
          <ul className="space-y-0 mb-12 border-t border-brand-ivory/15">
            {benefits.map((item, i) => (
              <motion.li
                key={item}
                className="flex items-baseline gap-6 py-5 border-b border-brand-ivory/15"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              >
                <span className="display-numeral text-base text-brand-ivory/50 not-italic font-normal w-8 shrink-0 tracking-normal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-brand-ivory/90 font-light text-base md:text-lg">{item}</span>
              </motion.li>
            ))}
          </ul>
          <a href="#contatti" className="inline-flex items-center justify-center gap-3 bg-brand-ivory text-brand-midnight px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] hover:bg-brand-ivory/90 transition btn-transition">
            Consulenza Riservata
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </motion.div>

        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="border-l-2 border-brand-ivory/30 pl-8 md:pl-10 py-2">
            <p className="display-numeral text-7xl text-brand-ivory/30 leading-none mb-4">"</p>
            <p className="text-brand-ivory text-xl md:text-2xl italic leading-[1.5] mb-8 font-serif font-normal">
              Ogni famiglia ha una storia che merita rispetto e tutela. Il mio compito è guidarti attraverso la complessità legale con competenza e umanità — proteggendo ciò che conta di più.
            </p>
            <div className="border-t border-brand-ivory/15 pt-5">
              <p className="text-brand-ivory font-medium text-sm uppercase tracking-[0.2em]">Avv. Donatella Di Vietro</p>
              <p className="text-brand-ivory/60 text-xs mt-2 uppercase tracking-[0.2em]">Diritto di Famiglia</p>
            </div>
          </div>

          {/* Credentials card */}
          <div className="mt-10 grid grid-cols-2 gap-px bg-brand-ivory/15 border border-brand-ivory/15">
            {[
              { value: "20+", label: "Anni di Esperienza" },
              { value: "500+", label: "Famiglie Assistite" },
              { value: "100%", label: "Casi Personali" },
              { value: "5", label: "Aree di Diritto" },
            ].map((item) => (
              <div key={item.label} className="bg-brand-midnight p-6 text-center">
                <p className="display-numeral text-3xl md:text-4xl text-brand-ivory leading-none mb-3">{item.value}</p>
                <span aria-hidden className="block w-6 h-px bg-brand-ivory/30 mx-auto mb-3" />
                <p className="text-brand-ivory/60 text-[10px] uppercase tracking-[0.2em] font-medium">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Signature flourish */}
          <div className="mt-8 flex items-center gap-4 text-brand-ivory/50">
            <span className="h-px flex-1 bg-brand-ivory/15" />
            <span className="font-serif italic text-sm">Studio Di Vietro · Bovisio Masciago</span>
            <span className="h-px flex-1 bg-brand-ivory/15" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
