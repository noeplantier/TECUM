import React from 'react';
import '../../styles/FeaturedProducts.scss';

const products = [
  // Ligne 1
  { id: 1, name: 'Gold Necklace', price: '€200', image: '/images/goldnecklace.webp' },
  { id: 2, name: 'Diamond Ring', price: '€500', image: '/images/diamondring.jpg.webp' },
  { id: 3, name: 'Silver Bracelet', price: '€150', image: '/images/silverbracelet.jpg' },
  { id: 4, name: 'Emerald Earrings', price: '€100', image: '/images/Emerald Earrings.jpg.webp' },
  
  // Ligne 2
  { id: 5, name: 'Pearl Pendant', price: '€250', image: '/images/Pearl Pendant.jpg' },
  { id: 6, name: 'Sapphire Bracelet', price: '€300', image: '/images/Sapphire Bracelet.jpg.webp' },
  { id: 7, name: 'Leather Watch', price: '€180', image: '/images/Leather Watch.jpg' },
  { id: 8, name: 'Ruby Necklace', price: '€450', image: '/images/Ruby Necklace.jpg' },

  // Ligne 3
  { id: 9, name: 'Gold Anklet', price: '€90', image: '/images/Gold Anklet.jpeg.webp' },
  { id: 10, name: 'Cubic Zirconia Ring', price: '€70', image: '/images/Cubic Zirconia Ring.webp' },
  { id: 11, name: 'Silver Cufflinks', price: '€110', image: '/images/Silver Cufflinks.jpeg' },
  { id: 12, name: 'Platinum Chain', price: '€600', image: '/images/Platinum Chain.jpg.webp' },

  // Ligne 4
  { id: 13, name: 'Rose Gold Bangle', price: '€220', image: '/images/Rose Gold Bangle.jpg.avif' },
  { id: 14, name: 'Crystal Brooch', price: '€80', image: '/images/ Crystal Brooch.webp' },
  { id: 15, name: 'Turquoise Necklace', price: '€160', image: '/images/Turquoise Necklace.jpg' },
  { id: 16, name: 'White Gold Earrings', price: '€340', image: '/images/whitegoldearrings.jpg' },

  // Ligne 5
  { id: 17, name: 'Amethyst Ring', price: '€275', image: '/images/Amethyst Ring.jpg.webp' },
  { id: 18, name: 'Gold Hoop Earrings', price: '€120', image: '/images/product18.jpg' },
  { id: 19, name: 'Silk Scarf', price: '€60', image: '/images/product19.jpg' },
  { id: 20, name: 'Pearl Bracelet', price: '€200', image: '/images/product20.jpg' },

  // Ligne 6
  { id: 21, name: 'Diamond Pendant', price: '€800', image: '/images/product21.jpg' },
  { id: 22, name: 'Leather Handbag', price: '€550', image: '/images/product22.jpg' },
  { id: 23, name: 'Silver Hairpin', price: '€40', image: '/images/product23.jpg' },
  { id: 24, name: 'Velvet Choker', price: '€50', image: '/images/product24.jpg' },

  // Ligne 7
  { id: 25, name: 'Gold-plated Sunglasses', price: '€300', image: '/images/product25.jpg' },
  { id: 26, name: 'Beaded Necklace', price: '€85', image: '/images/product26.jpg' },
  { id: 27, name: 'Crystal Earrings', price: '€65', image: '/images/product27.jpg' },
  { id: 28, name: 'Platinum Tie Clip', price: '€95', image: '/images/product28.jpg' },
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
