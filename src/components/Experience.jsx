import React, { useState } from "react";
import "../styles/Experience.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import clickMeGif from "../assets/clickme.gif";

const Experiences = [
 {
  title: "Lead UI/UX Designer",
  company: "Starteryou Inc",
  date: "Feb 2025 – Feb 2026",
  points: [
    "Led end-to-end UX design for mobile and web platform: user interviews, personas, journey maps, task flows, and high-fidelity Figma prototypes aligned with enterprise application standards.",
    "Facilitated design workshops and reviews; collaborated with product and engineering to translate UX designs into successful implementations.",
    "Built and maintained design system with reusable UI components ensuring brand consistency and WCAG accessibility compliance across all touchpoints."
  ],
},
  {
    title: "Design Analyst",
    company: "Nordstrom",
    date: "Mar 2023 – Dec 2024",
    points: [
      "Led end-to-end UX design for enterprise e-commerce platform (millions of users) from heuristic evaluations and usability testing through wireframing, prototyping, and final delivery.",
      "Created user personas, customer journey maps, task flows, and information architecture; applied data-driven insights to improve conversion rate by 12%.",
      "Maintained design system used by 20+ product teams; ensured visual consistency, scalability, and WCAG/ADA compliance across web and mobile in Agile/Scrum environment.",
      "Presented and justified design decisions to stakeholders; applied interaction and motion design principles to enhance UX across all platforms.",
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