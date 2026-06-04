import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  { name: "Kristin Watson", city: "New York, NY", avatar: "https://i.pravatar.cc/80?img=5", text: "Showed up within an hour for a midnight leak. Polite, fast, and the cost was exactly what they quoted. I'm a customer for life." },
  { name: "Esther Howard", city: "San Diego, CA", avatar: "https://i.pravatar.cc/80?img=9", text: "They replaced our entire water heater the same day we called. The crew left the basement cleaner than they found it." },
  { name: "Tom Bradley", city: "Chicago, IL", avatar: "https://i.pravatar.cc/80?img=12", text: "After two other companies failed to find the leak, FlowMaster Pro spotted it in 20 minutes. Honest pros." },
  { name: "Maria Santos", city: "Houston, TX", avatar: "https://i.pravatar.cc/80?img=16", text: "Drain cleaning was a breeze. Booked online at 9am, fixed by lunch. Highly recommend." },
];

export function TestimonialsSection() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 4500);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[i];

  return (
    <section className="bg-primary text-primary-foreground py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
        <span className="text-accent font-semibold uppercase tracking-widest text-sm">Testimonials</span>
        <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-12">Trusted by 10,000+ Customers</h2>

        <div className="relative min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-white text-navy rounded-3xl p-8 md:p-10 shadow-brand-lg text-left"
            >
              <div className="flex items-center gap-1 mb-4 text-accent">
                {Array.from({ length: 5 }).map((_, idx) => <Star key={idx} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-lg md:text-xl leading-relaxed mb-6 text-navy/80">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <div className="font-display font-bold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.city}</div>
                  </div>
                </div>
                <div className="w-10 h-10 grid place-items-center rounded-full bg-offwhite font-display font-bold text-primary">G</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-accent" : "w-2 bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
