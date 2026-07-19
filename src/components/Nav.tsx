import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { contact } from "@/constants/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav className="glass-strong flex w-full max-w-4xl items-center justify-between gap-4 rounded-full px-4 py-2.5 md:px-6">
        <a href="#home" className="group flex items-center gap-2 font-mono text-sm font-semibold">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30">
            gc
          </span>
          <span className="hidden sm:inline">gopal.se.dev</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1">
          <a aria-label="GitHub" href={contact.github} target="_blank" rel="noreferrer" className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
            <Github className="h-4 w-4" />
          </a>
          <a aria-label="LinkedIn" href={contact.linkedin} target="_blank" rel="noreferrer" className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
            <Linkedin className="h-4 w-4" />
          </a>
          <a aria-label="Email" href={`mailto:${contact.email}`} className="ml-1 hidden items-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background transition-transform hover:scale-105 sm:inline-flex">
            <Mail className="h-3.5 w-3.5" />
            Get in touch
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
