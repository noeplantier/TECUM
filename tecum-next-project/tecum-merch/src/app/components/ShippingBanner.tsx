"use client"
import React, { useState, useEffect } from 'react';
import '../styles/ShippingBanner.scss';

const messages = [
  "🚚 Free shipping on orders over €100!",
  "🔥 30% OFF on all bracelets - Limited time offer!",
  "✨ New jewelry collection just launched!",
  "⚡ 50% OFF on select items - Grab them now!",
  "🎉 Shop the latest trends in fashion accessories!"
];

const ShippingBanner = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 4000); // Change message every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handleBannerClick = () => {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="shipping-banner" onClick={handleBannerClick}>
      <div className="shipping-banner__content">
        {messages[currentMessageIndex]}
      </div>
    </div>
  );
};

export default ShippingBanner;
