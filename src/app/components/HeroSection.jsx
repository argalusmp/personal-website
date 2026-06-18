"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
    >
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 h-full">
        {/* Text Content */}
        <motion.div style={{ opacity, scale, y }} className="text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-start gap-6"
          >
            {/* Intro Text */}
            <motion.p
              custom={0}
              variants={textVariants}
              className="text-text-secondary text-lg md:text-xl font-medium tracking-wide uppercase"
            >
              Hi, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              custom={1}
              variants={textVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            >
              <span className="text-text-primary">Vidi Septri</span>
              <br />
              <div className="relative inline-block">
                <span className="text-gradient bg-clip-text text-transparent relative z-10">
                  Argalus MP
                </span>
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8, ease: "circOut" }}
                  className="absolute bottom-2 left-0 w-full h-4 bg-accent-primary/20 -z-0 origin-left"
                ></motion.div>
              </div>
            </motion.h1>

            {/* Role/Tagline */}
            <motion.div custom={2} variants={textVariants} className="max-w-2xl">
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
                I build <span className="text-accent-primary font-semibold">practical systems</span> across data, backend, and AI to solve real business problems.
              </p>
            </motion.div>

            {/* Connect Lines / Decoration (Mobile hidden, Desktop visible) */}
            <motion.div
              custom={3}
              variants={textVariants}
              className="hidden lg:block w-24 h-px bg-gradient-to-r from-accent-primary/50 to-transparent mt-8"
            ></motion.div>

            <motion.p
              custom={4}
              variants={textVariants}
              className="text-sm md:text-base text-text-tertiary max-w-xl"
            >
              Recent Informatics Engineering graduate with experience in data analysis, ERP automation, backend integration, and RAG chatbot delivery.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          style={{ opacity, scale, y: useTransform(scrollYProgress, [0, 0.5], [0, -50]) }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[600px]"
          >
            {/* Image Container with organic shape or mask */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-[2rem] rotate-6 blur-2xl"></div>
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/baju hitam.png"
                alt="Vidi Septri Argalus MP"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-dark-card/90 backdrop-blur-md border border-accent-primary/30 p-4 rounded-xl shadow-glow hidden md:block z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-text-primary">Open to Data, AI & Full-Stack Roles</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-tertiary flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest opacity-70">Scroll to Explore</span>
        <ArrowDownIcon className="h-5 w-5" />
      </motion.div>

      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-[100px]"></div>
      </div>
    </section>
  );
};

export default HeroSection;
