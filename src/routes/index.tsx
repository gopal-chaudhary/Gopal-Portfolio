import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Metrics } from "@/components/sections/Metrics";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Gopal Chaudhary — Software Engineer · Backend · AI" },
      {
        name: "description",
        content:
          "Software Engineer specializing in Backend, Systems and AI. Ex-Autodesk. Co-founder @ TheWorkingZone. C++, TypeScript, Node.js, PostgreSQL, LLMs.",
      },
      { property: "og:title", content: "Gopal Chaudhary — Software Engineer" },
      {
        property: "og:description",
        content:
          "Portfolio of Gopal Chaudhary — Backend, Systems and AI Engineer. Ex-Autodesk. Co-founder @ TheWorkingZone.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Metrics />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
