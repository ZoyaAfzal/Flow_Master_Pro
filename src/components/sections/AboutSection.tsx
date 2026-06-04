import { Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const stats = [
  { value: 95, suffix: "%", label: "First Time Fix Rate" },
  { value: 500, suffix: "+", label: "Emergency Calls Handled" },
  { value: 24, suffix: "/7", label: "Support You Can Count On" },
  { value: 99, suffix: "%", label: "Customer Satisfaction" },
];

export function AboutSection() {
  return (
    <section className="bg-offwhite py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">About Us</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-6 text-navy">
            Your Trusted Plumbing Experts in Town
          </h2>
          <div className="bg-primary text-primary-foreground rounded-2xl p-6 flex items-center gap-4 mb-6 shadow-brand">
            <Home className="w-10 h-10 text-accent" />
            <div>
              <div className="font-display text-3xl font-bold">10K+</div>
              <div className="text-sm text-white/80">Homes Served with Care</div>
            </div>
          </div>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            For over 15 years, FlowMaster Pro has been the go-to plumbing partner for homeowners
            who refuse to compromise on quality, speed, or honesty.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-7 py-4 rounded-full hover:scale-105 transition shadow-brand"
          >
            More About Us <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80"
            alt="Expert plumber holding tools"
            className="rounded-3xl shadow-brand-lg w-full object-cover aspect-[4/5]"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-5 lg:px-8"
      >
        <div className="bg-white rounded-3xl shadow-brand grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {stats.map((s) => (
            <div key={s.label} className="p-8 text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
