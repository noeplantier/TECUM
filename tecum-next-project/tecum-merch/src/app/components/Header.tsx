import React from 'react';
import Link from 'next/link';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link href="/">
          <a>In Gold We Trust</a>
        </Link>
      </div>
      <nav className="header__nav">
        <Link href="/shop"><a>Shop</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
      </nav>
    </header>
  );
};

export default Header;
