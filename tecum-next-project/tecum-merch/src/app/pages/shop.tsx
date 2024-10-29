import React from 'react';

import ProductGrid from '../components/ProductGrid';
import '../styles/Shop.scss';

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
