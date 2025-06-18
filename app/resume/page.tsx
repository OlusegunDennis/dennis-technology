"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SectionTitle } from "@/components/shared/section-title";
import { Button } from "@/components/ui/button";
import {
  Download,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  CheckCircle,
} from "lucide-react";
import {
  techStack,
  experiences,
  education,
  achievements,
} from "@/lib/constants";

export default function ResumePage() {
  const [showToast, setShowToast] = useState(false);

  const handleResumeClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <SectionTitle
            title="Resume of Olusegun Dennis"
            subtitle="Software Developer & QA Engineer"
            align="left"
            className="md:mb-0"
          />

          <div className="flex flex-col md:flex-row gap-4">
            <Button
              onClick={handleResumeClick}
              className="flex items-center gap-2 w-full md:w-auto"
            >
              <Download className="h-4 w-4" /> Download Dev Resume
            </Button>
            <Button
              onClick={handleResumeClick}
              variant="outline"
              className="flex items-center gap-2 w-full md:w-auto"
            >
              <Download className="h-4 w-4" /> Download QA Resume
            </Button>
          </div>
        </div>

        {showToast && (
          <div
            className="rounded-md px-4 py-3 mt-3 mb-6 font-semibold text-center shadow-lg transition-all duration-500"
            style={{
              backgroundColor: "#FFFAE6",
              color: "#B45309",
              border: "1px solid #FCD34D",
              fontSize: "0.95rem",
            }}
          >
            📌 <span className="text-black">Resume available on request.</span>{" "}
            Please{" "}
            <Link
              href="/contact"
              className="underline font-bold text-blue-600 hover:text-blue-800"
            >
              contact me
            </Link>{" "}
            to receive a copy.
          </div>
        )}

        <div className="space-y-12">
          {/* Tech Stack */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Code className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Tech Stack</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((category, index) => (
                <div key={index} className="bg-muted rounded-lg p-6">
                  <h3 className="font-semibold mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-background text-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Experience */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Experience</h2>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-2 border-primary/30 pl-6 relative"
                >
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2" />
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-muted-foreground mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-muted-foreground">
                        • {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Education */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Education & Certifications</h2>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-2 border-primary/30 pl-6 relative"
                >
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2" />
                  <h3 className="text-xl font-semibold">{edu.title}</h3>
                  {edu.institution && (
                    <p className="text-primary font-medium">
                      {edu.institution}
                    </p>
                  )}
                  <p className="text-muted-foreground mb-4">{edu.period}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Achievements */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Achievements</h2>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}