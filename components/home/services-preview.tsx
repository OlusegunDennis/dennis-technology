"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/constants";
import { SectionTitle } from "@/components/shared/section-title";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Building,
  Car,
  ShoppingCart,
  BarChart,
  CheckCircle, // ✅ Add this
} from "lucide-react";

// ✅ Add CheckCircle to the icon map
const iconMap = {
  Code: Code,
  Building: Building,
  Car: Car,
  ShoppingCart: ShoppingCart,
  BarChart: BarChart,
  CheckCircle: CheckCircle,
};

export function ServicesPreview() {
  const [visibleServices, setVisibleServices] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleServices(3);
      } else {
        setVisibleServices(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Our Services"
          subtitle="Specialized solutions to help your business grow in the digital landscape"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, visibleServices).map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {Icon ? (
                    <Icon className="h-6 w-6 text-primary" />
                  ) : (
                    <span className="text-primary text-lg">🔧</span> // fallback
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/services" className="flex items-center gap-2">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
