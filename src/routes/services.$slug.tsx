import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { services } from "@/components/sections/ServicesSection";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.service.title ?? "Service"} — FlowMaster Pro` },
      { name: "description", content: loaderData?.service.desc },
      { property: "og:image", content: loaderData?.service.image },
    ],
  }),
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-background">
      <div className="text-center">
        <h1 className="font-display text-4xl text-navy mb-4">Service not found</h1>
        <Link to="/services" className="text-primary font-semibold">Back to services</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => <div className="p-10">{error.message}</div>,
});

const benefits = [
  "Upfront flat-rate pricing",
  "Licensed and insured techs",
  "Same-day appointments",
  "1-year workmanship warranty",
];

const process = [
  { n: "01", t: "Diagnose", d: "We inspect on site and explain what we find." },
  { n: "02", t: "Quote", d: "You approve a clear, flat-rate price before we start." },
  { n: "03", t: "Fix & Verify", d: "We complete the work, clean up, and confirm it's solved." },
];

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy/70" />
          <div className="relative max-w-7xl mx-auto px-5 lg:px-8 h-full flex flex-col justify-end pb-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-accent mb-4 w-fit">
              <ArrowLeft className="w-4 h-4" /> All services
            </Link>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white max-w-3xl">{service.title}</h1>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p className="text-xl text-navy font-medium">{service.desc}</p>
              <p>
                Our specialists combine modern diagnostic tools with years of hands-on craft. We
                respect your home - drop cloths, shoe covers, careful tear-out and we never
                upsell what you don't need.
              </p>
              <p>
                Whether it's a small fix or a full project, you get the same care, the same
                guarantee, and the same upfront pricing every time.
              </p>

              <div className="mt-10">
                <h2 className="font-display text-3xl font-bold text-navy mb-6">What's included</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-navy">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground grid place-items-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <h2 className="font-display text-3xl font-bold text-navy mb-6">Our process</h2>
                <div className="space-y-4">
                  {process.map((p) => (
                    <div key={p.n} className="flex gap-5 bg-offwhite rounded-2xl p-5">
                      <div className="font-display text-3xl font-bold text-primary">{p.n}</div>
                      <div>
                        <h3 className="font-display font-bold text-lg text-navy">{p.t}</h3>
                        <p className="text-muted-foreground text-base">{p.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 self-start space-y-6">
            <div className="bg-primary text-primary-foreground rounded-3xl p-7 shadow-brand">
              <h3 className="font-display font-bold text-2xl mb-3">Book this service</h3>
              <p className="text-white/80 mb-5">Same day appointments available across our service area.</p>
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold py-3 rounded-full hover:scale-[1.02] transition"
              >
                Request Appointment <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white border border-border rounded-3xl p-7">
                <h3 className="font-display font-bold text-xl text-navy mb-4">Related services</h3>
                <ul className="space-y-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link to="/services/$slug" params={{ slug: r.slug }} className="flex items-center gap-3 group">
                        <img src={r.image} alt={r.title} className="w-14 h-14 rounded-xl object-cover" />
                        <span className="font-semibold text-navy group-hover:text-primary">{r.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
