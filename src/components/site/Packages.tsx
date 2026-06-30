import { SectionHeader } from "./SectionHeader";
import { Check } from "lucide-react";

type Pkg = {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const packages: Pkg[] = [
  {
    name: "Launch",
    price: "₹3,999",
    period: "/ month",
    desc: "For new and growing brands testing high-quality AI ad creatives.",
    features: [
      "3 AI Ad Creatives",
      "3 Static Creatives",
      "Basic Creative Strategy",
      "1 Revision per Creative",
      "Delivery in 3–4 Working Days",
      "Dedicated WhatsApp Support",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "₹12,999",
    period: "/ month",
    desc: "For scaling brands shipping creative weekly.",
    features: [
      "10 AI Ad Creatives",
      "10 Static Creatives",
      "Creative Strategy",
      "Script Writing",
      "Storyboarding",
      "Priority Support",
      "Faster Delivery",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "₹19,999",
    period: "/ month",
    desc: "For brands ready to scale paid acquisition.",
    features: [
      "15 AI Ad Creatives",
      "15 Static Creatives",
      "Creative Strategy",
      "Script Writing",
      "Storyboarding",
      "Priority Delivery",
      "Monthly Creative Planning",
    ],
    cta: "Scale Faster",
  },
  {
    name: "Enterprise",
    price: "₹29,999",
    period: "/ month",
    desc: "End-to-end creative partner for high-volume brands.",
    features: [
      "25 AI Ad Creatives",
      "25 Static Creatives",
      "Complete Creative Strategy",
      "Script Writing",
      "Storyboarding",
      "Monthly Creative Planning",
      "Highest Priority Support",
      "Fastest Delivery",
    ],
    cta: "Book a Call",
  },
];

const setupIncludes = [
  "Meta Pixel Setup & Verification",
  "Conversion Tracking Setup",
  "Events Configuration",
  "Campaign Structure Setup",
  "Audience Setup",
  "Basic Account Audit",
  "Business Manager Review",
];

const managementIncludes = [
  "Campaign Management",
  "Weekly Optimization",
  "Budget Management",
  "Audience Optimization",
  "Creative Performance Testing",
  "ROAS & Performance Monitoring",
  "Monthly Performance Report",
  "Strategy Recommendations",
];

const managementFactors = [
  "Number of Campaigns",
  "Monthly Ad Spend",
  "Number of Ad Sets",
  "Creative Testing Requirements",
  "Optimization Frequency",
];

export function Packages() {
  return (
    <section id="packages" className="py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Pricing"
          align="center"
          title={
            <>
              Pricing built for{" "}
              <span className="text-gradient-gold italic font-normal">ambitious brands.</span>
            </>
          }
          description="Transparent monthly retainers. No hidden fees. Cancel anytime."
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`group relative rounded-[2rem] flex flex-col transition-all duration-500 ${
                p.highlighted
                  ? "bg-gradient-to-b from-surface-elevated via-surface to-background border border-gold/40 shadow-gold xl:-translate-y-3"
                  : "glass hover:-translate-y-1 hover:border-white/15"
              }`}
            >
              {p.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold text-primary-foreground text-[10px] font-semibold uppercase tracking-[0.2em] whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {p.name}
                </div>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span
                    className={`text-4xl md:text-5xl font-semibold tracking-tight ${
                      p.highlighted ? "text-gradient-gold" : ""
                    }`}
                  >
                    {p.price}
                  </span>
                  <span className="text-sm text-muted-foreground">{p.period}</span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed min-h-[3rem]">
                  {p.desc}
                </p>
              </div>

              <div className="hairline mx-8" />

              <div className="p-8 flex-1">
                <ul className="space-y-3.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          p.highlighted ? "text-gold" : "text-foreground/70"
                        }`}
                        strokeWidth={2.5}
                      />
                      <span className="text-foreground/90 leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0">
                <a
                  href="#contact"
                  className={`inline-flex w-full justify-center items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all ${
                    p.highlighted
                      ? "bg-gold text-primary-foreground hover:shadow-gold hover:-translate-y-0.5"
                      : "bg-white/5 text-foreground hover:bg-white/10 border border-border"
                  }`}
                >
                  {p.cta}
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-32 md:mt-40">
          <SectionHeader
            eyebrow="Add-ons"
            align="center"
            title={
              <>
                Meta Ads,{" "}
                <span className="text-gradient-gold italic font-normal">handled end-to-end.</span>
              </>
            }
            description="Optional services to launch and scale your ad account alongside your creative retainer."
          />

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
            {/* Setup */}
            <div className="rounded-[2rem] glass p-8 md:p-10 flex flex-col hover:-translate-y-1 hover:border-white/15 transition-all duration-500">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Meta Ads Setup
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-semibold tracking-tight">₹3,499</span>
                <span className="text-sm text-muted-foreground">One-time</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                For brands launching Meta Ads for the first time, or fixing an account that was
                configured incorrectly.
              </p>

              <div className="hairline my-8" />

              <ul className="space-y-3.5 flex-1">
                {setupIncludes.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
                    <span className="text-foreground/90 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-flex w-full justify-center items-center gap-2 rounded-full bg-white/5 hover:bg-white/10 border border-border px-6 py-3.5 text-sm font-medium transition-all"
              >
                Book Setup <span aria-hidden>→</span>
              </a>
            </div>

            {/* Management */}
            <div className="rounded-[2rem] glass p-8 md:p-10 flex flex-col hover:-translate-y-1 hover:border-white/15 transition-all duration-500">
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Meta Ads Management
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold border border-gold/30 bg-gold/10 rounded-full px-2.5 py-1 whitespace-nowrap">
                  Growth+ only
                </div>
              </div>
              <div className="mt-6 flex items-baseline gap-2 flex-wrap">
                <span className="text-4xl md:text-5xl font-semibold tracking-tight">
                  ₹7,000–₹15,000
                </span>
                <span className="text-sm text-muted-foreground">/ month</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Available only with Growth, Scale, or Enterprise packages. Pricing depends on
                campaign scope, monthly ad spend, ad sets, testing requirements, and optimization
                frequency.
              </p>

              <div className="hairline my-8" />

              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
                Includes
              </div>
              <ul className="space-y-3.5 flex-1">
                {managementIncludes.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
                    <span className="text-foreground/90 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-border bg-white/[0.02] p-4 text-xs text-muted-foreground leading-relaxed">
                Note: Ad spend is paid directly by the client and is not included in the management
                fee.
              </div>

              <a
                href="#contact"
                className="mt-6 inline-flex w-full justify-center items-center gap-2 rounded-full bg-white/5 hover:bg-white/10 border border-border px-6 py-3.5 text-sm font-medium transition-all"
              >
                Get a Quote <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          <p className="sr-only">
            Management pricing factors: {managementFactors.join(", ")}.
          </p>
        </div>
      </div>
    </section>
  );
}
