import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Rocket, Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const strengthList = [
  { icon: Award, title: "Excellence", description: "Consistently high CGPA of 9.06 (Till 7th Sem)", color: "neon-cyan" },
  { icon: Rocket, title: "Innovation", description: "Building creative solutions like SOS safety app", color: "neon-blue" },
  { icon: Briefcase, title: "Efficiency", description: "Strong logic and software development skills", color: "neon-purple" }
];

const AboutMe = () => {
  return (
    <div className="space-y-16 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/3 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '0s' }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-neon-purple/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          About <span className="gradient-text animate-gradient">Me</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground text-lg leading-relaxed max-w-2xl"
        >
          I'm a passionate developer with a mission to create impactful software that makes a difference.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold flex items-center">
              <motion.div 
                className="p-3 glass-premium neon-border rounded-2xl mr-4 neon-glow"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-2xl">👋</span>
              </motion.div>
              <span className="gradient-text">Who am I?</span>
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Motivated and enthusiastic Computer Science undergraduate with strong programming and software development skills. 
                Seeking opportunities to contribute to innovative projects while continuously learning and growing in a dynamic technical environment.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                My tech passion revolves around full-stack development and Android app creation. I enjoy solving complex problems 
                and optimizing system performance, always striving for clean and maintainable code.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {strengthList.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="h-full glass-premium neon-border hover:border-${item.color}/60 transition-all duration-500 group">
                  <CardContent className="p-6 space-y-4 flex flex-col items-center text-center">
                    <motion.div 
                      className={`p-3 rounded-2xl bg-gradient-to-br from-${item.color}/20 to-${item.color}/10 neon-glow`}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <item.icon className={`h-8 w-8 text-${item.color}`} />
                    </motion.div>
                    <h4 className={`font-bold text-lg group-hover:text-${item.color} transition-colors`}>{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold flex items-center">
              <motion.div 
                className="p-3 glass-premium neon-border rounded-2xl mr-4 neon-glow"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <GraduationCap className="h-8 w-8 text-neon-cyan" />
              </motion.div>
              <span className="gradient-text">Education</span>
            </h3>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative pl-12 border-l-2 border-neon-cyan/30 space-y-12"
          >
            <motion.div 
              className="relative"
              whileHover={{ x: 10 }}
            >
              <motion.div 
                className="absolute -left-[52px] top-2 p-3 glass-premium neon-border rounded-full shadow-2xl neon-glow"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GraduationCap className="h-6 w-6 text-neon-cyan" />
              </motion.div>
              <div className="space-y-4">
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <h4 className="text-2xl font-bold">B.Tech in Computer Science and Engineering</h4>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center text-sm text-neon-cyan font-bold glass-premium neon-border px-4 py-2 rounded-full">
                      <Calendar className="mr-2 h-4 w-4" /> 2022 - 2026
                    </span>
                  </motion.div>
                </div>
                <p className="text-muted-foreground font-medium text-lg">G.H Raisoni University, Amravati</p>
                <div className="flex items-center space-x-6 pt-4">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center text-sm glass-premium neon-border px-4 py-2 rounded-lg">
                      <Award className="mr-2 h-5 w-5 text-neon-cyan" />
                      <span className="font-bold text-neon-cyan">CGPA: 9.06 (Till 7th Sem)</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            whileHover={{ y: -5 }}
            className="p-8 glass-premium neon-border rounded-3xl gradient-neon"
          >
            <h4 className="font-bold mb-4 flex items-center text-2xl">
              <motion.div 
                className="p-3 glass-premium neon-border rounded-2xl mr-4 neon-glow"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Rocket className="h-8 w-8 text-neon-cyan" />
              </motion.div>
              <span className="gradient-text">Career Goal</span>
            </h4>
            <motion.p 
              className="text-muted-foreground leading-relaxed text-lg"
            >
              To leverage my skills in a forward-thinking organization where I can contribute to building cutting-edge 
              technology while mastering modern development stacks and creating impactful solutions.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
