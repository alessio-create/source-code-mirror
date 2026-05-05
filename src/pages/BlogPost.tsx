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

  if (!post) return <NotFound />;

  return (
    <div className="bg-brand-ivory min-h-screen">
      <Header />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/#blog"
              className="inline-flex items-center gap-2 text-brand-smoke hover:text-brand-midnight transition-colors mb-10 text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Torna al blog
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-midnight bg-brand-midnight/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-brand-smoke text-sm">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1 text-brand-smoke text-sm">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl leading-tight mb-10">
              {post.title}
            </h1>

            <div className="w-16 h-1 bg-brand-midnight rounded-full mb-10" />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-brand-smoke text-base leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 p-8 bg-card border border-border rounded-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl mb-3">Hai bisogno di assistenza?</h3>
            <p className="text-brand-smoke mb-6">
              Contattami per una consulenza riservata e personalizzata.
            </p>
            <a href="/#contatti" className="btn-primary">
              Prenota una consulenza
            </a>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
