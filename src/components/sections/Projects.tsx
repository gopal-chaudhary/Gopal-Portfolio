import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Search, X } from "lucide-react";
import { projects, type Project } from "@/constants/portfolio";
import { SectionHeader } from "@/components/Primitives";

const categories = ["All", "Backend", "AI", "Full Stack", "Systems", "Mobile"] as const;

export function Projects() {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = projects.filter((p) => {
    const okCat = category === "All" || p.category === category;
    const okQ = !query || (p.title + p.description + p.stack.join(" ")).toLowerCase().includes(query.toLowerCase());
    return okCat && okQ;
  });

  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects"
          description="Each project is a case study — problem, solution, and the engineering behind it."
        />

        <div className="mt-12 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-3.5 py-1.5 text-sm transition-all ${
                  category === c ? "bg-foreground text-background" : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects…"
              className="w-full rounded-full glass py-2 pl-9 pr-3 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.button
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setSelected(p)}
                className={`group relative overflow-hidden rounded-2xl text-left glass gradient-border p-7 transition-all hover:-translate-y-1 hover:glow-primary ${
                  p.featured ? "md:col-span-1" : ""
                }`}
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/15 blur-3xl transition-all group-hover:bg-primary/25" />
                <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-accent/10 blur-3xl transition-opacity group-hover:opacity-80" />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-primary">
                      {p.category}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="mt-1 text-xs font-mono text-muted-foreground">{p.year}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </div>

                <p className="relative mt-4 text-sm text-foreground/80">{p.description}</p>

                <div className="relative mt-5 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 6).map((t) => (
                    <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-mono text-muted-foreground">
                      {t}
                    </span>
                  ))}
                  {p.stack.length > 6 && (
                    <span className="rounded-md px-2 py-0.5 text-[11px] font-mono text-muted-foreground">+{p.stack.length - 6}</span>
                  )}
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted-foreground">No projects match your filters.</p>
        )}
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/70 p-4 backdrop-blur-xl"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="glass-strong relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-3xl p-8"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full glass transition-all hover:bg-white/10"
        >
          <X className="h-4 w-4" />
        </button>

        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-primary">
          {project.category}
        </span>
        <h3 className="mt-4 text-3xl font-semibold gradient-text">{project.title}</h3>
        <p className="mt-1 font-mono text-xs text-muted-foreground">{project.year}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-primary">Problem</h4>
            <p className="mt-2 text-sm text-foreground/85">{project.problem}</p>
          </div>
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-primary">Solution</h4>
            <p className="mt-2 text-sm text-foreground/85">{project.solution}</p>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-primary">Impact</h4>
          <ul className="mt-3 grid gap-2 md:grid-cols-2">
            {project.impact.map((i) => (
              <li key={i} className="flex gap-2 text-sm text-foreground/85">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                {i}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-primary">Tech Stack</h4>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.stack.map((t) => (
              <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-mono text-foreground/80">
                {t}
              </span>
            ))}
          </div>
        </div>

        {(project.github || project.live) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm hover:bg-white/10">
                <Github className="h-4 w-4" /> View Code
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:scale-[1.02]">
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
