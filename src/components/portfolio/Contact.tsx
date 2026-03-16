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
    <div className="space-y-16">
      <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold"
        >
          Get in <span className="gradient-text">Touch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground"
        >
          Have a project in mind? Let's talk and build something amazing together.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="text-muted-foreground">
              Feel free to reach out to me via email or phone. I'm always open to discussing new projects, 
              creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-6 p-6 glass-card rounded-2xl">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                <p className="text-lg font-medium">vishal7.tech@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6 p-6 glass-card rounded-2xl">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
                <p className="text-lg font-medium">+91 7820841208</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6 p-6 glass-card rounded-2xl">
              <div className="p-3 bg-primary/10 rounded-2xl">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Location</p>
                <p className="text-lg font-medium">Amravati, Maharashtra, India</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6 pt-4">
            <a href="https://github.com/vishal7tech" target="_blank" rel="noopener noreferrer" className="p-4 glass-card rounded-full hover:bg-primary/10 transition-all hover:scale-110">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/vishal-chaudhari-vishal7tech" target="_blank" rel="noopener noreferrer" className="p-4 glass-card rounded-full hover:bg-primary/10 transition-all hover:scale-110">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-3xl border-border/50"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} className="glass border-border/50 focus:border-primary/50" />
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
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} className="glass border-border/50 focus:border-primary/50" />
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
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell me about your project..." 
                        className="min-h-[150px] glass border-border/50 focus:border-primary/50" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full rounded-full h-12 text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
                disabled={isSubmitting || isSuccess}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="mr-2 h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                    />
                    Sending...
                  </span>
                ) : isSuccess ? (
                  <span className="flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    Sent!
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
