"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/constants";
import { SectionTitle } from "@/components/shared/section-title";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Building, 
  Car, 
  ShoppingCart, 
  BarChart,
  CheckCircle
} from "lucide-react";

const iconMap = {
  "Code": Code,
  "Building": Building,
  "Car": Car,
  "ShoppingCart": ShoppingCart,
  "BarChart": BarChart,
  "CheckCircle": CheckCircle, // ✅ THIS LINE FIXES THE ERROR
};

export default function ServicesPage() {
  const benefits = [
    "Custom solutions tailored to your specific needs",
    "Modern, responsive designs that work on all devices",
    "Clean, maintainable code that scales with your business",
    "Ongoing support and maintenance options",
    "Business-focused approach with real-world experience"
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Our Services"
          subtitle="Specialized technical solutions for modern businesses"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-muted rounded-lg p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    {Icon && <Icon className="h-6 w-6 text-primary" />}
                  </div>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <SectionTitle
            title="Why Choose Us"
            subtitle="The Dennis Technology advantage"
          />
          
          <div className="bg-muted rounded-lg p-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Benefits</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6">Our Process</h3>
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="pl-2">
                    <span className="font-medium">Discovery</span>
                    <p className="text-muted-foreground mt-1 pl-6">We thoroughly analyze your business needs and objectives</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Planning</span>
                    <p className="text-muted-foreground mt-1 pl-6">Creating a detailed roadmap and technical specifications</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Development</span>
                    <p className="text-muted-foreground mt-1 pl-6">Building your solution with regular progress updates</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Deployment</span>
                    <p className="text-muted-foreground mt-1 pl-6">Launching your solution with thorough testing</p>
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">Support</span>
                    <p className="text-muted-foreground mt-1 pl-6">Ongoing maintenance and improvements</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-6">
              Contact me today to discuss your project requirements and how Dennis Technology can help bring your ideas to life.
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