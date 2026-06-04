import { createFileRoute, Link } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { motion } from "framer-motion";
import { ArrowLeft, ZoomIn } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Project Gallery — FlowMaster Pro" },
      { name: "description", content: "Browse recent plumbing repairs, installations, and drain work completed by the FlowMaster Pro team." },
    ],
  }),
  component: GalleryPage,
});

const photos = [
  "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=900&q=80",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
  "https://images.unsplash.com/photo-1542013936693-884638332954?w=900&q=80",
  "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=900&q=80",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=80",
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80",
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&q=80",
  "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=900&q=80",
];

function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-semibold mb-6">
            <ArrowLeft className="w-4 h-4" /> Back home
          </Link>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-navy mb-4">Project Gallery</h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            A look at recent repairs, installations, and emergency calls - every job done right.
          </p>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {photos.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                className="group break-inside-avoid relative overflow-hidden rounded-2xl"
              >
                <img src={src} alt="" className="w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-navy/60 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-10 h-10 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
