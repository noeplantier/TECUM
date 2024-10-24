import React from 'react';
import Link from 'next/link';
import '../../styles/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link legacyBehavior href="/">
          <a>In Gold We Trust</a>
        </Link>
      </div>
      <nav className="header__nav">
        <Link legacyBehavior href="/shop"><a>Shop</a></Link>
        <Link legacyBehavior href="/about"><a>About</a></Link>
        <Link legacyBehavior href="/contact"><a>Contact</a></Link>
      </nav>
    </header>
  );
};

export default Header;
