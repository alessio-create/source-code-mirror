import { motion } from "framer-motion";
import donatellaImg from "@/assets/donatella.png";

const AboutSection = () => (
  <section className="section-padding bg-card" id="chi-sono">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Photo */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative max-w-md">
            <div className="absolute -inset-4 border border-brand-midnight/15 hidden md:block" />
            <div className="aspect-[3/4] overflow-hidden bg-brand-garden">
              <img
                alt="Avv. Donatella Di Vietro in studio"
                className="w-full h-full object-cover"
                src={donatellaImg}
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between border-t border-brand-midnight/15 pt-3">
              <span className="text-[11px] uppercase tracking-[0.28em] text-brand-midnight/70 font-medium">
                In Studio
              </span>
              <span className="font-serif italic text-brand-midnight text-sm">
                Bovisio Masciago
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <p className="eyebrow mb-6">Chi Sono</p>
          <h2 className="font-serif font-medium text-4xl md:text-5xl lg:text-6xl text-brand-midnight leading-[1.05] tracking-[-0.02em] mb-3 text-balance">
            Avv. Donatella Di Vietro
          </h2>
          <p className="font-serif italic text-brand-midnight/60 text-xl md:text-2xl mb-10">
            Diritto di famiglia, minori e persone.
          </p>

          <div className="space-y-6 text-brand-midnight/80 text-base md:text-lg leading-[1.8] border-l-2 border-brand-midnight/15 pl-6 md:pl-8">
            <p>
              Laureata presso l'Università Cattolica del Sacro Cuore di Milano, ho sviluppato da subito una profonda passione per il diritto di famiglia e delle persone.
            </p>
            <p>
              Da oltre vent'anni assisto privati e famiglie nei momenti più complessi della loro vita, con un approccio che unisce rigore tecnico e comprensione umana.
            </p>
            <p>
              Il mio obiettivo è guidare ogni cliente attraverso la complessità legale, proteggendo ciò che conta di più: la famiglia, i figli, i diritti fondamentali.
            </p>
          </div>

          <motion.a
            href="#contatti"
            className="mt-12 inline-flex btn-primary"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            Prenota un Colloquio
          </motion.a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
