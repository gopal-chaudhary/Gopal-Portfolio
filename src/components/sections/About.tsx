import { motion } from "framer-motion";
import { about, timeline } from "@/constants/portfolio";
import { FadeIn, SectionHeader } from "@/components/Primitives";

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow={about.eyebrow} title="About" />
        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <FadeIn className="lg:col-span-2">
            <div className="glass gradient-border relative overflow-hidden rounded-3xl p-8">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-2xl font-bold text-primary-foreground shadow-xl shadow-primary/30">
                    GC
                  </div>
                  <div>
                    <div className="font-semibold">Gopal Chaudhary</div>
                    <div className="text-xs text-muted-foreground">Software Engineer · India</div>
                  </div>
                </div>
                <div className="mt-8 space-y-3">
                  {about.highlights.map((h) => (
                    <div key={h.label} className="flex items-center justify-between border-b border-white/5 pb-2 text-sm last:border-0">
                      <span className="text-muted-foreground">{h.label}</span>
                      <span className="font-medium">{h.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-3 lg:pl-4">
            <div>
              <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
                {about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-10">
                <div className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">Timeline</div>
                <ol className="relative border-l border-white/10 pl-6">
                  {timeline.map((t, i) => (
                    <motion.li
                      key={t.year}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="mb-4 last:mb-0"
                    >
                      <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-primary shadow-[0_0_0_4px_rgba(120,110,255,0.15)]" />
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-sm text-primary">{t.year}</span>
                        <span className="text-sm text-foreground/80">{t.event}</span>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
