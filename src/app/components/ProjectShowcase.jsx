"use client";
import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
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
    gitUrl: "https://github.com/argalusmp/songs_recommendation_system?tab=readme-ov-file",
    previewUrl: "/",
    technologies: ["Python", "Scikit-learn", "ML"],
    status: "Completed"
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
    status: "Completed"
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
    status: "Completed"
  },
  {
    id: 5,
    title: "Restaurant Management Web App",
    description: "Comprehensive restaurant profile and management system with responsive design.",
    image: "/images/projects/44.png",
    gitUrl: "https://github.com/argalusmp/restaurant-react",
    previewUrl: "/",
    technologies: ["React", "JavaScript", "CSS3"],
    status: "Completed"
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
    status: "Completed"
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
    status: "Completed"
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
    status: "Completed"
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
    status: "Completed"
  }
];

const ProjectShowcase = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate width shift. 
  // We have 9 projects + 1 Canva slide = 10 items.
  // Assuming each card is roughly 400px + gap, or we use a percentage shift.
  // 10 items * 450px card width = 4500px total width approx.
  // We want to scroll horizontally effectively.
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-dark-secondary">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Section Title Overlay (fades out as you scroll) */}
        <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
            className="absolute top-10 left-10 md:top-20 md:left-20 z-10 pointer-events-none"
        >
            <h2 className="text-4xl md:text-6xl font-bold">
                Selected <span className="text-gradient">Works</span>
            </h2>
            <p className="text-text-tertiary mt-2">Scroll down to explore gallery</p>
        </motion.div>

        <motion.div style={{ x }} className="flex gap-8 pl-10 md:pl-20">
          {projectsData.map((project) => (
            <div key={project.id} className="relative group min-w-[350px] md:min-w-[450px] h-[550px] flex-shrink-0">
               <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                technologies={project.technologies}
                status={project.status}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
