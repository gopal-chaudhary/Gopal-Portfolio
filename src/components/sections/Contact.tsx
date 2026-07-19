import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/constants/portfolio";
import { FadeIn, SectionHeader } from "@/components/Primitives";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    await navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader eyebrow="Let's build something" title="Get in touch" description="I'm currently open to full-time SDE, Backend, Full Stack and AI Engineering roles." />

        <FadeIn>
          <div className="mt-14 glass gradient-border relative overflow-hidden rounded-3xl p-10 md:p-14">
            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary/25 blur-3xl animate-floaty" />
            <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl animate-floaty" style={{ animationDelay: "2s" }} />

            <div className="relative grid gap-10 md:grid-cols-2">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Available for opportunities
                </div>
                <h3 className="mt-6 text-3xl font-semibold md:text-4xl">
                  <span className="gradient-text">Let's talk</span>
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{contact.availability}. Reach out — I typically respond within a day.</p>

                <div className="mt-8 space-y-3">
                  <InfoRow icon={<Mail className="h-4 w-4" />} label={contact.email} href={`mailto:${contact.email}`} />
                  <InfoRow icon={<Phone className="h-4 w-4" />} label={contact.phone} href={`tel:${contact.phone.replace(/\s/g, "")}`} />
                  <InfoRow icon={<MapPin className="h-4 w-4" />} label={contact.location} />
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6">
                <div className="glass rounded-2xl p-6">
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Quick actions</div>
                  <div className="mt-4 space-y-2.5">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={copyEmail}
                      className="flex w-full items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm transition-colors hover:bg-white/[0.06]"
                    >
                      <span className="flex items-center gap-2">
                        {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                        {copied ? "Copied!" : "Copy email"}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">{contact.email}</span>
                    </motion.button>
                    <a
                      href={resumeAsset.url}
                      download="Gopal_Chaudhary_Resume.pdf"
                      className="flex w-full items-center justify-between gap-3 rounded-xl bg-foreground px-4 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.01]"
                    >
                      Download Resume
                      <span className="font-mono text-xs opacity-70">PDF · 190KB</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <SocialBtn href={contact.github} label="GitHub"><Github className="h-4 w-4" /></SocialBtn>
                  <SocialBtn href={contact.linkedin} label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialBtn>
                  <SocialBtn href={contact.leetcode} label="LeetCode">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                      <path d="M13.5 2.3 8 8l3 3-6.6 6.6a4.8 4.8 0 0 0 0 6.8 4.8 4.8 0 0 0 6.8 0l3.6-3.6-1.7-1.7-3.6 3.6a2.4 2.4 0 0 1-3.4-3.4L15.7 10.7l1.7 1.7L21 8.8Z" />
                    </svg>
                  </SocialBtn>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, href }: { icon: React.ReactNode; label: string; href?: string }) {
  const Comp: any = href ? "a" : "div";
  return (
    <Comp
      href={href}
      className={`flex items-center gap-3 text-sm text-foreground/85 ${href ? "hover:text-primary transition-colors" : ""}`}
    >
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-muted-foreground">{icon}</span>
      {label}
    </Comp>
  );
}

function SocialBtn({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-xl glass transition-all hover:scale-105 hover:bg-white/10 hover:text-primary"
    >
      {children}
    </a>
  );
}
