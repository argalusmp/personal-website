"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.4]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-28 md:pt-32"
    >
      <div className="container-custom relative z-10 grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.div style={{ opacity, y }} className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent-primary"
          >
            <span className="h-px w-9 bg-accent-primary" />
            Portfolio · Depok, Indonesia
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Vidi Septri
            <br />
            <span className="text-accent-primary">Argalus MP.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-xl"
          >
            <p className="text-lg leading-relaxed text-text-secondary md:text-xl">
              SAP ABAP Consultant Trainee at Crowe Indonesia, with a background
              in software development, data, and applied AI.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-text-tertiary">
              I bring a practical, problem-solving mindset to technology—from
              building integrations and automations to exploring useful AI
              applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn-primary">
              Explore my work
              <ArrowDownIcon className="h-4 w-4 -rotate-90" />
            </a>
            <a
              href="https://www.linkedin.com/in/vidi-septri-argalus-mp/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              LinkedIn
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
          </motion.div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-border-primary pt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-text-tertiary">
            <span>Software</span>
            <span>Data</span>
            <span>AI & automation</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="relative order-1 mx-auto w-full max-w-[430px] lg:order-2 lg:ml-auto"
        >
          <div className="absolute -right-3 -top-3 h-full w-full border border-accent-secondary/50 md:-right-5 md:-top-5" />
          <div className="relative aspect-[4/5] overflow-hidden bg-dark-tertiary">
            <Image
              src="/images/baju hitam.png"
              alt="Portrait of Vidi Septri Argalus MP"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 430px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-3 bg-accent-secondary px-5 py-4 text-white shadow-dark-lg md:-left-8">
            <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-white/75">
              Currently
            </span>
            <span className="mt-1 block text-sm font-semibold">
              Crowe Indonesia
            </span>
          </div>
          <span className="absolute -right-3 top-5 font-mono text-xs uppercase tracking-[0.18em] text-text-tertiary [writing-mode:vertical-rl]">
            Building with purpose
          </span>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-text-tertiary sm:flex">
        <span className="h-px w-8 bg-border-secondary" />
        Scroll to explore
        <span className="h-px w-8 bg-border-secondary" />
      </div>
      <span className="pointer-events-none absolute -bottom-28 -left-16 select-none font-editorial text-[17rem] leading-none text-accent-primary/[0.035]">
        V
      </span>
    </section>
  );
};

export default HeroSection;
