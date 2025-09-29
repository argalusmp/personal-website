"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Developer Intern",
    company: "Berlian Sistem Informasi",
    period: "Nov 2024 - Feb 2025",
    type: "Internship",
    description: "Developed web applications using Laravel framework and contributed to system architecture improvements.",
    achievements: [
      "Built responsive web applications using Laravel and PHP",
      "Collaborated with team to improve system performance",
      "Implemented database optimization techniques",
      "Participated in code reviews and testing processes"
    ],
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap"],
    icon: "💼"
  },
  {
    title: "Data Scientist Intern",
    company: "Braincore",
    period: "Jul 2024 - Oct 2024",
    type: "Internship",
    description: "Developed machine learning models and data analysis solutions for business intelligence applications.",
    achievements: [
      "Built recommendation systems using content-based filtering",
      "Reduced manual reporting time by 70% through automation",
      "Developed RAG/LLM prototypes with Python and vector stores",
      "Implemented experiment tracking and model evaluation pipelines"
    ],
    technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "SQL", "Machine Learning"],
    icon: "🧠"
  },
  {
    title: "Student",
    company: "Bangkit Academy by Google, GoTo & Traveloka",
    period: "Feb 2021 - Aug 2021",
    type: "Program",
    description: "Intensive learning program focusing on machine learning fundamentals and cloud computing.",
    achievements: [
      "Completed comprehensive machine learning curriculum",
      "Built capstone project in recommendation systems",
      "Learned cloud computing with Google Cloud Platform",
      "Collaborated with cross-functional teams"
    ],
    technologies: ["Python", "Machine Learning", "Google Cloud", "TensorFlow", "Data Analysis"],
    icon: "🎓"
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
            
            <h4 className="text-lg font-medium text-gradient mb-2">
              {experience.company}
            </h4>
            
            <p className="text-text-tertiary text-sm mb-3 font-medium">
              {experience.period}
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
                Bachelor of Informatics Engineering
              </h4>
              <p className="text-gradient font-medium">
                Politeknik Negeri Jakarta
              </p>
              <p className="text-text-tertiary text-sm">
                2021 - 2024 • GPA: 3.73/4.00
              </p>
            </div>
          </div>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Specialized in software development, data structures, algorithms, and machine learning. 
            Active in various programming competitions and tech communities.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
