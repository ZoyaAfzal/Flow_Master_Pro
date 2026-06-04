import { createFileRoute, Link } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogSection } from "@/components/sections/BlogSection";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Plumbing Tips & Guides — FlowMaster Pro Blog" },
      { name: "description", content: "Expert plumbing tips, maintenance guides, and homeowner advice from the FlowMaster Pro team." },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-4">
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back home
          </Link>
        </div>
        <BlogSection />
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
