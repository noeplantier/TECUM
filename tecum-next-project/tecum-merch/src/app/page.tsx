import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import About from './pages/about';
import Footer from './components/Footer';
import './styles/Page.scss';
import ShippingBanner from './components/ShippingBanner';
import Carousel from './components/Carousel';
import ProductDetail from './components/ProductDetail';
import ChatBot from './components/ChatBot';

const Home = () => {
  return (
    <div className="home-page">
      <ShippingBanner/>
      <HeroSection />
      <FeaturedProducts />
      <About/>
      <ProductDetail/>
      <ChatBot/>
      <Carousel/>
     
      <Footer />
    </div>
  );
};

export default Home;
