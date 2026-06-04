import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Linkedin } from "lucide-react";

const team = [
  { name: "Jacob Jones", role: "Operations Manager", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80" },
  { name: "Cody Fisher", role: "Drainage Technician", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80" },
  { name: "Albert Flores", role: "Field Supervisor", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80" },
  { name: "Ralph Edwards", role: "Project Manager", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80" },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-accent font-semibold uppercase tracking-widest text-sm">Team Members</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 text-navy">Our Hard Working Members</h2>
          </div>
          <Link to="/team" className="inline-flex items-center gap-2 text-primary font-semibold">
            View Full Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4">
                <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  <a href="#" className="w-9 h-9 grid place-items-center rounded-full bg-white text-navy hover:bg-accent">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 grid place-items-center rounded-full bg-white text-navy hover:bg-accent">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <h3 className="font-display font-bold text-lg text-navy">{m.name}</h3>
              <p className="text-muted-foreground text-sm">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
