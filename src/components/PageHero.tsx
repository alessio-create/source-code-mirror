import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";

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
  <section className="pt-32 pb-20 bg-brand-ivory relative overflow-hidden">
    {/* Subtle decorative elements */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-warm/50 rounded-bl-[120px] -z-0" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent-red/5 rounded-full blur-3xl" />

    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-brand-smoke hover:text-brand-accent-red transition-colors mb-8 text-sm font-medium"
          >
            ← Torna alla home
          </Link>

          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-brand-accent-red mb-4">
            {label}
          </p>

          <h1 className="text-3xl md:text-5xl leading-tight mb-6 text-brand-midnight">
            {title}
          </h1>

          <p className="text-brand-smoke text-lg md:text-xl max-w-xl leading-relaxed mb-8">
            {description}
          </p>

          {stat && (
            <motion.div
              className="inline-flex items-center gap-4 bg-card border border-border rounded-xl px-6 py-4 premium-shadow"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="text-3xl md:text-4xl font-bold text-brand-accent-red">{stat.value}</span>
              <div className="h-8 w-px bg-border" />
              <span className="text-brand-smoke text-sm font-medium">{stat.label}</span>
            </motion.div>
          )}
        </motion.div>

        {/* Right: Testimonial Card */}
        {testimonial && (
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-card border border-border rounded-2xl p-8 premium-shadow-lg relative">
              {/* Quote icon */}
              <div className="absolute -top-4 left-2 sm:-left-4 w-10 h-10 bg-brand-accent-red rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-card" fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-brand-accent-red fill-brand-accent-red" />
                ))}
              </div>

              <p className="text-brand-midnight text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 pt-5 border-t border-border">
                <div className="w-11 h-11 bg-brand-accent-red/10 rounded-full flex items-center justify-center text-brand-accent-red font-bold text-sm">
                  {testimonial.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-brand-midnight text-sm">{testimonial.author}</p>
                  <p className="text-brand-smoke text-xs">{testimonial.role}</p>
                </div>
              </div>

              {/* Efficiency badge */}
              <motion.div
                className="absolute -bottom-3 right-2 sm:-right-3 bg-brand-midnight text-primary-foreground rounded-xl px-4 py-2 text-xs font-semibold flex items-center gap-2 premium-shadow"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              >
                <svg className="w-4 h-4 text-brand-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Risoluzione rapida
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  </section>
);

export default PageHero;
