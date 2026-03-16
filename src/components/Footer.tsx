import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/30 border-t border-border/50 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 gradient-text">Vishal Chaudhari</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Software Developer specializing in Full Stack and Android Development.
              Passionate about building innovative solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Social Presence</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/vishal7tech" target="_blank" rel="noopener noreferrer" className="p-2 glass-card rounded-full hover:bg-primary/10">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/vishal-chaudhari-vishal7tech" target="_blank" rel="noopener noreferrer" className="p-2 glass-card rounded-full hover:bg-primary/10">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:vishal7.tech@gmail.com" className="p-2 glass-card rounded-full hover:bg-primary/10">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Phone: +91 7820841208
            </p>
          </div>
        </div>
        
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-muted-foreground">
          <p>© 2026 Vishal Chaudhari. All rights reserved.</p>
          <Button variant="ghost" size="sm" onClick={scrollToTop} className="rounded-full group">
            Scroll to Top
            <ArrowUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
