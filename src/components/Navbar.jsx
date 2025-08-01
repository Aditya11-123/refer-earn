import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-4 bg-[#0d0d1d] bg-opacity-90 backdrop-blur-sm border-b border-cyan-400 shadow-[0_0_10px_cyan]">
      {/* Logo */}
      <div className="text-2xl font-bold text-cyan-400 tracking-wide drop-shadow-[0_0_10px_cyan]">
        ◎ Refer&Earn
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-sm text-cyan-200">
        <li className="hover:text-pink-500 transition cursor-pointer">Home</li>
        <li className="hover:text-pink-500 transition cursor-pointer">How it works</li>
        <li className="hover:text-pink-500 transition cursor-pointer">FAQs</li>
        <li className="hover:text-pink-500 transition cursor-pointer">Contact</li>
      </ul>

      {/* CTA Button */}
      <button className="ml-6 bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-full text-white text-sm font-semibold shadow-[0_0_15px_pink] transition">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
