import { motion } from "motion/react";
import { resumeData } from "@/src/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

export default function Blogs() {
  if (!resumeData.blogs || resumeData.blogs.length === 0) return null;

  return (
    <section id="blogs" className="max-w-5xl px-6 py-24 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Blogs & Learning</h2>
        <div className="w-20 h-1 bg-white/10" />
        <p className="mt-4 text-muted-foreground">Sharing my journey as I explore new technologies and build the future of AI.</p>
      </motion.div>

      <div className="grid gap-8">
        {resumeData.blogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300">
              <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5">
                    <BookOpen className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{blog.title}</CardTitle>
                    <CardDescription>{blog.date}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {blog.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, tIndex) => (
                    <Badge key={tIndex} variant="secondary" className="bg-white/5 text-muted-foreground hover:bg-white/10">
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
