"use client";

import React, { useState } from "react";
import { FaSnapchat, FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";
import angelDemon from './assets/angeldemon.jpeg';  
import './page.scss';
import ProfilePage from "./pages/profilepage";
import LoginModal from"./pages/login";
import RegisterModal from "./pages/register";
import ChatBox from "./pages/chatbox"; // Import du ChatBox
import angelImage from './assets/angel.png'; // Image de l'ange
import demonImage from './assets/demon.jpeg'; // Image du démon

function HomePage() {
  const [showMerch, setShowMerch] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);

  const handleLogoClick = () => {
    setShowMerch(!showMerch);
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false); 
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); 
    setShowLoginModal(false);
  };

  const handleRegisterSuccess = () => {
    setShowRegisterModal(false); 
  };

  return (
    <div>
      <header>
        <img 
          className="logo-tecum" 
          src={angelDemon} 
          alt="Logo Tecum"
          onClick={handleLogoClick}
        />
        <h1>TECUM</h1>
        <div>
          {!isLoggedIn ? (
            <>
              <button className="buttons" onClick={handleLoginClick}>Connexion</button>
              <button className="buttons" onClick={handleRegisterClick}>Inscription</button>
            </>
          ) : (
            <>
              <button className="buttons" onClick={handleLogoutClick}>Déconnexion</button>
              <button className="buttons">Profil</button>
            </>
          )}
        </div>
      </header>

      {/* Affichage des modales */}
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} onLoginSuccess={handleLoginSuccess} />
      )}
      {showRegisterModal && (
        <RegisterModal onClose={() => setShowRegisterModal(false)} onRegisterSuccess={handleRegisterSuccess} />
      )}

      {/* Affichage conditionnel de la page profil */}
      {isLoggedIn && <ProfilePage />}

      {/* Dialogue entre l'ange et le démon */}
      <main>
        <div className="dialogue-box">
          <div className="angel">
            <h2>Angel</h2>
            <img src={angelImage} alt="Angel" className="character" />
            <div className="jewellery-items">
              <img src="./assets/earings1.jpeg" alt="Angel Jewellery" />
              <img src="./assets/necklace1.jpeg" alt="Angel Necklace" />
              <img src="./assets/rings1.jpeg" alt="Angel Rings" />
            </div>
          </div>
          
          <div className="demon">
            <h2>Demon</h2>
            <img src={demonImage} alt="Demon" className="character" />
            <div className="speech-bubble">
              
            </div>
          </div>
        </div>
      </main>

      <ChatBox />

      <footer className="footer flex flex-col items-center justify-between p-4 border-t border-gray-700">
        <div className="text-center mt-4">
          <p>Mentions légales</p>
          <p>&copy; 2024 TECUM. Tous droits réservés.</p>
        </div>
        <div className="social-medias">
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
      </footer>
    </div>
  );
}

export default HomePage;
