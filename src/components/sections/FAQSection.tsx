import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What plumbing services do you offer?", a: "Everything from leak detection, drain cleaning, toilet and faucet repair, water heater installs, sump pumps, and full repipes." },
  { q: "Are your plumbers licensed and insured?", a: "Yes, every FlowMaster Pro technician is fully licensed, insured, and background-checked before stepping into your home." },
  { q: "Do you offer 24/7 emergency services?", a: "Absolutely. We dispatch around the clock, including weekends and holidays, with no overtime fees." },
  { q: "How much do your services cost?", a: "We use upfront flat-rate pricing. You'll know the full cost before any work begins, no surprises." },
  { q: "How quickly can you arrive?", a: "Same-day service is available across our service area, and most emergencies are reached within 60 minutes." },
  { q: "Do you offer a service guarantee?", a: "Yes, every repair is backed by our 100% satisfaction guarantee and a 1-year workmanship warranty." },
];

export function FAQSection() {
  return (
    <section className="bg-offwhite py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">FAQ</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 mb-6 text-navy">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Still have questions? We're happy to help, reach out anytime.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-semibold">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white rounded-2xl border-none px-6 shadow-sm">
                <AccordionTrigger className="font-display text-lg font-semibold text-navy hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
