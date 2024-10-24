import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import About from './pages/about';
import Footer from './components/Footer';
import './page.scss';
import ShippingBanner from './components/ShippingBanner';

const Home = () => {
  return (
    <div className="home-page">
      <ShippingBanner/>
      <Header/>
      <HeroSection />
      <FeaturedProducts />
      <About/>
      <Footer />
    </div>
  );
};

export default Home;
