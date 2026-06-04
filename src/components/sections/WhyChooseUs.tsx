import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Licensed Technicians",
  "24/7 Emergency Support",
  "Transparent Pricing",
  "Same-Day Service Available",
  "Satisfaction Guaranteed",
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -top-6 -left-6 w-2/3 h-2/3 rounded-3xl border-4 border-accent" />
          <img
            src="https://images.pexels.com/photos/34938446/pexels-photo-34938446.jpeg"
            alt="Professional plumbing services"
            className="relative rounded-3xl shadow-brand w-full object-cover aspect-[4/5]"
          />
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80"
            alt="Modern plumbing tools"
            className="absolute -bottom-10 -right-6 w-1/2 rounded-2xl shadow-brand-lg object-cover aspect-square border-4 border-white"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">Why Choose Us?</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-6 text-navy">
            Why Choose Our Plumbing Team
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            From hidden leaks to full repipes, our team brings decades of combined experience and a
            commitment to clean, careful workmanship that you can rely on.
          </p>
          <ul className="space-y-4">
            {features.map((f, i) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-center gap-3 text-navy font-medium"
              >
                <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground grid place-items-center shrink-0">
                  <Check className="w-4 h-4" />
                </span>
                {f}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
