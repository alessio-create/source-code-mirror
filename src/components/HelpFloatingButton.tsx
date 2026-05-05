import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HelpFloatingButton = () => {
  return (
    <motion.div
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
        <span className="relative flex items-center justify-center w-[72px] h-[72px] rounded-full bg-brand-midnight text-brand-ivory shadow-[0_14px_30px_-12px_hsl(var(--brand-midnight)/0.55)] transition-transform duration-500 group-hover:scale-105">
          <MessageCircle className="w-6 h-6" strokeWidth={1.5} />
        </span>
      </Link>
    </motion.div>
  );
};

export default HelpFloatingButton;
