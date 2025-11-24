import React, { useState } from 'react';

export default function uiux() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Mobile App",
      category: "Mobile Design",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      description: "User-centered shopping experience"
    },
    {
      id: 2,
      title: "Banking Dashboard",
      category: "Web App",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description: "Financial management interface"
    },
    {
      id: 3,
      title: "Fitness Tracking App",
      category: "Mobile Design",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
      description: "Health monitoring app"
    }
  ];

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', paddingTop: '100px' }}>
      <div style={{ padding: '0 2rem' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
          <span style={{ color: '#00ffff' }}>UI/UX</span> Designer
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#9ca3af', maxWidth: '48rem', marginBottom: '3rem' }}>
          Creating intuitive digital experiences through user research and visual design.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                position: 'relative',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                cursor: 'pointer',
                border: hoveredId === project.id ? '2px solid #00ffff' : '2px solid transparent',
                transition: 'all 0.3s'
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  transform: hoveredId === project.id ? 'scale(1.1)' : 'scale(1)',
                  transition: 'transform 0.5s'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.5rem',
                background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                opacity: hoveredId === project.id ? 1 : 0,
                transition: 'opacity 0.3s'
              }}>
                <span style={{ color: '#00ffff', fontSize: '0.875rem', fontWeight: 600 }}>
                  {project.category}
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0.5rem 0' }}>
                  {project.title}
                </h3>
                <p style={{ color: '#d1d5db', fontSize: '0.875rem' }}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}