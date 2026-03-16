import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Calendar, Award } from 'lucide-react';

const timelineData = [
  {
    type: 'Education',
    title: 'B.Tech in Computer Science and Engineering',
    organization: 'G.H Raisoni University, Amravati',
    duration: '2022 - 2026',
    score: 'CGPA: 9.06 (Till 7th Sem)',
    description: 'Specializing in software engineering principles, algorithms, and full-stack development. Actively participating in technical workshops and projects.',
    icon: GraduationCap
  },
  {
    type: 'Experience',
    title: 'Software Development Trainee',
    organization: 'Self-Directed Projects & Certifications',
    duration: '2024 - Present',
    score: 'Multiple Certificates',
    description: 'Developing various projects including ATM systems and SOS safety apps. Mastering languages like Java, C++, and Kotlin.',
    icon: Briefcase
  }
];

const Experience = () => {
  return (
    <div className="space-y-16 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '0s' }}
        />
        <motion.div 
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-2xl animate-float"
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
          My <span className="gradient-text animate-gradient">Journey</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground text-lg leading-relaxed max-w-2xl"
        >
          A timeline of my education and professional growth with continuous learning and development.
        </motion.p>
      </div>

      <div className="relative max-w-5xl mx-auto relative z-10">
        {/* Animated Vertical Line */}
        <motion.div 
          className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-cyan via-neon-blue to-neon-purple"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ transformOrigin: 'top' }}
        />

        <div className="space-y-16">
          {timelineData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Animated Timeline Dot */}
              <motion.div 
                className="absolute left-[-16px] md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full glass-premium neon-border neon-glow z-20 flex items-center justify-center"
                whileHover={{ scale: 1.3, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className="h-4 w-4 text-neon-cyan" />
              </motion.div>

              <motion.div 
                className="w-full md:w-1/2 pl-16 md:pl-0 md:px-16"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`p-8 glass-premium neon-border rounded-3xl hover:border-neon-cyan/60 transition-all duration-500 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`flex items-center space-x-4 mb-6 ${idx % 2 === 0 ? 'md:flex-row-reverse md:space-x-reverse' : ''}`}>
                    <motion.div 
                      className="p-3 glass-premium neon-border rounded-2xl neon-glow"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <item.icon className="h-6 w-6 text-neon-cyan" />
                    </motion.div>
                    <span className="text-sm font-bold text-neon-cyan uppercase tracking-widest glass-premium neon-border px-4 py-2 rounded-full">
                      {item.type}
                    </span>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-3 ${idx % 2 === 0 ? 'md:text-right' : ''}`}>{item.title}</h3>
                  <p className={`text-neon-cyan font-bold text-lg mb-4 ${idx % 2 === 0 ? 'md:text-right' : ''}`}>{item.organization}</p>
                  
                  <div className={`flex flex-wrap gap-4 text-sm mb-6 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="flex items-center glass-premium neon-border px-4 py-2 rounded-lg">
                        <Calendar className="mr-2 h-4 w-4 text-neon-cyan" /> 
                        <span className="font-medium">{item.duration}</span>
                      </span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="flex items-center glass-premium neon-border px-4 py-2 rounded-lg">
                        <Award className="mr-2 h-4 w-4 text-neon-cyan" /> 
                        <span className="font-medium">{item.score}</span>
                      </span>
                    </motion.div>
                  </div>
                  
                  <p className={`text-muted-foreground leading-relaxed text-base ${idx % 2 === 0 ? 'md:text-right' : ''}`}>{item.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
