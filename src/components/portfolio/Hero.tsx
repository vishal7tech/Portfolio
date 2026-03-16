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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div className="space-y-2">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-medium tracking-wide uppercase"
          >
            Welcome to my portfolio
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <span className="gradient-text">Vishal Chaudhari</span>
          </h1>
          <div className="h-12 flex items-center">
            <span className="text-2xl md:text-3xl text-muted-foreground font-medium">
              I am a <span className="text-foreground typing-animation">{displayText}</span>
            </span>
          </div>
        </div>

        <p className="text-muted-foreground text-lg max-w-lg">
          Motivated and enthusiastic Computer Science undergraduate specializing in building modern software solutions.
          Currently pursuing B.Tech at G.H Raisoni University.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
            <a href="#contact">
              Hire Me <MessageSquare className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 glass border-primary/20 hover:bg-primary/5">
            <a href="/resume.pdf" download="Vishal_Chaudhari_Resume">
              Download CV <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="flex items-center space-x-6 pt-6">
          <a href="https://github.com/vishal7tech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/vishal-chaudhari-vishal7tech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:vishal7.tech@gmail.com" className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="relative flex justify-center md:justify-end"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-blue-400/30 rounded-full blur-2xl animate-pulse" />
          <div className="relative w-full h-full rounded-full border-4 border-border/50 overflow-hidden shadow-2xl glass-card">
            <Avatar className="w-full h-full">
              <AvatarImage src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_d1a65c9e-562d-42e1-a3e6-5d072db260ab.jpg" className="object-cover" />
              <AvatarFallback className="text-6xl font-bold bg-secondary text-primary">VC</AvatarFallback>
            </Avatar>
          </div>
          
          {/* Floating badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -left-4 glass p-4 rounded-2xl shadow-xl flex items-center space-x-2"
          >
            <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium">Available for work</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -right-4 glass p-4 rounded-2xl shadow-xl flex items-center space-x-2"
          >
            <span className="text-sm font-medium text-primary">B.Tech Student @ GHRU</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
