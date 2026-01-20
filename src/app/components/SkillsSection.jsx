"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 90, icon: "🐍" },
      { name: "JavaScript", level: 88, icon: "⚡" },
      { name: "TypeScript", level: 85, icon: "📘" },
      { name: "SQL", level: 88, icon: "🗄️" },
    ]
  },
  {
    category: "Data Science & ML",
    skills: [
      { name: "Pandas", level: 92, icon: "🐼" },
      { name: "Scikit-learn", level: 88, icon: "🔬" },
      { name: "TensorFlow", level: 85, icon: "🧠" },
      { name: "NumPy", level: 88, icon: "🔢" },
      { name: "RAG/LLM Engineering", level: 85, icon: "🤖" },
      { name: "Data Visualization", level: 82, icon: "📊" },
      { name: "Feature Engineering", level: 85, icon: "⚙️" },
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "FastAPI", level: 88, icon: "⚡" },
      { name: "NestJS", level: 80, icon: "🔺" },
      { name: "RESTful API", level: 90, icon: "🔌" },
      { name: "PostgreSQL", level: 85, icon: "🐘" },
      { name: "MySQL", level: 85, icon: "🗄️" },
    ]
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", level: 88, icon: "⚛️" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "Tailwind CSS", level: 92, icon: "🎨" },
      { name: "Responsive Design", level: 90, icon: "📱" },
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git/Github", level: 90, icon: "🌿" },
      { name: "Docker", level: 75, icon: "🐳" },
      { name: "Microsoft Excel", level: 88, icon: "📊" },
      { name: "Looker Studio", level: 80, icon: "📈" },
      { name: "Vector DB", level: 82, icon: "🗃️" },
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Critical Thinking", level: 90, icon: "🎯" },
      { name: "Problem Solving", level: 92, icon: "🧩" },
      { name: "Time Management", level: 88, icon: "⏰" },
      { name: "Teamwork", level: 90, icon: "🤝" },
      { name: "Adaptability", level: 88, icon: "🔄" },
    ]
  }
];

const SkillCard = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-hover group"
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{skill.icon}</span>
        <span className="font-medium text-text-primary group-hover:text-gradient transition-colors duration-300">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gradient">Skills &</span>{" "}
          <span className="text-text-primary">Expertise</span>
        </h2>
        <p className="text-text-tertiary text-lg mb-12 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and proficiency levels across various technologies and frameworks.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            className="card"
          >
            <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">
              {category.category}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={skillIndex}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="card text-center">
          <div className="text-3xl font-bold text-gradient mb-2">70%</div>
          <div className="text-text-tertiary">Efficiency Improvement</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-gradient mb-2">92%</div>
          <div className="text-text-tertiary">RAG Chatbot Accuracy</div>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-gradient mb-2">15+</div>
          <div className="text-text-tertiary">Technologies Mastered</div>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
