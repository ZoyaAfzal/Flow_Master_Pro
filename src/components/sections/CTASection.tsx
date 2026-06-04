import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "./ServicesSection";

export function CTASection() {
  const [service, setService] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Appointment requested!", {
      description: "We'll call you back within 15 minutes to confirm.",
    });
    (e.target as HTMLFormElement).reset();
    setService("");
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581244277943-fe4a9c777540?w=1600&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <span className="text-accent font-semibold uppercase tracking-widest text-sm">We are ready to help you</span>
          <h2 className="font-display font-bold text-4xl md:text-6xl mt-3 mb-8">We're Ready to Assist</h2>
          <ul className="space-y-4">
            {[
              { icon: Mail, text: "hello@flowmasterpro.com" },
              { icon: Mail, text: "support@flowmasterpro.com" },
            ].map((c, i) => (
              <li key={i} className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-full bg-accent text-accent-foreground grid place-items-center">
                  <c.icon className="w-5 h-5" />
                </span>
                <span className="text-lg">{c.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white rounded-3xl p-8 shadow-brand-lg"
        >
          <h3 className="font-display font-bold text-2xl text-navy mb-6">Book Your Service</h3>
          <div className="space-y-4">
            <Input required name="name" placeholder="Your name" className="h-12 rounded-xl" />
            <Input required type="email" name="email" placeholder="Email address" className="h-12 rounded-xl" />
            <Input required type="tel" name="phone" placeholder="Phone number" className="h-12 rounded-xl" />
            <Select value={service} onValueChange={setService} required>
              <SelectTrigger className="h-12 rounded-xl">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((s) => (
                  <SelectItem key={s.slug} value={s.slug}>{s.title}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              type="submit"
              className="w-full h-12 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base"
            >
              Make An Appointment
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
