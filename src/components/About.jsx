// src/components/About.jsx
import '../styles/About.css';

const About = () => {
  const paragraph = [
    "A Product Designer and UI Engineer with expertise in end-to-end design execution—from problem definition through high-fidelity prototyping and development. I combine strong visual design fundamentals with hands-on coding ability in React.js and React Native, enabling rapid prototyping and seamless translation of design vision into production-ready experiences. Experienced with Figma, component systems, and leveraging frontier AI tools to accelerate design workflows and improve outcomes.",
    "What sets me apart: you get a designer-developer hybrid who defaults to making and building. I bring design craft, technical implementation skills, and a growth mindset focused on creating measurable impact for users. I bridge design and engineering naturally, ensuring both beautiful and feasible solutions that ship."
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