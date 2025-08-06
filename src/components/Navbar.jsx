import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-4 bg-[#0d0d1d] bg-opacity-90 backdrop-blur-sm border-b border-cyan-400 shadow-[0_0_10px_cyan]"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="text-2xl font-bold text-cyan-400 tracking-wide drop-shadow-[0_0_10px_cyan]"
      >
        ◎ Refer&Earn
      </motion.div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-sm text-cyan-200">
        {["Home", "How it works", "FAQs", "Contact"].map((item, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1, color: "#ec4899" }} // pink-500
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="cursor-pointer transition"
          >
            {item}
          </motion.li>
        ))}
      </ul>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px #ec4899" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="ml-6 bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-full text-white text-sm font-semibold shadow-[0_0_15px_pink] transition"
      >
        Get Started
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
