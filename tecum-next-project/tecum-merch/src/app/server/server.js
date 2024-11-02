// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Pour autoriser les requêtes CORS
app.use(express.json()); // Pour gérer les JSON dans les requêtes

// Simuler une base de données
const products = [
  { id: 1, name: 'Gold Necklace', price: 200 },
  { id: 2, name: 'Diamond Ring', price: 500 },
  // Ajoutez plus de produits si nécessaire
];

// Route GET pour récupérer tous les produits
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Route GET pour récupérer un produit par ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Produit non trouvé' });
  }
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur backend en cours d'exécution sur le port ${PORT}`);
});
