import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import donatellaImg from "@/assets/donatella-hero.png";
import monogramMark from "@/assets/monogram-mark.svg";

const stats = [
  { value: "20+", label: "Anni di Esperienza" },
  { value: "500+", label: "Famiglie Assistite" },
  { value: "5", label: "Aree di Competenza" },
];

const HeroSection = () => {
  // Mouse parallax for hero monogram
  const heroRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.5 });
  const heroX = useTransform(sx, (v) => v * 18);
  const heroY = useTransform(sy, (v) => v * 18);

  // Mouse parallax for stats strip monogram
  const stripRef = useRef<HTMLDivElement>(null);
  const smx = useMotionValue(0);
  const smy = useMotionValue(0);
  const ssx = useSpring(smx, { stiffness: 50, damping: 18, mass: 0.6 });
  const ssy = useSpring(smy, { stiffness: 50, damping: 18, mass: 0.6 });
  const stripX = useTransform(ssx, (v) => v * 24);
  const stripY = useTransform(ssy, (v) => v * 12);
  const gridX = useTransform(ssx, (v) => v * 8);
  const gridY = useTransform(ssy, (v) => v * 8);

  const handleHeroMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = heroRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleStripMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = stripRef.current?.getBoundingClientRect();
    if (!r) return;
    smx.set((e.clientX - r.left) / r.width - 0.5);
    smy.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
  <section
    ref={heroRef}
    onMouseMove={handleHeroMove}
    className="relative bg-brand-ivory overflow-hidden"
  >
    {/* Editorial monogram watermark — just the D mark, no background */}
    <motion.img
      src={monogramMark}
      alt=""
      aria-hidden
      className="absolute -right-32 -top-20 w-[640px] opacity-[0.06] pointer-events-none select-none text-brand-midnight will-change-transform"
      style={{ x: heroX, y: heroY }}
    />

    <div className="container mx-auto px-4 md:px-8 pt-32 md:pt-36 pb-20 md:pb-28 relative">
      {/* Top meta line */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between border-b border-brand-midnight/15 pb-5 mb-12 md:mb-16"
      >
        <span className="text-[11px] uppercase tracking-[0.28em] text-brand-midnight/70 font-medium">
          Studio Legale — Bovisio Masciago (MB)
        </span>
        <span className="hidden md:inline text-[11px] uppercase tracking-[0.28em] text-brand-midnight/70 font-medium">
          Diritto di Famiglia · Minori · Persone
        </span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="eyebrow mb-8"
          >
            Avv. Donatella Di Vietro
          </motion.p>

          <motion.h1
            className="font-serif font-semibold text-[2.75rem] sm:text-6xl lg:text-[5rem] leading-[0.95] tracking-[-0.025em] text-brand-midnight mb-8 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            La tua famiglia merita un avvocato che{" "}
            <em className="not-italic font-semibold text-brand-midnight">ascolta davvero.</em>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-brand-midnight/70 mb-10 max-w-xl leading-[1.7]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Studio specializzato in diritto di famiglia, separazioni e tutela dei minori.
            Ogni caso seguito personalmente, con competenza tecnica e profonda umanità.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a className="btn-primary" href="#contatti">
              Consulenza Riservata
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a className="btn-ghost" href="#servizi">Aree di Competenza</a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative max-w-md mx-auto">
            {/* Hairline frame */}
            <div className="absolute -inset-4 border border-brand-midnight/15 hidden md:block" />
            <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-brand-garden relative">
              <img
                alt="Ritratto dell'Avv. Donatella Di Vietro, avvocata specializzata in diritto di famiglia, minori e persone, presso il suo studio di Bovisio Masciago"
                className="w-full h-full object-cover object-[center_20%]"
                src={donatellaImg}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={800}
                height={1000}
              />
            </div>
            {/* Editorial caption */}
            <div className="mt-5 flex items-baseline justify-between border-t border-brand-midnight/15 pt-3">
              <span className="text-[11px] uppercase tracking-[0.28em] text-brand-midnight/70 font-medium">
                Ritratto · 2026
              </span>
              <span className="font-serif italic text-brand-midnight text-sm">
                Studio Di Vietro
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Stats — editorial strip on midnight */}
    <div
      ref={stripRef}
      onMouseMove={handleStripMove}
      className="bg-brand-midnight relative overflow-hidden"
    >
      {/* Diagonal hairline grid pattern */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.07] will-change-transform"
        style={{
          x: gridX,
          y: gridY,
          backgroundImage:
            "repeating-linear-gradient(45deg, hsl(var(--brand-ivory)) 0 1px, transparent 1px 22px), repeating-linear-gradient(-45deg, hsl(var(--brand-ivory)) 0 1px, transparent 1px 22px)",
        }}
      />
      {/* Soft radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, hsl(var(--brand-ivory) / 0.08) 0%, transparent 60%)",
        }}
      />
      {/* Centered large D monogram mark */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 w-[420px] h-[420px] pointer-events-none opacity-[0.06] will-change-transform"
        style={{
          x: stripX,
          y: stripY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "hsl(var(--brand-ivory))",
          WebkitMaskImage: `url(${monogramMark})`,
          maskImage: `url(${monogramMark})`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />
      {/* Film grain overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.18] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          backgroundSize: "240px 240px",
        }}
      />
      {/* Top & bottom hairlines */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-ivory/25 to-transparent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-ivory/25 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="grid grid-cols-3 divide-x divide-brand-ivory/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="py-12 md:py-16 text-center px-2 relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
            >
              <p className="display-numeral text-5xl md:text-7xl text-brand-ivory leading-none">{s.value}</p>
              <span aria-hidden className="block w-8 h-px bg-brand-ivory/30 mx-auto mt-5 mb-4" />
              <p className="text-brand-ivory/60 text-[11px] sm:text-xs uppercase tracking-[0.28em] font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default HeroSection;
