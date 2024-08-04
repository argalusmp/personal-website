"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Songs Recommendation",
    description:
      "Build Recommendation system model with content-based filtering for user's based preferences",
    image: "/images/projects/11.png",
    tag: ["All", "Machine Learning"],
    gitUrl:
      "https://github.com/argalusmp/songs_recommendation_system?tab=readme-ov-file",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Recommendation System Volunters",
    description:
      "Build Recommendation system model to create recommendations for users based on each user's preferences with Tensorflow",
    image: "/images/projects/22.jpg",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/Capstone-CH2-PS374/ML_Recommendation_system",
    previewUrl:
      "https://github.com/Capstone-CH2-PS374/ML_Recommendation_system",
  },
  {
    id: 3,
    title: "Group chat app",
    description:
      "Create an application that can carry out simple conversations for all users in one chat bubble with flutter",
    image: "/images/projects/33.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/argalusmp/chat_app_flutter",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Restaurant React",
    description: "Making profile UI restraurant web with Reactjs",
    image: "/images/projects/44.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/argalusmp/restaurant-react",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Laravel Todo List",
    description: "Todo List app web based that build in php framework which is Laravel",
    image: "/images/projects/55.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/argalusmp/Todolist-Basic-Laravel",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Laptop Price Prediction",
    description: "This project focuses on predicting laptop prices using datasets available on Kaggle. Laptop price predictions are important to help consumers make purchasing decisions.",
    image: "/images/projects/66.jpg",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/argalusmp/laptop_price_prediction_ML",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Indonesian Sign Languages",
    description: "This application is expected to be able to recognize and understand sign language with high accuracy, so that it can help bridge communication between deaf and non-disabled communities",
    image: "/images/projects/sign_languages.jpg",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/argalusmp/gestura_app",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "IoT Waste Checking",
    description: "This application is expected to be able to checking and organized waste or trash information, so can help us to how organized trash better",
    image: "/images/projects/trashcker.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/argalusmp/trashcker_IoT",
    previewUrl: "/",
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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Machine Learning"
          isSelected={tag === "Machine Learning"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
