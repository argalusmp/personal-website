"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { AcademicCapIcon, BriefcaseIcon, TrophyIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const timelineData = [
  {
    categories: ["Experience"],
    title: "Business Support - IT & Risk",
    organization: "PT Bank Rakyat Indonesia (Persero) Tbk.",
    period: "Nov 2025 - Present",
    description: "Leading data quality assurance and standardization for internal validation platforms.",
    icon: BriefcaseIcon,
    tags: ["Data Quality", "SQL", "Python"],
  },
  {
    categories: ["Experience"],
    title: "Backend Developer",
    organization: "Purple Box AI",
    period: "Oct 2025 - Present",
    description: "Implementing platform integrations (Shopify, WooCommerce APIs) using Python & NestJS.",
    icon: BriefcaseIcon,
    tags: ["Python", "NestJS", "API Integration"],
  },
  {
    categories: ["Certification"],
    title: "Associate Data Scientist",
    organization: "LSP Informatika BNSP",
    period: "2025",
    description: "Professional certification validating data science expertise.",
    icon: TrophyIcon,
    tags: ["Data Science", "Machine Learning"],
  },
  {
    categories: ["Experience"],
    title: "Software Developer Intern",
    organization: "PT Berlian Sistem Informasi",
    period: "Oct 2024 - Feb 2025",
    description: "Drove business expansion through ERP system implementation and automation features (70% efficiency boost).",
    icon: BriefcaseIcon,
    tags: ["React", ".NET", "SQL Server"],
  },
  {
    categories: ["Experience"],
    title: "Data Science Intern",
    organization: "PT Algonacci Sobat Nusantara",
    period: "Jul 2024 - Oct 2024",
    description: "Contributed to LLM-based chatbot development and end-to-end data pipelines.",
    icon: BriefcaseIcon,
    tags: ["LLM", "RAG", "Python"],
  },
  {
    categories: ["Education"],
    title: "Bachelor's Degree in Informatics",
    organization: "Politeknik Negeri Jakarta",
    period: "2021 - 2025",
    description: "GPA: 3.73/4.00. Specialized in software development and machine learning.",
    icon: AcademicCapIcon,
    tags: ["Computer Science", "Algorithms"],
  },
];

const TimelineItem = ({ item, index }) => {
  const ref = useRef(null);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex gap-6 relative pb-16 ${
        index % 2 === 0 ? "flex-row-reverse text-right" : "flex-row text-left"
      } md:justify-between items-center w-full`}
    >
        {/* Mobile View Adjustment: Always left aligned on mobile, handled via CSS grid/flex usually but simple stack here */}
      <div className="hidden md:block w-5/12"></div> {/* Spacer */}
      
      {/* Center Line Node */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 p-2 bg-dark-card border border-border-primary rounded-full z-10 shadow-glow">
        <item.icon className="w-5 h-5 text-accent-primary" />
      </div>

      {/* Content Card */}
      <div className={`w-[calc(100%-3rem)] md:w-5/12 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
        <div className="p-6 bg-dark-card/50 backdrop-blur-sm border border-border-primary/50 hover:border-accent-primary/50 transition-colors duration-300 rounded-2xl shadow-lg group">
          <div className={`flex flex-col ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
            <span className="text-accent-primary text-sm font-semibold mb-2 px-3 py-1 bg-accent-primary/10 rounded-full w-fit">
              {item.period}
            </span>
            <h3 className="text-xl font-bold text-text-primary mb-1 group-hover:text-gradient transition-all duration-300">{item.title}</h3>
            <h4 className="text-text-secondary font-medium mb-3">{item.organization}</h4>
           
            <p className="text-text-tertiary text-sm leading-relaxed mb-4">
              {item.description}
            </p>

            <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
              {item.tags.map((tag) => (
                <span key={tag} className="text-xs text-text-muted bg-dark-surface px-2 py-1 rounded-md border border-border-primary/30">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const JourneySection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-20 flex flex-col items-center"
        >
          {/* Profile Image Intro */}
          <div className="relative w-32 h-32 mb-6">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary to-accent-secondary rounded-full blur-md opacity-50 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent-primary/50 shadow-2xl">
                <Image 
                    src="/images/profil kuda.png" 
                    alt="Vidi Journey Profile"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-dark-surface p-2 rounded-full border border-border-primary shadow-lg">
                <span className="text-xl">🚀</span>
            </div>
          </div>

          <span className="text-accent-primary font-medium tracking-widest uppercase text-sm">The Path</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-text-tertiary mt-4 max-w-lg mx-auto">
            From coding lines in my dorm room to architecting enterprise solutions. Here is how I got here.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border-primary/30 -translate-x-1/2"></div>
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-primary -translate-x-1/2 origin-top"
          ></motion.div>

          <div className="space-y-4">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
