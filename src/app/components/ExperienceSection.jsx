"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Business Support - IT and Risk Division",
    company: "PT Bank Rakyat Indonesia (Persero) Tbk.",
    location: "South Jakarta, Indonesia",
    period: "Nov 2025 - Present",
    type: "Full-time",
    description: "Leading data quality assurance initiatives for internal validation platform, ensuring data integrity across multiple sources.",
    achievements: [
      "Spearheaded data quality assurance by collecting and rigorously cleaning high-volume customer data from physical and digital sources",
      "Ensured data integrity by standardizing critical data formats (NPWP, NIK, dates, document numbers)",
      "Resolved data inconsistencies, duplicates, and missing values to maintain validation accuracy",
      "Provided structured, clean datasets for validation process and business intelligence analysis"
    ],
    technologies: ["Data Quality", "Data Cleaning", "Data Standardization", "SQL", "Python", "Excel"],
    icon: "🏦"
  },
  {
    title: "Backend Developer (Freelance)",
    company: "Purple Box AI",
    location: "Madrid, Spain (Remote)",
    period: "Oct 2025 - Present",
    type: "Freelance",
    description: "Implementing platform integrations for agency-SEO services, bridging internal services with external e-commerce platforms.",
    achievements: [
      "Implemented platform integration for agency-SEO services as bridge between internal and external platforms",
      "Successfully integrated Shopify and WooCommerce APIs for direct product management",
      "Assisted in AI service development to enhance core SEO tools with focus on stability and scalability",
      "Wrote production-ready code utilizing Python and JavaScript (NestJS) for robust backend functionalities"
    ],
    technologies: ["Python", "NestJS", "TypeScript", "Shopify API", "WooCommerce API", "RESTful API", "AI Services"],
    icon: "🚀"
  },
  {
    title: "Software Developer Intern",
    company: "PT Berlian Sistem Informasi",
    location: "East Jakarta, Indonesia",
    period: "Oct 2024 - Feb 2025",
    type: "Internship",
    description: "Drove business expansion through ERP system implementation and automation features, significantly improving operational efficiency.",
    achievements: [
      "Drove business expansion by implementing complex ERP change requests to onboard 5 new company divisions",
      "Achieved 70% reduction in manual reporting time by designing and implementing automation features",
      "Collaborated with core development team in full lifecycle: building, testing, and maintenance",
      "Developed and maintained features using JavaScript (React) to enhance application functionality"
    ],
    technologies: ["JavaScript", "React", "ERP Systems", ".NET", "SQL Server", "Git"],
    icon: "💼"
  },
  {
    title: "Data Science Intern",
    company: "PT Algonacci Sobat Nusantara",
    location: "West Jakarta, Indonesia",
    period: "Jul 2024 - Oct 2024",
    type: "Internship",
    description: "Contributed to cutting-edge LLM-based chatbot development and end-to-end data pipeline implementation.",
    achievements: [
      "Contributed to state-of-the-art LLM-based chatbot development including prompt engineering and validation",
      "Assisted data science team in end-to-end data pipeline: collecting, cleaning, and analyzing structured/unstructured data",
      "Applied statistical analysis and ML techniques to identify predictive patterns in large datasets",
      "Kept up-to-date with latest developments in data science and machine learning technologies"
    ],
    technologies: ["Python", "LLM", "RAG", "NLP", "Pandas", "TensorFlow", "Machine Learning", "Data Analysis"],
    icon: "🧠"
  }
];

const ExperienceCard = ({ experience, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <div className="card-hover group">
        {/* Timeline dot */}
        <div className="absolute -left-4 top-6 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
          {index + 1}
        </div>

        <div className="flex items-start gap-4">
          <div className="text-4xl">{experience.icon}</div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
              <h3 className="text-xl font-semibold text-text-primary">
                {experience.title}
              </h3>
              <span className="text-sm px-3 py-1 bg-accent-primary/20 text-accent-primary rounded-full font-medium">
                {experience.type}
              </span>
            </div>
            
            <h4 className="text-lg font-medium text-gradient mb-1">
              {experience.company}
            </h4>
            
            {experience.location && (
              <p className="text-text-tertiary text-sm mb-1">
                📍 {experience.location}
              </p>
            )}
            
            <p className="text-text-tertiary text-sm mb-3 font-medium">
              📅 {experience.period}
            </p>
            
            <p className="text-text-secondary mb-4">
              {experience.description}
            </p>

            <div className="mb-4">
              <h5 className="text-text-primary font-medium mb-2">Key Achievements:</h5>
              <ul className="space-y-1">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-text-tertiary text-sm flex items-start gap-2">
                    <span className="text-accent-primary mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-text-primary font-medium mb-2">Technologies Used:</h5>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-dark-accent text-text-secondary text-sm rounded-full border border-border-primary hover:border-accent-primary transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gradient">Professional</span>{" "}
          <span className="text-text-primary">Experience</span>
        </h2>
        <p className="text-text-tertiary text-lg max-w-2xl mx-auto">
          My journey in technology, from learning fundamentals to applying them in real-world projects and professional environments.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-tertiary opacity-30"></div>
        
        <div className="space-y-8 pl-12">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.company}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 card"
      >
        <div className="text-center">
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            <span className="text-gradient">Education</span>
          </h3>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-4xl">🎓</span>
            <div>
              <h4 className="text-xl font-semibold text-text-primary">
                Bachelor&apos;s Degree in Informatics Engineering (Diploma 4)
              </h4>
              <p className="text-gradient font-medium">
                Politeknik Negeri Jakarta
              </p>
              <p className="text-text-tertiary text-sm">
                2021 - 2025 • GPA: 3.73/4.00
              </p>
            </div>
          </div>
          <p className="text-text-secondary max-w-2xl mx-auto mb-4">
            Specialized in software development, data structures, algorithms, and machine learning. 
            Strong foundation in full-stack development and data science with proven ability to work in collaborative teams.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="card text-center px-6 py-3">
              <div className="text-xl font-bold text-gradient">🏅</div>
              <p className="text-sm text-text-tertiary mt-1">Associate Data Scientist</p>
              <p className="text-xs text-text-muted">LSP Informatika BNSP - 2025</p>
            </div>
            <div className="card text-center px-6 py-3">
              <div className="text-xl font-bold text-gradient">📚</div>
              <p className="text-sm text-text-tertiary mt-1">Bangkit Academy 2023</p>
              <p className="text-xs text-text-muted">Machine Learning Cohort</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
