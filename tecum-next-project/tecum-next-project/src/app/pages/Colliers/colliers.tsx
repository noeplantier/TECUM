import React from "react";
import './colliers.scss';

function Colliers() {
  return (
    <div>
      <header>
        <img 
          className="logo-tecum" 
          src="https://files.oaiusercontent.com/file-yIM8lnksKpaaOddiPYnrX6sr?se=2024-09-18T14%3A09%3A03Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd98b5c75-7967-45c4-9b71-0d7cb25bcc97.webp&sig=fyHXR3gXG096gzQQkjWQlEKodmwPk7N39643RF8Zl5k%3D"
          alt="Logo Tecum"
        />
        <h1>TECUM - Colliers</h1>
        <nav className="dropdown">
          <button className="dropbtn">Catégories</button>
          <div className="dropdown-content">
            <a href="/colliers">Colliers</a>
            <a href="/bagues">Bagues</a>
            <a href="/diademes">Diadèmes</a>
            <a href="/boucles-oreilles">Boucles d'oreilles</a>
            <a href="/montres">Montres</a>
            <a href="/piercings">Piercings</a>
            <a href="/pendentifs">Pendentifs</a>
            <a href="/vetements">Vêtements</a>
          </div>
        </nav>
      </header>

      <main>
        <div className="dialogue-box">
          <div className="angel">
            <img src="https://pnghq.com/wp-content/uploads/san-miguel-arcangel-png-free-image-download-11664.png" id="angel" />
          </div>
          
          <div className="demon">
            <img src="https://pngimg.com/d/demon_PNG26.png" id="demon"/>
          </div>
        </div>
        <section>
          <h2>Colliers Thème "Anges & Démons"</h2>
          <p>Découvrez notre collection de colliers inspirée par les anges et les démons.</p>
        </section>
      </main>

      <footer className="footer">
        {/* Social media icons */}
      </footer>
    </div>
  );
}

export default Colliers;
