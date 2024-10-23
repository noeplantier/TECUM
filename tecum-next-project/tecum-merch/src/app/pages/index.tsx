import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <Carousel />
        <section className="products">
          <ProductCard image="/images/product1.jpg" name="Golden Necklace" price="$1200" />
          <ProductCard image="/images/product2.jpg" name="Silver Bracelet" price="$800" />
          <ProductCard image="/images/product3.jpg" name="Diamond Ring" price="$1500" />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
