import React, { useRef, useEffect } from 'react';
import './Hero.css';
import image from '../assets/joshtempavatar.png';

function Hero() {
  const heroContent = useRef(null);

  useEffect(() => {
    const element = heroContent.current;
    const slideIn = () => {
      const windowHeight = window.innerHeight;
      const elementPosition = element.getBoundingClientRect().top;
      if (elementPosition < windowHeight) {
        element.classList.add('slide-in');
      } else {
        element.classList.remove('slide-in');
      }
    };
    window.addEventListener('scroll', slideIn);
    return () => {
      window.removeEventListener('scroll', slideIn);
    };
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-background"></div>
      <div ref={heroContent} className="hero-content">
        <div className="hero-text">
          <h3 className="first-text">Will include</h3>
          <h3 className="second-text">a tagline</h3>
          <h3 className="third-text">and something else maybe????</h3>
        </div>
        <div className="hero-image">
          <img src={image} alt="Placeholder for image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;