import { resumeData } from "@/src/data";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="px-6 py-12 border-t border-white/5 bg-background">
      <div className="flex flex-col items-center justify-between max-w-6xl gap-8 mx-auto md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="mb-2 text-2xl font-bold font-display">Let's connect.</h2>
          <p className="text-muted-foreground">Open for collaborations and interesting projects.</p>
        </div>

        <div className="flex items-center gap-6">
          <a href={resumeData.contact.github} target="_blank" rel="noreferrer" className="transition-colors text-muted-foreground hover:text-foreground">
            <Github className="w-6 h-6" />
          </a>
          <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer" className="transition-colors text-muted-foreground hover:text-foreground">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={`mailto:${resumeData.contact.email}`} className="transition-colors text-muted-foreground hover:text-foreground">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <button 
          onClick={scrollToTop}
          className="flex items-center justify-center w-12 h-12 transition-colors rounded-full glass hover:bg-white/10"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {resumeData.name}. Built with precision.
        </p>
      </div>
    </footer>
  );
}
