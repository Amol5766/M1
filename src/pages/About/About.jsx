import React from 'react';
import { useInView } from 'react-intersection-observer';
import avatarImage from '../../assets/safwan.jpg'; 
import cafeImage1 from '../../assets/fm1.jpg'; 
import cafeImage2 from '../../assets/fm4.jpg'; 
import cafeImage3 from '../../assets/fm3.jpg'; 
import cafeImage4 from '../../assets/fm7.jpg'; 
import cafeImage5 from '../../assets/fm2.jpg'; 
import recommendedImage1 from '../../assets/fm5.jpg'; 
import './About.css';

function About() {
  const { ref: avatarRef, inView: avatarInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: timelineRef, inView: timelineInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: galleryRef, inView: galleryInView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { ref: recommendedRef, inView: recommendedInView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="about-container">
      {/* Avatar Section */}
      <section ref={avatarRef} className={`avatar-section ${avatarInView ? 'fade-in' : ''}`}>
        <img src={avatarImage} alt="Avatar" className="avatar-img" />
        <h1 className="avatar-header">Welcome to Fresh and More Café</h1>
        <p className="avatar-description">
          Established in 2020, Fresh and More Café blends timeless charm with modern convenience. We offer a warm, inviting space where you can relax and enjoy handcrafted dishes and drinks made with love.
        </p>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className={`timeline-section ${timelineInView ? 'slide-up' : ''} ${timelineInView ? 'fade-in' : ''}`}>
        <h2 className="timeline-header">Our Journey</h2>
        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-line"></div> 
            <span className="timeline-year">2020</span>
            <p className="timeline-description">Opened the first café with an emphasis on community and quality.</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-line"></div> 
            <span className="timeline-year">2021</span>
            <p className="timeline-description">Expanded to include locally-sourced, hand-crafted desserts and pastries.</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-line"></div> 
            <span className="timeline-year">2022</span>
            <p className="timeline-description">Introduced our seasonal menus, bringing fresh, local ingredients to every dish.</p>
          </div>
          <div className="timeline-item">
            <div className="timeline-line"></div> 
            <span className="timeline-year">2023</span>
            <p className="timeline-description">Opened new branches across several cities, all maintaining our unique café vibe.</p>
          </div>
        </div>
      </section>

      {/* Stylish Image Gallery Section */}
      <section ref={galleryRef} className={`gallery-section ${galleryInView ? 'fade-in' : ''}`}>
        <h2 className="gallery-header">Our Café</h2>
        <div className="gallery-container">
          <div className="gallery-item">
            <img src={cafeImage1} alt="Cafe 1" className="gallery-img" />
          </div>
          <div className="gallery-item">
            <img src={cafeImage2} alt="Cafe 2" className="gallery-img" />
          </div>
          <div className="gallery-item">
            <img src={cafeImage3} alt="Cafe 3" className="gallery-img" />
          </div>
          <div className="gallery-item">
            <img src={cafeImage4} alt="Cafe 4" className="gallery-img" />
          </div>
          <div className="gallery-item-5">
            <img src={cafeImage5} alt="Cafe 5" className="gallery-img" />
          </div>
        </div>
      </section>

      {/* Recommended Items Section */}
      <section ref={recommendedRef} className={`recommended-section ${recommendedInView ? 'fade-in' : ''}`}>
        <h2 className="recommended-header">Recommended Item</h2>
        <div className="recommended-container">
          <div className="recommended-item">
            <img src={recommendedImage1} alt="Recommended 1" className="recommended-img" />
            <p className="recommended-description">Try our signature hand-crafted Special GudBud IceCream with fresh local ingredients.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
