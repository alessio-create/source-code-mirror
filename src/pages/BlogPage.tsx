import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const BlogPage = () => (
  <div className="bg-brand-ivory min-h-screen">
    <Header />
    <PageHero
      label="Approfondimenti"
      title="Blog"
      description="Articoli e guide per orientarti nel diritto di famiglia con consapevolezza e informazione."
      stat={{ value: `${blogPosts.length}`, label: "Articoli\npubblicati" }}
      testimonial={{
        text: "Gli articoli dell'Avv. Di Vietro mi hanno aiutato a capire i miei diritti prima ancora della prima consulenza. Informazione chiara e accessibile.",
        author: "Andrea B.",
        role: "Lettore — Milano",
        rating: 5,
      }}
    />

    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group bg-card border border-border rounded-2xl p-8 hover:premium-shadow-lg transition-all duration-500 relative overflow-hidden block"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent-red bg-brand-accent-red/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-brand-smoke text-xs">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl mb-3 group-hover:text-brand-accent-red transition-colors duration-300">{post.title}</h3>
                <p className="text-brand-smoke leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-brand-smoke text-sm">{post.date}</span>
                  <span className="flex items-center gap-1 text-brand-midnight font-semibold text-sm group-hover:text-brand-accent-red transition-colors">
                    Leggi <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default BlogPage;
