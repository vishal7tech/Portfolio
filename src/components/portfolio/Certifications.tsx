import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ExternalLink, Calendar, Code, Code2, Coffee } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const certifications = [
  {
    title: "C Programming Certificate",
    issuer: "Save Computers",
    year: "2024",
    skills: ["Data Structures", "Pointers", "Memory Management"],
    icon: Code,
    color: "neon-cyan"
  },
  {
    title: "C++ Programming Certificate",
    issuer: "Save Computers",
    year: "2024",
    skills: ["OOP", "STL", "Polymorphism"],
    icon: Code2,
    color: "neon-blue"
  },
  {
    title: "JAVA Certificate",
    issuer: "Save Computers",
    year: "2025",
    skills: ["JVM Architecture", "Multithreading", "Spring Framework Concepts"],
    icon: Coffee,
    color: "neon-purple"
  }
];

const Certifications = () => {
  return (
    <div className="space-y-16 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '0s' }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-2xl animate-float"
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
          My <span className="gradient-text animate-gradient">Certifications</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground text-lg leading-relaxed max-w-2xl"
        >
          Professional validations of my technical expertise across various technologies with industry-recognized credentials.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="h-full glass-premium neon-border hover:border-${cert.color}/60 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-${cert.color}/10 to-transparent rounded-bl-full -mr-16 -mt-16 transition-all group-hover:scale-150" />
              
              <CardHeader className="p-8 pb-6 relative z-10">
                <motion.div 
                  className={`p-4 rounded-2xl bg-gradient-to-br from-${cert.color}/20 to-${cert.color}/10 neon-glow w-fit mb-6 mx-auto`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <cert.icon className={`h-8 w-8 text-${cert.color}`} />
                </motion.div>
                <CardTitle className={`text-2xl font-bold group-hover:text-${cert.color} transition-colors text-center`}>{cert.title}</CardTitle>
                <p className={`text-neon-cyan font-bold text-lg text-center`}>{cert.issuer}</p>
              </CardHeader>
              
              <CardContent className="px-8 pb-6 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center justify-center text-sm text-muted-foreground mb-6 glass-premium neon-border px-4 py-2 rounded-lg">
                    <Calendar className={`mr-2 h-4 w-4 text-${cert.color}`} /> 
                    <span className="font-medium">Issued in {cert.year}</span>
                  </div>
                </motion.div>
                
                <ul className="space-y-3">
                  {cert.skills.map((skill, sIdx) => (
                    <motion.li 
                      key={sIdx} 
                      className="text-sm flex items-center text-muted-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.15 + sIdx * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <CheckCircle className="mr-3 h-4 w-4 text-emerald-500" />
                      </motion.div>
                      <span className="font-medium">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="px-8 pb-8 pt-6 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild variant="outline" size="lg" className={`w-full rounded-full glass-premium neon-border hover:bg-${cert.color}/10 hover:text-${cert.color} hover:border-${cert.color}/60 transition-all duration-300 font-medium`}>
                    <a href="#">
                      View Credential 
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </motion.div>
                    </a>
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
