import supplementImg from "@/assets/cs-supplement.jpg";
import skincareImg from "@/assets/cs-skincare.jpg";
import perfumeImg from "@/assets/cs-perfume.jpg";
import healthdrinkImg from "@/assets/cs-healthdrink.jpg";

export type CaseStudyIndustry =
  | "Supplements"
  | "Skincare"
  | "Perfumes"
  | "Health Drinks";

export type CaseStudyCreativeType = "AI Video" | "UGC" | "Static";

export interface CaseStudySection {
  eyebrow: string;
  title: string;
  body: string;
}

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  brand: string;
  title: string;
  industry: CaseStudyIndustry;
  creativeTypes: CaseStudyCreativeType[];
  typeLabel: string;
  shortDescription: string;
  cover: string;
  overview: string;
  challenge: string;
  strategy: string;
  gallery: string[];
  results: CaseStudyMetric[];
  testimonial: { quote: string; name: string; role: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "supplement-brand",
    brand: "Nexora Nutrition",
    title: "Scaling a performance supplement with AI UGC.",
    industry: "Supplements",
    creativeTypes: ["AI Video", "UGC"],
    typeLabel: "AI UGC + Product Commercial",
    shortDescription:
      "AI-led UGC and a cinematic product film took a new testosterone-support SKU from launch to scale on Meta.",
    cover: supplementImg,
    overview:
      "A new D2C supplement brand needed a launch creative system that could move past founder-led talking heads without the cost of monthly studio shoots. We built an AI UGC engine and a hero product commercial designed to compound.",
    challenge:
      "The category is saturated with talking-head reviews and stock B-roll. CPMs were rising, hook rates were soft, and the brand had no in-house creative team to test fast enough to keep an ad account healthy.",
    strategy:
      "We scripted twelve UGC-style hooks aimed at the gym-going 25–40 male, generated them with AI avatars and lip-sync, and intercut them with a single cinematic product film shot in-engine. The film became the brand spine; the UGC became the testing fuel.",
    gallery: [supplementImg, supplementImg, supplementImg],
    results: [
      { label: "ROAS at scale", value: "4.6×" },
      { label: "CPC reduction", value: "−52%" },
      { label: "Creatives in 30 days", value: "18" },
    ],
    testimonial: {
      quote:
        "We replaced a month of studio production with a week of AI iterations. The account has not looked back.",
      name: "Founder",
      role: "Nexora Nutrition",
    },
  },
  {
    slug: "skincare-brand",
    brand: "Lumière Skin",
    title: "Performance creatives for a vitamin-C serum.",
    industry: "Skincare",
    creativeTypes: ["AI Video", "Static"],
    typeLabel: "Performance Creatives + AI Commercial",
    shortDescription:
      "A cinematic AI commercial paired with a static testing system pushed ROAS past 4× in 30 days.",
    cover: skincareImg,
    overview:
      "A premium skincare brand wanted to move beyond influencer-led content for cold traffic. The goal was a flagship film for top-of-funnel and a static creative library for fast iteration on Meta.",
    challenge:
      "Studio shoots were costing ₹1.8L per cycle and producing two ads. Hook rates were dropping below 20%, ROAS was stuck at 2.1×, and refreshing creative meant losing a month to pre-production.",
    strategy:
      "We built a 30-second AI commercial around extreme texture macros and ingredient cinematography, then layered a static system — claim-led, ingredient-led, and offer-led variants — to keep the account fed weekly.",
    gallery: [skincareImg, skincareImg, skincareImg],
    results: [
      { label: "ROAS", value: "4.8×" },
      { label: "Hook rate", value: "42%" },
      { label: "Production cost", value: "−90%" },
    ],
    testimonial: {
      quote:
        "The AI hero ad outperformed every studio cut we had run before, at a fraction of the cost and timeline.",
      name: "Marketing Lead",
      role: "Lumière Skin",
    },
  },
  {
    slug: "perfume-brand",
    brand: "Maison Alhambra",
    title: "A luxury perfume film built entirely in AI.",
    industry: "Perfumes",
    creativeTypes: ["AI Video"],
    typeLabel: "Luxury Product Advertisement",
    shortDescription:
      "A cinematic fragrance film with editorial direction — no set, no crew, no compromise on craft.",
    cover: perfumeImg,
    overview:
      "An emerging perfume house wanted an editorial film for a new oud-forward fragrance launch. The brief asked for the visual language of a luxury house at the budget of a D2C startup.",
    challenge:
      "A traditional perfume film with a model, location, lighting team and post would have cost ₹5L+ and taken two months. The brand needed launch creative in three weeks for a Diwali drop.",
    strategy:
      "We built the entire film in AI — silk flowing in slow motion, gold detail macro shots, smoke and bottle hero frames — and finished it with a colour grade that matched the brand's print campaign. One film, three aspect ratios, twelve cutdowns.",
    gallery: [perfumeImg, perfumeImg, perfumeImg],
    results: [
      { label: "Time from brief to live", value: "18 days" },
      { label: "Launch-week ROAS", value: "3.9×" },
      { label: "Cutdowns shipped", value: "12" },
    ],
    testimonial: {
      quote:
        "Our launch film looked like a perfume house with ten years of equity behind it. We are eight months old.",
      name: "Creative Director",
      role: "Maison Alhambra",
    },
  },
  {
    slug: "health-drink-brand",
    brand: "Nutriley Ragi Malt",
    title: "Traditional drink, modern campaign.",
    industry: "Health Drinks",
    creativeTypes: ["AI Video", "Static"],
    typeLabel: "AI Commercial + Static Campaign",
    shortDescription:
      "An AI-led campaign positioned a traditional ragi malt brand for a new urban audience.",
    cover: healthdrinkImg,
    overview:
      "A regional health drink brand wanted to take a familiar product — a traditional Indian ragi malt — into urban Bangalore and Chennai households without losing the heritage cue that made it trusted at home.",
    challenge:
      "Existing creative was packaging-heavy and felt dated. The brand needed a campaign that respected the heritage of ragi while feeling at home next to modern D2C breakfast brands.",
    strategy:
      "We built a warm, golden-hour AI commercial that intercut grain macros with a modern morning ritual, then extended it into a static campaign for Meta and quick-commerce — same visual language, three formats.",
    gallery: [healthdrinkImg, healthdrinkImg, healthdrinkImg],
    results: [
      { label: "Add-to-cart lift", value: "+38%" },
      { label: "Blended ROAS", value: "3.4×" },
      { label: "Statics in campaign", value: "16" },
    ],
    testimonial: {
      quote:
        "The film made a traditional drink feel current. Our urban repeat-purchase rate moved within the first month.",
      name: "Brand Manager",
      role: "Nutriley",
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
