"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import '../../styles/Header.scss';
import { FaSearch, FaShoppingBag } from 'react-icons/fa';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  
  const toggleCartModal = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleSearchInput = () => {
    setIsSearchOpen(true);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsHeaderVisible(false); // Masquer le header en descendant
      } else {
        setIsHeaderVisible(true); // Afficher le header en montant
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isHeaderVisible ? 'visible' : 'hidden'}`}>
      <nav className="header__nav">
        <img
          className="logo-tecum"
          src="/images/DALL·E 2024-10-23 12.38.23 - A circular logo for the TECUM website, featuring a fusion of an angel and a demon. The design should have a split down the middle, with one side repre.webp"
          alt="Logo Tecum"
        />
        <div className="header__links">
          <Link legacyBehavior href="/shop"><a>JEWELRY</a></Link>
          <Link legacyBehavior href="/about"><a>CLOTHING & ACCESSORIES</a></Link>
          <Link legacyBehavior href="/contact"><a>SHOP BY</a></Link>
        </div>

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
