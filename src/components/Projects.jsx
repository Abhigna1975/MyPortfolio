import React, { useState } from 'react';
import clickmeGif from '../assets/clickme.gif';
import '../styles/Projects.css';

// Images from public folder - use direct paths
const proj1 = "/prj1.png";
const proj2 = "/prj2.png";
const proj3 = "/prj3.png";
const proj4 = "/prj4.png";
const proj5 = "/prj5.png";
const proj6 = "/prj6.png";

const projects = [
  {
    img: proj1,
    title: "E-Commerce Website",
    tech: "React, Node.js, MongoDB",
    description: "Full-stack e-commerce platform with user authentication, shopping cart, and payment integration.",
    link: "https://github.com/yourusername/ecommerce-project",
    demo: "https://your-ecommerce-demo.com"
  },
  {
    img: proj2,
    title: "Weather App",
    tech: "React, API Integration",
    description: "Weather application with real-time data, location-based forecasts, and responsive design.",
    link: "https://github.com/yourusername/weather-app",
    demo: "https://your-weather-demo.com"
  },
  {
    img: proj3,
    title: "Task Manager",
    tech: "React, Local Storage",
    description: "Productivity app for managing tasks with drag-and-drop functionality and local data persistence.",
    link: "https://github.com/yourusername/task-manager",
    demo: "https://your-taskmanager-demo.com"
  },
  {
    img: proj4,
    title: "Portfolio Website",
    tech: "React, CSS3, JavaScript",
    description: "Personal portfolio website showcasing projects, skills, and experience with modern design.",
    link: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio-demo.com"
  },
  {
    img: proj5,
    title: "Blog Platform",
    tech: "React, Express, MySQL",
    description: "Full-featured blog platform with admin panel, user comments, and content management system.",
    link: "https://github.com/yourusername/blog-platform",
    demo: "https://your-blog-demo.com"
  },
  {
    img: proj6,
    title: "Social Media App",
    tech: "React, Firebase, Auth",
    description: "Social networking application with real-time messaging, post sharing, and user profiles.",
    link: "https://github.com/yourusername/social-app",
    demo: "https://your-social-demo.com"
  }
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
            <div className="project-header">
              <img 
                src={project.img} 
                alt={project.title}
                className="project-img"
              />
              <img
                src={clickmeGif}
                alt="Click to expand"
                className="click-me-gif"
                onClick={() => toggleProject(index)}
              />
            </div>
            
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-tech">{project.tech}</p>
              
              {expandedProjects[index] && (
                <div className="project-details">
                  <p className="project-description">{project.description}</p>
                  <div className="project-links">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      GitHub
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link demo-link"
                    >
                      Live Demo
                    </a>
                  </div>
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