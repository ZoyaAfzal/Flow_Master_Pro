import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { ArrowLeft, Calendar } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { blogPosts } from "@/components/sections/BlogSection";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post.title ?? "Article"} — FlowMaster Pro` },
      { name: "description", content: loaderData?.post.excerpt },
      { property: "og:image", content: loaderData?.post.image },
    ],
  }),
  component: BlogPost,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center"><Link to="/blog" className="text-primary">Back to blog</Link></div>
  ),
  errorComponent: ({ error }) => <div className="p-10">{error.message}</div>,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div className="relative h-[55vh] min-h-[380px]">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/10" />
          <div className="absolute inset-0 max-w-4xl mx-auto px-5 lg:px-8 flex flex-col justify-end pb-12">
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-accent mb-4 w-fit">
              <ArrowLeft className="w-4 h-4" /> All articles
            </Link>
            <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide w-fit mb-3">{post.category}</span>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-white">{post.title}</h1>
            <div className="flex items-center gap-2 text-white/70 mt-4 text-sm">
              <Calendar className="w-4 h-4" /> {post.date}
            </div>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-5 lg:px-8 py-16 prose prose-lg">
          <p className="text-xl text-navy font-medium leading-relaxed">{post.excerpt}</p>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            Most plumbing problems start small. A faint stain on the ceiling, an unexplained jump
            in the water bill, a faucet that keeps dripping after you tighten it. Catch them early
            and the fix is usually quick and inexpensive. Wait, and a $200 repair can turn into a
            $5,000 restoration job.
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            In this article we walk through the most common warning signs, what causes them, and
            when it's safe to handle the fix yourself versus when to bring in a licensed pro. As
            always, if you're unsure, our 24/7 dispatch line is open, we're happy to take a look
            before things get worse.
          </p>
          <h2 className="font-display font-bold text-2xl text-navy mt-10">The bottom line</h2>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            Stay curious about the small stuff. Your home will reward you for it.
          </p>
        </article>

        <section className="bg-offwhite py-20">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <h2 className="font-display font-bold text-3xl text-navy mb-8">Keep reading</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link key={r.slug} to="/blog/$slug" params={{ slug: r.slug }} className="group bg-white rounded-2xl overflow-hidden flex gap-4 hover:shadow-brand transition">
                  <img src={r.image} alt={r.title} className="w-32 h-32 object-cover shrink-0" />
                  <div className="py-4 pr-4">
                    <h3 className="font-display font-bold text-navy group-hover:text-primary">{r.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{r.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
