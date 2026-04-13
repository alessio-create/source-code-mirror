import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Users, CreditCard, Heart, Scale, ShieldCheck, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const serviceItems = [
  {
    icon: Users,
    title: "Separazioni e Divorzi",
    description: "Procedure consensuali e giudiziali, negoziazione assistita",
    href: "/separazioni",
  },
  {
    icon: Heart,
    title: "Diritto dei Minori",
    description: "Affidamento, collocamento e tutela dei figli",
    href: "/affido-figli",
  },
  {
    icon: Scale,
    title: "Diritto di Famiglia",
    description: "Consulenza completa sui rapporti familiari",
    href: "/divorzi",
  },
  {
    icon: ShieldCheck,
    title: "Diritto delle Persone",
    description: "Amministrazione di sostegno e tutela dei diritti",
    href: "/contatti",
  },
  {
    icon: Briefcase,
    title: "Diritto Civile",
    description: "Questioni patrimoniali e successorie",
    href: "/contatti",
  },
];

const megaMenuVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const, staggerChildren: 0.05 } },
  exit: { opacity: 0, y: -8, scale: 0.96, transition: { duration: 0.15, ease: "easeIn" as const } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

const mobileMenuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto" as const, opacity: 1, transition: { duration: 0.3, ease: "easeOut" as const } },
  exit: { height: 0, opacity: 0, transition: { duration: 0.2, ease: "easeIn" as const } },
};

const Header = () => {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServizi, setMobileServizi] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-effect border-b border-border">
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <Link className="text-xl md:text-2xl font-serif font-semibold text-brand-midnight tracking-tight" to="/">
          Donatella Di Vietro
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium hover:text-brand-smoke transition">
              Servizi
              <motion.span animate={{ rotate: megaOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-4 h-4" />
              </motion.span>
            </button>

            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                  variants={megaMenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="bg-card border border-border rounded-xl shadow-2xl p-6 w-[480px]">
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-smoke mb-4">
                      Aree di competenza
                    </p>
                    <div className="space-y-1">
                      {serviceItems.map((item) => (
                        <motion.div key={item.title} variants={itemVariants}>
                          <Link
                            to={item.href}
                            className="flex items-start gap-4 p-3 rounded-lg hover:bg-brand-garden transition group"
                            onClick={() => setMegaOpen(false)}
                          >
                            <div className="w-10 h-10 bg-brand-garden group-hover:bg-brand-midnight flex items-center justify-center rounded-lg shrink-0 transition">
                              <item.icon className="w-5 h-5 text-brand-midnight group-hover:text-primary-foreground transition" strokeWidth={1.5} />
                            </div>
                            <div>
                              <span className="text-sm font-semibold text-brand-midnight">{item.title}</span>
                              <p className="text-xs text-brand-smoke mt-0.5">{item.description}</p>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link className="text-sm font-medium hover:text-brand-smoke transition" to="/chi-sono">Chi Sono</Link>
          <Link className="text-sm font-medium hover:text-brand-smoke transition" to="/blog">Blog</Link>
          <Link className="text-sm font-medium hover:text-brand-smoke transition" to="/contatti">Contatti</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link
            to="/contatti"
            className="flex items-center gap-2 bg-brand-accent-red text-card px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition btn-transition"
          >
            Consulenza Gratuita
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-brand-midnight transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-brand-midnight transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-brand-midnight transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden bg-card border-t border-border overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              <div>
                <button
                  className="flex items-center justify-between w-full py-3 text-sm font-medium text-brand-midnight"
                  onClick={() => setMobileServizi(!mobileServizi)}
                >
                  Servizi
                  <motion.span animate={{ rotate: mobileServizi ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {mobileServizi && (
                    <motion.div
                      className="pl-4 space-y-1 pb-2 overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1, transition: { duration: 0.25 } }}
                      exit={{ height: 0, opacity: 0, transition: { duration: 0.15 } }}
                    >
                      {serviceItems.map((item, i) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0, transition: { delay: i * 0.05 } }}
                        >
                          <Link
                            to={item.href}
                            className="flex items-center gap-3 py-2 text-sm text-brand-smoke hover:text-brand-midnight transition"
                            onClick={() => setMobileOpen(false)}
                          >
                            <item.icon className="w-4 h-4" strokeWidth={1.5} />
                            {item.title}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link className="block py-3 text-sm font-medium text-brand-midnight" to="/chi-sono" onClick={() => setMobileOpen(false)}>Chi Sono</Link>
              <Link className="block py-3 text-sm font-medium text-brand-midnight" to="/blog" onClick={() => setMobileOpen(false)}>Blog</Link>
              <Link className="block py-3 text-sm font-medium text-brand-midnight" to="/contatti" onClick={() => setMobileOpen(false)}>Contatti</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
