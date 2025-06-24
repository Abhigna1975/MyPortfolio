import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import TechnicalSkills from './components/TechnicalSkills';
import Contact from './components/Contact';
import ClickMe from './components/ClickMe';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <About />

      {/* Flex container for Publications and Certifications only */}
      <div className="publications-certifications-container">
        {/* Your publications and certifications components would go here */}
      </div>

      <div className="other-sections">
        <Education />
        <Experience />
        <TechnicalSkills />
        <Contact />
      </div>
    </div>
  );
}

export default App;