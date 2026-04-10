const CTASection = () => (
  <section className="section-padding bg-brand-midnight text-center">
    <div className="container mx-auto px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-serif mb-6 text-primary-foreground">
        Il primo passo è sempre il più difficile. <br /> Ma non devi farlo da solo.
      </h2>
      <p className="text-brand-smoke text-lg mb-10 max-w-xl mx-auto">
        Prenota un colloquio conoscitivo in studio o online per valutare insieme la tua situazione con la massima riservatezza.
      </p>
      <a
        className="inline-block bg-card text-brand-midnight px-10 py-4 rounded-md text-lg font-semibold hover:bg-brand-ivory transition btn-transition"
        href="#contatti"
      >
        Prenota un colloquio
      </a>
    </div>
  </section>
);

export default CTASection;
