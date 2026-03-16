import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle, ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const certifications = [
  {
    title: "C Programming Certificate",
    issuer: "Save Computers",
    year: "2024",
    skills: ["Data Structures", "Pointers", "Memory Management"],
    icon: Code
  },
  {
    title: "C++ Programming Certificate",
    issuer: "Save Computers",
    year: "2024",
    skills: ["OOP", "STL", "Polymorphism"],
    icon: Code2
  },
  {
    title: "JAVA Certificate",
    issuer: "Save Computers",
    year: "2025",
    skills: ["JVM Architecture", "Multithreading", "Spring Framework Concepts"],
    icon: Coffee
  }
];

import { Code, Code2, Coffee } from 'lucide-react';

const Certifications = () => {
  return (
    <div className="space-y-16">
      <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold"
        >
          My <span className="gradient-text">Certifications</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground"
        >
          Professional validations of my technical expertise across various technologies.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {certifications.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="h-full glass-card hover:border-primary/50 group transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-150 group-hover:bg-primary/10" />
              
              <CardHeader className="p-8 pb-4">
                <div className="p-3 bg-primary/10 rounded-2xl w-fit mb-4">
                  <cert.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">{cert.title}</CardTitle>
                <p className="text-sm font-medium text-primary">{cert.issuer}</p>
              </CardHeader>
              
              <CardContent className="px-8 pb-4">
                <div className="flex items-center text-xs text-muted-foreground mb-6">
                  <Calendar className="mr-2 h-3 w-3" /> Issued in {cert.year}
                </div>
                
                <ul className="space-y-2">
                  {cert.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="text-sm flex items-center text-muted-foreground">
                      <CheckCircle className="mr-2 h-3 w-3 text-emerald-500" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="px-8 pb-8 pt-4">
                <Button asChild variant="outline" size="sm" className="w-full rounded-full group hover:bg-primary hover:text-primary-foreground transition-all">
                  <a href="#">
                    View Credential <ExternalLink className="ml-2 h-3 w-3 group-hover:rotate-45 transition-transform" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
