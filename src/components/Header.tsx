import { useState } from "react";
import { ChevronDown, Users, CreditCard, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const serviceItems = [
  {
    icon: Users,
    title: "Separazioni",
    description: "Soluzioni consensuali per ridurre lo stress emotivo",
    href: "#separazioni",
  },
  {
    icon: CreditCard,
    title: "Divorzi",
    description: "Definizione dei rapporti patrimoniali e personali",
    href: "#divorzi",
  },
  {
    icon: Heart,
    title: "Affido Figli",
    description: "Tutela dei minori e interesse del bambino",
    href: "#affido",
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
        <a className="text-xl md:text-2xl font-serif font-semibold text-brand-midnight tracking-tight" href="/">
          Donatella Di Vietro
        </a>

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
                        <motion.a
                          key={item.title}
                          href={item.href}
                          variants={itemVariants}
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
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a className="text-sm font-medium hover:text-brand-smoke transition" href="#chi-sono">Chi Sono</a>
          <a className="text-sm font-medium hover:text-brand-smoke transition" href="#blog">Blog</a>
          <a className="text-sm font-medium hover:text-brand-smoke transition" href="#contatti">Contatti</a>
        </nav>

        <div className="flex items-center space-x-4">
          <a
            className="flex items-center gap-2 bg-whatsapp text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition btn-transition"
            href="https://wa.me/390000000000"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

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
                        <motion.a
                          key={item.title}
                          href={item.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0, transition: { delay: i * 0.05 } }}
                          className="flex items-center gap-3 py-2 text-sm text-brand-smoke hover:text-brand-midnight transition"
                          onClick={() => setMobileOpen(false)}
                        >
                          <item.icon className="w-4 h-4" strokeWidth={1.5} />
                          {item.title}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <a className="block py-3 text-sm font-medium text-brand-midnight" href="#chi-sono" onClick={() => setMobileOpen(false)}>Chi Sono</a>
              <a className="block py-3 text-sm font-medium text-brand-midnight" href="#blog" onClick={() => setMobileOpen(false)}>Blog</a>
              <a className="block py-3 text-sm font-medium text-brand-midnight" href="#contatti" onClick={() => setMobileOpen(false)}>Contatti</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
