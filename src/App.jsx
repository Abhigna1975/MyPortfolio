import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      {/* Animated Background */}
      <div className="background-animation">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="star"></div>
        ))}
      </div>
      
      {/* Main Content */}
      <div className="content">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Certifications />
        <Projects />
        <TechnicalSkills />
        <Contact />
      </div>
    </div>
  );
}

export default App;