"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const CTASection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section ref={containerRef} className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0"></div>
      
      <motion.div 
        style={{ y, opacity }}
        className="container-custom relative z-10 text-center"
      >
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12 flex flex-col items-center"
        >
            {/* Avatar Image */}
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="relative w-24 h-24 mb-8 rounded-full overflow-hidden border-4 border-accent-primary/50 shadow-glow"
            >
               <Image
                 src="/images/anjayy.png"
                 alt="Let's Connect"
                 fill
                 className="object-cover"
               />
            </motion.div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
            Let&apos;s build something <br />
            <span className="text-gradient">impactful</span> together.
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Interested in SAP, software, data, or applied AI? Let&apos;s connect and explore how we can solve meaningful problems together.
            </p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            <a 
            href="mailto:septriargalus@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent-primary text-white font-semibold rounded-full text-lg hover:bg-accent-secondary hover:scale-105 transition-all duration-300 shadow-glow"
            >
            <EnvelopeIcon className="w-6 h-6" />
            <span>Start a Conversation</span>
            </a>
            
            <p className="mt-8 text-text-tertiary text-sm">
            Or find me on <a href="https://www.linkedin.com/in/vidi-septri-argalus-mp/" className="text-accent-primary hover:underline">LinkedIn</a> & <a href="https://github.com/argalusmp" className="text-accent-primary hover:underline">GitHub</a>
            </p>
        </motion.div>
      </motion.div>

        {/* Footer Copyright */}
        <div className="absolute bottom-8 left-0 w-full text-center text-text-tertiary text-xs">
            © {new Date().getFullYear()} Vidi Septri Argalus MP. All rights reserved.
        </div>
    </section>
  );
};

export default CTASection;
