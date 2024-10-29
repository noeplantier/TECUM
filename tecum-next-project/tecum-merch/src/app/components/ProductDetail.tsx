"use client"
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.scss';

// Importez la liste de produits pour obtenir les données d'un produit par ID
import products from './ProductData';

interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    longDescription: string;
    // Ajoutez d'autres propriétés de produit ici si nécessaire
}

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p: Product) => p.id === parseInt(productId || '', 10));

  // Gestion de l'état pour afficher ou masquer une longue description
  const [showFullDescription, setShowFullDescription] = useState(false);

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <section className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="product-description">
          {showFullDescription ? product.longDescription : `${product.longDescription.substring(0, 150)}...`}
        </p>
        <button onClick={handleToggleDescription}>
          {showFullDescription ? 'View Less' : 'View More'}
        </button>
        <div className="product-sizes">
          <h3>Available Sizes:</h3>
          <ul>
            {/* Ajoutez les tailles disponibles ici */}
            <li>Small</li>
            <li>Medium</li>
            <li>Large</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
