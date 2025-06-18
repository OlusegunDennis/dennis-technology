'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/shared/section-title';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export function ProjectsPreview() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
  id: 1,
  title: 'Dennis Rental Naija',
  description: 'A professional car rental and driver booking platform built with Next.js. I developed the site using Tailwind CSS and Bootstrap for responsive design. Form submissions are handled via WhatsApp for direct communication with clients. I also performed QA testing on booking flows, mobile responsiveness, and form logic.',
  tech: 'Next.js · Tailwind CSS · Bootstrap · WhatsApp Integration · Manual QA',
  link: 'https://dennisrentalnaija.netlify.app',
  image: '/assets/projects/drnlogo2.jpeg',
},
   {
  id: 2,
  title: 'Articipay',
  description: 'A research-based platform that connects researchers with paid participants for data collection and study contributions. I worked as a QA Engineer, testing user flows, payment logic, and participant onboarding to ensure a seamless and bug-free experience for both researchers and contributors.',
  tech: 'Cypress · Postman · Manual & Automated QA',
  link: 'https://articipay.com',
  image: '/assets/projects/articipay_logo.jpeg',
},
 {
  id: 3,
  title: 'Car Rental Naija',
  description: 'A professional vehicle rental and driver booking platform designed to serve users across Nigeria. I contributed to this project by performing end-to-end QA testing, validating booking flows, driver assignment, and contact forms to ensure a smooth and reliable user experience.',
  tech: 'React · Bootstrap · Manual & Automated QA',
  link: 'http://carrentalnaija.com',
  image: '/assets/projects/carrentalnaija_logo.jpeg',
},
{
    id: 4,
    title: "Dennis Properties Naija",
    description:
      "A professional real estate platform offering short-let, long-term rentals, and the sale of verified properties across Nigeria. I contributed by testing user flows, property listings, inquiry forms, and overall usability to ensure a secure and seamless experience for clients seeking trusted housing solutions.",
    tech: "Next.js · Tailwind CSS · Bootstrap · WhatsApp Integration · Manual QA",
    link: "https://dennisrentalnaija.netlify.app/real-estate",
    image: "/assets/projects/logo3.jpeg",
  },
    // You can add more projects here
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="A showcase of recent development work and QA-tested digital solutions"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
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
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <p className="text-sm font-medium text-primary">{project.tech}</p>
                </CardContent>

                <CardFooter>
                  <Link 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1"
                  >
                    View Details <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/portfolio" className="flex items-center gap-2">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}