import React from 'react';
import '../../styles/ShippingBanner.scss';

const ShippingBanner = () => {
  return (
    <div className="shipping-banner">
      <div className="shipping-banner__content">
        <span>🚚 Free shipping on orders over €100!</span>
        <span className="red">🔥 30% OFF on all bracelets - Limited time offer!</span>
        <span>✨ New jewelry collection just launched!</span>
        <span className="red">⚡ 50% OFF on select items - Grab them now!</span>
        <span>🎉 Shop the latest trends in fashion accessories!</span>
      </div>
    </div>
  );
};

export default ShippingBanner;
