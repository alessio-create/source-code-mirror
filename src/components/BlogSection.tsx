import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const BlogSection = () => (
  <section className="section-padding bg-card" id="blog">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="lg:col-span-8">
          <p className="eyebrow mb-6">Blog</p>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl text-brand-midnight tracking-[-0.02em] leading-[1.05] text-balance">
            Approfondimenti per orientarti con <em className="not-italic font-semibold text-brand-midnight">consapevolezza</em>.
          </h2>
        </div>
        <div className="lg:col-span-4 lg:text-right">
          <Link to="/blog" className="btn-ghost">Tutti gli articoli</Link>
        </div>
      </motion.div>

      <div className="border-t border-brand-midnight/15">
        {blogPosts.slice(0, 4).map((post, i) => (
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
              <div className="col-span-9 md:col-span-3 text-[11px] uppercase tracking-[0.2em] text-brand-midnight font-medium">
                {post.category}
              </div>
              <h3 className="col-span-12 md:col-span-6 font-serif font-semibold text-xl md:text-2xl text-brand-midnight tracking-[-0.01em] group-hover:translate-x-1 transition-transform duration-500 leading-snug">
                {post.title}
              </h3>
              <div className="col-span-12 md:col-span-1 flex md:justify-end">
                <ArrowUpRight className="w-5 h-5 text-brand-midnight/40 group-hover:text-brand-midnight group-hover:rotate-45 transition-all duration-500" strokeWidth={1.25} />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
