"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillsData = [
  {
    category: "Languages",
    items: [
      { name: "Python", level: 90, color: "text-blue-400", bg: "bg-blue-900/20", border: "border-blue-500/30" },
      { name: "JavaScript", level: 88, color: "text-yellow-400", bg: "bg-yellow-900/20", border: "border-yellow-500/30" },
      { name: "TypeScript", level: 85, color: "text-blue-500", bg: "bg-blue-900/20", border: "border-blue-600/30" },
      { name: "SQL", level: 88, color: "text-orange-400", bg: "bg-orange-900/20", border: "border-orange-500/30" },
    ]
  },
  {
    category: "AI & Data",
    items: [
      { name: "TensorFlow", level: 85, color: "text-orange-500", bg: "bg-orange-900/20", border: "border-orange-600/30" },
      { name: "Pandas", level: 92, color: "text-indigo-400", bg: "bg-indigo-900/20", border: "border-indigo-500/30" },
      { name: "Scikit-learn", level: 88, color: "text-orange-300", bg: "bg-orange-900/20", border: "border-orange-400/30" },
      { name: "RAG / LLM", level: 85, color: "text-purple-400", bg: "bg-purple-900/20", border: "border-purple-500/30" },
      { name: "Vector DB", level: 82, color: "text-green-400", bg: "bg-green-900/20", border: "border-green-500/30" },
    ]
  },
  {
    category: "Web & Backend",
    items: [
      { name: "React / Next.js", level: 88, color: "text-cyan-400", bg: "bg-cyan-900/20", border: "border-cyan-500/30" },
      { name: "FastAPI", level: 88, color: "text-teal-400", bg: "bg-teal-900/20", border: "border-teal-500/30" },
      { name: "NestJS", level: 80, color: "text-red-500", bg: "bg-red-900/20", border: "border-red-600/30" },
      { name: "Tailwind CSS", level: 92, color: "text-cyan-300", bg: "bg-cyan-900/20", border: "border-cyan-400/30" },
      { name: "PostgreSQL", level: 85, color: "text-blue-300", bg: "bg-blue-900/20", border: "border-blue-400/30" },
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Docker", level: 75, color: "text-blue-500", bg: "bg-blue-900/20", border: "border-blue-600/30" },
      { name: "Git", level: 90, color: "text-orange-600", bg: "bg-orange-900/20", border: "border-orange-700/30" },
      { name: "Looker Studio", level: 80, color: "text-blue-400", bg: "bg-blue-900/20", border: "border-blue-500/30" },
    ]
  }
];

const SkillCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.05 }}
      className={`relative px-4 py-3 rounded-xl border ${item.border} ${item.bg} backdrop-blur-sm flex items-center gap-3 cursor-default group`}
    >
      <div className={`w-2 h-2 rounded-full ${item.color.replace("text-", "bg-")} shadow-[0_0_10px_currentColor] group-hover:shadow-[0_0_15px_currentColor] transition-shadow duration-300`}></div>
      <span className={`font-medium ${item.color.replace("text-", "group-hover:text-")} transition-colors`}>
        {item.name}
      </span>
      
      {/* Percentage (Optional, shown on hover) */}
      <div className="absolute top-0 right-0 -mt-2 -mr-2 opacity-0 group-hover:opacity-100 transition-opacity bg-dark-card border border-border-primary px-2 py-0.5 rounded text-xs text-text-muted">
        {item.level}%
      </div>
    </motion.div>
  );
};

const SkillVisualization = () => {
  const ref = useRef(null);
  
  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[100px]"></div>
        <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-[100px]"></div>

      <div className="container-custom relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-text-tertiary text-lg max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-text-primary px-2 border-l-4 border-accent-primary/50">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item, itemIndex) => (
                  <SkillCard key={item.name} item={item} index={itemIndex} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-800"
        >
          <div className="p-4">
            <div className="text-4xl font-bold text-accent-primary mb-2">15+</div>
            <div className="text-text-tertiary">Technologies Mastered</div>
          </div>
          <div className="p-4">
            <div className="text-4xl font-bold text-accent-secondary mb-2">92%</div>
            <div className="text-text-tertiary">RAG Chatbot Accuracy</div>
          </div>
          <div className="p-4">
            <div className="text-4xl font-bold text-accent-tertiary mb-2">70%</div>
            <div className="text-text-tertiary">Efficiency Improvement</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillVisualization;
