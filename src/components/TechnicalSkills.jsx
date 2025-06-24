// src/components/TechnicalSkills.jsx
import React from 'react';
import '../styles/TechnicalSkills.css';

const skills = {
  'Frontend Technologies': ['HTML5', 'CSS3', 'JavaScript', 'React'],
  'Design Tools': ['Figma', 'Sketch', 'Adobe Photoshop', 'Adobe Illustrator'],
  'CSS & Styling': ['Tailwind CSS','Styled Components'],
  'Development Tools': ['Git', 'VS Code', 'Vite', 'npm', 'Chrome DevTools'],
  'UX/UI Skills': ['User Research', 'Wireframing', 'Prototyping'],
  'Version Control & Collaboration': ['Git', 'GitHub']
};

const localImages = ['Adobe XD', 'InVision', 'Styled Components', 'Chrome DevTools', 'User Research', 'Wireframing']; // tools with no devicon logo

const getIconPath = (tool) => {
  const mapping = {
    HTML5: 'html5',
    CSS3: 'css3',
    JavaScript: 'javascript',
    TypeScript: 'typescript',
    React: 'react',
    'Vue.js': 'vuejs',
    Angular: 'angularjs',
    Figma: 'figma',
    Sketch: 'sketch',
    'Adobe Photoshop': 'photoshop',
    'Adobe Illustrator': 'illustrator',
    'Sass/SCSS': 'sass',
    'Tailwind CSS': 'tailwindcss',
    Bootstrap: 'bootstrap',
    'Material-UI': 'materialui',
    Git: 'git',
    'VS Code': 'vscode',
    Webpack: 'webpack',
    Vite: 'vitejs',
    npm: 'npm',
    GitHub: 'github',
    GitLab: 'gitlab',
    Jira: 'jira',
    Slack: 'slack',
    Notion: 'notion',
    Prototyping: 'figma',
    'Design Systems': 'figma',
    Accessibility: 'html5'
  };

  // If tool is in Devicon mapping
  if (mapping[tool]) {
    const icon = mapping[tool];
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`;
  }

  // If tool is listed in localImages
  if (localImages.includes(tool)) {
    const fileName = tool.toLowerCase().replace(/\s/g, '').replace('/', '') + '.png'; // e.g. adobexd.png
    return `/icons/${fileName}`;
  }

  // Fallback
  return '';
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
                      alt={tool}
                      className="skill-icon"
                      onError={(e) => { e.target.style.display = 'none'; }}
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