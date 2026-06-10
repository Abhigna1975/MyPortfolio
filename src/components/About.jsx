// src/components/About.jsx
import '../styles/About.css';

const About = () => {
  const paragraph = [
    "I'm a UI/UX Designer with 5+ years defining the look, feel, and behavior of enterprise applications. I specialize in user research, wireframing, high-fidelity prototyping, and building scalable design systems — translating complex business requirements into intuitive, accessible experiences. I work closely with Business Analysts and Technical Leads to bridge strategy and visual design. I bring deep expertise in heuristic evaluations, usability testing, and synthesizing user insights into design decisions that drive measurable business outcomes."
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