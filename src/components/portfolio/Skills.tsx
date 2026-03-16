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
    color: "blue"
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["HTML5", "CSS3", "Bootstrap", "React.js", "Tailwind CSS"],
    color: "emerald"
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Spring Boot"],
    color: "orange"
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL", "MongoDB"],
    color: "purple"
  },
  {
    title: "Tools",
    icon: Terminal,
    skills: ["Git", "GitHub", "VS Code", "Android Studio"],
    color: "rose"
  }
];

const Skills = () => {
  return (
    <div className="space-y-16">
      <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold"
        >
          Tech <span className="gradient-text">Stack</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground"
        >
          A comprehensive overview of technologies I use to build scalable and efficient solutions.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="h-full glass-card hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-2xl bg-primary/10`}>
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 bg-secondary hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                    >
                      {skill}
                    </Badge>
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
