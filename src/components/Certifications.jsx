import React, { useState } from 'react';
import cert1 from '../assets/cert1.jpg'; // Front End Development Libraries
import cert2 from '../assets/cert2.png'; // UX Designer
import cert3 from '../assets/cert3.png'; // Python for Data Science
import cert4 from '../assets/cert4.png'; // Soft Skills
import cert5 from '../assets/cert5.png'; // Communication Skills
import clickmeGif from '../assets/clickme.gif';
import '../styles/Certifications.css';

const certifications = [
  {
    img: cert1,
    name: "Front End Development Libraries",
    link: "https://freecodecamp.org/certification/abhigna_margam/front-end-development-libraries",
  },
  {
    img: cert2,
    name: "UX Designer Certificate",
    link: "#", // Update with your actual verification link
  },
  {
    img: cert3 || "https://via.placeholder.com/450x270/333/fff?text=Python+Data+Science", // Fallback if image missing
    name: "Python for Data Science",
    link: "#", // Update with your actual verification link
  },
  {
    img: cert4 || "https://via.placeholder.com/450x270/333/fff?text=Soft+Skills", // Fallback if image missing
    name: "Soft Skills Certificate",
    link: "#", // Update with your actual verification link
  },
  {
    img: cert5 || "https://via.placeholder.com/450x270/333/fff?text=Communication+Skills", // Fallback if image missing
    name: "Communication Skills Certificate",
    link: "#", // Update with your actual verification link
  },
];

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLargeImage, setShowLargeImage] = useState(false);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < certifications.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const toggleLargeImage = () => {
    setShowLargeImage(!showLargeImage);
  };

  return (
    <>
      <div className="certifications-carousel-box">
        {/* Rotated Title */}
        <div className="certifications-title-container">
          <div className="certifications-title-large">My</div>
          <div className="certifications-title-small">Certifications</div>
        </div>
        
        <div className="certifications-carousel-frame">
          <button
            className="certifications-arrow left"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            ←
          </button>
          <div className="certifications-carousel-content">
            <img
              src={certifications[currentIndex].img}
              alt={certifications[currentIndex].name}
              className="certifications-carousel-img"
            />
            <div className="certification-name-container">
              <div className="certifications-carousel-name">
                {certifications[currentIndex].name}
              </div>
              <div
                onClick={toggleLargeImage}
                className="certifications-carousel-link"
              >
                <img
                  src={clickmeGif}
                  alt="Click me to view large certificate"
                  className="clickme-gif"
                />
              </div>
            </div>
          </div>
          <button
            className="certifications-arrow right"
            onClick={nextSlide}
            disabled={currentIndex === certifications.length - 1}
          >
            →
          </button>
        </div>
      </div>

      {/* Large Image Modal - FIXED VERSION */}
      {showLargeImage && (
        <div className="certificate-modal" onClick={toggleLargeImage}>
          <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={certifications[currentIndex].img}
              alt={certifications[currentIndex].name}
              className="certificate-large-image"
            />
            <div className="certificate-modal-close">
              <button 
                className="minimize-certificate-btn"
                onClick={toggleLargeImage}
              >
                Minimize
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certifications;