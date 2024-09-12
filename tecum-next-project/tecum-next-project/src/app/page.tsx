import React from "react";
import { FaSnapchat, FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-700">
        {/* Logo du site */}
        <div className="text-2xl font-bold">TECUM</div>

        {/* Boutons de Connexion et d'Inscription */}
        <div className="space-x-4">
          <button className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200">
            Connexion
          </button>
          <button className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200">
            Inscription
          </button>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="flex-grow">
        {/* Contenu du site ici */}
      </main>

      {/* Footer */}
      <footer className="flex flex-col items-center justify-between p-4 border-t border-gray-700">
        {/* Icônes des réseaux sociaux */}
        <div className="flex space-x-6">
          <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer">
            <FaSnapchat size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
            <FaPinterest size={24} />
          </a>
        </div>

        {/* Mentions légales et copyright */}
        <div className="text-center mt-4">
          <p>Mentions légales</p>
          <p>&copy; 2024 TECUM. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
