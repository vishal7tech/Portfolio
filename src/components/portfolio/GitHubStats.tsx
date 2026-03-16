import React from 'react';
import { motion } from 'motion/react';
import { Github, Star, GitBranch, Code, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const GitHubStats = () => {
  const githubUser = "vishal7tech";

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
          GitHub <span className="gradient-text animate-gradient">Statistics</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground text-lg leading-relaxed max-w-2xl"
        >
          My open-source contributions and development activity showcasing continuous learning and community engagement.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50, y: 30 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -5 }}
          className="space-y-8"
        >
          <Card className="glass-premium neon-border hover:border-neon-cyan/60 transition-all duration-500 group">
            <CardHeader className="p-8">
              <motion.div 
                className="flex items-center space-x-6 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.div 
                  className="p-4 glass-premium neon-border rounded-2xl neon-glow"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Github className="h-8 w-8 text-neon-cyan" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-neon-cyan transition-colors">Open Source Activity</h3>
                  <p className="text-neon-cyan font-medium text-lg">@github.com/{githubUser}</p>
                </div>
              </motion.div>
            </CardHeader>
            <CardContent className="px-8 pb-8 space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="p-6 glass-premium neon-border rounded-2xl text-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Code className="h-8 w-8 mx-auto mb-3 text-neon-cyan" />
                    </motion.div>
                    <p className="text-3xl font-bold text-neon-cyan">10+</p>
                    <p className="text-sm uppercase tracking-widest text-muted-foreground">Repositories</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="p-6 glass-premium neon-border rounded-2xl text-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Star className="h-8 w-8 mx-auto mb-3 text-neon-cyan" />
                    </motion.div>
                    <p className="text-3xl font-bold text-neon-cyan">50+</p>
                    <p className="text-sm uppercase tracking-widest text-muted-foreground">Total Stars</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I'm passionate about building open-source projects and contributing to the community. 
                  Most of my projects involve Java, JavaScript, and Kotlin development with modern best practices.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild variant="outline" size="lg" className="w-full rounded-full glass-premium neon-border hover:bg-neon-cyan/10 hover:text-neon-cyan hover:border-neon-cyan/60 transition-all duration-300 font-medium">
                    <a href={`https://github.com/${githubUser}`} target="_blank" rel="noopener noreferrer">
                      Follow on GitHub 
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </motion.div>
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, y: 30 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -5 }}
          className="space-y-8"
        >
          <div className="p-8 glass-premium neon-border rounded-3xl gradient-neon">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-bold mb-6 flex items-center text-2xl"
            >
              <motion.div 
                className="p-3 glass-premium neon-border rounded-2xl neon-glow mr-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GitBranch className="h-8 w-8 text-neon-cyan" />
              </motion.div>
              <span className="gradient-text">Dynamic Stats</span>
            </motion.h4>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <motion.img
                src={`https://github-readme-stats.vercel.app/api?username=${githubUser}&show_icons=true&theme=transparent&title_color=00bcd4&text_color=6c757d&icon_color=00bcd4&border_color=00bcd4&hide_border=true&bg_color=ffffff00`}
                alt="GitHub Stats"
                className="w-full h-auto rounded-2xl neon-border animate-pulse"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              />
              <motion.img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUser}&layout=compact&theme=transparent&title_color=00bcd4&text_color=6c757d&icon_color=00bcd4&border_color=00bcd4&hide_border=true&bg_color=ffffff00`}
                alt="Top Languages"
                className="w-full h-auto rounded-2xl neon-border animate-pulse"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ animationDelay: '0.5s' }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GitHubStats;
