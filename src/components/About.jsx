// src/components/About.jsx
import '../styles/About.css';

const About = () => {
  const paragraph = [
    "A detail-oriented and creative professional with a Master’s degree in Computer Science & Information Technology and expertise in both design and development. Currently working as a UI/UX Developer at Stateryou, combining user-centered design principles with front-end development skills to create intuitive and visually appealing digital experiences. Proficient in tools like Figma, HTML, CSS, JavaScript, and React, I deliver designs that are both aesthetically engaging and functionally robust. Known for problem-solving, collaboration, and adaptability in fast-paced environments, I thrive on transforming ideas into impactful, user-friendly solutions."];

  return (
    <section className="about">
      <div className="about-content">
        <h2>
          <div className="about-large">About</div>
          <div className="me-small">Me</div>
        </h2>
        
        {paragraph.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </section>
  );
};

export default About;