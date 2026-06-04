import { createFileRoute, Link } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { services } from "@/components/sections/ServicesSection";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Plumbing Services - FlowMaster Pro" },
      { name: "description", content: "Full list of licensed plumbing services: leak detection, drain cleaning, toilet repair, sump pumps, and more." },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-semibold mb-6">
            <ArrowLeft className="w-4 h-4" /> Back home
          </Link>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-navy mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            Every job, from a dripping faucet to a full repipe, handled by licensed pros and backed by our satisfaction guarantee.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-brand-lg transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-navy mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold">
                    Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
