import { motion } from "motion/react";
import { resumeData } from "@/src/data";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
  const categories = [
    { name: "Languages", items: resumeData.skills.languages },
    { name: "Backend & Frameworks", items: resumeData.skills.backend },
    { name: "Frontend", items: resumeData.skills.frontend },
    { name: "AI/ML & Agents", items: resumeData.skills.ai_ml },
    { name: "Distributed Systems", items: resumeData.skills.distributed },
    { name: "Databases", items: resumeData.skills.databases },
    { name: "Cloud & Infrastructure", items: resumeData.skills.cloud },
    { name: "Testing & Observability", items: resumeData.skills.testing }
  ];

  return (
    <section id="skills" className="max-w-5xl px-6 py-24 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Technical Arsenal</h2>
        <div className="w-20 h-1 bg-white/10" />
      </motion.div>

      <div className="grid gap-12 md:grid-cols-2">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <h3 className="mb-4 text-sm font-semibold tracking-widest uppercase text-muted-foreground">
              {cat.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((skill, sIndex) => (
                <Badge 
                  key={sIndex} 
                  variant="outline" 
                  className="px-4 py-1.5 text-sm glass hover:bg-white/5 transition-colors border-white/10"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
