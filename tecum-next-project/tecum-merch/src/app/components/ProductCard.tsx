import React from 'react';
import '../styles/ProductCard.scss';

type ProductProps = {
  image: string;
  name: string;
  price: string;
};

const ProductCard: React.FC<ProductProps> = ({ image, name, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-card__image" />
      <div className="product-card__info">
        <h2 className="product-card__name">{name}</h2>
        <p className="product-card__price">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
