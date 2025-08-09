import React from 'react';
import Img1 from "../images/britney-gill-photography_SP_DAY2_63-Copy1-cropped.jpg";
import Img2 from "../images/britney-gill-photography_SP_DAY3_147-cropped.jpg";
import Img3 from "../images/britney-gill-photography_SP_DAY3_155-cropped2.jpg";
import Img4 from "../images/FirstLight-Seattle-image-29_BW-cropped.jpg";
import '../style/About.css'; // Assuming you have a CSS file for styling

const About = () => {
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
        <p>
          S&P is an international real estate boutique specializing in the design, marketing and sale of branded residences, legacy masterplanned communities, destination resorts and urban super prime real estate developments. We provide world-class developers with a one-stop, fully integrated service that guides our projects from vision to closing.
        </p>
      </section>

      <section className="image-section"></section>

      {/* ===== Slider Section ===== */}
      <section className="slider-section">
        <div className="arrow arrow-left" aria-label="Previous Slide">&#8249;</div>
        <div className="arrow arrow-right" aria-label="Next Slide">&#8250;</div>

        <div className="slider-content">
          <h2 className="slider-title">OUR MISSION</h2>
          <p className="slider-text">To curate the experience of acquiring the world's finest real estate.</p>
        </div>
      </section>

      <div className="indicators" aria-label="Slide Indicators" style={{ maxWidth: '900px', margin: '0 auto 40px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <div className="indicator active" aria-label="Slide 1"></div>
        <div className="indicator" aria-label="Slide 2"></div>
        <div className="indicator" aria-label="Slide 3"></div>
      </div>

      <div className="image-grid">
      <img src={Img1} alt="Image 1" />
      <img src={Img2} alt="Image 2" />
      <img src={Img3} alt="Image 3" />
      <img src={Img4} alt="Image 4" style={{ marginTop: "-368px" }}  />
      
    </div>
     
      
    </div>
  );
};

export default About;
