import v1 from "@/assets/portfolio-1.mp4.asset.json";
import v2 from "@/assets/portfolio-2.mp4.asset.json";
import v3 from "@/assets/portfolio-3.mp4.asset.json";
import v4 from "@/assets/portfolio-4.mp4.asset.json";
import v5 from "@/assets/portfolio-5.mp4.asset.json";
import v6 from "@/assets/portfolio-6.mp4.asset.json";
import v7 from "@/assets/portfolio-7.mp4.asset.json";
import v8 from "@/assets/portfolio-8.mp4.asset.json";

export type ProjectCategory =
  | "Supplements"
  | "Skincare"
  | "Perfumes"
  | "Food & Wellness"
  | "Posters";

export interface Project {
  src: string;
  title: string;
  category: ProjectCategory | null;
}

export const projects: Project[] = [
  { src: v1.url, title: "Project 01", category: null },
  { src: v2.url, title: "Project 02", category: null },
  { src: v3.url, title: "Project 03", category: null },
  { src: v4.url, title: "Project 04", category: null },
  { src: v5.url, title: "Project 05", category: null },
  { src: v6.url, title: "Project 06", category: null },
  { src: v7.url, title: "Project 07", category: null },
  { src: v8.url, title: "Project 08", category: null },
];
