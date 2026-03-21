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
  },
  {
    id: 4,
    title: "FuelBook",
    description: "Offline-first Android fuel station management app with Room and Repository architecture. Captures nozzle readings, cash denominations, UPI collections, and daily reconciliation with automated summaries and PDF export.",
    tech: ["Kotlin", "Android SDK", "Room", "SQLite", "Coroutines", "Material Design 3"],
    image: "/images/projects/FuelBook.jpg",
    github: "#",
    demo: "#",
    category: "Mobile"
  },
  {
    id: 5,
    title: "Train Timer",
    description: "Android trip-logging system with coroutine-based background timer services, persistent lap tracking, and route-aware event capture. Features configurable route management and PDF report export.",
    tech: ["Kotlin", "Android SDK", "Coroutines", "LiveData", "RecyclerView", "Gson"],
    image: "/images/projects/TrainTimer.png",
    github: "#",
    demo: "#",
    category: "Mobile"
  },
  {
    id: 6,
    title: "WorkSphere",
    description: "Role-based HRMS platform with admin and employee portals for task assignment, attendance tracking, leave approvals, document management, and internal messaging with skill-based task matching.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "React Query", "Recharts"],
    image: "/images/projects/Worksphere.png",
    github: "#",
    demo: "#",
    category: "Web"
  },
  {
    id: 7,
    title: "AI Chatbot",
    description: "Intelligent chatbot platform using Flask, MySQL, and TensorFlow with TF-IDF intent classification, multilingual preprocessing, and admin-driven training pipeline for continuous improvement.",
    tech: ["Python", "Flask", "TensorFlow", "Scikit-learn", "NLTK", "MySQL", "REST APIs"],
    image: "/images/projects/AIChatbot.png",
    github: "#",
    demo: "#",
    category: "Web"
  },
  {
    id: 8,
    title: "Hospital Management System",
    description: "Full-stack hospital management platform with JWT-based RBAC, role-specific dashboards, conflict-aware appointment scheduling, real-time WebSocket notifications, and automated PDF invoice generation.",
    tech: ["Java 17", "Spring Boot", "Spring Security", "MySQL", "React", "TypeScript", "WebSocket"],
    image: "/images/projects/HMS.png",
    github: "#",
    demo: "#",
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
    <div className="space-y-16 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '0s' }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-neon-purple/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Featured <span className="gradient-text animate-gradient">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground text-lg leading-relaxed"
        >
          Check out some of my best work, ranging from software systems to mobile applications.
        </motion.p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 relative z-10">
        {categories.map((cat, index) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={activeCategory === cat ? "default" : "outline"}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-8 py-3 transition-all duration-300 font-medium ${
                activeCategory === cat 
                  ? "glass-premium neon-border text-neon-cyan hover:bg-neon-cyan/10" 
                  : "glass-premium border-neon-cyan/30 hover:border-neon-cyan hover:text-neon-cyan hover:bg-neon-cyan/10"
              }`}
            >
              {cat}
            </Button>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -50 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full glass-premium neon-border hover:border-neon-cyan/60 transition-all duration-500 group overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Button asChild size="icon" variant="secondary" className="rounded-full glass-premium neon-border hover:bg-neon-cyan/10">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    </motion.div>
                    {project.demo !== "#" && (
                      <motion.div
                        initial={{ scale: 0, rotate: 180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        whileHover={{ scale: 1.2, rotate: -360 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Button asChild size="icon" variant="default" className="rounded-full glass-premium neon-border text-neon-cyan hover:bg-neon-cyan/10">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </div>

                <CardHeader className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge variant="outline" className="text-xs uppercase tracking-wider text-neon-cyan border-neon-cyan/30 glass-premium">
                        {project.category}
                      </Badge>
                    </motion.div>
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-neon-cyan transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </CardContent>

                <CardFooter className="px-6 pb-6 pt-2 flex flex-col items-start gap-6 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, techIdx) => (
                      <motion.div
                        key={t}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 + techIdx * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-xs font-medium glass-premium border border-neon-cyan/20 px-3 py-1 rounded-full text-neon-cyan hover:border-neon-cyan/60 hover:bg-neon-cyan/10 transition-all">
                          {t}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-neon-cyan flex items-center group hover:translate-x-2 transition-all duration-300"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project 
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </motion.a>
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
