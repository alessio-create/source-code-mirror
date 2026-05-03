import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { Star, Shield, Award, Clock } from "lucide-react";
import { useEffect, useRef } from "react";

const proofs = [
  { icon: Clock, value: 20, suffix: "+", label: "Anni di Esperienza" },
  { icon: Star, value: 500, suffix: "+", label: "Famiglie Assistite" },
  { icon: Shield, value: 100, suffix: "%", label: "Riservatezza Garantita" },
  { icon: Award, value: 5, suffix: "", label: "Aree di Competenza" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionVal, target, {
      duration: target > 100 ? 2 : 1.2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [isInView, motionVal, target]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${v}${suffix}`;
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const SocialProofBar = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-brand-accent-red mb-3">Perché sceglierci</p>
        <h2 className="text-3xl md:text-4xl mb-4">Perché lo Studio Legale Di Vietro?</h2>
        <p className="text-brand-smoke text-lg max-w-2xl mx-auto">
          Non sei un semplice numero di pratica. Ogni cliente riceve attenzione personalizzata, 
          competenza specifica e un supporto costante fino alla risoluzione.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {proofs.map((p, i) => (
          <motion.div
            key={p.label}
            className="text-center p-6 rounded-2xl border border-border bg-card hover:premium-shadow transition-all duration-400 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <div className="w-14 h-14 bg-brand-warm rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-midnight group-hover:scale-110 transition-all duration-300">
              <p.icon className="w-6 h-6 text-brand-midnight group-hover:text-primary-foreground transition-colors duration-300" strokeWidth={1.5} />
            </div>
            <p className="text-3xl md:text-4xl font-serif font-bold text-brand-midnight mb-1">
              <CountUp target={p.value} suffix={p.suffix} />
            </p>
            <p className="text-brand-smoke text-sm">{p.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofBar;
