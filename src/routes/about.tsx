import { createFileRoute, Link } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TeamSection } from "@/components/sections/TeamSection";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About FlowMaster Pro — 15 Years of Trusted Plumbing" },
      { name: "description", content: "Meet the licensed team behind FlowMaster Pro and learn how we've earned the trust of 10,000+ homeowners." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-4">
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back home
          </Link>
        </div>
        <AboutSection />
        <WhyChooseUs />
        <TeamSection />
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
