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
    name: "E-Commerce Website",
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
    name: "Weather Application",
    summary: [
      "Real-time weather data using OpenWeather API",
      "Location-based weather forecasts and current conditions",
      "Interactive weather maps and visual representations",
      "5-day weather forecast with hourly breakdowns",
      "Responsive design with beautiful weather animations",
      "Built with React and integrated third-party APIs"
    ]
  },
  {
    img: proj3,
    name: "Task Management System",
    summary: [
      "Drag and drop functionality for task organization",
      "Multiple project boards with different categories",
      "Real-time collaboration features for team members",
      "Progress tracking with visual charts and analytics",
      "Deadline reminders and notification system",
      "Built using React with localStorage for data persistence"
    ]
  },
  {
    img: proj4,
    name: "Portfolio Website",
    summary: [
      "Modern responsive design showcasing projects and skills",
      "Interactive animations and smooth scrolling effects",
      "Contact form with email integration functionality",
      "Optimized for SEO and fast loading performance",
      "Mobile-first design approach for all screen sizes",
      "Built with React and deployed on Vercel platform"
    ]
  },
  {
    img: proj5,
    name: "Blog Platform",
    summary: [
      "Content management system with rich text editor",
      "User authentication and authorization system",
      "Comment system with moderation capabilities",
      "Search functionality with advanced filtering options",
      "Admin panel for content and user management",
      "Built with React, Express.js, and MySQL database"
    ]
  },
  {
    img: proj6,
    name: "Social Media Dashboard",
    summary: [
      "Real-time data visualization from multiple social platforms",
      "Analytics tracking with interactive charts and graphs",
      "Automated posting scheduler for multiple accounts",
      "Engagement metrics and performance insights",
      "Responsive dashboard with customizable widgets",
      "Integrated with Firebase for real-time data sync"
    ]
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