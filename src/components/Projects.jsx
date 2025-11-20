import React, { useState } from 'react';
import clickmeGif from '../assets/clickme.gif';
import '../styles/Projects.css';

// Images from public folder - use direct paths
const proj1 = "/prj1.png";
const proj2 = "/prj2.png";
const proj3 = "/prj3.png";
const proj4 = "/prj4.png";


const projects = [
  {
    img: proj4,
    name: "Portfolio Website for Fullstack Developer",
    liveUrl: "https://nikshepkulli.com/",
    codeUrl: "https://github.com/nikshepkulli/My-Portfolio.git",
    summary: [
      "Modern Glassmorphism Design with Gradient Aesthetics",
      "Designed and developed responsive portfolio site using React",
      "Implemented glassmorphism UI with frosted-glass card effects",
      "Created vibrant gradient backgrounds (coral pink to sky blue)",
      "Built interactive components with smooth hover animations",
      "Integrated professional sections: position, slogan, contact, resume",
      "Optimized for all devices with mobile-first responsive design",
      "Applied modern CSS3 techniques for visual appeal and performance"
    ]
  },
  {
    img: proj1,
    name: "E-Commerce Website",
    liveUrl: "https://popnwrap.vercel.app/",
    codeUrl: "https://github.com/Abhigna1975/Popnwrap.git",
    summary: [
      "Built a full-stack e-commerce platform with user authentication",
      "Implemented shopping cart functionality with local storage",
      "Integrated payment gateway using Stripe API",
      "Created admin dashboard for product management",
      "Responsive design works on all devices",
      "Used React, Node.js, MongoDB for development"
    ]
  },
  {
    img: proj2,
    name: "Art Gallery Management System",
    liveUrl: "https://abhigna1975.github.io/ART-GALLERY-MANAGEMENT-SYSTEM-PROJECT/index.html",
    codeUrl: "https://github.com/Abhigna1975/ART-GALLERY-MANAGEMENT-SYSTEM-PROJECT",
    summary: [
      "Developed a UI for organizing and displaying gallery artworks",
      "Created a user signup and authentication system",
      "Built a visual catalog to showcase museum art collections",
      "Designed an intuitive interface for browsing artworks",
      "Implemented responsive design for cross-device accessibility"
    ]
  },
];


const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleProject = (index) => {
    setExpandedProjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="projects">
      {/* Rotated Title */}
      <div className="projects-title-container">
        <div className="title-my">My</div>
        <div className="title-projects">Projects</div>
      </div>
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-block">
            <div className="project-image-container">
              <img 
                src={project.img} 
                alt={project.name}
                className="project-img"
              />
            </div>
            
            <div className="project-info">
              <div className="project-header-info">
                <h3 className="project-name">{project.name}</h3>
                {!expandedProjects[index] && (
                  <img
                    src={clickmeGif}
                    alt="Click to expand"
                    className="click-me-gif"
                    onClick={() => toggleProject(index)}
                  />
                )}
              </div>
              
              <div className="project-buttons">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-btn live-btn"
                >
                  View Live
                </a>
                <a 
                  href={project.codeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-btn code-btn"
                >
                  View Code
                </a>
              </div>
              
              {expandedProjects[index] && (
                <div className="project-summary">
                  <ul className="summary-list">
                    {project.summary.map((point, pointIndex) => (
                      <li key={pointIndex} className="summary-point">
                        {point}
                      </li>
                    ))}
                  </ul>
                  <button 
                    className="hide-summary-btn"
                    onClick={() => toggleProject(index)}
                  >
                    Hide Summary
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;