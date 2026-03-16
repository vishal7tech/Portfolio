import React from 'react';
import { motion } from 'motion/react';
import { Layers, Server, Smartphone, Cpu, Code, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: "Full Stack Development",
    icon: Layers,
    description: "Developing robust and scalable web applications from scratch, handling both frontend and backend seamlessly.",
    color: "neon-cyan"
  },
  {
    title: "Backend Development",
    icon: Server,
    description: "Architecting efficient and secure server-side logic using Node.js, Express, and Spring Boot.",
    color: "neon-blue"
  },
  {
    title: "Android App Development",
    icon: Smartphone,
    description: "Creating high-performance, native Android applications with Kotlin and modern Android SDK tools.",
    color: "neon-purple"
  },
  {
    title: "API Development",
    icon: Cpu,
    description: "Designing and implementing RESTful APIs for efficient communication between frontend and backend services.",
    color: "neon-cyan"
  }
];

const Services = () => {
  return (
    <div className="space-y-16 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '0s' }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-2xl animate-float"
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
          My <span className="gradient-text animate-gradient">Services</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground text-lg leading-relaxed max-w-2xl"
        >
          Offering professional software development services tailored to your specific project needs with cutting-edge technology.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            whileHover={{ y: -15, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="h-full glass-premium neon-border hover:border-${service.color}/60 transition-all duration-500 group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-${service.color}/10 to-transparent rounded-bl-full -mr-16 -mt-16 transition-all group-hover:scale-150" />
              
              <CardHeader className="p-8 relative z-10">
                <motion.div 
                  className={`p-4 rounded-2xl bg-gradient-to-br from-${service.color}/20 to-${service.color}/10 neon-glow w-fit mb-6 mx-auto`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <service.icon className={`h-10 w-10 text-${service.color}`} />
                </motion.div>
                <CardTitle className={`text-2xl font-bold group-hover:text-${service.color} transition-colors text-center`}>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-8 relative z-10">
                <p className="text-muted-foreground leading-relaxed text-center">
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
