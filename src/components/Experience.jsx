import React, { useState } from "react";
import "../styles/Experience.css"; // Ensure path is correct
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import clickMeGif from "../assets/clickme.gif"; // Import your GIF

const Experiences = [
  {
    title: "UX Designer",
    company: "Starteryou Inc., New York, NY (Remote)",
    date: "07 Feb 2025 – Present",
    points: [
      "I am a UX Designer at StarterYou with a background in Computer Science & Information Technology, passionate about crafting user-centric digital experiences.",
      "I specialize in creating intuitive, visually appealing interfaces using tools like Figma, HTML, CSS, and JavaScript.",
      "At StarterYou, I collaborate with cross-functional teams to design solutions that simplify user journeys and enhance engagement.",
      "My approach combines design thinking, usability research, and attention to detail to deliver impactful, accessible products.",
    ],
  },
  {
    title: "Classroom Teaching Assistant",
    company: "Sacred Heart University, Fairfield, CT",
    date: "01 May 2024 - 30 Jun 2024",
    points: [
      "Assisted faculty in delivering course content and managing classroom activities for undergraduate students.",
      "Supported students with understanding complex technical concepts in Computer Science & IT subjects.",
      "Facilitated group discussions, hands-on labs, and one-on-one academic support sessions.",
      "Helped prepare teaching materials and set up classroom resources for interactive learning.",
      "Fostered a positive and inclusive learning environment that encouraged student engagement.",
      "Communicated regularly with faculty to align on lesson goals and student progress.",
    ],
  },
  {
    title: "Cloud Application Developer",
    company: "Smart Bridge, Hyderabad, India",
    date: "01 Sep 2022 - 30 Oct 2022",
    points: [
      "Developed web scraping techniques using Beautiful Soup.",
      "Performed data analysis and visualization using Python libraries.",
      "Uncovered competitor strategies and market dynamics.",
      "Predicted customer buying behavior using ML (85% accuracy).",
      "Empowered marketing strategy and business optimization.",
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
                  className="minimize-experience-btn"
                  onClick={() => toggleExpand(index)}
                >
                  Minimize
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