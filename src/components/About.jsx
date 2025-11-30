// src/components/About.jsx
import '../styles/About.css';

const About = () => {
  const paragraph = [
    "A UI/UX designer at Starteryou handling everything design related - mobile app, web interfaces, and marketing materials from social media graphics to flyers. I create user-centered digital experiences while keeping brand consistency across all touchpoints. Proficient in Figma, Canva, Adobe Creative Suite, and Photoshop.", 
    "What sets me apart: you get a UI/UX designer who can seamlessly handle graphic design needs too."
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