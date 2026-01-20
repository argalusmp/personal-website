"use client";
import React, { useTransition, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { AcademicCapIcon, BriefcaseIcon, TrophyIcon } from "@heroicons/react/24/outline";

const TAB_DATA = [
  {
    title: "Background",
    id: "background",
    icon: AcademicCapIcon,
    content: (
      <div className="space-y-4">
        <div className="card">
          <h4 className="text-lg font-semibold text-text-primary mb-2">Education</h4>
          <p className="text-text-secondary">
            Bachelor&apos;s Degree in Informatics Engineering (Diploma 4)
          </p>
          <p className="text-accent-primary font-medium">Politeknik Negeri Jakarta</p>
          <p className="text-text-tertiary text-sm mt-1">2021 - 2025 • GPA: 3.73/4.00</p>
        </div>
        <div className="card">
          <h4 className="text-lg font-semibold text-text-primary mb-2">Location</h4>
          <p className="text-text-secondary">
            📍 Depok, West Java, Indonesia
          </p>
          <p className="text-text-tertiary text-sm mt-1">Open to Remote & On-site Opportunities</p>
        </div>
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    icon: BriefcaseIcon,
    content: (
      <div className="space-y-4">
        <div className="card">
          <h4 className="text-lg font-semibold text-text-primary mb-2">Business Support - IT & Risk</h4>
          <p className="text-accent-primary font-medium mb-1">PT Bank Rakyat Indonesia (Persero) Tbk.</p>
          <p className="text-text-tertiary text-sm mb-2">Nov 2025 - Present</p>
          <p className="text-text-secondary text-sm">
            Leading data quality assurance and standardization for internal validation platform.
          </p>
        </div>
        <div className="card">
          <h4 className="text-lg font-semibold text-text-primary mb-2">Backend Developer (Freelance)</h4>
          <p className="text-accent-primary font-medium mb-1">Purple Box AI</p>
          <p className="text-text-tertiary text-sm mb-2">Oct 2025 - Present (Remote)</p>
          <p className="text-text-secondary text-sm">
            Implementing platform integrations (Shopify, WooCommerce APIs) using Python & NestJS.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    icon: TrophyIcon,
    content: (
      <div className="space-y-4">
        <div className="card">
          <h4 className="text-lg font-semibold text-text-primary mb-2">Professional Certifications</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 p-3 bg-dark-surface rounded-lg border border-border-primary/50">
              <div className="p-2 bg-accent-primary/20 rounded-lg">
                <TrophyIcon className="h-5 w-5 text-accent-primary" />
              </div>
              <div>
                <h5 className="font-medium text-text-primary">Associate Data Scientist</h5>
                <p className="text-text-tertiary text-sm">LSP Informatika</p>
                <p className="text-text-tertiary text-xs">2025</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="card">
          <h4 className="text-lg font-semibold text-text-primary mb-2">Key Achievements</h4>
          <ul className="space-y-2 text-text-secondary text-sm">
            <li className="flex items-start gap-2">
              <span className="text-accent-primary mt-1">•</span>
              🚀 70% reduction in manual reporting time through automation
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-primary mt-1">•</span>
              🤖 92% accuracy RAG-based chatbot (SkripsIA) for thesis Q&A
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-primary mt-1">•</span>
              🏢 Onboarded 5 new divisions through ERP implementation
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-primary mt-1">•</span>
              🔗 Integrated Shopify & WooCommerce APIs for SEO services
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("background");
  const [isPending, startTransition] = useTransition();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gradient">About</span>{" "}
          <span className="text-text-primary">Me</span>
        </h2>
        <p className="text-text-tertiary text-lg max-w-2xl mx-auto">
          Passionate about creating intelligent solutions that bridge the gap between data and business value.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-2 lg:order-1"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20 scale-110"></div>
            <div className="relative">
                <Image
                  src="/images/about-me-image.png"
                  alt="About Vidi Septri Argalus MP"
                  width={500}
                  height={500}
                  className="rounded-3xl shadow-dark-lg"
                />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="order-1 lg:order-2 text-left"
        >
          <div className="mb-8">
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              I&apos;m a solution-oriented IT Developer and Data Scientist with a strong foundation in 
              full-stack development and Machine Learning/LLM engineering. Currently contributing to 
              data quality initiatives at PT Bank Rakyat Indonesia and developing backend solutions at 
              Purple Box AI, I&apos;ve demonstrated measurable impact through a 70% reduction in manual 
              reporting time and successful RAG/LLM chatbot prototype development achieving 92% accuracy.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Proficient in Python (Pandas, scikit-learn, TensorFlow), JavaScript/TypeScript (React, Next.js, NestJS), 
              FastAPI, SQL, and robust experiment tracking. Eager to leverage technical expertise to deliver 
              measurable business impact through innovative solutions and continuous learning.
            </p>
          </div>

          {/* Tabs */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {TAB_DATA.map((tabData) => {
                const Icon = tabData.icon;
                return (
                  <motion.button
                    key={tabData.id}
                    onClick={() => handleTabChange(tabData.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      tab === tabData.id
                        ? "bg-gradient-primary text-white shadow-glow"
                        : "bg-dark-card text-text-secondary hover:text-text-primary hover:bg-dark-surface border border-border-primary"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-4 w-4" />
                    {tabData.title}
                  </motion.button>
                );
              })}
            </div>

            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {TAB_DATA.find((t) => t.id === tab).content}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;