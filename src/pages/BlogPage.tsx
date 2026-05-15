import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";

const BlogPage = () => {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="bg-brand-ivory min-h-screen">
      <SEO
        title="Blog — Diritto di Famiglia | Avv. Di Vietro"
        description="Articoli e guide su separazioni, divorzi, affido figli e diritto di famiglia, scritti dall'Avv. Donatella Di Vietro."
        path="/blog"
      />
      <Header />
      <PageHero
        label="Approfondimenti"
        title="Blog"
        description="Articoli e guide per orientarti nel diritto di famiglia con consapevolezza, scritti dall'Avv. Donatella Di Vietro."
        stat={{ value: `${blogPosts.length}`, label: "Articoli\npubblicati" }}
        testimonial={{
          text: "Gli articoli dell'Avv. Di Vietro mi hanno aiutato a capire i miei diritti prima ancora della prima consulenza. Informazione chiara e accessibile.",
          author: "Andrea B.",
          role: "Lettore, Milano",
          rating: 5,
        }}
      />

      {/* Featured */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow mb-6">In primo piano</p>
            <Link
              to={`/blog/${featured.slug}`}
              className="group block border-t border-b border-brand-midnight/15 py-12 md:py-16 lift-hover"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.2em] text-brand-midnight/60 font-medium mb-6">
                    <span className="text-brand-midnight">{featured.category}</span>
                    <span>{featured.date}</span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-3 h-3" strokeWidth={1.5} />
                      {featured.readTime}
                    </span>
                  </div>
                  <h2 className="font-serif font-semibold text-3xl md:text-5xl lg:text-6xl text-brand-midnight tracking-[-0.02em] leading-[1.05] text-balance group-hover:translate-x-1 transition-transform duration-500 mb-6">
                    {featured.title}
                  </h2>
                  <p className="text-brand-midnight/75 text-base md:text-lg leading-relaxed max-w-2xl">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="lg:col-span-4 flex lg:justify-end">
                  <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-brand-midnight">
                    Leggi l'articolo
                    <ArrowUpRight
                      className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500"
                      strokeWidth={1.25}
                    />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Archive list */}
          {rest.length > 0 && (
            <>
              <motion.div
                className="mb-10 md:mb-14"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="eyebrow">Archivio</p>
              </motion.div>

              <div className="border-t border-brand-midnight/15">
                {rest.map((post, i) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group grid grid-cols-12 gap-4 md:gap-8 items-center py-8 md:py-10 border-b border-brand-midnight/15 hover:bg-brand-garden/20 transition-colors duration-500 px-2 md:px-4 -mx-2 md:-mx-4 lift-hover"
                    >
                      <div className="col-span-3 md:col-span-2 text-[11px] uppercase tracking-[0.2em] text-brand-midnight/60 font-medium">
                        {post.date}
                      </div>
                      <div className="col-span-9 md:col-span-2 text-[11px] uppercase tracking-[0.2em] text-brand-midnight font-medium">
                        {post.category}
                      </div>
                      <h3 className="col-span-12 md:col-span-6 font-serif font-semibold text-xl md:text-2xl text-brand-midnight tracking-[-0.01em] group-hover:translate-x-1 transition-transform duration-500 leading-snug">
                        {post.title}
                      </h3>
                      <div className="hidden md:flex md:col-span-1 items-center gap-1 text-[11px] uppercase tracking-[0.2em] text-brand-midnight/60 font-medium">
                        <Clock className="w-3 h-3" strokeWidth={1.5} />
                        {post.readTime}
                      </div>
                      <div className="col-span-12 md:col-span-1 flex md:justify-end">
                        <ArrowUpRight
                          className="w-5 h-5 text-brand-midnight/40 group-hover:text-brand-midnight group-hover:rotate-45 transition-all duration-500"
                          strokeWidth={1.25}
                        />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
