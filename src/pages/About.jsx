import React, { useState } from 'react';
import Img1 from "../images/britney-gill-photography_SP_DAY2_63-Copy1-cropped.jpg";
import Img2 from "../images/britney-gill-photography_SP_DAY3_147-cropped.jpg";
import Img3 from "../images/britney-gill-photography_SP_DAY3_155-cropped2.jpg";
import Img4 from "../images/FirstLight-Seattle-image-29_BW-cropped.jpg";
import '../style/About.css';

const slides = [
  { title: "OUR MISSION", text: "To curate the experience of acquiring the world’s finest real estate." },
  { title: "OUR VISION", text: "To set a global benchmark in luxury real estate services with unmatched excellence." },
  { title: "OUR PHILOSOPHY", text: "Blending innovation and tradition to craft timeless living experiences." }
];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  const changeSlide = (newIndex) => {
    setFade(false); 
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setFade(true); 
    }, 300); 
  };

  const handlePrev = () => {
    changeSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    changeSlide((currentSlide + 1) % slides.length);
  };

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          A LEADER IN THE WORLD<br />OF LUXURY LIVING
        </div>
      </section>

      <section className="section">
        <h2>OUR SERVICE</h2>
        <div className="divider"></div>
        <p>Aqar is an international real estate boutique specializing in showcasing and selling exceptional properties, from luxurious branded residences and iconic masterplanned communities to world-class resorts and ultra-prime urban developments. We offer developers a seamless, fully integrated service that brings each project to life, guiding it from vision to successful closing.</p>

      </section>

      <section className="image-section"></section>

      {/* ===== Slider Section ===== */}
      <section className="slider-section">
        <div className="arrow arrow-left" onClick={handlePrev} aria-label="Previous Slide">&#8249;</div>
        <div className="arrow arrow-right" onClick={handleNext} aria-label="Next Slide">&#8250;</div>

        <div
          className="slider-content"
          style={{
            opacity: fade ? 1 : 0,
            transition: "opacity 0.3s ease-in-out"
          }}
        >
          <h2 className="slider-title">{slides[currentSlide].title}</h2>
          <p className="slider-text">{slides[currentSlide].text}</p>
        </div>
      </section>

      <div
        className="indicators"
        aria-label="Slide Indicators"
        style={{ maxWidth: '900px', margin: '0 auto 40px', display: 'flex', justifyContent: 'center', gap: '10px' }}
      >
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`indicator ${idx === currentSlide ? 'active' : ''}`}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => changeSlide(idx)}
          ></div>
        ))}
      </div>

      <div className="image-grid">
        <img src={Img1} alt="Image 1" />
        <img src={Img2} alt="Image 2" />
        <img src={Img3} alt="Image 3" />
        <img src={Img4} alt="Image 4" style={{ marginTop: "-368px" }} />
      </div>
    </div>
  );
};

export default About;
