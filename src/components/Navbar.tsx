import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
import { resumeData } from "@/src/data";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass"
    >
      <div className="text-xl font-bold tracking-tighter font-display">
        SP<span className="text-muted-foreground">.</span>
      </div>
      
      <div className="flex items-center gap-6">
        <a href="#experience" className="text-sm font-medium transition-colors hover:text-muted-foreground">Experience</a>
        <a href="#projects" className="text-sm font-medium transition-colors hover:text-muted-foreground">Projects</a>
        <a href="#skills" className="text-sm font-medium transition-colors hover:text-muted-foreground">Skills</a>
        <a href="#blogs" className="text-sm font-medium transition-colors hover:text-muted-foreground">Blogs</a>
      </div>

      <div className="flex items-center gap-4">
        <a href={resumeData.contact.github} target="_blank" rel="noreferrer" className="p-2 transition-colors rounded-full hover:bg-white/10">
          <Github className="w-5 h-5" />
        </a>
        <a href={resumeData.contact.linkedin} target="_blank" rel="noreferrer" className="p-2 transition-colors rounded-full hover:bg-white/10">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href={`mailto:${resumeData.contact.email}`} className="p-2 transition-colors rounded-full hover:bg-white/10">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </motion.nav>
  );
}
