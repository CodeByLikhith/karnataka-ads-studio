import { Link } from "@tanstack/react-router";
import type { CaseStudy } from "./case-studies-data";

interface Props {
  study: CaseStudy;
  showType?: boolean;
}

export function CaseStudyCard({ study, showType = false }: Props) {
  return (
    <Link
      to="/case-studies/$slug"
      params={{ slug: study.slug }}
      className="group block"
    >
      <article className="h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_30px_80px_-30px_rgba(212,175,55,0.35)]">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={study.cover}
            alt={`${study.brand} case study cover`}
            loading="lazy"
            width={1280}
            height={896}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute left-5 top-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/15 bg-black/40 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80">
              {study.industry}
            </span>
            {showType && (
              <span className="rounded-full border border-gold/30 bg-gold/10 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold">
                {study.creativeTypes[0]}
              </span>
            )}
          </div>
        </div>
        <div className="p-7 md:p-8">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{study.brand}</div>
          <h3 className="mt-3 text-xl md:text-2xl font-semibold tracking-tight leading-snug">
            {study.title}
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {study.shortDescription}
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold transition-transform group-hover:translate-x-1">
            View Case Study <span aria-hidden>→</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
