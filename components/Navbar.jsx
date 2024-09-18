'use client'

import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-center items-center gap-4 lato-regular lg:text-xl">
        <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
        <li><a href="/experience" className="text-gray-400 hover:text-white transition-colors duration-300">Experience</a></li>
        <li><a href="mailto:belkhirelyas@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
        <li><a href="/Elyas_Belkhir_resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">Resume</a></li>
      </ul>

    </nav>
  );
};

export default Navbar;
