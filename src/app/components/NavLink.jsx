"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = ({ href, title, onClick, isActive }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative block px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
        isActive
          ? "text-white"
          : "text-text-secondary hover:text-text-primary"
      }`}
    >
      <span className="relative z-10">{title}</span>
      
      {/* Hover effect */}
      <motion.div
        className="absolute inset-0 bg-accent-primary/10 rounded-lg opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.2 }}
      />
      
      {/* Active indicator */}
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-gradient-primary rounded-lg"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </Link>
  );
};

export default NavLink;