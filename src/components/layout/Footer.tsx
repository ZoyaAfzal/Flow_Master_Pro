import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Send, Wrench } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-10 h-10 rounded-full bg-accent text-accent-foreground grid place-items-center">
              <Wrench className="w-5 h-5" />
            </span>
            <span className="font-display font-bold text-xl">FlowMaster Pro</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Licensed plumbing experts keeping homes flowing across the country, 24/7.
          </p>
          <div className="flex gap-3">
            {[Facebook, Linkedin, Instagram, Send].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 grid place-items-center rounded-full bg-white/5 hover:bg-accent hover:text-accent-foreground transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-5">Navigation</h4>
          <ul className="space-y-3 text-white/60 text-sm">
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/services" className="hover:text-accent">Service</Link></li>
            <li><Link to="/blog" className="hover:text-accent">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Appointment</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-5">Utility</h4>
          <ul className="space-y-3 text-white/60 text-sm">
            <li><a href="#" className="hover:text-accent">License</a></li>
            <li><a href="#" className="hover:text-accent">Changelog</a></li>
            <li><a href="#" className="hover:text-accent">Style Guide</a></li>
            <li><a href="#" className="hover:text-accent">404</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-5">Help</h4>
          <ul className="space-y-3 text-white/60 text-sm">
            <li><a href="#" className="hover:text-accent">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-accent">Terms of Service</a></li>
            <li><a href="#" className="hover:text-accent">Support</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-6 flex justify-end text-sm text-white/50">
          <a 
            href="https://axistechgroup.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-accent transition-colors"
          >
            Powered by AxisTechGroup
          </a>
        </div>
      </div>
    </footer>
  );
}
