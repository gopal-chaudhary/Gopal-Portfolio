import { stats } from "@/constants/portfolio";
import { Counter, FadeIn } from "@/components/Primitives";

export function Metrics() {
  return (
    <section id="metrics" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass gradient-border relative overflow-hidden rounded-3xl p-10 md:p-14">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.05}>
                <div className="text-center">
                  <div className="text-3xl font-semibold tracking-tight md:text-4xl">
                    <span className="gradient-text">
                      <Counter to={s.value} suffix={s.suffix} />
                    </span>
                  </div>
                  <div className="mt-1.5 text-xs text-muted-foreground md:text-sm">{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
