"use client";  

import React, { useState } from "react";
import { FaSnapchat, FaInstagram, FaFacebook, FaPinterest } from "react-icons/fa";
import angelDemon from './assets/angeldemon.jpeg';  // Import direct de l'image
import './page.scss';

interface MenuBarProps {
  showMerch: boolean;
}

function MenuBar<MenuBarProps>({ showMerch }) {
  return (
    <nav className={`menu-bar ${showMerch ? "visible" : "hidden"}`}>
      <ul className="merchandising">
        <li><a href="#" className="hover:text-gray-200">Bagues</a></li>
        <li><a href="#" className="hover:text-gray-200">Colliers</a></li>
        <li><a href="#" className="hover:text-gray-200">Bracelets</a></li>
        <li><a href="#" className="hover:text-gray-200">Accessoires</a></li>
        <li><a href="#" className="hover:text-gray-200">À propos de nous</a></li>
      </ul>
    </nav>
  );
};

function ChatBox() {
  const [messages, setMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>("");

  const sendMessage = () => {
    if (currentMessage.trim() !== "") {
      setMessages((prevMessages) => [...prevMessages, currentMessage]);
      setCurrentMessage(""); // Reset the input after sending
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`chat-bubble ${index % 2 === 0 ? "angel-bubble" : "demon-bubble"}`}>
            <p>{message}</p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input 
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          placeholder="Parle comme un ange ou un démon..." 
        />
        <button onClick={sendMessage}>Envoyer</button>
      </div>
    </div>
  );
}

function HomePage() {
  const [showMerch, setShowMerch] = useState<boolean>(false);

  const handleLogoClick = () => {
    setShowMerch(!showMerch);
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

        <h1 className="text-2xl font-bold mr-auto">TECUM</h1>
        <div>
          <button className="buttons">Connexion</button>
          <button className="buttons">Inscription</button>
        </div>
      </header>

      {/* Barre de Navigation */}
      <MenuBar showMerch={showMerch} />

      <main >
        <div className="dialogue-box">
          <div className="angel">
            <img src="./assets/angel.png" alt="Angel"/>
            <div className="speech-bubble">
              <h2>"Pourquoi es-tu ici, démon ?"</h2>
            </div>
          </div>
          <div className="demon">
            <img src="./assets/demon.jpeg" alt="Demon" className="character"/>
            <div className="speech-bubble">
              <h2>"Je suis ici pour les bijoux TECUM..."</h2>
            </div>
          </div>
        </div>
      </main>

      {/* Zone de Chat Style Pokémon */}
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
};

export default HomePage;
