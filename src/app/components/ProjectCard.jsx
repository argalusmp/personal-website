"use client";
import React from "react";
import { CodeBracketIcon, ArrowTopRightOnSquareIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, technologies, status }) => {
  return (
    <motion.div
      className="card-hover group overflow-hidden h-full flex flex-col"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Container */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-dark-primary/0 group-hover:bg-dark-primary/90 transition-all duration-500 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-4">
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-primary text-white rounded-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              <CodeBracketIcon className="h-4 w-4" />
              <span className="text-sm font-medium">Code</span>
            </Link>
            
            {previewUrl && previewUrl !== "/" && (
              <Link
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-dark-surface text-text-primary rounded-lg border border-border-primary hover:border-accent-primary transition-all duration-300 transform hover:scale-105"
              >
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                <span className="text-sm font-medium">Live Demo</span>
              </Link>
            )}
          </div>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
            status === "Completed" 
              ? "bg-green-500/20 text-green-400 border border-green-500/30" 
              : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
          }`}>
            <CheckCircleIcon className="h-3 w-3" />
            {status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-gradient transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-text-tertiary text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        {/* Technologies */}
        {technologies && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-dark-accent text-text-secondary text-xs rounded-md border border-border-primary/50"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;