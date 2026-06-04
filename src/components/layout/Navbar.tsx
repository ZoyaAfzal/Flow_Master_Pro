import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Wrench, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 30));

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-white/80 shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground grid place-items-center group-hover:rotate-12 transition-transform">
            <Wrench className="w-5 h-5" />
          </span>
          <span className="font-display font-bold text-xl text-navy">FlowMaster Pro</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeProps={{ className: "text-primary" }}
                className="text-sm font-medium text-navy hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-5 py-3 rounded-full hover:scale-105 hover:shadow-brand transition-all"
        >
          Book Appointment
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-navy"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t overflow-hidden"
          >
            <ul className="flex flex-col p-5 gap-4">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block text-navy font-medium"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold px-5 py-3 rounded-full"
              >
                Book Appointment
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
