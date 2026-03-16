import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, ArrowRight, Smartphone, Code2, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    id: 1,
    title: "ATM Machine System",
    description: "Full-featured ATM backend with multi-account support, security features, and transaction logging. Supports various fund transfers and formatted statements.",
    tech: ["Java", "OOP", "File Handling"],
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_315c8e2d-c6e4-44d4-b017-28d54e1e2662.jpg",
    github: "https://github.com/vishal7tech/ATM-Machine-System",
    demo: "#",
    category: "Software"
  },
  {
    id: 2,
    title: "Sanraksha SOS Safety App",
    description: "Innovative mobile safety application providing instant SOS alerts, voice activation, and real-time location sharing during emergencies. Works online and offline.",
    tech: ["Kotlin", "Firebase", "Android SDK"],
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_46d503cb-c898-4870-9c55-64650651dba9.jpg",
    github: "https://github.com/vishal7tech/Sanraksha-SOS",
    demo: "#",
    category: "Mobile"
  },
  {
    id: 3,
    title: "Personal Expense Tracker",
    description: "Intuitive UI for tracking income and expenses with real-time balance updates and visual breakdown. Lightweight and responsive design for all devices.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_292098c0-0c71-44a7-99d5-697e59489aa8.jpg",
    github: "https://github.com/vishal7tech/Expense-Tracker",
    demo: "https://vishal7tech.github.io/Expense-Tracker/",
    category: "Web"
  }
];

const categories = ["All", "Mobile", "Software", "Web"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="space-y-16">
      <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground"
        >
          Check out some of my best work, ranging from software systems to mobile applications.
        </motion.p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            onClick={() => setActiveCategory(cat)}
            className="rounded-full px-6 transition-all"
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Card className="h-full glass-card overflow-hidden group border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <Button asChild size="icon" variant="secondary" className="rounded-full">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    {project.demo !== "#" && (
                      <Button asChild size="icon" variant="default" className="rounded-full">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <CardHeader className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-[10px] uppercase tracking-wider text-primary border-primary/20">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-6 pb-2">
                  <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>

                <CardFooter className="px-6 pb-6 pt-4 flex flex-col items-start gap-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[11px] font-medium bg-secondary px-2 py-0.5 rounded text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex w-full justify-between items-center pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-primary flex items-center group-hover:translate-x-1 transition-transform"
                    >
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
