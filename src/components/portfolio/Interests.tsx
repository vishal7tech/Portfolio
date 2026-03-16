import React from 'react';
import { motion } from 'motion/react';
import { Plane, Bike, Heart, Coffee, BookOpen, Music } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const interests = [
  { icon: Plane, label: "Travelling", color: "blue" },
  { icon: Bike, label: "Bike Riding", color: "emerald" },
  { icon: Coffee, label: "Coffee", color: "orange" },
  { icon: Music, label: "Music", color: "purple" }
];

const Interests = () => {
  return (
    <div className="space-y-16">
      <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold"
        >
          Beyond <span className="gradient-text">Coding</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground"
        >
          What I love to do when I'm not in front of my computer screen.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {interests.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="glass-card group hover:scale-105 transition-all cursor-default">
              <CardContent className="p-8 flex flex-col items-center justify-center space-y-4">
                <div className="p-4 rounded-full bg-secondary/50 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold text-sm tracking-wide">{item.label}</h4>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <div className="p-10 glass-card rounded-3xl text-center bg-primary/5">
        <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto italic">
          "Travelling allows me to see the world from different perspectives, 
          while bike riding gives me the freedom to explore the unknown."
        </p>
      </div>
    </div>
  );
};

export default Interests;
