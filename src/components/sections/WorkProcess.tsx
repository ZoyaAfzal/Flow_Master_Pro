import { motion } from "framer-motion";

const steps = [
  { n: "01", title: "Schedule Your Service", desc: "Call us or book online in a few clicks. Tell us what's wrong and we'll confirm your appointment." },
  { n: "02", title: "We Inspect & Fix", desc: "Our technician arrives on time, diagnoses the issue, and explains the solution clearly." },
  { n: "03", title: "Job Done & Guaranteed", desc: "Once done, we double-check everything, clean up, and ensure you're 100% satisfied." },
];

export function WorkProcess() {
  return (
    <section className="bg-offwhite py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">Work Process</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 text-navy max-w-md">
            Fixing Your Plumbing the Simple Way
          </h2>
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&q=80"
            alt="Plumbing inspection in progress"
            className="rounded-3xl shadow-brand mt-10 w-full object-cover aspect-[4/3]"
          />
        </motion.div>

        <div className="space-y-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ x: -4 }}
              className="bg-accent rounded-2xl p-7 flex gap-6 border-l-4 border-navy hover:border-l-[12px] transition-all"
            >
              <div className="font-display font-bold text-4xl md:text-5xl text-navy/80 shrink-0">{s.n}</div>
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-navy mb-2">{s.title}</h3>
                <p className="text-navy/70">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
