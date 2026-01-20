"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const projectsData = [
  {
    id: 1,
    title: "SkripsIA - AI-Powered Thesis Assistant",
    description:
      "Developed a high-performance RAG-based Chatbot achieving 92% answerable rate by indexing 5 critical thesis documents. Full-stack implementation with Python (FastAPI) backend, Next.js frontend, integrated with Vector DB and OpenAI API.",
    image: "/images/projects/77.png",
    tag: ["All", "Machine Learning", "Web"],
    gitUrl: "https://github.com/argalusmp/skripsia",
    previewUrl: "/",
    technologies: ["Python", "FastAPI", "Next.js", "RAG", "LLM", "Vector DB", "OpenAI API"],
    status: "Completed",
    featured: true
  },
  {
    id: 2,
    title: "Songs Recommendation System",
    description:
      "Built a sophisticated recommendation system using content-based filtering to provide personalized song suggestions based on user preferences and listening history.",
    image: "/images/projects/11.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/argalusmp/songs_recommendation_system?tab=readme-ov-file",
    previewUrl: "/",
    technologies: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    status: "Completed"
  },
  {
    id: 3,
    title: "Volunteer Recommendation System",
    description:
      "Developed an advanced recommendation system using TensorFlow to match volunteers with suitable opportunities based on their skills, preferences, and availability.",
    image: "/images/projects/22.jpg",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/Capstone-CH2-PS374/ML_Recommendation_system",
    previewUrl: "https://github.com/Capstone-CH2-PS374/ML_Recommendation_system",
    technologies: ["TensorFlow", "Python", "Machine Learning", "Recommendation Systems"],
    status: "Completed"
  },
  {
    id: 4,
    title: "Real-time Group Chat App",
    description:
      "Created a cross-platform mobile application enabling real-time group conversations with modern UI/UX design and seamless user experience.",
    image: "/images/projects/33.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/argalusmp/chat_app_flutter",
    previewUrl: "/",
    technologies: ["Flutter", "Dart", "Firebase", "Real-time Communication"],
    status: "Completed"
  },
  {
    id: 5,
    title: "Restaurant Management Web App",
    description: "Designed and developed a comprehensive restaurant profile and management system with modern React.js frontend and responsive design.",
    image: "/images/projects/44.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/argalusmp/restaurant-react",
    previewUrl: "/",
    technologies: ["React", "JavaScript", "CSS3", "Responsive Design"],
    status: "Completed"
  },
  {
    id: 6,
    title: "Laravel Todo Management System",
    description:
      "Built a full-featured task management application using Laravel framework with user authentication, CRUD operations, and modern web interface.",
    image: "/images/projects/55.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/argalusmp/Todolist-Basic-Laravel",
    previewUrl: "/",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    status: "Completed"
  },
  {
    id: 7,
    title: "Laptop Price Prediction Model",
    description:
      "Developed a machine learning model to predict laptop prices using Kaggle datasets, helping consumers make informed purchasing decisions.",
    image: "/images/projects/66.jpg",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/argalusmp/laptop_price_prediction_ML",
    previewUrl: "/",
    technologies: ["Python", "Pandas", "Scikit-learn", "Data Analysis"],
    status: "Completed"
  },
  {
    id: 8,
    title: "Indonesian Sign Language Recognition",
    description:
      "Created an AI-powered application that recognizes and interprets Indonesian sign language with high accuracy, bridging communication gaps for the deaf community.",
    image: "/images/projects/sign_languages.jpg",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/argalusmp/gestura_app",
    previewUrl: "/",
    technologies: ["Computer Vision", "Gesture Recognition", "Python", "Machine Learning"],
    status: "Completed"
  },
  {
    id: 9,
    title: "IoT Waste Management System",
    description:
      "Designed an IoT-based waste monitoring and management system to help organize and track waste information efficiently.",
    image: "/images/projects/trashcker.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/argalusmp/trashcker_IoT",
    previewUrl: "/",
    technologies: ["IoT", "Web Development", "Arduino", "PHP"],
    status: "Completed"
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section ref={ref} id="projects" className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gradient">Featured</span>{" "}
          <span className="text-text-primary">Projects</span>
        </h2>
        <p className="text-text-tertiary text-lg max-w-2xl mx-auto">
          A showcase of my recent work spanning machine learning, web development, and innovative solutions.
        </p>
      </motion.div>

      {/* Filter Tags */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center items-center gap-3 mb-12"
      >
        {["All", "Machine Learning", "Web", "Mobile"].map((tagName, index) => (
          <ProjectTag
            key={tagName}
            onClick={handleTagChange}
            name={tagName}
            isSelected={tag === tagName}
          />
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: index * 0.1 }}
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

      {/* Portfolio Presentation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="card max-w-4xl mx-auto"
      >
        <h3 className="text-2xl font-bold text-text-primary mb-4">
          <span className="text-gradient">Portfolio</span> Presentation
        </h3>
        <p className="text-text-tertiary mb-6">
          Explore my comprehensive portfolio presentation showcasing all projects and achievements.
        </p>
        
        <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-dark-lg">
          <iframe
            loading="lazy"
            className="absolute inset-0 w-full h-full"
            src="https://www.canva.com/design/DAGiPyJtZxA/6ZbqaJsbauNKVctmgPuoEQ/view?embed"
            allowFullScreen
            allow="fullscreen"
          />
        </div>
        
        <motion.a
          href="https://www.canva.com/design/DAGiPyJtZxA/6ZbqaJsbauNKVctmgPuoEQ/view?utm_content=DAGiPyJtZxA&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-accent-primary hover:text-accent-secondary transition-colors duration-300 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="font-medium">View Full Portfolio Presentation</span>
          <ArrowTopRightOnSquareIcon className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
