import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const proofs = [
  { value: 20, suffix: "+", label: "Anni di Esperienza" },
  { value: 500, suffix: "+", label: "Famiglie Assistite" },
  { value: 100, suffix: "%", label: "Riservatezza" },
  { value: 5, suffix: "", label: "Aree di Competenza" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionVal, target, { duration: target > 100 ? 2 : 1.4, ease: "easeOut" });
    return controls.stop;
  }, [isInView, motionVal, target]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${v}${suffix}`;
    });
    return unsub;
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const SocialProofBar = () => (
  <section id="numeri-studio" className="bg-brand-garden/40 py-20 md:py-24 border-y border-brand-midnight/10">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow eyebrow-center mb-6">Numeri dello Studio</p>
        <h2 className="font-serif font-semibold text-3xl md:text-5xl text-brand-midnight tracking-[-0.02em] leading-[1.1] text-balance">
          Vent'anni di pratica esclusiva, una sola priorità: <em className="not-italic font-semibold text-brand-midnight">la persona</em>.
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-midnight/15 border-y border-brand-midnight/15">
        {proofs.map((p, i) => (
          <motion.div
            key={p.label}
            className="text-center py-10 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <p className="display-numeral text-5xl md:text-7xl text-brand-midnight mb-3">
              <CountUp target={p.value} suffix={p.suffix} />
            </p>
            <p className="text-brand-midnight/70 text-[11px] uppercase tracking-[0.28em] font-medium">{p.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofBar;
