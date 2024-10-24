import React from 'react';
import '../../styles/HeroSection.scss';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Discover Luxury Jewelry</h1>
        <p>Elegant, timeless, and crafted with passion. Explore our exclusive collections.</p>
        <a href="/shop" className="hero-button">Shop Now</a>
        <img 
        className="clemdetrem2" 
        src="/images/clemdetrem2.jpg.webp"
        alt="Clem's picture"
      
      />
        <a href="/shop" className="hero-button">Shop Now</a>
        <img 
        className="clemdetrem1" 
        src="/images/clemdetrem1.jpg.webp"
        alt="Clem's picture"
      
      />
      </div>
    </section>
  );
};

export default HeroSection;
