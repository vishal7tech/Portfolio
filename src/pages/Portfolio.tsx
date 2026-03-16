import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Hero from '@/components/portfolio/Hero';
import AboutMe from '@/components/portfolio/AboutMe';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Experience from '@/components/portfolio/Experience';
import Certifications from '@/components/portfolio/Certifications';
import GitHubStats from '@/components/portfolio/GitHubStats';
import Services from '@/components/portfolio/Services';
import Contact from '@/components/portfolio/Contact';
import Interests from '@/components/portfolio/Interests';

const Portfolio = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll offset for hash links
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const offset = 80; // height of navbar
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-4 space-y-32 py-10">
        <section id="home" className="min-h-[80vh] flex items-center">
          <Hero />
        </section>

        <section id="about">
          <AboutMe />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="certifications">
          <Certifications />
        </section>

        <section id="github">
          <GitHubStats />
        </section>

        <section id="interests">
          <Interests />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
