import donatellaImg from "@/assets/donatella.jpg";

const AboutSection = () => (
  <section className="section-padding bg-brand-warmGray" id="chi-sono">
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img
              alt="Avv. Donatella Di Vietro in studio"
              className="w-full h-full object-cover"
              src={donatellaImg}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-lg shadow-lg hidden md:block">
            <p className="text-brand-darkBlue font-serif italic text-lg">
              "Ogni famiglia ha una storia che merita rispetto."
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <span className="text-brand-soft font-semibold tracking-widest uppercase text-sm">Chi Sono</span>
          <h2 className="text-3xl md:text-5xl text-brand-darkBlue mt-4 mb-6 leading-tight font-serif">
            Avv. Donatella Di Vietro
          </h2>
          <div className="space-y-4 text-brand-blue text-lg">
            <p>
              Mi sono laureata presso l'Università Cattolica del Sacro Cuore di Milano, sviluppando da subito una profonda passione per il diritto di famiglia e delle persone.
            </p>
            <p>
              Da oltre 20 anni assisto privati e famiglie nei momenti più complessi della loro vita. Credo fermamente in un approccio che unisca il rigore tecnico alla comprensione umana, fondamentale quando si trattano legami e affetti.
            </p>
            <p>
              Esercito la mia professione con dedizione nei miei studi di Milano e Bovisio-Masciago, offrendo un punto di riferimento solido e onesto per chi cerca chiarezza e protezione legale.
            </p>
          </div>
          <div className="mt-10">
            <a
              className="inline-block border-b-2 border-brand-darkBlue pb-1 text-brand-darkBlue font-semibold hover:text-brand-soft hover:border-brand-soft transition"
              href="#contatti"
            >
              Approfondisci il mio percorso
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
