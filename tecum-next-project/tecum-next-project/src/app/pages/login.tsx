"use client";

import React, { useState } from "react";
import './login.scss';

interface LoginModalProps {
  onClose: () => void;
  onLoginSuccess: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logique de validation et connexion utilisateur
    console.log("User logged in:", formData);
    onLoginSuccess(); // Appeler onLoginSuccess pour mettre à jour l'état de connexion
  };

  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <h2>Connexion à TECUM</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="input-field">
            <label>Mot de passe</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="login-button">Se connecter</button>
          <button type="button" onClick={onClose} className="close-button">Fermer</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
