import React from 'react';
import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Code, Layout, Server, Database, Wrench, Laptop, Terminal, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C", "C++", "Java", "JavaScript"],
    color: "neon-cyan"
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["HTML5", "CSS3", "Bootstrap", "React.js", "Tailwind CSS"],
    color: "neon-blue"
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Spring Boot"],
    color: "neon-purple"
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "MongoDB"],
    color: "neon-cyan"
  },
  {
    title: "Tools",
    icon: Terminal,
    skills: ["Git", "GitHub", "VS Code", "Android Studio"],
    color: "neon-blue"
  }
];

const Skills = () => {
  return (
    <div className="space-y-16 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '1s' }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-neon-purple/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: '3s' }}
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
          Tech <span className="gradient-text animate-gradient">Stack</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground text-lg leading-relaxed"
        >
          A comprehensive overview of technologies I use to build scalable and efficient solutions.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <Card className="h-full glass-premium neon-border hover:border-neon-cyan/60 transition-all duration-500 group overflow-hidden">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className={`p-4 rounded-2xl bg-gradient-to-br from-${category.color}/20 to-${category.color}/10 neon-glow`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <category.icon className={`h-8 w-8 text-${category.color}`} />
                  </motion.div>
                  <h3 className="text-2xl font-bold group-hover:text-neon-cyan transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + skillIdx * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="secondary"
                        className={`px-4 py-2 glass-premium border border-${category.color}/30 hover:bg-${category.color}/10 hover:text-${category.color} hover:border-${category.color}/60 transition-all cursor-default text-sm font-medium`}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
