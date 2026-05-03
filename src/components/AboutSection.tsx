import { motion } from "framer-motion";
import donatellaImg from "@/assets/donatella.jpg";

const AboutSection = () => (
  <section className="section-padding bg-card" id="chi-sono">
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Photo */}
        <motion.div
          className="w-full lg:w-5/12 relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="aspect-[3/4] rounded-2xl overflow-hidden premium-shadow-lg">
            <img
              alt="Avv. Donatella Di Vietro in studio"
              className="w-full h-full object-cover"
              src={donatellaImg}
            />
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          className="w-full lg:w-7/12"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-brand-accent-red mb-3">Chi Sono</p>
          <h2 className="text-3xl md:text-4xl mt-2 mb-4 leading-tight">
            Avv. Donatella Di Vietro
          </h2>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border" />
            <span className="text-brand-smoke text-sm font-medium uppercase tracking-wider">CEO & Managing Attorney</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="space-y-5 text-brand-smoke text-base leading-relaxed">
            <p>
              Laureata presso l'Università Cattolica del Sacro Cuore di Milano, ho sviluppato da subito una profonda passione per il diritto di famiglia e delle persone.
            </p>
            <p>
              Da oltre 20 anni assisto privati e famiglie nei momenti più complessi della loro vita, con un approccio che unisce rigore tecnico e comprensione umana.
            </p>
            <p>
              Il mio obiettivo è guidare ogni cliente attraverso la complessità legale, proteggendo ciò che conta di più: la famiglia, i figli e i diritti fondamentali.
            </p>
          </div>

          <motion.a
            href="#contatti"
            className="mt-10 inline-flex items-center gap-2 bg-brand-accent-red text-card px-8 py-4 rounded-md text-base font-semibold hover:opacity-90 transition btn-transition"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            Consulenza Gratuita
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </motion.a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
