import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Play,
  Check,
  Search,
  Globe,
  Link2,
  TrendingUp,
  Sparkles,
  ChevronRight,
  MousePointer2,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingShell } from "@/components/marketing/shell";
import { PlatformLogo } from "@/components/brand";
import { HowItWorks, AISearch, Results, Pricing, FAQ } from "@/components/marketing/sections";
import heroBackground from "@/assets/search-background.jpg";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Overrank — Get found on Google & AI. Automatically." },
      {
        name: "description",
        content:
          "Autonomous SEO and GEO. Discover keywords, create expert articles, and grow visibility on Google, ChatGPT, and Perplexity.",
      },
      { property: "og:title", content: "Overrank — Your organic growth, on autopilot" },
      {
        property: "og:description",
        content:
          "Get found on Google and AI search with autonomous content. Explore the live demo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});
function Index() {
  const [engine, setEngine] = useState<"Google" | "Perplexity">("Google");
  const [query, setQuery] = useState("best solution for growing my business");
  const [searched, setSearched] = useState(query);
  return (
    <MarketingShell>
      <section className="hero-surface overflow-hidden px-5 pb-12 pt-36 sm:pt-40">
        <img src={heroBackground} className="hero-art" alt="" width={1920} height={1024} />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1.5 text-[11px] font-medium text-muted-foreground">
              <span className="live-dot size-1.5 rounded-full bg-success" />
              100% Automated. Zero Manual Publishing.
              <ChevronRight className="size-3" />
            </div>
            <h1 className="mt-6 text-[43px] font-bold leading-[1.13] sm:text-[64px]">
              Get customers from
              <br className="hidden sm:block" /> Google & AI Search.
              <br />
              <span className="brand-gradient">Automatically.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-[540px] text-[15px] leading-7 text-muted-foreground">
              Set it up once. Let AI research keywords, write expert articles,
              <br className="hidden sm:block" /> source images, and publish to your blog every
              single day.
              <br className="hidden sm:block" /> You focus on your business. We bring the customers.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button size="lg" className="glow-button h-12 px-6" asChild>
                <Link to="/dashboard">
                  Get started <ArrowRight />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 bg-background/80 px-6" asChild>
                <Link to="/dashboard">
                  <Play className="size-3 fill-current" /> View live demo
                </Link>
              </Button>
            </div>
            <div className="mt-4 flex justify-center gap-5 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Check className="size-3 text-success" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="size-3 text-success" />
                Set up in 2 minutes
              </span>
            </div>
          </div>
          <div className="float-toast absolute left-0 top-28 hidden w-[188px] -rotate-3 rounded-lg border border-border bg-card/95 p-3.5 soft-shadow xl:block">
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-success-soft text-success">
                <Link2 className="size-4" />
              </span>
              <div>
                <strong className="text-xs">+1 High-DR backlink</strong>
                <p className="mt-1 text-[10px] text-muted-foreground">Another win. Zero effort.</p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-[9px] text-muted-foreground">
              <span className="size-1 rounded-full bg-success" />
              Just now · Your website
            </div>
          </div>
          <div className="float-toast absolute right-0 top-36 hidden w-[190px] rotate-3 rounded-lg border border-border bg-card/95 p-3.5 soft-shadow xl:block">
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-accent text-primary">
                <Sparkles className="size-4" />
              </span>
              <div>
                <strong className="text-xs">Cited by Perplexity</strong>
                <p className="mt-1 text-[10px] text-muted-foreground">You're part of the answer.</p>
              </div>
            </div>
            <div className="mt-3 text-[9px] text-muted-foreground">✦ AI visibility is growing</div>
          </div>
          <div className="relative mx-auto mt-10 max-w-[650px]">
            <div className="mb-4 flex justify-center gap-1 rounded-full">
              <Button
                onClick={() => setEngine("Google")}
                variant={engine === "Google" ? "secondary" : "ghost"}
                size="sm"
                className="rounded-full text-xs"
              >
                <span className="font-bold text-brand-blue">G</span>Google Search
              </Button>
              <Button
                onClick={() => setEngine("Perplexity")}
                variant={engine === "Perplexity" ? "secondary" : "ghost"}
                size="sm"
                className="rounded-full text-xs"
              >
                <Sparkles className="size-3" />
                Perplexity AI
              </Button>
            </div>
            <div className="soft-shadow rounded-xl border border-border bg-background p-4 sm:p-5">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSearched(query.trim() || "best solution for growing my business");
                }}
                className="flex h-11 items-center gap-3 rounded-full border border-border bg-muted/50 px-4"
              >
                <span className="text-xl font-bold text-brand-blue">
                  {engine === "Google" ? "G" : <Sparkles className="size-5 text-foreground" />}
                </span>
                <input
                  aria-label="Search preview query"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="min-w-0 flex-1 bg-transparent text-xs outline-none sm:text-sm"
                />
                <Button type="submit" size="icon" variant="ghost" aria-label="Search">
                  <Search className="size-4 text-muted-foreground" />
                </Button>
              </form>
              <div className="relative mt-4 rounded-lg border border-primary/35 bg-background p-4 ring-4 ring-primary/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex size-8 items-center justify-center rounded-md border border-border bg-muted">
                      <Globe className="size-4 text-primary" />
                    </span>
                    <div className="text-[10px]">
                      <strong className="text-xs">Your Brand</strong>
                      <p className="mt-0.5 text-muted-foreground">yourbrand.com › blog › growth</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 rounded-full bg-success-soft px-2 py-1 text-[10px] font-semibold text-success">
                    <span className="size-1 rounded-full bg-success" />
                    {engine === "Google" ? "#1 on Google" : "Cited in AI answer"}
                  </span>
                </div>
                <h3 className="mt-3 text-[16px] font-semibold text-brand-blue">
                  {engine === "Google"
                    ? "The best solution for growing your business in 2026"
                    : `The answer to “${searched}”`}
                </h3>
                <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                  Discover a smarter way to grow. Expert insights, actionable strategies, and
                  everything you need to move your business forward.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="flex items-center gap-1 rounded bg-success-soft px-2 py-1 text-[9px] font-medium text-success">
                    <TrendingUp className="size-3" />
                    +2,400 monthly clicks
                  </span>
                  <span className="flex items-center gap-1 rounded bg-accent px-2 py-1 text-[9px] font-medium text-primary">
                    <Sparkles className="size-3" />
                    {engine === "Google" ? "Featured snippet" : "Trusted source"}
                  </span>
                </div>
                <MousePointer2 className="absolute -bottom-3 right-10 size-6 fill-foreground text-background" />
              </div>
            </div>
            <div className="float-toast absolute -left-36 bottom-12 hidden rounded-lg border border-border bg-background px-4 py-3 soft-shadow xl:block">
              <div className="flex items-center gap-2">
                <TrendingUp className="size-5 text-success" />
                <strong className="text-sm">+1,800</strong>
                <span className="text-[10px] text-muted-foreground">organic visitors</span>
              </div>
            </div>
            <p className="mt-4 text-center text-[10px] text-muted-foreground">
              Your brand. Everywhere they search.{" "}
              <span className="text-muted-foreground/65">· Illustrative preview</span>
            </p>
          </div>
        </div>
      </section>
      <section className="border-b border-border bg-background px-6 pb-10 pt-5">
        <p className="mb-6 text-center text-[11px] text-muted-foreground">
          PLUGS INTO YOUR CMS. SHOWS UP IN THEIR SEARCH.
        </p>
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-9 gap-y-5 text-muted-foreground sm:gap-x-12">
          {["WordPress", "Shopify", "Webflow", "ChatGPT", "Perplexity", "Gemini"].map((n) => (
            <div key={n} className="text-[16px]">
              <PlatformLogo name={n} />
            </div>
          ))}
        </div>
      </section>
      <HowItWorks />
      <AISearch />
      <Results />
      <Pricing />
      <FAQ />
      <section className="bg-muted px-6 py-16 text-center">
        <span className="text-primary">
          <Sparkles className="mx-auto mb-4 size-7" />
        </span>
        <h2 className="text-3xl font-bold">Your next customer is searching.</h2>
        <p className="mt-3 text-muted-foreground">Let's make sure they find you.</p>
        <Button className="glow-button mt-6" size="lg" asChild>
          <Link to="/dashboard">
            Get started <ArrowUpRight />
          </Link>
        </Button>
      </section>
    </MarketingShell>
  );
}
