import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "ddv-cookie-consent";

const CookieConsent = () => {
  const [decision, setDecision] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    setDecision(saved);
    if (!saved) {
      const t = setTimeout(() => setOpen(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const handleChoice = (value: "accepted" | "rejected") => {
    localStorage.setItem(STORAGE_KEY, value);
    setDecision(value);
    setOpen(false);
  };

  return (
    <>
      {/* Floating cookie button - hidden once accepted */}
      {decision !== "accepted" && (
        <motion.button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Preferenze cookie"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 z-[60] flex items-center justify-center w-14 h-14 rounded-full bg-brand-ivory border border-brand-midnight/20 text-brand-midnight shadow-[0_10px_24px_-10px_hsl(var(--brand-midnight)/0.35)] hover:bg-brand-midnight hover:text-brand-ivory hover:-translate-y-0.5 transition-all duration-500"
        >
          <Cookie className="w-5 h-5" strokeWidth={1.5} />
        </motion.button>
      )}

      {/* Pop-up */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 left-4 z-[60] w-[min(360px,calc(100vw-2rem))] bg-brand-ivory border border-brand-midnight/15 p-6 shadow-[0_24px_60px_-20px_hsl(var(--brand-midnight)/0.35)]"
            role="dialog"
            aria-label="Informativa cookie"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Chiudi"
              className="absolute top-3 right-3 text-brand-midnight/60 hover:text-brand-midnight transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="eyebrow mb-3">Privacy</div>
            <h3 className="font-serif text-xl text-brand-midnight mb-3">
              Rispettiamo la tua riservatezza
            </h3>
            <p className="text-sm text-brand-midnight/75 leading-relaxed mb-5">
              Utilizziamo cookie tecnici essenziali e, previo consenso, cookie di
              analisi per migliorare la tua esperienza. Puoi modificare le
              preferenze in qualsiasi momento.
            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                type="button"
                onClick={() => handleChoice("accepted")}
                className="btn-primary-sm flex-1 justify-center"
              >
                Accetta
              </button>
              <button
                type="button"
                onClick={() => handleChoice("rejected")}
                className="inline-flex items-center justify-center gap-2 border border-brand-midnight/30 text-brand-midnight px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] hover:bg-brand-midnight hover:text-brand-ivory transition-all duration-500 flex-1"
              >
                Rifiuta
              </button>
            </div>

            {decision && (
              <p className="text-[11px] text-brand-midnight/50 mt-3 uppercase tracking-[0.18em]">
                Scelta attuale: {decision === "accepted" ? "Accettati" : "Rifiutati"}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieConsent;
