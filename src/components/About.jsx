// src/components/About.jsx
import '../styles/About.css';

const About = () => {
  const paragraph = [
    "A detail-oriented and creative professional with a Master’s degree in Computer Science & Information Technology and a strong foundation in UI/UX design, front-end development, and user-centered research. Experienced in tools like Figma, HTML, CSS, and JavaScript, with a passion for creating intuitive digital experiences. Known for delivering visually appealing and functional designs through academic projects and internships. Eager to contribute to innovative teams and grow as a UI/UX designer or front-end developer. Strong communicator and collaborative team player with a proactive mindset and adaptability in fast-paced environments. Always eager to learn, explore new technologies, and turn ideas into meaningful design solutions."];

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