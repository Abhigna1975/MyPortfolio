// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import ProfileImage from '../assets/Profile.jpg';
import ResumePDF from '../assets/Resume.pdf';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleResumeClick = (e) => {
    if (isMobile) {
      e.preventDefault();
      setShowResumeModal(true);
    }
    // For desktop, let the default behavior (opening in new tab) work
  };

  const handleOpenPDF = () => {
    window.open(ResumePDF, '_blank');
    setShowResumeModal(false);
  };

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = ResumePDF;
    link.download = 'Abhigna_Margam_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowResumeModal(false);
  };
  

  const closeModal = () => {
    setShowResumeModal(false);
  };
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          <span className="color-1">Hey</span>
          <span className="color-2"> there</span>
          <span className="color-3">,</span>
        </h1>
        <h2>
          <span className="color-1">I'm </span>
          <span className="color-2">Abhigna</span>
          <span className="color-3"> Margam</span>
        </h2>
        <p>UI/UX Designer | Graphic Designer</p>
        
        {/* Social Links */}
        <div className="social-links">
          <a 
            href="https://www.linkedin.com/in/abhigna-margam-71b2a6250/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a 
            href="https://github.com/Abhigna1975"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a 
            href={ResumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            onClick={handleResumeClick}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
            </svg>
            {isMobile ? 'Resume' : 'Resume'}
          </a>
        </div>
        
        {/* Slogan content */}
        <div className="slogan">
          <div className="slogan-box">
            <div className="title-container">
              <span className="title-large">Job</span>
              <span className="title-small">Position</span>
            </div>
            <div className="job-title">
              <div>Web</div>
              <div>Designer</div>
            </div>
          </div>
          
          <div className="slogan-box">
            <div className="title-container">
              <span className="title-large">My</span>
              <span className="title-small">Slogan</span>
            </div>
            <div className="tagline">
              <div>Where pixels</div>
              <div>meet profits.</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile image beside all content, starting from "Hey there" */}
      <img src={ProfileImage} alt="Abhigna Margam" className="profile-image" />

      {/* Resume Modal for Mobile */}
      {showResumeModal && (
        <div className="resume-modal-overlay" onClick={closeModal}>
          <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
            <div className="resume-modal-header">
              <h3>My Resume</h3>
              <button className="close-modal" onClick={closeModal}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
                </svg>
              </button>
            </div>
            <div className="resume-modal-content">
              <button className="resume-option-btn open-btn" onClick={handleOpenPDF}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                </svg>
                OPEN RESUME PDF
              </button>
              <button className="resume-option-btn download-btn" onClick={handleDownloadPDF}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"/>
                </svg>
                DOWNLOAD PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
