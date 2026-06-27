import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Industries } from "@/components/site/Industries";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { Packages } from "@/components/site/Packages";
import { WhyUs } from "@/components/site/WhyUs";
import { Founder } from "@/components/site/Founder";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karnataka Ads Studio — Where Products Become Scroll-Stoppers" },
      {
        name: "description",
        content:
          "Premium AI creative agency for consumer product brands. AI video ads, UGC, performance statics and creative strategy for supplement, skincare, perfume and wellness brands.",
      },
      { property: "og:title", content: "Karnataka Ads Studio — AI Creative for Consumer Brands" },
      {
        property: "og:description",
        content:
          "Cinematic AI ad creatives for supplement, skincare, perfume and wellness brands. Scroll-stopping work without expensive shoots.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <Portfolio />
      <Process />
      <Packages />
      <WhyUs />
      <Founder />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
