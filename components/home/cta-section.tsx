"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl p-8 md:p-12 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
  Let's transform your business idea into reality with custom software solutions — built with precision, tested for quality, and tailored to your specific needs.
</p>
          <Button asChild size="lg">
            <Link href="/contact" className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" /> Get in Touch
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}