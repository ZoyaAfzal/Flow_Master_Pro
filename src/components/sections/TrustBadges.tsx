import { motion } from "framer-motion";
import { BadgeCheck, Clock, DollarSign, type LucideIcon } from "lucide-react";

const badges: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: BadgeCheck, title: "Certified Plumbers", desc: "Every technician is licensed, insured, and background-checked." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "Upfront, flat-rate quotes - no surprises after the work is done." },
  { icon: Clock, title: "24/7 Support", desc: "Round-the-clock dispatch for emergencies, holidays, and weekends." },
];

export function TrustBadges() {
  return (
    <section className="bg-offwhite py-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-3 gap-6">
        {badges.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -8 }}
            className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-brand transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground grid place-items-center mb-5 group-hover:rotate-[10deg] transition-transform">
              <b.icon className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold mb-2 text-navy">{b.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
