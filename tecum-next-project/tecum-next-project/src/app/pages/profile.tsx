"use client";

import React, { useState, useEffect } from "react";
import './profile.scss';

const Profile: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [angelPosition, setAngelPosition] = useState({ top: 50, left: 50 });
  const [demonPosition, setDemonPosition] = useState({ top: 200, left: 200 });

  const user = {
    username: "Noé", 
    email: "plantiernoe50@gmail.com", 
    imageUrl: "https://pngimg.com/d/demon_PNG26.png", 
  };

  const toggleProfileModal = () => {
    setIsProfileOpen((prev) => !prev);
  };

  useEffect(() => {
    const moveCharacters = () => {
      setAngelPosition({
        top: Math.random() * window.innerHeight * 0.8,
        left: Math.random() * window.innerWidth * 0.8,
      });

      setDemonPosition({
        top: Math.random() * window.innerHeight * 0.8,
        left: Math.random() * window.innerWidth * 0.8,
      });
    };

    const intervalId = setInterval(moveCharacters, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <button onClick={toggleProfileModal} className="buttons">
        Ouvrir le Profil
      </button>

      {isProfileOpen && (
        <div className="modal-overlay">
          <div className="profile-modal">
            <h2 className="profile-title">Profil de {user.username}</h2>
            <div className="profile-info">
              <img src={user.imageUrl} alt="User Avatar" className="profile-avatar" />
              <div className="profile-details">
                <p><strong>Nom d'utilisateur :</strong> {user.username}</p>
                <p><strong>Email :</strong> {user.email}</p>
              </div>
            </div>
            {/* Section pour le jeu avec l'ange et le démon */}
            <div className="game-area">
              <div
                className="character angel"
                style={{ top: `${angelPosition.top}px`, left: `${angelPosition.left}px` }}
              />
              <div
                className="character demon"
                style={{ top: `${demonPosition.top}px`, left: `${demonPosition.left}px` }}
              />
            </div>
            {/* Bouton pour fermer la modale */}
            <button className="close-button" onClick={toggleProfileModal}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
