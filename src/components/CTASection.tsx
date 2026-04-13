import { motion } from "framer-motion";

const CTASection = () => (
  <section className="section-padding bg-brand-midnight text-center relative overflow-hidden" id="contatti">
    <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--brand-smoke)) 0%, transparent 70%)`
    }} />
    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-brand-accent-red mb-4">Contattaci</p>
        <h2 className="text-4xl md:text-5xl text-primary-foreground mb-6">
          Proteggi la tua famiglia.{" "}
          <br className="hidden md:block" />
          Preserva il tuo futuro.
        </h2>
        <p className="text-brand-smoke text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Prenota una consulenza gratuita e riservata per valutare insieme la tua situazione con la massima professionalità.
        </p>
        <a
          className="inline-flex items-center gap-2 bg-brand-accent-red text-card px-10 py-4 rounded-md text-base font-semibold hover:opacity-90 transition btn-transition tracking-wide"
          href="tel:+390362590859"
        >
          Consulenza Gratuita
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
