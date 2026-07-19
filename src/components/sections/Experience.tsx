import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { experiences } from "@/constants/portfolio";
import { SectionHeader } from "@/components/Primitives";

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Where I've built things"
          title="Experience"
          description="From shipping production C++ at Autodesk to co-founding a marketplace and owning the backend end-to-end."
        />

        <div className="mt-20 relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:left-1/2" />
          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="relative grid gap-6 md:grid-cols-2 md:gap-16"
              >
                <div className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_0_4px_rgba(120,110,255,0.2)] md:left-1/2" />

                <div className={`pl-10 md:pl-0 ${i % 2 === 1 ? "md:col-start-2 md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="group glass gradient-border relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:glow-primary">
                    <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${exp.accent} opacity-0 blur-2xl transition-opacity group-hover:opacity-100`} />
                    <div className={`flex items-start justify-between gap-4 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                      <div>
                        <h3 className="text-xl font-semibold">{exp.company}</h3>
                        <p className="mt-0.5 text-sm text-primary">{exp.role}</p>
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                        {exp.duration}
                      </span>
                    </div>
                    <div className={`mt-2 flex items-center gap-1.5 text-xs text-muted-foreground ${i % 2 === 1 ? "md:justify-end" : ""}`}>
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </div>

                    <ul className="mt-5 space-y-2.5">
                      {exp.achievements.map((a) => (
                        <li key={a} className={`flex gap-2.5 text-sm text-foreground/80 ${i % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""}`}>
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary/70" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={`mt-5 flex flex-wrap gap-1.5 ${i % 2 === 1 ? "md:justify-end" : ""}`}>
                      {exp.stack.map((t) => (
                        <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-mono text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
