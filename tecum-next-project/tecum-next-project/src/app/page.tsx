import React from "react";
import { FaSnapchat, FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";
import './page.scss';

function MenuBar() {
  return (
    <nav className="menu-bar flex items-center justify-center p-4 border-b border-gray-700">
      <ul className="flex space-x-8 text-white">
        <li><a href="#" className="hover:text-gray-200">Bagues</a></li>
        <li><a href="#" className="hover:text-gray-200">Colliers</a></li>
        <li><a href="#" className="hover:text-gray-200">Bracelets</a></li>
        <li><a href="#" className="hover:text-gray-200">Accessoires</a></li>
        <li><a href="#" className="hover:text-gray-200">À propos de nous</a></li>
      </ul>
    </nav>
  );
}

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-700">
        {/* Logo du site */}
        <div className="text-2xl font-bold">TECUM</div>

        {/* Boutons de Connexion et d'Inscription */}
        <div className="space-x-4">
          <button className="button">Connexion</button>
          <button className="button">Inscription</button>
        </div>
      </header>

      {/* Barre de Navigation */}
      <MenuBar />

      <main className="flex-grow">
        {/* Contenu principal */}
      </main>

      <footer className="footer flex flex-col items-center justify-between p-4 border-t border-gray-700">
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

        <div className="text-center mt-4">
          <p>Mentions légales</p>
          <p>&copy; 2024 TECUM. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
