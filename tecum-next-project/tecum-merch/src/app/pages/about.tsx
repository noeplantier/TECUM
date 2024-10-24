import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../../styles/About.scss';

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <main>
        <h1>About Us</h1>
        <p>Discover the story behind In Gold We Trust and our dedication to quality jewelry.</p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
