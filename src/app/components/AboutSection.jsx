"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-rows-2 grid-flow-col ">
        <li>Python</li>
        <li>Tensorflow</li>
        <li>SQL</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Laravel</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Politeknik Negeri Jakarta</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li> Bangkit Academy by Google, Goto & Traveloka (Cohort in 2021) </li>
        <li> Data Scientist Intern ( Braincore ) | Jul 2024 - Oct 2024</li>
        <li> Developer Intern ( Berlian Sistem Informasi ) | Nov 2024 - Feb 2024</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li> Test </li>
        <li> Test </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about"  >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-me-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            A passionate Informatics Engineering student with knowledge of information technology and skills for development. Have practical experience in implementing theoretical concepts in lecture projects and personal projects. Learn programming languages such as Python with Tensorflow to build machine learning or manage data with programming, also I learn PHP and JavaScript, along with their frameworks and libraries such as jQuery, Laravel and react and have knowledge of databases in web development. Able to work independently or in a team and ready to learn new things in a dynamic work environment. Have a high interest in the latest technologies such as machine learning and web/mobile application development. Ready to contribute and learn from an internship experience in the IT field.
          </p>
          <div className="flex flex-row justify-start mt-5">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
             
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;