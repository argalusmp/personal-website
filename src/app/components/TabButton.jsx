import React from "react";
import { motion } from "framer-motion";

const TabButton = ({ active, selectTab, children, icon: Icon }) => {
  return (
    <motion.button
      onClick={selectTab}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
        active
          ? "bg-gradient-primary text-white shadow-glow"
          : "bg-dark-card text-text-secondary hover:text-text-primary hover:bg-dark-surface border border-border-primary"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </motion.button>
  );
};

export default TabButton;