import { useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1600, bounce: 0 });
  const rounded = useTransform(spring, (v) => Math.floor(v).toLocaleString());
  const [val, setVal] = useState("0");

  useEffect(() => {
    if (inView) mv.set(to);
    const unsub = rounded.on("change", setVal);
    return () => unsub();
  }, [inView, mv, rounded, to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export function TypedRoles({ roles }: { roles: string[] }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[idx % roles.length];
    const speed = deleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIdx((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, deleting, idx, roles]);

  return (
    <span className="text-primary">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[0.1em] bg-primary"
      />
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-2xl text-center"
    >
      {eyebrow && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {description && (
        <p className="mt-4 text-balance text-base text-muted-foreground md:text-lg">{description}</p>
      )}
    </motion.div>
  );
}

export function FadeIn({
  children,
  delay = 0,
  y = 24,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
