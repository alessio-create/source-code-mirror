import donatellaImg from "@/assets/donatella.jpg";

const AboutSection = () => (
  <section className="section-padding bg-brand-ivory" id="chi-sono">
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="w-full lg:w-5/12 relative">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden premium-shadow-lg">
            <img
              alt="Avv. Donatella Di Vietro in studio"
              className="w-full h-full object-cover"
              src={donatellaImg}
            />
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-8 bg-card p-8 rounded-xl premium-shadow hidden md:block max-w-xs">
            <p className="text-brand-midnight font-serif italic text-xl leading-snug">
              "Ogni famiglia ha una storia che merita rispetto e tutela."
            </p>
          </div>
        </div>
        <div className="w-full lg:w-7/12">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-brand-smoke mb-4">Chi Sono</p>
          <h2 className="text-4xl md:text-5xl mt-2 mb-8 leading-tight">
            Avv. Donatella Di Vietro
          </h2>
          <div className="space-y-5 text-brand-smoke text-lg leading-relaxed">
            <p>
              Laureata presso l'Università Cattolica del Sacro Cuore di Milano, ho sviluppato da subito una profonda passione per il diritto di famiglia e delle persone.
            </p>
            <p>
              Da oltre 20 anni assisto privati e famiglie nei momenti più complessi della loro vita, gestendo con professionalità e competenza le questioni legali legate ai rapporti familiari fra coniugi e fra genitori e figli.
            </p>
            <p>
              Il mio approccio unisce rigore tecnico e comprensione umana — fondamentale quando si trattano legami e affetti. Offro assistenza legale specifica in caso di separazione o divorzio, affidamento dei figli e costituzione di famiglie di fatto.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-serif font-bold text-brand-midnight">20+</p>
              <p className="text-sm text-brand-smoke mt-1">Anni di esperienza</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-brand-midnight">5</p>
              <p className="text-sm text-brand-smoke mt-1">Aree di competenza</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold text-brand-midnight">100%</p>
              <p className="text-sm text-brand-smoke mt-1">Dedizione al cliente</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
