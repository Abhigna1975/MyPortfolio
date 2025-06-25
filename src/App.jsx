import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects'; 
import TechnicalSkills from './components/TechnicalSkills';
import Contact from './components/Contact';

function App() {
  return (
    <div 
      className="app-container"
      style={{
        backgroundImage: 'url("/shine.gif")',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }}
    >
      <Hero />
      <About />
      
      <div className="publications-certifications-container">
      </div>

      <div className="other-sections">
        <Education />
        <Experience />
        <Projects />
        <TechnicalSkills />
        <Contact />
      </div>
    </div>
  );
}

export default App;