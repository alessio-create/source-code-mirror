import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const services = [
  { num: "01", title: "Separazioni e Divorzi", description: "Procedure consensuali e giudiziali, divorzio breve e negoziazione assistita.", href: "/separazioni" },
  { num: "02", title: "Diritto dei Minori", description: "Affidamento, collocamento e regolamentazione dei rapporti genitori-figli.", href: "/affido-figli" },
  { num: "03", title: "Diritto di Famiglia", description: "Consulenza completa per i rapporti familiari fra coniugi e fra genitori e figli.", href: "/divorzi" },
  { num: "04", title: "Diritto delle Persone", description: "Amministrazione di sostegno, interdizione e tutela dei diritti fondamentali.", href: "/diritto-persone" },
  { num: "05", title: "Diritto Civile", description: "Controversie civilistiche, questioni patrimoniali e successorie familiari.", href: "/diritto-civile" },
];

const ServicesSection = () => (
  <section className="section-padding bg-brand-ivory" id="servizi">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16 md:mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="lg:col-span-8">
          <p className="eyebrow mb-6">Aree di Competenza</p>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-brand-midnight tracking-[-0.02em] text-balance">
            Una pratica legale dedicata <em className="not-italic font-semibold text-brand-midnight">esclusivamente</em> alla famiglia.
          </h2>
        </div>
        <div className="lg:col-span-4 lg:text-right">
          <Link to="/contatti" className="btn-primary">
            Prenota un Colloquio
          </Link>
        </div>
      </motion.div>

      <div className="border-t border-brand-midnight/15">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <Link
              to={s.href}
              className="group grid grid-cols-12 gap-4 md:gap-8 items-center py-8 md:py-10 border-b border-brand-midnight/15 hover:bg-brand-garden/30 transition-colors duration-500 px-2 md:px-4 -mx-2 md:-mx-4"
            >
              <div className="col-span-2 md:col-span-1 display-numeral text-3xl md:text-5xl text-brand-midnight/40 group-hover:text-brand-midnight transition-colors duration-500">
                {s.num}
              </div>
              <div className="col-span-10 md:col-span-5">
                <h3 className="font-serif font-semibold text-2xl md:text-3xl text-brand-midnight tracking-[-0.02em] group-hover:translate-x-1 transition-transform duration-500">
                  {s.title}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-5 text-brand-midnight/70 text-base leading-relaxed">
                {s.description}
              </div>
              <div className="col-span-12 md:col-span-1 flex md:justify-end">
                <ArrowUpRight className="w-6 h-6 text-brand-midnight/40 group-hover:text-brand-midnight group-hover:rotate-45 transition-all duration-500" strokeWidth={1.25} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
