import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { SectionHeader } from "@/components/site/SectionHeader";

const CANONICAL = "https://karnataka-ads-studio.lovable.app/case-studies";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — AI Creative Performance | Karnataka Ads Studio" },
      {
        name: "description",
        content:
          "Real performance data from AI video ads, UGC and static creative built for consumer brands. Filter by industry and creative type.",
      },
      { property: "og:title", content: "Case Studies — Karnataka Ads Studio" },
      {
        property: "og:description",
        content: "Side-by-side performance results for AI creative across consumer categories.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: CaseStudiesIndex,
});

type Industry = "Skincare" | "Supplements" | "Perfumes" | "Wellness" | "Packaged Foods";
type CreativeType = "AI Video" | "UGC" | "Static";

interface Study {
  slug: string;
  title: string;
  summary: string;
  industry: Industry;
  type: CreativeType;
  metric: { label: string; value: string };
  href?: string;
}

const studies: Study[] = [
  {
    slug: "skincare-ai-vs-traditional",
    title: "AI Video Ads vs Traditional Shoots",
    summary:
      "A 30-day side-by-side test on Meta for a skincare brand. Same offer, same audience, two production methods.",
    industry: "Skincare",
    type: "AI Video",
    metric: { label: "ROAS", value: "4.8x" },
    href: "/case-studies/skincare-ai-vs-traditional",
  },
];

const industries: Array<"All" | Industry> = ["All", "Skincare", "Supplements", "Perfumes", "Wellness", "Packaged Foods"];
const types: Array<"All" | CreativeType> = ["All", "AI Video", "UGC", "Static"];

function CaseStudiesIndex() {
  const [industry, setIndustry] = useState<"All" | Industry>("All");
  const [type, setType] = useState<"All" | CreativeType>("All");

  const filtered = useMemo(
    () =>
      studies.filter(
        (s) => (industry === "All" || s.industry === industry) && (type === "All" || s.type === type),
      ),
    [industry, type],
  );

  return (
    <main className="relative">
      <Navbar />
      <section className="pt-40 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Case Studies"
            align="center"
            title={<>Proof, not <span className="text-gradient-gold italic font-normal">promises.</span></>}
            description="Real campaigns, real numbers. Filter by industry or creative type."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            <FilterRow label="Industry" options={industries} value={industry} onChange={setIndustry} />
            <FilterRow label="Creative type" options={types} value={type} onChange={setType} />
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.length === 0 && (
              <div className="md:col-span-2 text-center py-24 text-sm text-muted-foreground border border-dashed border-white/10 rounded-3xl">
                No case studies match these filters yet.
              </div>
            )}
            {filtered.map((s) => {
              const Card = (
                <article className="group h-full rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 md:p-10 transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_30px_80px_-30px_rgba(242,201,76,0.3)]">
                  <div className="flex flex-wrap gap-2">
                    <Tag>{s.industry}</Tag>
                    <Tag>{s.type}</Tag>
                  </div>
                  <h2 className="mt-6 text-2xl md:text-3xl font-semibold tracking-[-0.02em] leading-tight">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {s.summary}
                  </p>
                  <div className="mt-8 flex items-end justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        {s.metric.label}
                      </div>
                      <div className="mt-1 text-4xl font-semibold text-gradient-gold">{s.metric.value}</div>
                    </div>
                    {s.href && (
                      <span className="text-sm text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                        Read study →
                      </span>
                    )}
                  </div>
                </article>
              );
              return s.href ? (
                <Link key={s.slug} to={s.href} className="block">
                  {Card}
                </Link>
              ) : (
                <div key={s.slug}>{Card}</div>
              );
            })}
          </div>

          <div className="mt-20 text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-gold transition-colors">
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
      {children}
    </span>
  );
}

function FilterRow<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3 text-center md:text-left">
        {label}
      </div>
      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`px-4 py-2 rounded-full text-xs tracking-wide transition-all ${
              value === o
                ? "bg-gold text-primary-foreground"
                : "glass text-muted-foreground hover:text-foreground hover:border-white/15"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}
