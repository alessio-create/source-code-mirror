import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const [activeId, setActiveId] = useState<string | undefined>(post?.sections[0]?.id);

  useEffect(() => {
    if (!post) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );
    post.sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [post]);

  if (!post) return <NotFound />;

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    const offset = 96;
    if (typeof window !== "undefined" && window.__lenis) {
      window.__lenis.scrollTo(target, { offset: -offset });
    } else {
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-brand-ivory min-h-screen">
      <Header />

      {/* Editorial hero */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 border-b border-brand-midnight/15">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-brand-midnight/70 hover:text-brand-midnight transition-colors mb-12"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Torna al blog
            </Link>

            <p className="eyebrow mb-8">{post.category}</p>

            <h1 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl text-brand-midnight tracking-[-0.02em] leading-[1.05] text-balance mb-10">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] uppercase tracking-[0.2em] text-brand-midnight/60 font-medium">
              <span className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
                {post.readTime} di lettura
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main content */}
            <div className="lg:col-span-8">
              {/* Intro / summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="border-l-2 border-brand-midnight/30 pl-6 md:pl-8 mb-16"
              >
                <p className="eyebrow mb-4">In sintesi</p>
                <p className="font-serif text-xl md:text-2xl italic text-brand-midnight/85 leading-[1.5]">
                  {post.intro}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-16"
              >
                {post.sections.map((section, idx) => (
                  <section key={section.id} id={section.id} className="scroll-mt-28">
                    <div className="flex items-baseline gap-4 mb-6">
                      <span className="display-numeral text-2xl text-brand-midnight/40">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-serif font-semibold text-2xl md:text-3xl text-brand-midnight tracking-[-0.02em] leading-tight">
                        {section.heading}
                      </h2>
                    </div>
                    <div className="space-y-5">
                      {section.paragraphs.map((p, i) => (
                        <p key={i} className="text-brand-midnight/80 text-base md:text-lg leading-[1.8]">
                          {p}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                className="mt-20 p-10 md:p-12 bg-brand-midnight text-brand-ivory"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-brand-ivory/60 mb-5">
                  Hai bisogno di assistenza?
                </p>
                <h3 className="font-serif font-semibold text-2xl md:text-3xl text-brand-ivory tracking-[-0.02em] leading-tight mb-6 text-balance">
                  Parliamone in un colloquio riservato.
                </h3>
                <p className="text-brand-ivory/70 text-base leading-relaxed mb-8 max-w-xl">
                  Ogni situazione merita attenzione e una valutazione personalizzata. Contattami per
                  fissare un primo incontro informativo.
                </p>
                <Link to="/contatti" className="btn-primary-light">
                  Prenota una consulenza
                </Link>
              </motion.div>
            </div>

            {/* TOC sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow mb-6">In questo articolo</p>
                <nav className="border-l border-brand-midnight/15">
                  {post.sections.map((s, i) => {
                    const active = activeId === s.id;
                    return (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        onClick={(e) => handleAnchorClick(e, s.id)}
                        className={`block pl-5 md:pl-6 py-3 -ml-px border-l text-sm transition-all duration-300 ${
                          active
                            ? "border-brand-midnight text-brand-midnight font-medium"
                            : "border-transparent text-brand-midnight/55 hover:text-brand-midnight hover:border-brand-midnight/40"
                        }`}
                      >
                        <span className="display-numeral text-xs not-italic font-normal tracking-normal mr-3 text-brand-midnight/40">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {s.heading}
                      </a>
                    );
                  })}
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
