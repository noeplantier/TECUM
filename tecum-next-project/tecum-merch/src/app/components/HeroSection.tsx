import React from 'react';
import '../../styles/HeroSection.scss';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Discover Luxury Jewelry</h1>
        <p>Elegant, timeless, and crafted with passion. Explore our exclusive collections.</p>
        <a href="/shop" className="hero-button">Shop Now</a>
      </div>
    </section>
  );
};

export default HeroSection;
