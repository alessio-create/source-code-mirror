import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="relative pt-36 pb-24 md:pt-52 md:pb-40 bg-brand-ivory overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `radial-gradient(circle at 70% 30%, hsl(var(--brand-midnight)) 0%, transparent 50%)`
    }} />

    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <div className="max-w-3xl">
        <motion.p
          className="text-sm font-medium tracking-[0.2em] uppercase text-brand-smoke mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Studio Legale Di Vietro — Bovisio Masciago
        </motion.p>
        <motion.h1
          className="text-5xl md:text-7xl leading-[1.05] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Consulenze legali{" "}
          <br className="hidden md:block" />
          per privati{" "}
          <em className="font-medium italic">e famiglie</em>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-brand-smoke mb-12 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Ci prendiamo cura di ogni singolo caso con la stessa dedizione. 
          Competenza nel diritto di famiglia, dei minori e delle persone 
          con oltre 20 anni di esperienza.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            className="bg-brand-midnight text-primary-foreground px-10 py-4 rounded-md text-base font-medium text-center hover:opacity-90 transition btn-transition tracking-wide"
            href="#contatti"
          >
            Prenota un colloquio
          </a>
          <a
            className="border-2 border-brand-midnight text-brand-midnight px-10 py-4 rounded-md text-base font-medium text-center hover:bg-brand-midnight hover:text-primary-foreground transition btn-transition tracking-wide"
            href="#servizi"
          >
            I nostri servizi
          </a>
        </motion.div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-garden to-transparent" />
  </section>
);

export default HeroSection;
