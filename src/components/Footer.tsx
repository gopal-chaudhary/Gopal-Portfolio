import { Github, Linkedin, Mail } from "lucide-react";
import { contact } from "@/constants/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-primary to-accent text-[10px] font-bold text-primary-foreground">gc</span>
          © {new Date().getFullYear()} Gopal Chaudhary · Crafted with care
        </div>
        <div className="flex items-center gap-1">
          <a aria-label="GitHub" href={contact.github} target="_blank" rel="noreferrer" className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
            <Github className="h-4 w-4" />
          </a>
          <a aria-label="LinkedIn" href={contact.linkedin} target="_blank" rel="noreferrer" className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
            <Linkedin className="h-4 w-4" />
          </a>
          <a aria-label="Email" href={`mailto:${contact.email}`} className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
