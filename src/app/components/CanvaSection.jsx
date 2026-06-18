"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const CanvaSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-dark-secondary/50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 w-72 h-72 bg-accent-primary/10 rounded-full blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-accent-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-10">
            <span className="text-accent-primary font-medium tracking-widest uppercase text-sm">Presentation</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Canva <span className="text-gradient">Smart Embed</span>
            </h2>
            <p className="text-text-tertiary mt-4 max-w-2xl mx-auto">
              A compact visual deck with supporting highlights, placed here so it appears after projects and before the technical summary.
            </p>
          </div>

          <div className="bg-dark-card border border-border-primary/50 rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative w-full aspect-[16/9] md:aspect-[16/8] bg-black">
              <iframe
                loading="lazy"
                className="absolute inset-0 w-full h-full"
                src="https://www.canva.com/design/DAGiPyJtZxA/6ZbqaJsbauNKVctmgPuoEQ/view?embed"
                allowFullScreen
                allow="fullscreen"
                title="Canva presentation embed"
              />
            </div>

            <div className="p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-border-primary/40">
              <div>
                <h3 className="text-xl font-semibold text-text-primary">Open the full presentation</h3>
                <p className="text-text-tertiary text-sm mt-1">Includes the broader portfolio narrative and supporting visuals.</p>
              </div>

              <a
                href="https://www.canva.com/design/DAGiPyJtZxA/6ZbqaJsbauNKVctmgPuoEQ/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-accent-primary/10 text-accent-primary hover:bg-accent-primary hover:text-white rounded-lg transition-all duration-300"
              >
                <span className="font-medium">Open Presentation</span>
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CanvaSection;