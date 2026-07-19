import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/constants/portfolio";
import { SectionHeader } from "@/components/Primitives";

export function Skills() {
  const [active, setActive] = useState<string>("All");
  const cats = ["All", ...skillCategories.map((c) => c.category)];
  const visible = active === "All" ? skillCategories : skillCategories.filter((c) => c.category === active);

  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="The stack I reach for" title="Skills" description="Tools I use to design, build and ship production software." />

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-1.5 text-sm transition-all ${
                active === c
                  ? "bg-foreground text-background"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((cat, i) => (
              <motion.div
                key={cat.category}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group glass gradient-border relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:glow-primary"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:bg-primary/20" />
                <div className="relative">
                  <h3 className="text-sm font-mono uppercase tracking-wider text-primary">{cat.category}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.skills.map((s, j) => (
                      <motion.span
                        key={s}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: j * 0.03 }}
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-foreground/90 transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
