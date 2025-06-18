"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/constants";
import { SectionTitle } from "@/components/shared/section-title";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PortfolioPage() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Portfolio"
          subtitle="Explore some of my recent projects and digital solutions"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center text-primary font-medium">
                    Project Screenshot Placeholder
                  </div>
                  {activeProject === project.id && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity">
                      <Link 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white flex items-center gap-2 bg-primary hover:bg-primary/90 transition-colors rounded-full py-2 px-4"
                      >
                        View Project <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </div>
                <CardContent className="pt-6 flex-grow">
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <p className="text-sm font-medium text-primary">{project.tech}</p>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Looking for more examples?</h2>
            <p className="text-muted-foreground mb-6">
              These are just a few examples of my recent work. Contact me to discuss your project needs and see more specialized examples relevant to your industry.
            </p>
            <Button asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}