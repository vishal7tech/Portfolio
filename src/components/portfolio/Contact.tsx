import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    // Simulate API call
    console.log("Form values:", values);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Message sent successfully!");
    form.reset();
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

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
          Get in <span className="gradient-text animate-gradient">Touch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground text-lg leading-relaxed max-w-2xl"
        >
          Have a project in mind? Let's discuss and build something amazing together with modern technology.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50, y: 30 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -5 }}
          className="space-y-8"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold flex items-center">
              <motion.div 
                className="p-3 glass-premium neon-border rounded-2xl neon-glow mr-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-2xl">📧</span>
              </motion.div>
              <span className="gradient-text">Contact Information</span>
            </h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground leading-relaxed text-lg"
            >
              Feel free to reach out to me via email or phone. I'm always open to discussing new projects, 
              creative ideas, or opportunities to be part of your vision and build impactful solutions.
            </motion.p>
          </motion.div>

          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: "vishal7.tech@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 7820841208" },
              { icon: MapPin, label: "Location", value: "Amravati, Maharashtra, India" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-start space-x-6 p-6 glass-premium neon-border rounded-2xl hover:border-neon-cyan/60 transition-all duration-300">
                  <motion.div 
                    className="p-4 glass-premium neon-border rounded-2xl neon-glow"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="h-6 w-6 text-neon-cyan" />
                  </motion.div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-neon-cyan mb-2">{item.label}</p>
                    <p className="text-lg font-medium">{item.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center space-x-8 pt-6"
          >
            {[
              { href: "https://github.com/vishal7tech", icon: Github },
              { href: "https://linkedin.com/in/vishal-chaudhari-vishal7tech", icon: Linkedin }
            ].map((social, index) => (
              <motion.a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-premium neon-border rounded-full hover:bg-neon-cyan/10 hover:text-neon-cyan hover:border-neon-cyan/60 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, y: 30 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -5 }}
          className="glass-premium neon-border rounded-3xl p-8 md:p-12"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-medium">Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your name" 
                        {...field} 
                        className="glass-premium neon-border focus:border-neon-cyan/60 focus:ring-2 focus:ring-neon-cyan/20 h-12 text-lg" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-medium">Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="your.email@example.com" 
                        {...field} 
                        className="glass-premium neon-border focus:border-neon-cyan/60 focus:ring-2 focus:ring-neon-cyan/20 h-12 text-lg" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-medium">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell me about your project..." 
                        className="min-h-[150px] glass-premium neon-border focus:border-neon-cyan/60 focus:ring-2 focus:ring-neon-cyan/20 text-lg" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  className="w-full rounded-full h-14 text-lg font-bold glass-premium neon-border hover:bg-neon-cyan/10 hover:text-neon-cyan hover:border-neon-cyan/60 transition-all duration-300"
                  disabled={isSubmitting || isSuccess}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="mr-3 h-5 w-5 border-2 border-neon-cyan border-t-transparent rounded-full"
                      />
                      Sending...
                    </span>
                  ) : isSuccess ? (
                    <span className="flex items-center">
                      <CheckCircle2 className="mr-3 h-6 w-6 text-emerald-500" />
                      Sent Successfully!
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <Send className="ml-3 h-5 w-5" />
                    </span>
                  )}
                </Button>
              </motion.div>
            </form>
          </Form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
