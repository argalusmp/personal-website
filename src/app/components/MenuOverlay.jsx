import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const MenuOverlay = ({ links, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="py-6"
    >
      <ul className="flex flex-col space-y-2">
        {links.map((link, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <NavLink 
              href={link.path} 
              title={link.title} 
              onClick={onClose}
              isActive={false}
            />
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MenuOverlay;