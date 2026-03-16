import React from 'react';
import { motion } from 'motion/react';
import { Github, Star, GitBranch, Code, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const GitHubStats = () => {
  const githubUser = "vishal7tech";

  return (
    <div className="space-y-16">
      <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold"
        >
          GitHub <span className="gradient-text">Statistics</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground"
        >
          My open-source contributions and development activity on GitHub.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <Card className="glass-card hover:border-primary/50 transition-all border-border/50">
            <CardHeader className="p-8 pb-4">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Open Source Activity</h3>
                  <p className="text-sm text-muted-foreground">@github.com/{githubUser}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="px-8 pb-8 space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-secondary/50 rounded-2xl border border-border/50 text-center">
                  <Code className="h-5 w-5 mx-auto mb-2 text-primary" />
                  <p className="text-2xl font-bold">10+</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Repositories</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-2xl border border-border/50 text-center">
                  <Star className="h-5 w-5 mx-auto mb-2 text-primary" />
                  <p className="text-2xl font-bold">50+</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Total Stars</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I'm passionate about building open-source projects and contributing to the community. 
                  Most of my projects involve Java, JavaScript, and Kotlin development.
                </p>
                <Button asChild variant="outline" className="w-full rounded-full group hover:bg-primary hover:text-primary-foreground transition-all">
                  <a href={`https://github.com/${githubUser}`} target="_blank" rel="noopener noreferrer">
                    Follow on GitHub <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="glass-card p-6 rounded-2xl border border-border/50 bg-secondary/30">
            <h4 className="font-bold mb-6 flex items-center">
              <GitBranch className="mr-3 h-5 w-5 text-primary" />
              Dynamic Stats
            </h4>
            <div className="space-y-4">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${githubUser}&show_icons=true&theme=transparent&title_color=007bff&text_color=6c757d&icon_color=007bff&border_color=007bff&hide_border=true&bg_color=ffffff00`}
                alt="GitHub Stats"
                className="w-full h-auto rounded-lg dark:invert dark:hue-rotate-180"
              />
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUser}&layout=compact&theme=transparent&title_color=007bff&text_color=6c757d&icon_color=007bff&border_color=007bff&hide_border=true&bg_color=ffffff00`}
                alt="Top Languages"
                className="w-full h-auto rounded-lg dark:invert dark:hue-rotate-180"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GitHubStats;
