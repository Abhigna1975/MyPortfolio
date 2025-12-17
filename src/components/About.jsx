// src/components/About.jsx
import '../styles/About.css';

const About = () => {
  const paragraph = [
    "A UI Engineer at Starteryou developing mobile and web application interfaces using React.js, React Native, and modern JavaScript. I build responsive, accessible user interfaces by translating design specifications into production-ready code. Experienced with component architecture, RESTful API integration, and performance optimization across web and mobile platforms.",
    "What sets me apart: you get a front-end engineer with strong design sensibility who bridges the gap between design and development, ensuring pixel-perfect implementations and seamless user experiences."
];
  
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