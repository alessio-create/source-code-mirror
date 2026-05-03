import { motion } from "framer-motion";
import donatellaImg from "@/assets/donatella.png";
import brandPattern from "@/assets/brand-pattern.png";

const stats = [
  { value: "20+", label: "Anni di Esperienza" },
  { value: "500+", label: "Famiglie Assistite" },
  { value: "5", label: "Aree di Competenza" },
];

const HeroSection = () => (
  <section className="relative bg-brand-ivory overflow-hidden">
    {/* Brand pattern overlay */}
    <div
      className="absolute inset-0 opacity-[0.07] pointer-events-none"
      style={{ backgroundImage: `url(${brandPattern})`, backgroundSize: '400px', backgroundRepeat: 'repeat' }}
    />
    <div className="container mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-0">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Text */}
        <div className="lg:w-1/2 pb-8 md:pb-12 lg:pb-16">
          <motion.div
            className="inline-flex items-center gap-2 border border-brand-midnight/20 px-4 py-1.5 rounded-full mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-2 h-2 bg-brand-accent-red rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-midnight">Avvocato Divorzista</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6 font-serif lg:text-7xl font-extrabold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            La tua famiglia merita<br />
            un avvocato che<br />
            <motion.em 
              className="italic text-brand-accent-red inline-block"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              ascolta davvero.
            </motion.em>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-brand-smoke mb-10 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Studio Legale Di Vietro — specializzato in diritto di famiglia, 
            separazioni e tutela dei minori. Ci prendiamo cura di ogni caso 
            con competenza e umanità.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              className="bg-brand-accent-red text-card px-8 py-4 rounded-md text-base font-semibold text-center hover:opacity-90 transition btn-transition tracking-wide inline-flex items-center justify-center gap-2"
              href="#contatti"
            >
              Consulenza Gratuita
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a
              className="border-2 border-brand-midnight text-brand-midnight px-8 py-4 rounded-md text-base font-semibold text-center hover:bg-brand-midnight hover:text-primary-foreground transition btn-transition tracking-wide"
              href="#servizi"
            >
              I nostri servizi
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          className="lg:w-1/2 relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full max-w-md lg:max-w-lg">
            <div className="aspect-[3/4] flex items-end justify-center bg-brand-ivory">
              <img
                alt="Avv. Donatella Di Vietro"
                className="w-full h-full object-contain object-bottom bg-brand-ivory"
                src={donatellaImg}
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -left-4 bottom-24 bg-card p-4 rounded-xl premium-shadow hidden md:block">
              <p className="text-brand-midnight font-serif italic text-lg leading-snug max-w-[200px]">
                "Ogni famiglia merita rispetto e tutela."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Stats bar */}
    <div className="bg-brand-midnight">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-3 divide-x divide-primary-foreground/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="py-6 md:py-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary-foreground">{s.value}</p>
              <p className="text-primary-foreground/60 text-xs sm:text-sm mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
