import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const BlogSection = () => (
  <section className="section-padding bg-card" id="blog">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        className="flex flex-col md:flex-row md:items-end md:justify-between mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-brand-accent-red mb-3">Blog</p>
          <h2 className="text-3xl md:text-4xl">Approfondimenti legali</h2>
          <p className="text-brand-smoke text-base mt-3 max-w-lg">
            Articoli e guide per orientarti nel diritto di famiglia con consapevolezza.
          </p>
        </div>
      </motion.div>

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
              className="group bg-brand-ivory border border-border rounded-2xl p-8 hover:premium-shadow-lg transition-all duration-500 relative overflow-hidden block"
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
                  Leggi
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
