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
    <div className="space-y-16">
      <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold"
        >
          My <span className="gradient-text">Journey</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground"
        >
          A timeline of my education and professional growth.
        </motion.p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border/50" />

        <div className="space-y-12">
          {timelineData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-8px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/40 border-4 border-background z-10" />

              <div className="w-full md:w-1/2 pl-10 md:pl-0 md:px-12">
                <div className={`p-6 glass-card rounded-2xl hover:scale-102 transition-transform ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`flex items-center space-x-3 mb-4 ${idx % 2 === 0 ? 'md:flex-row-reverse md:space-x-reverse' : ''}`}>
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{item.type}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-primary font-medium mb-3">{item.organization}</p>
                  
                  <div className={`flex flex-wrap gap-4 text-xs text-muted-foreground mb-4 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="flex items-center bg-secondary px-2 py-1 rounded">
                      <Calendar className="mr-2 h-3 w-3" /> {item.duration}
                    </span>
                    <span className="flex items-center bg-secondary px-2 py-1 rounded">
                      <Award className="mr-2 h-3 w-3 text-primary" /> {item.score}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
