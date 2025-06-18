"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-muted -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <motion.h1 
              className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Smart solutions for a <span className="text-primary">digital first</span> world.
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
               We build, We Test Web, Mobile, Manual and Automation tools that help small businesses scale fast, operate efficiently, and deliver with confidence.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <Button asChild size="lg">
                <Link href="/portfolio">View Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/hire-me" className="flex items-center gap-2">
                  Hire Me <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative hidden lg:block h-full min-h-[400px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
              <div className="w-full max-w-md aspect-video bg-background/80 backdrop-blur-sm rounded-lg shadow-2xl p-6 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Dennis Technology</h3>
                  <p className="text-muted-foreground">Digital solutions for real world problems</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}