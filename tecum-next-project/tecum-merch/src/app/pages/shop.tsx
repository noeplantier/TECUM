import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import '../../styles/Shop.scss';

const Shop = () => {
  return (
    <div className="shop-page">
      <main>
        <h1>Shop Our Collection</h1>
        <ProductGrid />
      </main>
    </div>
  );
};

export default Shop;
