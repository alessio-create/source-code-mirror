const HeroSection = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-warmGray overflow-hidden">
    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl text-brand-darkBlue leading-tight mb-6">
          Stai affrontando una separazione o un divorzio?{" "}
          <br className="hidden md:block" />
          <span className="italic font-normal">Non devi farlo da solo.</span>
        </h1>
        <p className="text-lg md:text-xl text-brand-blue mb-10 max-w-2xl leading-relaxed">
          Ti accompagno con empatia e competenza legale per proteggere i tuoi diritti e la serenità dei tuoi figli. Oltre 20 anni di esperienza tra Milano e Bovisio-Masciago.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            className="bg-brand-darkBlue text-primary-foreground px-8 py-4 rounded-md text-lg font-medium text-center hover:bg-brand-blue transition btn-transition"
            href="#contatti"
          >
            Prenota un colloquio
          </a>
          <a
            className="bg-card border border-brand-soft text-brand-darkBlue px-8 py-4 rounded-md text-lg font-medium text-center hover:bg-brand-light transition btn-transition"
            href="#servizi"
          >
            I miei servizi
          </a>
        </div>
      </div>
    </div>
    <div className="absolute right-0 bottom-0 opacity-10 hidden lg:block pointer-events-none">
      <svg fill="none" height="400" viewBox="0 0 200 200" width="400" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="150" fill="hsl(var(--brand-blue))" r="100" />
      </svg>
    </div>
  </section>
);

export default HeroSection;
