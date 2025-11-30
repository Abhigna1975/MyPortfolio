import React, { useState } from "react";
import "../styles/Experience.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import clickMeGif from "../assets/clickme.gif";

const Experiences = [
  {
    title: "UI/UX Designer",
    company: "Starteryou Inc., New York, NY",
    date: "Feb 2025 – Present",
    points: [
      "Handle all design needs for the startup - mobile app interfaces, web design, social media graphics, flyers and brand assets",
      "Design user-centered mobile and web experiences using Figma and Canva",
      "Maintain brand consistency across digital products and marketing materials",
      "Conduct usability testing and iterate based on user feedback to improve product experience",
      "Collaborate with cross-functional teams including developers and marketing to deliver cohesive solutions"
    ],
  },
  {
    title: "Classroom Teaching Assistant",
    company: "Sacred Heart University, Fairfield, CT",
    date: "Sep 2023 - Dec 2024",
    points: [
      "Assisted instructors with course planning and student engagement",
      "Led tutoring sessions and explained technical concepts clearly",
      "Provided constructive and helpful feedback to support student learning",
      "Encouraged collaboration and built a strong learning environment",
    ],
  },
  {
    title: "Web Designer",
    company: "Smart Bridge, India",
    date: "Sep 2020 - Aug 2023",
    points: [
      "Designed and developed interactive websites using HTML, CSS, and JavaScript",
      "Created responsive web layouts and user interfaces for various client projects",
      "Collaborated with team members to deliver functional and visually appealing websites",
      "Implemented modern design principles and ensured cross-browser compatibility",
      "Focused on user experience and interface optimization"
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