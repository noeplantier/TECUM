"use client";

import React, { useState } from "react";
import { FaSnapchat, FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";
import './page.scss';
import Profile from "./pages/Profile/profile";
import LoginModal from "./pages/Login/login";
import RegisterModal from "./pages/Register/register";
import ChatBox from "./pages/ChatBox/chatbox"; 
import './page.scss';
import Footer from "./layouts/Footer";

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

  function toggleProfileModal(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <header>
  <img 
    className="logo-tecum" 
    src="/images/DALL·E 2024-10-23 12.38.23 - A circular logo for the TECUM website, featuring a fusion of an angel and a demon. The design should have a split down the middle, with one side repre.webp"  // Remplace avec le nom exact du fichier
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
        <button className="buttons" onClick={toggleProfileModal}>Profil</button>
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

      {isLoggedIn && <Profile user={{
        username: "",
        email: "",
        imageUrl: ""
      }} />}

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


    <ChatBox/>
    <Footer/>
    </div>
  );
}

export default HomePage;
