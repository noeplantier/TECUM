// Carousel.tsx
"use client";

import React from 'react';
import '../../styles/Carousel.scss';

const Carousel: React.FC = () => {
  return (
    <div className="carousel">
   
      <div className="carousel-track">
        <div className="carousel-slide">
          <img src="/images/clemdetrem-rabanne.jpeg" alt="Slide 1 - Paris" />
        </div>
        <div className="carousel-slide">
          <img src="/images/clemdetrem-dior.jpeg" alt="Slide 2 - Rome" />
        </div>
        <div className="carousel-slide">
          <img src="/images/clemdetrem-jewel.jpeg" alt="Slide 3 - Berlin" />
        </div>

        <div className="carousel-slide">
          <img src="/images/clemdetrem-rabanne.jpeg" alt="Slide 1 - Paris" />
        </div>
        <div className="carousel-slide">
          <img src="/images/clemdetrem-dior.jpeg" alt="Slide 2 - Rome" />
        </div>
        <div className="carousel-slide">
          <img src="/images/clemdetrem-jewel.jpeg" alt="Slide 3 - Berlin" />
        </div>
        <div className="carousel-slide">
          <img src="/images/clemdetrem-payettes.jpeg" alt="Slide 4 - Rotterdam" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
