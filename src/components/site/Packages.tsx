import { SectionHeader } from "./SectionHeader";

const packages = [
  {
    name: "Launch",
    price: "₹40k",
    period: "/ project",
    desc: "For brands testing their first AI creative drop.",
    features: ["4 AI video ads", "6 static creatives", "1 round of revisions", "Basic creative strategy", "7-day delivery"],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹85k",
    period: "/ month",
    desc: "Our most popular plan for scaling brands.",
    features: [
      "12 AI video ads / month",
      "20 static creatives / month",
      "Unlimited revisions",
      "Full creative strategy",
      "Storyboards + scripts",
      "Dedicated creative lead",
      "Priority delivery",
    ],
    highlighted: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    desc: "End-to-end creative partner for 7-figure brands.",
    features: [
      "Unlimited creatives",
      "Weekly creative sprints",
      "Performance reporting",
      "Brand creative system",
      "Direct Slack channel",
      "Founder-led strategy",
    ],
    highlighted: false,
  },
];

export function Packages() {
  return (
    <section id="packages" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Packages"
          align="center"
          title={<>Pricing built for <span className="text-gradient-gold italic font-normal">ambitious brands.</span></>}
          description="Transparent pricing. No hidden retainers. Cancel anytime."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 md:p-10 transition-all duration-500 ${
                p.highlighted
                  ? "bg-gradient-to-b from-surface-elevated to-surface border border-gold/30 shadow-gold md:-translate-y-4"
                  : "glass hover:-translate-y-1"
              }`}
            >
              {p.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gold text-primary-foreground text-[10px] font-medium uppercase tracking-widest">
                  Most popular
                </div>
              )}
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.name}</div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className={`text-5xl font-semibold tracking-tight ${p.highlighted ? "text-gradient-gold" : ""}`}>
                  {p.price}
                </span>
                <span className="text-sm text-muted-foreground">{p.period}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>

              <div className="my-8 hairline" />

              <ul className="space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 text-gold">◆</span>
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-10 inline-flex w-full justify-center items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all ${
                  p.highlighted
                    ? "bg-gold text-primary-foreground hover:shadow-gold"
                    : "glass text-foreground hover:bg-white/10"
                }`}
              >
                Book This Package
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
