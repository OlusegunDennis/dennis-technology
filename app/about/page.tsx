"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/shared/section-title";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  const traits = [
    "Problem-solving approach",
    "Client-focused development",
    "Clean, maintainable code",
    "Timely project delivery"
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="About the Founder"
          subtitle="The story behind Dennis Technology"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-80 lg:h-full min-h-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
              <div className="w-full max-w-md aspect-video bg-background/80 backdrop-blur-sm rounded-lg shadow-2xl p-6 flex items-center justify-center">
                <div className="text-center">
                 <h3 className="text-2xl font-bold mb-2">Olusegun Dennis</h3>
<p className="text-muted-foreground">Founder · QA Engineer · Web Developer</p>

                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg">
               Hello, I'm Olusegun Dennis, founder of Dennis Technology. I began my journey in tech after years of hands-on experience running businesses in transportation, logistics, and real estate.

My background in service-based industries gave me a practical understanding of real-world challenges — and how technology, software testing, and quality assurance can help solve them.

At Dennis Technology, I combine my passion for QA engineering and web development to help businesses build reliable, user-friendly digital solutions. From ensuring software works flawlessly through structured testing, to creating responsive websites that reflect a brand's identity, I bring both precision and creativity to every project.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-lg">
               I transitioned into software development and quality assurance to bridge the gap between traditional businesses and modern digital solutions. Today, I build and test web and mobile applications with a strong focus on e-commerce, car rentals, logistics, and real estate tech — ensuring they are not only functional but also reliable, user-friendly, and ready for the real world.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="text-lg">
                My mission is simple: use clean, scalable code to bring ideas to life — and help businesses grow in the process.
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="mt-20">
          <SectionTitle 
            title="My Approach" 
            subtitle="What sets Dennis Technology apart"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-muted rounded-lg p-8"
            >
              <h3 className="text-xl font-semibold mb-4">Business-First Perspective</h3>
              <p className="text-muted-foreground mb-6">
                Having operated businesses in various sectors, I understand the challenges entrepreneurs face. This perspective allows me to create solutions that address real operational needs, not just technical requirements.
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                {traits.map((trait, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{trait}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-muted rounded-lg p-8"
            >
              <h3 className="text-xl font-semibold mb-4">Technical Philosophy</h3>
              <p className="text-muted-foreground mb-4">
                I believe that the best software is both powerful and user-friendly. Every project I undertake focuses on creating intuitive interfaces backed by robust, scalable code.
              </p>
              <p className="text-muted-foreground">
                My development process emphasizes collaboration, iterative improvement, and a commitment to quality. I stay current with industry trends while prioritizing proven technologies that deliver reliable results.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}