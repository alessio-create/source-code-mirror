import { motion } from "framer-motion";
import donatellaImg from "@/assets/donatella-hero.png";
import monogram from "@/assets/logo-monogram.svg";
import monogramPattern from "@/assets/monogram-pattern.svg";

const stats = [
  { value: "20+", label: "Anni di Esperienza" },
  { value: "500+", label: "Famiglie Assistite" },
  { value: "5", label: "Aree di Competenza" },
];

const HeroSection = () => (
  <section className="relative bg-brand-ivory overflow-hidden">
    {/* Editorial monogram watermark */}
    <img
      src={monogram}
      alt=""
      aria-hidden
      className="absolute -right-32 -top-20 w-[640px] opacity-[0.04] pointer-events-none select-none"
    />

    <div className="container mx-auto px-4 md:px-8 pt-32 md:pt-36 pb-20 md:pb-28 relative">
      {/* Top meta line */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between border-b border-brand-midnight/15 pb-5 mb-12 md:mb-16"
      >
        <span className="text-[11px] uppercase tracking-[0.28em] text-brand-midnight/70 font-medium">
          Studio Legale — Bovisio Masciago (MB)
        </span>
        <span className="hidden md:inline text-[11px] uppercase tracking-[0.28em] text-brand-midnight/70 font-medium">
          Diritto di Famiglia · Minori · Persone
        </span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="eyebrow mb-8"
          >
            Avv. Donatella Di Vietro
          </motion.p>

          <motion.h1
            className="font-serif font-semibold text-[2.75rem] sm:text-6xl lg:text-[5rem] leading-[0.95] tracking-[-0.025em] text-brand-midnight mb-8 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            La tua famiglia merita un avvocato che{" "}
            <em className="not-italic font-semibold text-brand-midnight">ascolta davvero.</em>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-brand-midnight/70 mb-10 max-w-xl leading-[1.7]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Studio specializzato in diritto di famiglia, separazioni e tutela dei minori.
            Ogni caso seguito personalmente, con competenza tecnica e profonda umanità.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a className="btn-primary" href="#contatti">
              Consulenza Riservata
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a className="btn-ghost" href="#servizi">Aree di Competenza</a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative max-w-md mx-auto">
            {/* Hairline frame */}
            <div className="absolute -inset-4 border border-brand-midnight/15 hidden md:block" />
            <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-brand-garden relative">
              <img
                alt="Ritratto dell'Avv. Donatella Di Vietro, avvocata specializzata in diritto di famiglia, minori e persone, presso il suo studio di Bovisio Masciago"
                className="w-full h-full object-cover object-[center_20%]"
                src={donatellaImg}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={800}
                height={1000}
              />
            </div>
            {/* Editorial caption */}
            <div className="mt-5 flex items-baseline justify-between border-t border-brand-midnight/15 pt-3">
              <span className="text-[11px] uppercase tracking-[0.28em] text-brand-midnight/70 font-medium">
                Ritratto · 2026
              </span>
              <span className="font-serif italic text-brand-midnight text-sm">
                Studio Di Vietro
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Stats — editorial strip on midnight */}
    <div className="bg-brand-midnight relative overflow-hidden">
      {/* Monogram pattern background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url(${monogramPattern})`,
          backgroundSize: "180px 180px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="grid grid-cols-3 divide-x divide-brand-ivory/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="py-10 md:py-14 text-center px-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
            >
              <p className="display-numeral text-5xl md:text-7xl text-brand-ivory">{s.value}</p>
              <p className="text-brand-ivory/60 text-[11px] sm:text-xs mt-3 uppercase tracking-[0.28em] font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
