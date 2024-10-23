import { useState } from 'react';
import Profile from '@/app/pages/Profile/profile';
import './index.scss';


function Header() {
    
const [showMerch, setShowMerch] = useState<boolean>(false);
const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
const [showRegisterModal, setShowRegisterModal] = useState<boolean>(false);

const handleLogoClick = () => {
  
  setShowMerch(!showMerch);
};

const handleLoginClick = () => {
  setShowLoginModal(true);
};

const handleRegisterClick = () => {
  setShowRegisterModal(true);
};

const handleLogoutClick = () => {
  setIsLoggedIn(false);
};

const handleLoginSuccess = () => {
  setIsLoggedIn(true); 
  setShowLoginModal(false);
};

const handleRegisterSuccess = () => {
  setShowRegisterModal(false); 
};

function toggleProfileModal(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
  throw new Error("Function not implemented.");
}}

return (
  <div>
    <header>
      <img 
        className="logo-tecum" 
        src="https://files.oaiusercontent.com/file-yIM8lnksKpaaOddiPYnrX6sr?se=2024-09-18T14%3A09%3A03Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd98b5c75-7967-45c4-9b71-0d7cb25bcc97.webp&sig=fyHXR3gXG096gzQQkjWQlEKodmwPk7N39643RF8Zl5k%3D"
        alt="Logo Tecum"
        onClick={handleLogoClick}
      />
      <h1>TECUM</h1>
      
      <div className="auth-buttons">
        {!isLoggedIn ? (
          <>
            <button className="buttons" onClick={handleLoginClick}>Connexion</button>
            <button className="buttons" onClick={handleRegisterClick}>Inscription</button>
          </>
        ) : (
          <>
            <button className="buttons" onClick={handleLogoutClick}>Déconnexion</button>
            <button className="buttons" onClick={toggleProfileModal} >Profil
    </button>
          </>
        )}
      </div>
    </header>

    {showLoginModal && (
      <LoginModal onClose={() => setShowLoginModal(false)} onLoginSuccess={handleLoginSuccess} />
    )}
    {showRegisterModal && (
      <RegisterModal onClose={() => setShowRegisterModal(false)} onRegisterSuccess={handleRegisterSuccess} />
    )}

    {isLoggedIn && <Profile user={{
      username: "",
      email: "",
      imageUrl: ""
    }} />}


      export default Header