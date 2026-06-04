import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export const blogPosts = [
  { slug: "hidden-leak-signs", title: "5 Signs You Have a Hidden Leak in Your Home", excerpt: "Catch costly leaks early, here's what to watch for in walls, floors, and your water bill.", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80", category: "Repairs", date: "Jun 2, 2026" },
  { slug: "prevent-drain-clogs", title: "How to Prevent Drain Clogs All Year Long", excerpt: "Simple monthly habits that keep your kitchen, bathroom, and main line flowing freely.", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80", category: "Maintenance", date: "May 21, 2026" },
  { slug: "call-plumber-vs-diy", title: "When to Call a Plumber vs DIY Fix", excerpt: "Some jobs are weekend-warrior friendly. Others quietly turn into thousand-dollar mistakes.", image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80", category: "Guides", date: "May 10, 2026" },
];

export function BlogSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-accent font-semibold uppercase tracking-widest text-sm">From the Blog</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 text-navy max-w-xl">Tips, Guides & Stories</h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-semibold">
            All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-offwhite rounded-2xl overflow-hidden hover:shadow-brand transition-all"
            >
              <div className="overflow-hidden aspect-[16/10]">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-xs">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold uppercase tracking-wide">{p.category}</span>
                  <span className="text-muted-foreground inline-flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{p.date}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-navy mb-2 group-hover:text-primary transition">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.excerpt}</p>
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="inline-flex items-center gap-2 text-primary font-semibold">
                  Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
