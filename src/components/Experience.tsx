import { motion } from "motion/react";
import { resumeData } from "@/src/data";

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl px-6 py-24 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Professional Experience</h2>
        <div className="w-20 h-1 bg-white/10" />
      </motion.div>

      <div className="space-y-12">
        {resumeData.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 border-l border-white/10 group"
          >
            <div className="absolute top-0 left-[-5px] w-2 h-2 rounded-full bg-white/20 group-hover:bg-white transition-colors" />
            
            <div className="flex flex-col justify-between mb-4 md:flex-row md:items-center">
              <div>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-muted-foreground">{exp.company} • {exp.location}</p>
              </div>
              <p className="mt-1 text-sm font-medium md:mt-0 text-muted-foreground">{exp.period}</p>
            </div>

            <ul className="space-y-3">
              {exp.highlights.map((highlight, hIndex) => (
                <li key={hIndex} className="text-sm leading-relaxed text-muted-foreground">
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
