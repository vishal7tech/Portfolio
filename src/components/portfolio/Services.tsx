import React from 'react';
import { motion } from 'motion/react';
import { Layers, Server, Smartphone, Cpu, Code, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: "Full Stack Development",
    icon: Layers,
    description: "Developing robust and scalable web applications from scratch, handling both frontend and backend seamlessly.",
    color: "blue"
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Architecting efficient and secure server-side logic using Node.js, Express, and Spring Boot.",
    color: "emerald"
  },
  {
    title: "Android App Development",
    icon: Smartphone,
    description: "Creating high-performance, native Android applications with Kotlin and modern Android SDK tools.",
    color: "orange"
  },
  {
    title: "API Development",
    icon: Cpu,
    description: "Designing and implementing RESTful APIs for efficient communication between frontend and backend services.",
    color: "purple"
  }
];

const Services = () => {
  return (
    <div className="space-y-16">
      <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold"
        >
          My <span className="gradient-text">Services</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground"
        >
          Offering professional software development services tailored to your specific project needs.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="h-full glass-card hover:bg-primary/5 transition-all duration-300 border-border/50">
              <CardHeader className="p-8">
                <div className={`p-4 rounded-2xl bg-primary/10 w-fit mb-6`}>
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
