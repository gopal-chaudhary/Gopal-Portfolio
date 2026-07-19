import { Award } from "lucide-react";
import { achievements, certifications } from "@/constants/portfolio";
import { FadeIn, SectionHeader } from "@/components/Primitives";

export function Achievements() {
  return (
    <section id="achievements" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Signals of quality" title="Achievements" description="Milestones I'm proud of, from competitive programming to shipping in industry." />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.05}>
              <div className="group glass gradient-border relative h-full overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:glow-primary">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all group-hover:bg-primary/20" />
                <div className="relative flex items-start justify-between gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                    {a.tag}
                  </span>
                </div>
                <h3 className="relative mt-5 text-base font-semibold">{a.title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground">{a.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeader eyebrow="Continuous learning" title="Certifications" />
          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c, i) => (
              <FadeIn key={c.title + i} delay={i * 0.03}>
                <div className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-primary/30 hover:bg-white/[0.04]">
                  <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 font-mono text-xs font-semibold text-primary">
                    {c.provider.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{c.title}</div>
                    <div className="text-xs text-muted-foreground">{c.provider}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
