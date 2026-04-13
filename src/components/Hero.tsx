import { motion } from "motion/react";
import { resumeData } from "@/src/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20 overflow-hidden text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="inline-flex items-center px-3 py-1 text-xs font-medium border rounded-full bg-white/5 border-white/10 text-muted-foreground">
          <span className="relative flex w-2 h-2 mr-2">
            <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-400"></span>
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500"></span>
          </span>
          Available for new opportunities
        </div>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-4xl mb-6 text-5xl font-bold leading-tight md:text-7xl lg:text-8xl text-gradient"
      >
        Crafting scalable systems with precision.
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mb-10 text-lg md:text-xl text-muted-foreground"
      >
        I'm <span className="text-foreground">{resumeData.name}</span>, a {resumeData.role} dedicated to building high-performance backend architectures and seamless full-stack experiences.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col gap-4 sm:flex-row"
      >
        <Button size="lg" className="rounded-full group">
          View Projects
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button size="lg" variant="outline" className="rounded-full glass">
          Download Resume
          <Download className="w-4 h-4 ml-2" />
        </Button>
      </motion.div>

      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </section>
  );
}
