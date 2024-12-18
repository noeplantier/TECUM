import React from 'react';
import Header from '../components/Header';
import '../styles/About.scss';
import Image from 'next/image';

const About = () => {
  return (
    <div className="about-page">
      <Header/>
      <main>
        <h1>About Us</h1>
        <p>Discover the story behind In Gold We Trust and our dedication to quality jewelry.</p>
        <Image
        className="logo-tecum" 
        src="/images/DALL·E 2024-10-23 12.38.23 - A circular logo for the TECUM website, featuring a fusion of an angel and a demon. The design should have a split down the middle, with one side repre.webp"
        alt="Logo Tecum"
        quality={100}
        width={1000}
        height={1000}
      
      />
      </main>
    </div>
  );
};

export default About;
