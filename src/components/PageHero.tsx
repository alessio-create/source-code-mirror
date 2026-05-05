import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, ArrowLeft } from "lucide-react";
import monogram from "@/assets/logo-monogram.svg";

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
  testimonial?: {
    text: string;
    author: string;
    role: string;
    rating: number;
  };
  stat?: {
    value: string;
    label: string;
  };
}

const PageHero = ({ label, title, description, testimonial, stat }: PageHeroProps) => (
  <section className="pt-36 md:pt-44 pb-20 md:pb-28 bg-brand-ivory relative overflow-hidden border-b border-brand-midnight/10">
    <img
      src={monogram}
      alt=""
      aria-hidden
      className="absolute -right-24 -bottom-24 w-[480px] opacity-[0.05] pointer-events-none select-none"
    />

    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-brand-midnight/60 hover:text-brand-midnight transition-colors mb-12 text-[11px] font-medium uppercase tracking-[0.28em]"
      >
        <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
        Torna alla home
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
        <motion.div
          className="lg:col-span-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow mb-6">{label}</p>
          <h1 className="font-serif font-semibold text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.025em] text-brand-midnight mb-8 text-balance">
            {title}
          </h1>
          <p className="text-brand-midnight/70 text-base md:text-xl max-w-2xl leading-[1.7] mb-10">
            {description}
          </p>

          {stat && (
            <motion.div
              className="inline-flex items-baseline gap-5 border-t border-brand-midnight/20 pt-5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="display-numeral text-5xl md:text-6xl text-brand-midnight">{stat.value}</span>
              <span className="text-brand-midnight/60 text-[11px] uppercase tracking-[0.28em] font-medium">{stat.label}</span>
            </motion.div>
          )}
        </motion.div>

        {testimonial && (
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="border-l-2 border-brand-midnight/30 pl-6 md:pl-8 py-2">
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-brand-midnight fill-brand-midnight" />
                ))}
              </div>
              <p className="font-serif text-brand-midnight text-lg md:text-xl italic leading-[1.6] mb-6">
                "{testimonial.text}"
              </p>
              <div className="border-t border-brand-midnight/15 pt-4">
                <p className="text-brand-midnight font-medium text-xs uppercase tracking-[0.2em]">{testimonial.author}</p>
                <p className="text-brand-midnight/60 text-xs mt-1.5 uppercase tracking-[0.2em]">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  </section>
);

export default PageHero;
