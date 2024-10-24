import React from 'react';
import Link from 'next/link';
import '../../styles/Header.scss';

const Header = () => {
  

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
      </nav>
    </header>
  );
};

export default Header;
