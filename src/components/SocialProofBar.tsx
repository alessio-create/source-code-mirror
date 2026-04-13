import { motion } from "framer-motion";
import { Star, Shield, Award, Clock } from "lucide-react";

const proofs = [
  { icon: Clock, label: "20+ anni di esperienza" },
  { icon: Star, label: "Centinaia di famiglie assistite" },
  { icon: Shield, label: "Riservatezza garantita" },
  { icon: Award, label: "Specializzata in diritto di famiglia" },
];

const SocialProofBar = () => (
  <section className="py-8 md:py-12 bg-brand-midnight relative overflow-hidden">
    <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: `radial-gradient(circle at 30% 50%, hsl(var(--brand-smoke)) 0%, transparent 50%)`
    }} />
    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {proofs.map((p, i) => (
          <motion.div
            key={p.label}
            className="flex items-center gap-3 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center shrink-0">
              <p.icon className="w-5 h-5 text-primary-foreground" strokeWidth={1.5} />
            </div>
            <span className="text-primary-foreground/90 text-sm font-medium">{p.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofBar;
