import React from 'react';
import '../../styles/FeaturedProducts.scss';

const products = [
  { id: 1, name: 'Gold Necklace', price: '€200', image: '/images/product1.jpg' },
  { id: 2, name: 'Diamond Ring', price: '€500', image: '/images/product2.jpg' },
  { id: 3, name: 'Silver Bracelet', price: '€150', image: '/images/product3.jpg' },
];

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
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

export default FeaturedProducts;
