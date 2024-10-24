import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import About from './pages/about';
import Footer from './components/Footer';
import './page.scss';
import ShippingBanner from './components/ShippingBanner';
import Carousel from './components/Carousel';

const Home = () => {
  return (
    <div className="home-page">
      <ShippingBanner/>
      <HeroSection />
      <FeaturedProducts />
      <About/>
      <Carousel/>
      <Footer />
    </div>
  );
};

export default Home;
