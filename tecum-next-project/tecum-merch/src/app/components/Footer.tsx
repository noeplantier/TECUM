"use client";

import React, { useState } from 'react';
import '../../styles/Footer.scss';
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [email, setEmail] = useState('');

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(`Selected Language: ${event.target.value}`);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    if (email) {
      console.log(`Subscribed with email: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="footer" id='footer'>
      <div className="footer__top">
        <div className="footer__links">
          <a href="/shop">Shop</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/returns">Returns & Exchanges</a>
          <a href="/shipping">Shipping Info</a>
        </div>
        <div className="footer__social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
            <FaPinterestP />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="footer__middle">
        <h3>Get 10% Off Your First Order</h3>
        <p>Subscribe to our newsletter and receive a 10% discount on your first purchase.</p>
        <div className="footer__subscribe">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="footer__input"
          />
          <button onClick={handleSubscribe} className="footer__subscribe-button">Subscribe</button>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; 2024 TECUM. All Rights Reserved.</p>
        <button onClick={() => setShowLanguageModal(!showLanguageModal)} className="footer__language-button">
          Select Language
        </button>
      </div>

      {showLanguageModal && (
        <div className="language-modal">
          <select onChange={handleLanguageChange} className="language-modal__select">
            <option value="en">English</option>
            <option value="zh">Chinese</option>
            <option value="es">Spanish</option>
            <option value="hi">Hindi</option>
            <option value="ar">Arabic</option>
            <option value="pt">Portuguese</option>
            <option value="bn">Bengali</option>
            <option value="ru">Russian</option>
            <option value="ja">Japanese</option>
            <option value="fr">French</option>
          </select>
        </div>
      )}
    </footer>
  );
};

export default Footer;
