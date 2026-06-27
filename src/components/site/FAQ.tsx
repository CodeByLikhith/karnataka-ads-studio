import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

const faqs = [
  { q: "What kind of brands do you work with?", a: "We specialise in consumer product brands — supplements, skincare, haircare, perfumes, wellness, health drinks and packaged foods." },
  { q: "How fast is your turnaround?", a: "Most creatives ship in 48–72 hours. Larger projects move through our seven-step process in under a week." },
  { q: "Do you actually use AI for everything?", a: "AI powers our production pipeline, but every concept, hook, script and edit is crafted by senior humans. AI is the brush, not the artist." },
  { q: "Can you match my brand's visual style?", a: "Yes. We start every engagement by studying your brand world and building a custom creative system before producing anything." },
  { q: "Do you handle ad strategy too?", a: "On the Growth and Scale plans, full creative strategy — hooks, angles, A/B frameworks — is included." },
  { q: "How do we get started?", a: "Book a discovery call. We'll audit your current creative, share examples from your category, and propose a plan." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-32 md:py-44">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          eyebrow="FAQ"
          align="center"
          title={<>Questions, <span className="text-gradient-gold italic font-normal">answered.</span></>}
        />

        <div className="mt-14 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="rounded-2xl glass overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 p-6 text-left hover:bg-white/[0.04] transition-colors"
                >
                  <span className="text-base md:text-lg font-medium">{f.q}</span>
                  <span className={`h-8 w-8 grid place-items-center rounded-full border border-border text-gold transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                <div className={`grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm md:text-base text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
