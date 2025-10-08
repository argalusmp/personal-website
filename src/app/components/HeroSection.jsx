"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowDownIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -50]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-accent-secondary/10 rounded-full blur-3xl top-1/2 right-0"
          animate={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * 0.01,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center container-custom">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 text-center lg:text-left"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <span className="text-text-tertiary text-lg font-medium">
              Hello, I&apos;m
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-text-primary">Vidi</span>{" "}
            <span className="text-gradient">Marpaung</span>
          </motion.h1>

          {/* Type Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8"
          >
            <TypeAnimation
              sequence={[
                "Data Scientist",
                2000,
                "Machine Learning Engineer",
                2000,
                "Full-Stack Developer",
                2000,
                "AI Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gradient"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-text-tertiary text-lg lg:text-xl mb-8 max-w-2xl leading-relaxed"
          >
            Fresh graduate in Informatics Engineering with expertise in data science, 
            machine learning, and full-stack development. Passionate about creating 
            intelligent solutions that bridge the gap between data and business value.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link href="/#contact" className="btn-primary group">
              <span className="flex items-center gap-2">
                Get In Touch
                <ArrowTopRightOnSquareIcon className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
            </Link>
            
            <Link href="/#projects" className="btn-secondary group">
              <span className="flex items-center gap-2">
                View My Work
                <ArrowDownIcon className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-12 grid grid-cols-3 gap-6 text-center lg:text-left"
          >
            <div>
              <div className="text-2xl font-bold text-gradient">3+</div>
              <div className="text-text-tertiary text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient">20+</div>
              <div className="text-text-tertiary text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gradient">5+</div>
              <div className="text-text-tertiary text-sm">Technologies</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 scale-110 animate-pulse-slow"></div>
            
            {/* Image Container */}
            <motion.div
              style={{ y }}
              className="relative w-80 h-80 lg:w-96 lg:h-96"
            >
              <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-spin" style={{ animationDuration: "20s" }}></div>
              <div className="absolute inset-2 bg-dark-primary rounded-full"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent-primary/30 shadow-glow-lg">
                <Image
                  src="/images/main-profil.png"
                  alt="Vidi Marpaung"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-accent-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent-primary/30"
              >
                <span className="text-2xl">🧠</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent-secondary/30"
              >
                <span className="text-2xl">💻</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-text-tertiary"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDownIcon className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
