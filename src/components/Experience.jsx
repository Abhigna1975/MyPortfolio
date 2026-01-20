import React, { useState } from "react";
import "../styles/Experience.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import clickMeGif from "../assets/clickme.gif";

const Experiences = [
 {
  title: "Product Designer & UI Engineer",
  company: "Starteryou Inc., New York, NY (Remote)",
  date: "Feb 2025 – Present",
  points: [
    "Lead end-to-end product design and development for mobile and web applications, from concept and prototyping through production implementation using React.js, React Native, and Figma",
    "Design and build accessible, performance-optimized UI component library and design system, bridging design specifications with scalable front-end architecture",
    "Own the design-to-code workflow: translate user needs into interactive prototypes, validate through testing, then implement pixel-perfect, responsive interfaces across platforms",
    "Leverage AI tools to accelerate research synthesis, design iteration, and code generation while maintaining high standards for craft and user experience",
    "Partner with cross-functional teams in Agile environment to shape product strategy, ensure technical feasibility, and deliver cohesive experiences balancing user needs with business goals"
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