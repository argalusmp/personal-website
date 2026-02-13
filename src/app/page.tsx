"use client";
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import JourneySection from "./components/JourneySection";
import ProjectShowcase from "./components/ProjectShowcase";
import SkillVisualization from "./components/SkillVisualization";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Journey Section (About & Experience) */}
      <section id="about" className="relative">
        <div id="experience" className="absolute top-0 w-full h-full pointer-events-none" style={{ top: '20vh' }}></div>
        <JourneySection />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectShowcase />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <SkillVisualization />
      </section>

      {/* Contact / Final CTA Section */}
      <section id="contact">
        <CTASection />
      </section>
    </main>
  );
}
