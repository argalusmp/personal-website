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
            Bachelor of Informatics Engineering from Politeknik Negeri Jakarta (2021-2024)
          </p>
          <p className="text-text-tertiary text-sm mt-1">GPA: 3.73/4.00</p>
        </div>
        <div className="card">
          <h4 className="text-lg font-semibold text-text-primary mb-2">Bangkit Academy</h4>
          <p className="text-text-secondary">
            Selected participant in Google, GoTo & Traveloka&apos;s intensive machine learning program
          </p>
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
          <h4 className="text-lg font-semibold text-text-primary mb-2">Software Developer Intern</h4>
          <p className="text-accent-primary font-medium mb-1">Berlian Sistem Informasi</p>
          <p className="text-text-tertiary text-sm mb-2">Nov 2024 - Feb 2025</p>
          <p className="text-text-secondary text-sm">
            Developed web applications and contributed to system architecture improvements reduced reporting time by 70%.
          </p>
        </div>
        <div className="card">
          <h4 className="text-lg font-semibold text-text-primary mb-2">Data Scientist Intern</h4>
          <p className="text-accent-primary font-medium mb-1">Braincore</p>
          <p className="text-text-tertiary text-sm mb-2">Jul 2024 - Oct 2024</p>
          <p className="text-text-secondary text-sm">
            Built ML models and developed RAG/LLM prototypes to create a chatbot.
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
          <h4 className="text-lg font-semibold text-text-primary mb-2">Technical Impact</h4>
          <ul className="space-y-2 text-text-secondary text-sm">
            <li className="flex items-start gap-2">
              <span className="text-accent-primary mt-1">•</span>
              Reduced manual reporting time by 70% through automation
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-primary mt-1">•</span>
              Built RAG/LLM prototypes with Python & vector stores
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-primary mt-1">•</span>
              Developed recommendation systems using content-based filtering
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
                alt="About Vidi Marpaung"
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
              I&apos;m an Entry-Level IT Developer specializing in Data Science with hands-on experience 
              in software development, particularly in DS & LLM-based chatbot solutions. I&apos;ve successfully 
              cut manual reporting time by 70% through automation and built RAG/LLM prototypes using 
              Python & vector stores.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              With strong expertise in JavaScript, Python, Pandas, scikit-learn, TensorFlow, SQL, 
              and experiment tracking/evaluation, I&apos;m eager to deliver measurable business impact 
              through innovative technology solutions.
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