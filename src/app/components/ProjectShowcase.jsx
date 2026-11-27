"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "SkripsIA - AI-Powered Thesis Assistant",
    description:
      "RAG-based Chatbot achieving 92% answerable rate. Full-stack Python (FastAPI) & Next.js.",
    image: "/images/projects/77.png",
    gitUrl: "https://github.com/argalusmp/skripsia",
    previewUrl: "/",
    technologies: ["Python", "FastAPI", "Next.js", "RAG"],
    status: "Completed",
  },
  {
    id: 2,
    title: "Songs Recommendation System",
    description:
      "Personalized song suggestions using content-based filtering and listening history analysis.",
    image: "/images/projects/11.png",
    gitUrl:
      "https://github.com/argalusmp/songs_recommendation_system?tab=readme-ov-file",
    previewUrl: "/",
    technologies: ["Python", "Scikit-learn", "ML"],
    status: "Completed",
  },
  {
    id: 3,
    title: "Volunteer Recommendation System",
    description:
      "Matching volunteers with opportunities based on skills and preferences using TensorFlow.",
    image: "/images/projects/22.jpg",
    gitUrl: "https://github.com/Capstone-CH2-PS374/ML_Recommendation_system",
    previewUrl: "https://github.com/Capstone-CH2-PS374/ML_Recommendation_system",
    technologies: ["TensorFlow", "Python", "Recommender"],
    status: "Completed",
  },
  {
    id: 4,
    title: "Real-time Group Chat App",
    description:
      "Cross-platform mobile app for real-time group conversations with modern UI.",
    image: "/images/projects/33.jpg",
    gitUrl: "https://github.com/argalusmp/chat_app_flutter",
    previewUrl: "/",
    technologies: ["Flutter", "Firebase", "Real-time"],
    status: "Completed",
  },
  {
    id: 5,
    title: "Restaurant Management Web App",
    description:
      "Comprehensive restaurant profile and management system with responsive design.",
    image: "/images/projects/44.png",
    gitUrl: "https://github.com/argalusmp/restaurant-react",
    previewUrl: "/",
    technologies: ["React", "JavaScript", "CSS3"],
    status: "Completed",
  },
  {
    id: 6,
    title: "Laravel Todo Management",
    description:
      "Full-featured task management app with authentication and CRUD operations.",
    image: "/images/projects/55.png",
    gitUrl: "https://github.com/argalusmp/Todolist-Basic-Laravel",
    previewUrl: "/",
    technologies: ["Laravel", "PHP", "MySQL"],
    status: "Completed",
  },
  {
    id: 7,
    title: "Laptop Price Prediction",
    description:
      "ML model to predict laptop prices using Kaggle datasets for informed purchasing.",
    image: "/images/projects/66.jpg",
    gitUrl: "https://github.com/argalusmp/laptop_price_prediction_ML",
    previewUrl: "/",
    technologies: ["Python", "Scikit-learn", "Data Analysis"],
    status: "Completed",
  },
  {
    id: 8,
    title: "Indonesian Sign Language Recognition",
    description:
      "AI app that interprets Indonesian sign language to bridge communication gaps.",
    image: "/images/projects/sign_languages.jpg",
    gitUrl: "https://github.com/argalusmp/gestura_app",
    previewUrl: "/",
    technologies: ["Computer Vision", "Python", "ML"],
    status: "Completed",
  },
  {
    id: 9,
    title: "IoT Waste Management",
    description:
      "IoT system for efficient waste monitoring and information tracking.",
    image: "/images/projects/trashcker.png",
    gitUrl: "https://github.com/argalusmp/trashcker_IoT",
    previewUrl: "/",
    technologies: ["IoT", "Arduino", "PHP"],
    status: "Completed",
  },
];

const ProjectShowcase = () => {
  return (
    <section className="bg-dark-secondary py-24 md:py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col gap-5 border-b border-border-primary pb-8 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-secondary">
              Selected work · 01—09
            </span>
            <h2 className="mt-4 text-4xl font-semibold md:text-6xl">
              Ideas into <span className="text-accent-primary">practice.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-text-tertiary">
            A selection of projects across machine learning, software, and
            practical problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="min-h-[400px]"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                technologies={project.technologies}
                status={project.status}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
