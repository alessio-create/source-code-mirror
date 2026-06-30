import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import monogram from "@/assets/logo-monogram.svg";

const CTASection = () => (
  <section className="bg-brand-midnight text-center relative overflow-hidden py-28 md:py-40" id="contatti">
    <img
      src={monogram}
      alt=""
      aria-hidden
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] opacity-[0.05] pointer-events-none select-none"
    />
    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="eyebrow eyebrow-center mb-8 text-brand-ivory/70 [&::before]:bg-brand-ivory/40 [&::after]:bg-brand-ivory/40">
          Iniziamo Insieme
        </p>
        <h2 className="font-serif font-semibold text-4xl md:text-6xl lg:text-7xl text-brand-ivory leading-[1.02] tracking-[-0.025em] mb-8 text-balance max-w-4xl mx-auto">
          Proteggi la tua famiglia. <em className="not-italic font-semibold text-brand-ivory">Preserva</em> il tuo futuro.
        </h2>
        <p className="text-brand-ivory/70 text-base md:text-lg mb-14 max-w-xl mx-auto leading-[1.8]">
          Prenota un colloquio riservato per valutare insieme la tua situazione, con la massima professionalità e discrezione.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="tel:+390362590859" className="btn-primary-light">
            Consulenza Riservata
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>

        {/* Contact strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-px bg-brand-ivory/10 border-y border-brand-ivory/15 max-w-4xl mx-auto">
          {[
            { Icon: Phone, label: "Telefono", value: "+39 0362 590859", href: "tel:+390362590859" },
            { Icon: Mail, label: "Email", value: "info@avvocatodivietro.com", href: "mailto:info@avvocatodivietro.com" },
            { Icon: MapPin, label: "Studio", value: "Bovisio Masciago (MB)", href: "#" },
          ].map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="bg-brand-midnight py-8 px-4 group hover:bg-brand-midnight/70 transition-colors text-center"
            >
              <Icon className="w-5 h-5 text-brand-ivory/60 mx-auto mb-3" strokeWidth={1.25} />
              <p className="text-[11px] uppercase tracking-[0.28em] text-brand-ivory/60 mb-2">{label}</p>
              <p className="text-brand-ivory text-sm font-light break-all">{value}</p>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
