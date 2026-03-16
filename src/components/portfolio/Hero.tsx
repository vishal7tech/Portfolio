import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download, MessageSquare } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const roles = ["Software Developer", "Full Stack Developer", "Android Developer", "Problem Solver"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setDisplayText(prev => prev.slice(0, -1));
        setTypingSpeed(50);
      } else {
        setDisplayText(prev => currentRole.slice(0, prev.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full min-h-[80vh] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-neon-cyan/20 rounded-full blur-2xl animate-float"
          style={{ animationDelay: '0s' }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-48 h-48 bg-neon-purple/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-neon-blue/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: '4s' }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8 z-10"
      >
        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-neon-cyan font-medium tracking-widest uppercase text-sm animate-pulse"
          >
            Welcome to my portfolio
          </motion.p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Hi, I'm <span className="gradient-text animate-gradient">Vishal Chaudhari</span>
          </h1>
          <div className="h-16 flex items-center">
            <span className="text-2xl md:text-3xl text-muted-foreground font-medium">
              I am a <span className="text-neon-cyan font-semibold typing-animation">{displayText}</span>
            </span>
          </div>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground text-lg max-w-lg leading-relaxed"
        >
          Motivated and enthusiastic Computer Science undergraduate specializing in building modern software solutions.
          Currently pursuing B.Tech at G.H Raisoni University.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-6 pt-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild size="lg" className="rounded-full px-8 glass-premium neon-border hover-lift text-neon-cyan hover:bg-neon-cyan/10">
              <a href="#contact">
                Hire Me <MessageSquare className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 glass-premium border-neon-cyan/50 hover:border-neon-cyan hover:bg-neon-cyan/10 hover:text-neon-cyan hover-lift">
              <a href="/resume.pdf" download="Vishal_Chaudhari_Resume">
                Download CV <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center space-x-8 pt-8"
        >
          {[
            { href: "https://github.com/vishal7tech", icon: Github },
            { href: "https://linkedin.com/in/vishal-chaudhari-vishal7tech", icon: Linkedin },
            { href: "mailto:vishal7.tech@gmail.com", icon: Mail }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target={social.icon !== Mail ? "_blank" : undefined}
              rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
              className="text-muted-foreground hover:text-neon-cyan transition-all duration-300 hover:scale-110 hover-lift"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ y: -5, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon className="h-6 w-6" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="relative flex justify-center lg:justify-end items-center z-10"
      >
        <div className="relative w-80 h-80 lg:w-96 lg:h-96">
          {/* Animated gradient rings */}
          <motion.div 
            className="absolute -inset-8 bg-gradient-to-tr from-neon-cyan/30 via-neon-blue/20 to-neon-purple/30 rounded-full blur-2xl animate-pulse"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -inset-4 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 rounded-full blur-xl animate-gradient"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Profile image container */}
          <div className="relative w-full h-full rounded-full border-4 border-neon-cyan/50 overflow-hidden shadow-2xl glass-premium neon-glow">
            <Avatar className="w-full h-full">
              <AvatarImage src="/formal.jpg" className="object-cover" />
              <AvatarFallback className="text-6xl font-bold bg-secondary text-neon-cyan">VC</AvatarFallback>
            </Avatar>
          </div>
          
          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 glass-premium p-4 rounded-2xl shadow-xl neon-border flex items-center space-x-2 animate-pulse-glow"
          >
            <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium text-neon-cyan">Available for work</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -right-6 glass-premium p-4 rounded-2xl shadow-xl neon-border flex items-center space-x-2"
          >
            <span className="text-sm font-medium text-neon-cyan">B.Tech Student @ GHRU</span>
          </motion.div>

          {/* Additional floating elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -left-8 w-4 h-4 bg-neon-cyan rounded-full neon-glow"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/3 -right-8 w-3 h-3 bg-neon-purple rounded-full neon-glow"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
