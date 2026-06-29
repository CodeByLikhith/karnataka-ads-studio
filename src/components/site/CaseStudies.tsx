import { Link } from "@tanstack/react-router";
import { SectionHeader } from "./SectionHeader";
import { CaseStudyCard } from "./CaseStudyCard";
import { caseStudies } from "./case-studies-data";

export function CaseStudies() {
  const featured = caseStudies.slice(0, 3);
  return (
    <section id="case-studies" className="py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeader
            eyebrow="Case Studies"
            title={<>Brands we&rsquo;ve <span className="text-gradient-gold italic font-normal">moved the needle for.</span></>}
            description="Real campaigns. Real numbers. Built end-to-end in our AI creative studio."
          />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((s) => (
            <CaseStudyCard key={s.slug} study={s} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:border-gold/40 hover:-translate-y-0.5 transition-all"
          >
            View All Case Studies <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
