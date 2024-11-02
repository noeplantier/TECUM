// ProductList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Requête pour récupérer les produits
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des produits:", error);
      });
  }, []);

  return (
    <div>
      <h1>Liste des Produits</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}€
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
