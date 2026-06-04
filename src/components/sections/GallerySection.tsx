import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ZoomIn } from "lucide-react";

const images = [
  { src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=900&q=80", span: "lg:col-span-3" },
  { src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80", span: "lg:col-span-3" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", span: "lg:col-span-2" },
  { src: "https://images.unsplash.com/photo-1542013936693-884638332954?w=600&q=80", span: "lg:col-span-2" },
  { src: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80", span: "lg:col-span-2" },
];

export function GallerySection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">Project Gallery</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 text-navy max-w-2xl mx-auto">
            Gallery of Trusted Repairs & Installations
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl aspect-[4/3] ${img.span}`}
            >
              <img src={img.src} alt="Recent plumbing project" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-navy/60 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-10 h-10 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/gallery" className="inline-flex items-center gap-2 bg-navy text-white px-7 py-3.5 rounded-full font-semibold hover:bg-primary transition">
            View Full Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
