import { motion } from "motion/react";
import { resumeData } from "@/src/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl px-6 py-24 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Featured Projects</h2>
        <p className="text-muted-foreground">A selection of my recent technical work and experiments.</p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resumeData.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full transition-all duration-300 border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-white/5">
                    <Github className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <ExternalLink className="w-4 h-4 transition-opacity opacity-0 group-hover:opacity-100 text-muted-foreground" />
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIndex) => (
                    <Badge key={tIndex} variant="secondary" className="text-[10px] uppercase tracking-wider bg-white/5 text-muted-foreground hover:bg-white/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
