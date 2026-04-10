const CTASection = () => (
  <section className="section-padding bg-brand-garden text-center relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--brand-midnight)) 0%, transparent 70%)`
    }} />
    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <p className="text-sm font-medium tracking-[0.2em] uppercase text-brand-smoke mb-4">Contattaci</p>
      <h2 className="text-4xl md:text-5xl mb-6">
        Il primo passo è sempre <br className="hidden md:block" /> il più importante.
      </h2>
      <p className="text-brand-smoke text-lg mb-12 max-w-xl mx-auto leading-relaxed">
        Prenota un colloquio conoscitivo per valutare insieme la tua situazione con la massima riservatezza e professionalità.
      </p>
      <a
        className="inline-block bg-brand-midnight text-primary-foreground px-12 py-4 rounded-md text-base font-medium hover:opacity-90 transition btn-transition tracking-wide"
        href="#contatti"
      >
        Prenota un colloquio
      </a>
    </div>
  </section>
);

export default CTASection;
