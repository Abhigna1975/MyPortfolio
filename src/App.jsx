import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects'; 
import TechnicalSkills from './components/TechnicalSkills';
import Contact from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('home');

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
      <Hero activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Only show these sections when on 'home' tab */}
      {activeTab === 'home' && (
        <>
          <About />
          <Education />
          <Experience />
          <Projects />
          <TechnicalSkills />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;