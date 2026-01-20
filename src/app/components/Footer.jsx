"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeartIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border-primary/50 bg-dark-secondary/30 backdrop-blur-sm">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo_nobg.png"
                alt="Vidi Septri Argalus MP Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold text-text-primary">Vidi Septri Argalus MP</h3>
                <p className="text-text-tertiary text-sm">IT Developer & Data Scientist</p>
              </div>
            </div>
            <p className="text-text-secondary max-w-md leading-relaxed">
              Solution-oriented IT Developer and Data Scientist driving efficiency through automation 
              and building intelligent RAG/LLM solutions. Let&apos;s create measurable business impact together.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-tertiary hover:text-gradient transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-text-primary mb-4">Contact</h4>
            <div className="space-y-2 text-text-tertiary">
              <p>📍 Depok, West Java, Indonesia</p>
              <p>📧 septriargalus@gmail.com</p>
              <p>📱 +62 812-7973-3385</p>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://github.com/argalusmp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-tertiary hover:text-white transition-colors duration-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/vidi-marpaung/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-tertiary hover:text-blue-400 transition-colors duration-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/vidiargalus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-tertiary hover:text-pink-400 transition-colors duration-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.529l1.529-1.297c.596.596 1.297.895 2.073.895 1.529 0 2.774-1.245 2.774-2.774s-1.245-2.774-2.774-2.774c-.776 0-1.477.299-2.073.895l-1.529-1.297c.757-.933 1.908-1.529 3.205-1.529 2.448 0 4.448 1.992 4.448 4.448s-2 4.448-4.448 4.448z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border-primary/30 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-text-tertiary text-sm flex items-center gap-1"
          >
            © 2025 Vidi Septri Argalus MP. Made with <HeartIcon className="h-4 w-4 text-red-500" /> and passion.
          </motion.p>
          
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-dark-card border border-border-primary rounded-lg text-text-secondary hover:text-text-primary hover:border-accent-primary transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-sm">Back to top</span>
            <ArrowUpIcon className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;