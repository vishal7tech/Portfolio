import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Rocket, Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const strengthList = [
  { icon: Award, title: "Excellence", description: "Consistently high CGPA of 9.06 (Till 7th Sem)" },
  { icon: Rocket, title: "Innovation", description: "Building creative solutions like SOS safety app" },
  { icon: Briefcase, title: "Efficiency", description: "Strong logic and software development skills" }
];

const AboutMe = () => {
  return (
    <div className="space-y-16">
      <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground"
        >
          I'm a passionate developer with a mission to create impactful software.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center">
              <span className="p-2 glass rounded-lg mr-4 bg-primary/10">👋</span>
              Who am I?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Motivated and enthusiastic Computer Science undergraduate with strong programming and software development skills. 
              Seeking opportunities to contribute to innovative projects while continuously learning and growing in a dynamic technical environment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My tech passion revolves around full-stack development and Android app creation. I enjoy solving complex problems 
              and optimizing system performance, always striving for clean and maintainable code.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {strengthList.map((item, index) => (
              <Card key={index} className="glass-card hover:translate-y-[-5px]">
                <CardContent className="p-4 space-y-2 flex flex-col items-center text-center">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold flex items-center">
            <GraduationCap className="mr-4 h-8 w-8 text-primary" />
            Education
          </h3>
          <div className="relative pl-8 border-l border-border/50 space-y-12">
            <div className="relative">
              <div className="absolute -left-[41px] top-1 p-2 bg-background border border-primary/40 rounded-full shadow-lg">
                <GraduationCap className="h-4 w-4 text-primary" />
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <h4 className="text-xl font-bold">B.Tech in Computer Science and Engineering</h4>
                  <span className="flex items-center text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                    <Calendar className="mr-2 h-3 w-3" /> 2022 - 2026
                  </span>
                </div>
                <p className="text-muted-foreground font-medium">G.H Raisoni University, Amravati</p>
                <div className="flex items-center space-x-4 pt-2">
                  <div className="flex items-center text-sm bg-secondary px-3 py-1 rounded-lg">
                    <Award className="mr-2 h-4 w-4 text-primary" />
                    CGPA: 9.06 (Till 7th Sem)
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 glass-card rounded-2xl bg-primary/5">
            <h4 className="font-bold mb-3 flex items-center">
              <Rocket className="mr-2 h-5 w-5 text-primary" />
              Career Goal
            </h4>
            <p className="text-sm text-muted-foreground">
              To leverage my skills in a forward-thinking organization where I can contribute to building cutting-edge 
              technology while mastering modern development stacks.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
