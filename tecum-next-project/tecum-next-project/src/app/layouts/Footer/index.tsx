import React from 'react';
import './index.scss';

const Footer = () => {
  return (
    <footer className="tecum-footer">
      <div className="footer-content">
        <div className="brand-info">
          <h2>TECUM</h2>
          <p>TECUM est une marque de bijoux inspirée par l'univers des anges et des démons. Nos créations uniques capturent l'essence du mystique et du moderne, parfaites pour exprimer votre personnalité duale.</p>
        </div>
        <div className="social-medias">
          <h3>Suivez-nous :</h3>
          <a href="https://facebook.com/tecum" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://instagram.com/tecum" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram-icon.png" alt="Instagram" />
          </a>
          <a href="https://twitter.com/tecum" target="_blank" rel="noopener noreferrer">
            <img src="/images/twitter-icon.png" alt="Twitter" />
          </a>
        </div>
        <div className="contact-info">
          <h3>Contactez-nous :</h3>
          <p>Email : contact@tecum.com</p>
          <p>Téléphone : +33 6 12 34 56 78</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TECUM. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
