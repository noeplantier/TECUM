import React from 'react';
import '../ProductGrid.scss';

const products = [
  { id: 1, name: 'Elegant Earrings', price: '€120', image: '/images/product4.jpg' },
  { id: 2, name: 'Luxury Watch', price: '€750', image: '/images/product5.jpg' },
  { id: 3, name: 'Gold Bracelet', price: '€250', image: '/images/product6.jpg' },
  { id: 4, name: 'Diamond Pendant', price: '€900', image: '/images/product7.jpg' },
  { id: 5, name: 'Silver Necklace', price: '€180', image: '/images/product8.jpg' },
  { id: 6, name: 'Pearl Ring', price: '€300', image: '/images/product9.jpg' },
];

const ProductGrid = () => {
  return (
    <section className="product-grid-section">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <a href={`/shop/${product.id}`} className="product-button">View Product</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
