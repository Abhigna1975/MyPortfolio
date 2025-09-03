// src/components/About.jsx
import '../styles/About.css';

const About = () => {
  const paragraph = [
  "A detail-oriented and creative professional with a Master's degree in Computer Science & Information Technology and expertise in design and marketing. Currently working as a UI/UX Designer at Starteryou, where I apply user-centered design principles and support the marketing team with creative assets. I specialize in creating intuitive digital experiences and compelling marketing materials that drive engagement. Proficient in design tools like Figma, Adobe Creative Suite, and Photoshop, I deliver designs that are both aesthetically engaging and strategically effective. Known for problem-solving, cross-functional collaboration, and adaptability in fast-paced environments, I thrive on transforming business ideas into impactful, user-friendly visual solutions."
]
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