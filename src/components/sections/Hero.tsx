import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { hero, contact } from "@/constants/portfolio";
import { TypedRoles } from "@/components/Primitives";
import { ParticleField } from "@/components/ParticleField";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10 noise-bg" />
      <div className="absolute inset-0 -z-10 opacity-70">
        <ParticleField />
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(120,110,255,0.18), transparent 40%), radial-gradient(circle at 80% 70%, rgba(200,120,255,0.14), transparent 45%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 40%, black, transparent 80%)",
        }}
      />

      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Available for SDE · Backend · AI Engineering roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl"
        >
          <span className="gradient-text">{hero.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-4 flex items-center gap-3 text-2xl font-medium text-foreground/90 md:text-3xl"
        >
          <span className="text-muted-foreground">I'm a</span>
          <TypedRoles roles={hero.roles} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg"
        >
          {hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href={resumeAsset.url}
            download="Gopal_Chaudhary_Resume.pdf"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:scale-[1.02] hover:bg-foreground/90"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium transition-all hover:bg-white/10"
          >
            View Projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex items-center gap-3"
        >
          <SocialIcon href={contact.github} label="GitHub"><Github className="h-4 w-4" /></SocialIcon>
          <SocialIcon href={contact.linkedin} label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialIcon>
          <SocialIcon href={contact.leetcode} label="LeetCode">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
              <path d="M13.5 2.3 8 8l3 3-6.6 6.6a4.8 4.8 0 0 0 0 6.8 4.8 4.8 0 0 0 6.8 0l3.6-3.6-1.7-1.7-3.6 3.6a2.4 2.4 0 0 1-3.4-3.4L15.7 10.7l1.7 1.7L21 8.8Z" />
            </svg>
          </SocialIcon>
          <SocialIcon href={`mailto:${contact.email}`} label="Email"><Mail className="h-4 w-4" /></SocialIcon>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/70"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full glass transition-all hover:scale-110 hover:bg-white/10 hover:text-primary"
    >
      {children}
    </a>
  );
}
