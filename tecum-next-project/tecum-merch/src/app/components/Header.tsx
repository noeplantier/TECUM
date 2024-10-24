"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import '../../styles/Header.scss';
import { FaSearch, FaShoppingBag } from 'react-icons/fa'; // Import des icônes

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);


  const toggleCartModal = () => {
    setIsCartOpen(!isCartOpen);
  };


  const toggleSearchInput = () => {
    setIsSearchOpen(true);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <img
          className="logo-tecum"
          src="/images/DALL·E 2024-10-23 12.38.23 - A circular logo for the TECUM website, featuring a fusion of an angel and a demon. The design should have a split down the middle, with one side repre.webp"
          alt="Logo Tecum"
        />
        <Link legacyBehavior href="/shop"><a>JEWELRY</a></Link>
        <Link legacyBehavior href="/about"><a>CLOTHING & ACCESSORIES</a></Link>
        <Link legacyBehavior href="/contact"><a>SHOP BY</a></Link>
          
        {/* Icône de recherche ou champ de recherche */}
        {isSearchOpen ? (
          <input
            type="text"
            placeholder="Recherche..."
            className="header__search-input"
            autoFocus
          />
        ) : (
          <FaSearch className="header__icon" onClick={toggleSearchInput} />
        )}


        <FaShoppingBag className="header__icon" onClick={toggleCartModal} />

        {isCartOpen && (
          <div className="cart-modal">
            <h3>Your Cart</h3>
            <p>No items in the cart yet!</p>
            <button onClick={toggleCartModal}>Close</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
