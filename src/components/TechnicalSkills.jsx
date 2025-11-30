// src/components/TechnicalSkills.jsx
import React from 'react';
import '../styles/TechnicalSkills.css';

const skills = {
  'Frontend Technologies': ['HTML5', 'CSS3', 'JavaScript', 'React', 'Styled Components'],
  'Design Tools': ['Figma', 'Canva', 'Sketch', 'Adobe Photoshop', 'Adobe Illustrator'],
  'CSS & Styling': ['Tailwind CSS', 'Styled Components'],
  'Development Tools': ['VS Code', 'Vite', 'npm', 'Chrome DevTools'],
  'UX/UI Skills': ['User Research', 'Wireframing', 'Prototyping'],
  'Version Control & Collaboration': ['Git', 'GitHub'],
};

// Enhanced icon mapping with working URLs and proper fallbacks
const getIconPath = (tool) => {
  // Direct working icon URLs - tested and verified
  const iconMapping = {
    // Frontend Technologies
    HTML5: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    CSS3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    
    // Design Tools
    Figma: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    Canva: `data:image/svg+xml;base64,${btoa(`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="canva-logo-grad-unique" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#00C4CC;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#7D2AE8;stop-opacity:1" />
          </linearGradient>
        </defs>
        <circle cx="12" cy="12" r="10" fill="url(#canva-logo-grad-unique)"/>
        <path d="M12 6C8.69 6 6 8.69 6 12c0 2.76 1.88 5.08 4.43 5.76v-3.01c-1.02-.46-1.73-1.48-1.73-2.68 0-1.62 1.31-2.93 2.93-2.93.81 0 1.54.33 2.07.86l1.77-1.77C14.54 6.79 13.33 6 12 6z" fill="white"/>
      </svg>
    `)}`,
    Sketch: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg',
    'Adobe Photoshop': `data:image/svg+xml;base64,${btoa(`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#31A8FF"/>
        <path d="M6 7.5h3.5c2.2 0 4 1.8 4 4s-1.8 4-4 4H8v2.5H6V7.5zM8 9.5v4h1.5c1.1 0 2-0.9 2-2s-0.9-2-2-2H8z" fill="white"/>
        <path d="M15 12.5c0-1.1 0.9-2 2-2s2 0.9 2 2c0 0.5-0.2 1-0.6 1.4l1.4 1.4-1.4 1.4-1.4-1.4c-0.4 0.4-0.9 0.6-1.4 0.6-1.1 0-2-0.9-2-2s0.9-2 2-2z" fill="white"/>
        <circle cx="17" cy="12.5" r="1" fill="#31A8FF"/>
      </svg>
    `)}`,
    'Adobe Illustrator': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg',
    
    // CSS & Styling
    'Tailwind CSS': `data:image/svg+xml;base64,${btoa(`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6C9.33 6 7.67 7.33 7 10C8 8.67 9.17 8.17 10.5 8.5C11.44 8.72 12.13 9.41 12.87 10.16C14.2 11.5 15.8 13 19 13C21.67 13 23.33 11.67 24 9C23 10.33 21.83 10.83 20.5 10.5C19.56 10.28 18.87 9.59 18.13 8.84C16.8 7.5 15.2 6 12 6ZM7 13C4.33 13 2.67 14.33 2 17C3 15.67 4.17 15.17 5.5 15.5C6.44 15.72 7.13 16.41 7.87 17.16C9.2 18.5 10.8 20 14 20C16.67 20 18.33 18.67 19 16C18 17.33 16.83 17.83 15.5 17.5C14.56 17.28 13.87 16.59 13.13 15.84C11.8 14.5 10.2 13 7 13Z" fill="#06B6D4"/>
      </svg>
    `)}`,
    
    // Development Tools
    Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    Vite: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
    npm: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
    
    // Version Control
    GitHub: `data:image/svg+xml;base64,${btoa(`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z" fill="white"/>
      </svg>
    `)}`,
    
    // Custom SVG icons for missing tools
    'Styled Components': `data:image/svg+xml;base64,${btoa(`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L19 8L21 9ZM22 17C22 18.1 21.1 19 20 19H4C2.9 19 2 18.1 2 17V10C2 8.9 2.9 8 4 8H20C21.1 8 22 8.9 22 10V17ZM20 10H4V17H20V10ZM12 15.5C10.6 15.5 9.5 14.4 9.5 13S10.6 10.5 12 10.5S14.5 11.6 14.5 13S13.4 15.5 12 15.5Z" fill="#DB7093"/>
      </svg>
    `)}`,
    
    'User Research': `data:image/svg+xml;base64,${btoa(`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="3" fill="#63f4fc"/>
        <path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#63f4fc"/>
        <circle cx="17" cy="8" r="4" stroke="#d6fdff" stroke-width="2" fill="none"/>
        <path d="m21 12-3-3 1.5-1.5L21 9l1.5-1.5L21 6" stroke="#d6fdff" stroke-width="2"/>
      </svg>
    `)}`,
    
    'Wireframing': `data:image/svg+xml;base64,${btoa(`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="#63f4fc" stroke-width="2" fill="none"/>
        <rect x="5" y="6" width="4" height="2" fill="#63f4fc"/>
        <rect x="11" y="6" width="8" height="1" fill="#d6fdff"/>
        <rect x="5" y="10" width="14" height="1" fill="#d6fdff"/>
        <rect x="5" y="12" width="10" height="1" fill="#d6fdff"/>
        <rect x="5" y="15" width="12" height="1" fill="#d6fdff"/>
        <rect x="5" y="17" width="8" height="1" fill="#d6fdff"/>
      </svg>
    `)}`,
    
    'Prototyping': `data:image/svg+xml;base64,${btoa(`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="6" width="6" height="8" rx="1" fill="#63f4fc"/>
        <rect x="16" y="6" width="6" height="8" rx="1" fill="#d6fdff"/>
        <path d="M8 10h8" stroke="#63f4fc" stroke-width="2"/>
        <path d="M14 8l2 2-2 2" stroke="#63f4fc" stroke-width="2" fill="none"/>
        <circle cx="12" cy="10" r="1" fill="#63f4fc"/>
      </svg>
    `)}`,
    
    'Chrome DevTools': `data:image/svg+xml;base64,${btoa(`
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#4285F4"/>
        <circle cx="12" cy="12" r="7" fill="#34A853"/>
        <circle cx="12" cy="12" r="4" fill="#FBBC05"/>
        <circle cx="12" cy="12" r="2" fill="#EA4335"/>
        <rect x="11" y="2" width="2" height="4" fill="white"/>
        <rect x="11" y="18" width="2" height="4" fill="white"/>
        <rect x="2" y="11" width="4" height="2" fill="white"/>
        <rect x="18" y="11" width="4" height="2" fill="white"/>
      </svg>
    `)}`
  };

  return iconMapping[tool] || `data:image/svg+xml;base64,${btoa(`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#63f4fc" stroke-width="2" fill="none"/>
      <circle cx="12" cy="12" r="3" fill="#63f4fc"/>
      <text x="12" y="16" text-anchor="middle" fill="#63f4fc" font-size="6" font-weight="bold">
        ${tool.charAt(0).toUpperCase()}
      </text>
    </svg>
  `)}`;
};

const TechnicalSkills = () => {
  return (
    <section className="technical-skills">
      {/* Rotated Title */}
      <h1 className="technical-title-large">Technical</h1>
      <h2 className="technical-title-small">Skills</h2>
      
      <div className="skills-content">
        <div className="skills-grid">
          {Object.entries(skills).map(([category, tools]) => (
            <div className="skill-category" key={category}>
              <h3>{category}</h3>
              <ul>
                {tools.map((tool) => (
                  <li key={tool}>
                    <img
                      src={getIconPath(tool)}
                      alt={`${tool} icon`}
                      className="skill-icon"
                      onError={(e) => {
                        console.log(`Failed to load icon for: ${tool}`);
                        e.target.style.display = 'none';
                      }}
                      loading="lazy"
                    />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;