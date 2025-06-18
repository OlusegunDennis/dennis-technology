"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export function AboutPreview() {
  const skills = [
  "Software Testing & Quality Assurance",
  "Web Testing",
  "Mobile Testing",
  "Web Development",
  "Mobile Apps",
  "E-commerce",
  "UI/UX Design"
]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-80 md:h-full min-h-[400px] order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
              <div className="w-full max-w-md aspect-video bg-background/80 backdrop-blur-sm rounded-lg shadow-2xl p-6 flex items-center justify-center">
                <div className="text-center">
                 <h3 className="text-2xl font-bold mb-2">Olusegun Dennis</h3>
<p className="text-muted-foreground">Founder · QA Engineer · Web & Mobile Developer</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              About the Founder
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Hello, I'm Olusegun Dennis, founder of Dennis Technology. I started my journey in tech after years of experience running businesses in transportation, logistics, and real estate.
            </p>
            
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
            
            <Button asChild>
              <Link href="/about" className="flex items-center gap-2">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}