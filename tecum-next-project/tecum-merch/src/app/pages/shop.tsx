import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import '../../styles/Shop.scss';

const Shop = () => {
  return (
    <div className="shop-page">
      <Header />
      <main>
        <h1>Shop Our Collection</h1>
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
