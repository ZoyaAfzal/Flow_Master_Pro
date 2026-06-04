import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WorkProcess } from "@/components/sections/WorkProcess";
import { GallerySection } from "@/components/sections/GallerySection";
import { BlogSection } from "@/components/sections/BlogSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FlowMaster Pro - Licensed 24/7 Plumbing Care for Your Home" },
      { name: "description", content: "Trusted by 10,500+ homeowners. Leak detection, drain cleaning, toilet repair, and emergency plumbing, done right the first time." },
      { property: "og:title", content: "FlowMaster Pro - 24/7 Plumbing Experts" },
      { property: "og:description", content: "Licensed, insured, same-day plumbing service with transparent pricing and a satisfaction guarantee." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TrustBadges />
        <WhyChooseUs />
        <ServicesSection />
        <AboutSection />
        <TeamSection />
        <TestimonialsSection />
        <WorkProcess />
        <GallerySection />
        <BlogSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
