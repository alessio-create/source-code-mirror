import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ROTATING_TEXT = "SERVE AIUTO • PRENOTA UN COLLOQUIO • ";

const HelpFloatingButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
      setVisible(scrolled >= 0.5);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const chars = ROTATING_TEXT.split("");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-8 right-8 z-[60] w-[120px] h-[120px]"
        >
          <Link
            to="/contatti"
            aria-label="Serve aiuto? Prenota un colloquio"
            className="relative flex items-center justify-center w-full h-full group"
          >
            {/* Rotating text ring */}
            <motion.svg
              viewBox="0 0 120 120"
              className="absolute inset-0 w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            >
              <defs>
                <path
                  id="help-circle-path"
                  d="M 60,60 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
                />
              </defs>
              <text
                fill="hsl(var(--brand-midnight))"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.28em",
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                <textPath href="#help-circle-path">
                  {ROTATING_TEXT.repeat(2)}
                </textPath>
              </text>
            </motion.svg>

            {/* Inner circle */}
            <span className="relative flex items-center justify-center w-[72px] h-[72px] rounded-full bg-brand-midnight text-brand-ivory shadow-[0_14px_30px_-12px_hsl(var(--brand-midnight)/0.55)] transition-transform duration-500 group-hover:scale-105">
              <MessageCircle className="w-6 h-6" strokeWidth={1.5} />
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HelpFloatingButton;
