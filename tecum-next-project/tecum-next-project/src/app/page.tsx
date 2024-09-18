"use client";

import React, { useState } from "react";
import { FaSnapchat, FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";
import './page.scss';
import ProfilePage from "./pages/profilepage";
import LoginModal from "./pages/login";
import RegisterModal from "./pages/register";
import ChatBox from "./pages/chatbox"; 

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
          src="https://files.oaiusercontent.com/file-yIM8lnksKpaaOddiPYnrX6sr?se=2024-09-18T14%3A09%3A03Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd98b5c75-7967-45c4-9b71-0d7cb25bcc97.webp&sig=fyHXR3gXG096gzQQkjWQlEKodmwPk7N39643RF8Zl5k%3D"
          alt="Logo Tecum"
          onClick={handleLogoClick}
        />
        <h1>TECUM</h1>
        <div className="auth-buttons">
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

      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} onLoginSuccess={handleLoginSuccess} />
      )}
      {showRegisterModal && (
        <RegisterModal onClose={() => setShowRegisterModal(false)} onRegisterSuccess={handleRegisterSuccess} />
      )}

      {isLoggedIn && <ProfilePage />}

      <main>
        <div className="dialogue-box">
          <div className="angel">
            <img src="https://pnghq.com/wp-content/uploads/san-miguel-arcangel-png-free-image-download-11664.png" id="angel" />
          </div>
          
          <div className="demon">
            <img src="https://pngimg.com/d/demon_PNG26.png" id="demon"/>
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
