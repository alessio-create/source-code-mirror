import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Scale, Heart, Briefcase, ShieldCheck, ArrowRight } from "lucide-react";

const services = [
  { icon: Users, title: "Separazioni e Divorzi", description: "Assistenza legale nelle procedure di separazione consensuale e giudiziale, divorzio e negoziazione assistita.", href: "/separazioni" },
  { icon: Heart, title: "Diritto dei Minori", description: "Affidamento, collocamento e regolamentazione dei rapporti genitori-figli nel superiore interesse del bambino.", href: "/affido-figli" },
  { icon: Scale, title: "Diritto di Famiglia", description: "Consulenza completa per le questioni legate ai rapporti familiari fra coniugi e fra genitori e figli.", href: "/divorzi" },
  { icon: ShieldCheck, title: "Diritto delle Persone", description: "Amministrazione di sostegno, interdizione, inabilitazione e tutela dei diritti fondamentali.", href: "/diritto-persone" },
  { icon: Briefcase, title: "Diritto Civile", description: "Controversie civilistiche con attenzione alle questioni patrimoniali e successorie connesse alla famiglia.", href: "/diritto-civile" },
];

const ServicesSection = () => (
  <section className="section-padding bg-brand-warm" id="servizi">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        className="flex flex-col md:flex-row md:items-end md:justify-between mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-brand-accent-red mb-3">Aree di competenza</p>
          <h2 className="text-3xl md:text-4xl">I nostri servizi legali</h2>
        </div>
        <Link
          to="/contatti"
          className="mt-6 md:mt-0 inline-flex items-center gap-2 bg-brand-accent-red text-card px-6 py-3 rounded-md text-sm font-semibold hover:opacity-90 transition btn-transition"
        >
          Consulenza Gratuita
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link
              to={s.href}
              className="block bg-card p-8 rounded-2xl border border-border group hover:premium-shadow-lg transition-all duration-500 relative overflow-hidden h-full"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="w-14 h-14 bg-brand-warm flex items-center justify-center rounded-xl mb-6 group-hover:bg-brand-midnight transition-colors duration-300">
                <s.icon className="w-6 h-6 text-brand-midnight group-hover:text-primary-foreground transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl mb-3">{s.title}</h3>
              <p className="text-brand-smoke leading-relaxed mb-4">{s.description}</p>
              <span className="inline-flex items-center gap-1 text-brand-accent-red text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Scopri di più <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
