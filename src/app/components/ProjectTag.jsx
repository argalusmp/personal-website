import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <motion.button
      onClick={() => onClick(name)}
      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
        isSelected
          ? "bg-gradient-primary text-white shadow-glow"
          : "bg-dark-card text-text-secondary hover:text-text-primary border border-border-primary hover:border-accent-primary"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {name}
    </motion.button>
  );
};

export default ProjectTag;