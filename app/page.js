import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-serif mt-16 sm:mt-28">
      <h1 className="text-3xl sm:text-4xl font-bold font-sans">Hi, I&apos;m Elyas Belkhir</h1>
      <h2 className="text-xl sm:text-2xl mt-2 font-sans">Developer and Lifelong Student</h2>
      <p className="mt-4 text-base sm:text-lg font-normal font-sans leading-relaxed">
      I&apos;m currently pursuing a degree in Computer Science at The University of Texas at Dallas. I&apos;m driven by a love for building cool products and solving unique problems.   
      </p>
      <p className="mt-4 text-base sm:text-lg font-normal font-sans leading-relaxed">
        Some of my hobbies include fashion, working out, playing volleyball, and cars.
      </p>
      <p className="mt-4 text-base sm:text-lg font-normal font-sans leading-relaxed">
        I&apos;m always open to new opportunities, so feel free to connect with me!
      </p>

      <div className="mt-6 sm:mt-8 flex space-x-4">
        <a href="https://www.linkedin.com/in/elyasbelkhir/" 
           target="_blank" 
           rel="noopener noreferrer"
           className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
          <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
        <a href="https://github.com/elyasbelkhir" 
           target="_blank" 
           rel="noopener noreferrer"
           className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
          <FaGithub className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
        <a href="mailto:elyasbelkhir@gmail.com" 
           target="_blank" 
           rel="noopener noreferrer"
           className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
          <FaEnvelope className="h-5 w-5 sm:h-6 sm:w-6" />
        </a>
      </div>
    </div>
  );
}
