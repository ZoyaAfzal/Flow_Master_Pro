import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const services = [
  {
    slug: "leak-detection",
    title: "Leak Detection & Repair",
    desc: "Pinpoint hidden leaks fast with non-invasive tech that saves your walls and bills.",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
  },
  {
    slug: "toilet-repair",
    title: "Toilet Repair & Installation",
    desc: "From running toilets to full upgrades - installed clean, sealed tight, guaranteed.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80",
  },
  {
    slug: "drain-cleaning",
    title: "Drain Cleaning",
    desc: "Hydro-jetting and rooter service that clears stubborn clogs without damaging pipes.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
  },
  {
    slug: "sump-pump",
    title: "Sump Pump Services",
    desc: "Keep your basement dry with expert installation, testing, and emergency replacement.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-accent py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-navy font-semibold uppercase tracking-widest text-sm">Our Services</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 text-navy max-w-xl">
              Plumbing Services That Keep Life Flowing
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-full font-semibold hover:bg-black transition"
          >
            See All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl p-5 flex gap-5 items-center shadow-sm hover:shadow-brand-lg border-2 border-transparent hover:border-primary transition-all"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 overflow-hidden rounded-xl">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-xl md:text-2xl text-navy mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{s.desc}</p>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="inline-flex items-center gap-2 text-primary font-semibold group/link"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
