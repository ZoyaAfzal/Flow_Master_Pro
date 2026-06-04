import { createFileRoute, Link } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book — FlowMaster Pro" },
      { name: "description", content: "Book your plumbing appointment online or call our 24/7 dispatch line. Same-day service available." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-4">
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back home
          </Link>
        </div>
        <CTASection />
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
