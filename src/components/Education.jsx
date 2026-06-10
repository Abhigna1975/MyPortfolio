// src/components/Education.jsx
import React from 'react';
import "../styles/Education.css";

const EducationList = [
  {
    degree1: "Master of Science in Computer Science & Information Technology",
    institution1: "Sacred Heart University, CT, USA",
    date: "Aug 2023 – Dec 2024",
    highlights: [],
  },
  {
    degree2: "Bachelor of Engineering in Computer Science Engineering",
    institution2: "AAR Mahaveer Engineering College, HYD, INDIA",
    date: "Jun 2019 – Jul 2023",
    highlights: [],
  }
];

const Education = () => {
  return (
    <section className="education-section">
      {/* Rotated Title */}
      <div className="education-title-container">
        <div className="education-title-large">My</div>
        <div className="education-title-small">Education</div>
      </div>
      
      <div className="education-content">
        {EducationList.map((edu, idx) => (
          <div className="education-entry" key={idx}>
            <h3 className="degree1">{edu.degree1}</h3>
            <h3 className="degree2">{edu.degree2}</h3>
            <h4 className="institution1">{edu.institution1}</h4>
            <h4 className="institution2">{edu.institution2}</h4>
            {/* <p className="date">{edu.date}</p> */}
            {edu.highlights.length > 0 && (
              <div className="highlight-text">
                {edu.highlights.map((point, i) => (
                  <p key={i}>{point}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;