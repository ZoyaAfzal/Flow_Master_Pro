import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
} as const;

const droplets = Array.from({ length: 8 });

export function HeroSection() {
  return (
    <section className="relative bg-mesh text-white overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* droplets */}
      <div className="absolute inset-0 pointer-events-none">
        {droplets.map((_, i) => (
          <span
            key={i}
            className="droplet"
            style={{
              left: `${(i + 1) * 11}%`,
              animationDuration: `${8 + i * 1.5}s`,
              animationDelay: `${i * 1.2}s`,
              opacity: 0.4 + (i % 3) * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 fill-current" />
            4.8 Rated · By Satisfied Customers
          </motion.div>

          <motion.h1 variants={item} className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
            All Type of <span className="text-accent">Plumbing Care</span> for Your Home
          </motion.h1>

          <motion.p variants={item} className="text-lg text-white/80 max-w-xl mb-8">
            Professional, licensed, and available 24/7,  we fix it right the first time, every time.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-accent text-accent-foreground font-bold px-7 py-4 rounded-full shadow-brand-lg hover:scale-105 transition"
            >
              Book Service Now
            </Link>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/56?img=${i + 10}`}
                    alt="Happy customer"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div className="text-sm text-white/80">
                <span className="font-bold text-white">10,500+</span> trusted FlowMaster Pro
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-accent/30 blur-2xl" />
          <motion.img
            whileHover={{ scale: 1.02 }}
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&q=80"
            alt="Licensed plumber repairing a sink"
            className="relative rounded-3xl shadow-brand-lg w-full object-cover aspect-[4/5] transition-transform duration-300"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 bg-white text-navy rounded-2xl shadow-brand-lg p-5 max-w-[220px]"
          >
            <div className="text-3xl font-display font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Years of trusted experience</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
