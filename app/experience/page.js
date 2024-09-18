import React from 'react'
import { FaGithub } from 'react-icons/fa'


const ExperienceItem = ({ title, company, date, description }) => (
  <div className="mb-8">
    <h3 className="text-xl font-bold font-sans">{title}</h3>
    <p className="text-lg font-semibold text-gray-200 font-sans">{company}</p>
    <p className="text-sm text-gray-400 mb-2 font-sans">{date}</p>
    <p className="text-gray-400">{description}</p>
  </div>
)

const ProjectItem = ({ title, description, githubLink }) => (
    <div className="mb-8 flex justify-between items-start">
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-400">{description}</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className=" hover:text-gray-500 justify-center">
        <u>GitHub</u>
      </a>
      </div>
    </div>
  )

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <ExperienceItem 
        title="Software Developer Intern"
        company="Paycom"
        date="May 2024 - Aug 2024"
        description="Developed merge request approval system and full-stack dashboard for internal code review tool using machine learning models"
      />
      <ExperienceItem 
        title="ML Research Assistant"
        company="UTD Network Intrusion Detection Lab"
        date="Jul 2024 - Present"
        description="Assisting in building machine learning models to detect malicious traffic in real-time"
      />
      <ExperienceItem 
        title="API Developer"
        company="Nebula Labs"
        date="Sep 2023 - May 2024"
        description="Built a comprehensive API for university data systems using Golang and MongoDB"
      />
      <ExperienceItem 
        title="Robotics Instructor"
        company="iCode"
        date="Sep 2023 - May 2024"
        description="Taught robotics and coding to young students"
      />
      {/* Add more ExperienceItem components as needed */}

      <h2 className="text-3xl font-bold mb-8 mt-16">Projects</h2>
      <ProjectItem 
        title="Personal Portfolio"
        description="A responsive portfolio website built with Next.js and Tailwind CSS"
        githubLink="https://github.com/yourusername/portfolio"
      />
      <ProjectItem 
        title="AI Crime Detection System"
        description="A research project comparing LSTMs vs. CNNs for crime detection in videos"
        githubLink="https://github.com/ElyasBelkhir/CCTV-CS4375"
      />

        <ProjectItem 
        title="VocalVault"
        description="A two-factor authentication system using voice biometrics and artificial intelligence"
        githubLink="https://github.com/ElyasBelkhir/VocalVault"
      />

        <ProjectItem 
        title="Video Game Library"
        description="A full-stack video game library website built with HTML/CSS, JavaScript, and Django"
        githubLink="https://github.com/ElyasBelkhir/VocalVault"
      />
      
      {/* Add more ProjectItem components as needed */}
    </div>
  )
}

export default Experience