// src/components/Education.jsx
// line 1
import React from 'react';
import "../styles/Education.css";

const Education = ({ activeTab }) => {
  if (activeTab !== 'home') return null;
  
const EducationList = [
  {
    degree: "Master of Science in Computer Science & Information Technology",
    institution: "Sacred Heart University, Fairfield, CT",
    date: "Aug 2023 – Dec 2024",
    highlights: ["GPA: 8.89/10.0"],
  },
  {
    degree: "Bachelor of Engineering in Computer Science Engineering",
    institution: "AAR Mahaveer Engineering College, Hyderabad, India",
    date: "Jun 2019 – Jul 2023",
    highlights: ["GPA: 7.25/10.0"],
  } ]

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
            <h3 className="degree">{edu.degree}</h3>
            <h4 className="institution">{edu.institution}</h4>
            <p className="date">{edu.date}</p>
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
};

export default Education;