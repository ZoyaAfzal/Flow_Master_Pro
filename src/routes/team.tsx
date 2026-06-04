import { createFileRoute, Link } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TeamSection } from "@/components/sections/TeamSection";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — FlowMaster Pro" },
      { name: "description", content: "Meet the licensed plumbers and field supervisors who make FlowMaster Pro the most trusted name in plumbing." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-4">
          <Link to="/" className="inline-flex items-center gap-2 text-primary font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back home
          </Link>
        </div>
        <TeamSection />
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
