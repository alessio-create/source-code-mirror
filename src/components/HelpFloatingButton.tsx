import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ROTATING_TEXT = "SERVE AIUTO • PRENOTA UN COLLOQUIO • ";

const parseRgb = (str: string): [number, number, number, number] | null => {
  const m = str.match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  const parts = m[1].split(",").map((p) => parseFloat(p.trim()));
  return [parts[0], parts[1], parts[2], parts[3] ?? 1];
};

const getEffectiveBgLuminance = (x: number, y: number): number => {
  const els = document.elementsFromPoint(x, y);
  for (const el of els) {
    if (el instanceof HTMLElement && el.closest("[data-floating-help]")) continue;
    const bg = getComputedStyle(el as Element).backgroundColor;
    const rgb = parseRgb(bg);
    if (rgb && rgb[3] > 0.1) {
      const [r, g, b] = rgb;
      return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    }
  }
  return 1;
};

const HelpFloatingButton = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const check = () => {
      const node = ref.current;
      if (!node) return;
      const r = node.getBoundingClientRect();
      // Sample a point on the rotating ring (top of circle)
      const x = r.left + r.width / 2;
      const y = r.top + 10;
      const lum = getEffectiveBgLuminance(x, y);
      setIsDark(lum < 0.5);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    const id = window.setInterval(check, 500);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      window.clearInterval(id);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      data-floating-help
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-4 right-4 z-[60] w-[120px] h-[120px]"
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
          {/* Stroke halo for legibility on complex backgrounds */}
          <text
            stroke={isDark ? "hsl(var(--brand-midnight) / 0.55)" : "hsl(var(--brand-ivory) / 0.85)"}
            strokeWidth={3}
            strokeLinejoin="round"
            fill="none"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.28em",
              fontWeight: 500,
              textTransform: "uppercase",
              paintOrder: "stroke",
              transition: "stroke 0.4s ease",
            }}
          >
            <textPath href="#help-circle-path">
              {ROTATING_TEXT.repeat(2)}
            </textPath>
          </text>
          <text
            fill={isDark ? "hsl(var(--brand-ivory))" : "hsl(var(--brand-midnight))"}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.28em",
              fontWeight: 500,
              textTransform: "uppercase",
              transition: "fill 0.4s ease",
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
  );
};

export default HelpFloatingButton;
