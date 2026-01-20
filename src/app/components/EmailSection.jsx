"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  PaperAirplaneIcon,
  DocumentArrowDownIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    
    try {
      const JSONdata = JSON.stringify(data);
      const endpoint = "/api/send";

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      };

      const response = await fetch(endpoint, options);
      
      if (response.status === 200) {
        setEmailSubmitted(true);
        e.target.reset();
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: "Email",
      value: "septriargalus@gmail.com",
      href: "mailto:septriargalus@gmail.com"
    },
    {
      icon: PhoneIcon,
      label: "Phone",
      value: "+62 812-7973-3385",
      href: "tel:+6281279733385"
    },
    {
      icon: MapPinIcon,
      label: "Location",
      value: "Depok, West Java, Indonesia",
      href: null
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/argalusmp",
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/vidi-marpaung/",
      color: "hover:text-blue-400"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/vidiargalus/",
      color: "hover:text-pink-400"
    }
  ];

  return (
    <section ref={ref} id="contact" className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gradient">Let&apos;s</span>{" "}
          <span className="text-text-primary">Connect</span>
        </h2>
        <p className="text-text-tertiary text-lg max-w-2xl mx-auto">
          I&apos;m always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 text-center"
        >
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Get In Touch
            </h3>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              I&apos;m available for freelance opportunities, full-time positions, or consulting work. 
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I&apos;d love to hear from you. Let&apos;s create something amazing together!
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 card text-left"
                >
                  <div className="p-3 bg-gradient-primary rounded-lg flex-shrink-0">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-text-tertiary text-sm mb-1">{info.label}</p>
                    {info.href ? (
                      <Link 
                        href={info.href}
                        className="text-text-primary hover:text-gradient transition-colors duration-300"
                      >
                        {info.value}
                      </Link>
                    ) : (
                      <p className="text-text-primary">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">
              Follow Me
            </h4>
            <div className="flex gap-4 justify-center">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-dark-card border border-border-primary rounded-lg text-text-secondary ${social.color} hover:border-accent-primary transition-all duration-300`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  {social.name === "GitHub" && (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}
                  {social.name === "LinkedIn" && (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                  {social.name === "Instagram" && (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Download CV Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-8"
          >
            <a 
              href="/CV_VIDI SEPTRI ARGALUS MP.pdf" 
              download="CV_Vidi_Septri_Argalus_MP.pdf"
              className="inline-flex items-center gap-2 btn-primary group"
            >
              <DocumentArrowDownIcon className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              <span>Download Full Resume</span>
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default EmailSection;
