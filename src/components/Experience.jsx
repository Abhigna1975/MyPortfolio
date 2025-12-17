import React, { useState } from "react";
import "../styles/Experience.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import clickMeGif from "../assets/clickme.gif";

const Experiences = [
  {
    title: "UI Engineer",
    company: "Starteryou Inc., New York, NY (Remote)",
    date: "Feb 2025 – Present",
    points: [
      "Develop responsive mobile and web application interfaces using React.js, React Native, JavaScript, HTML5, and CSS3",
      "Build and maintain reusable UI component library implementing design system specifications with focus on accessibility and performance",
      "Translate Figma mockups into production-ready code, ensuring pixel-perfect implementation across devices and browsers",
      "Integrate RESTful APIs and implement state management for seamless data flow and user interactions",
      "Collaborate with backend engineers and product team in Agile environment to deliver scalable front-end solutions"
    ],
  },
  {
    title: "Classroom Teaching Assistant",
    company: "Sacred Heart University, Fairfield, CT",
    date: "May 2024 - July 2024",
    points: [
      "Assisted instructors with course planning and student engagement",
      "Led tutoring sessions and explained technical concepts clearly",
      "Provided constructive and helpful feedback to support student learning",
      "Encouraged collaboration and built a strong learning environment",
    ],
  },
  
];

const Experience = () => {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleExpand = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="experience-section">
      {/* Rotated Title */}
      <h1 className="experience-title-large">My</h1>
      <h2 className="experience-title-small">Experience</h2>
      
      <div className="experience-content">
        {Experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div className="title-with-gif">
                <h3 className="title-text">{exp.title}</h3>
                {!expandedIndexes.includes(index) && (
                  <img 
                    src={clickMeGif} 
                    alt="Click me" 
                    className="click-me-gif"
                    onClick={() => toggleExpand(index)}
                  />
                )}
              </div>
              <p>{exp.date}</p>
            </div>
            
            {expandedIndexes.includes(index) && (
              <div className="experience-details">
                <h4>{exp.company}</h4>
                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <button 
                  className="HideSummary-experience-btn"
                  onClick={() => toggleExpand(index)}
                >
                  Hide Summary
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;