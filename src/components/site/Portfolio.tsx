import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import v1 from "@/assets/portfolio-1.mp4.asset.json";
import v2 from "@/assets/portfolio-2.mp4.asset.json";
import v3 from "@/assets/portfolio-3.mp4.asset.json";
import v4 from "@/assets/portfolio-4.mp4.asset.json";
import v5 from "@/assets/portfolio-5.mp4.asset.json";
import v6 from "@/assets/portfolio-6.mp4.asset.json";
import v7 from "@/assets/portfolio-7.mp4.asset.json";
import v8 from "@/assets/portfolio-8.mp4.asset.json";

type Category = "All" | "Supplements" | "Skincare" | "Perfumes" | "Food & Wellness" | "Posters";

interface Project {
  src: string;
  title: string;
  category: Exclude<Category, "All"> | null;
}

// Categories are intentionally left null until each project is reviewed and
// tagged. The "All" filter shows every project; specific filters only show
// items explicitly assigned to that category.
const projects: Project[] = [
  { src: v1.url, title: "Project 01", category: null },
  { src: v2.url, title: "Project 02", category: null },
  { src: v3.url, title: "Project 03", category: null },
  { src: v4.url, title: "Project 04", category: null },
  { src: v5.url, title: "Project 05", category: null },
  { src: v6.url, title: "Project 06", category: null },
  { src: v7.url, title: "Project 07", category: null },
  { src: v8.url, title: "Project 08", category: null },
];

const categories: Category[] = ["All", "Supplements", "Skincare", "Perfumes", "Food & Wellness", "Posters"];

export function Portfolio() {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<Project | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <SectionHeader
            eyebrow="Portfolio"
            title={<>Work that <span className="text-gradient-gold italic font-normal">stops thumbs.</span></>}
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-xs tracking-wide transition-all ${
                  active === c
                    ? "bg-gold text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground hover:border-white/15"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-24 text-sm text-muted-foreground">
              New {active.toLowerCase()} work coming soon.
            </div>
          )}
          {filtered.map((p, i) => (
            <button
              key={p.src}
              onClick={() => setLightbox(p)}
              className="group relative rounded-3xl overflow-hidden bg-surface aspect-[9/14] border border-border hover:border-gold/30 transition-all"
              style={{ animationDelay: `${i * 60}ms` }}
              aria-label={`Preview ${p.title}`}
            >
              <video
                src={p.src}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black via-black/70 to-transparent">
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
                  {p.category ?? "Featured"}
                </div>
                <div className="mt-1.5 flex items-end justify-between gap-3">
                  <div className="text-base font-medium">{p.title}</div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground group-hover:text-gold transition-colors">
                    Click to preview ↗
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl grid place-items-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 h-11 w-11 rounded-full glass grid place-items-center text-lg"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <div className="relative max-h-[85vh] w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <div className="rounded-3xl overflow-hidden bg-black shadow-elevated aspect-[9/16]">
              <video src={lightbox.src} controls autoPlay loop className="h-full w-full object-contain" />
            </div>
            <div className="mt-4 text-center">
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
                {lightbox.category ?? "Featured"}
              </div>
              <div className="mt-1 text-base font-medium">{lightbox.title}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
