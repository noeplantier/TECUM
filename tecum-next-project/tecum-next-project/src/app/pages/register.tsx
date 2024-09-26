"use client";

import React, { useState } from "react";
import './register.scss';

interface RegisterModalProps {
  onClose: () => void;
  onRegisterSuccess: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ onClose, onRegisterSuccess }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    // Validation de l'inscription
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    // Logique d'enregistrement ici
    console.log("User registered:", formData);
    onRegisterSuccess(); // Appeler cette fonction après une inscription réussie
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="register-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Inscription à TECUM</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label>Nom d'utilisateur</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label>Mot de passe</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label>Confirmer le mot de passe</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="register-button">S'inscrire</button>
          <button type="button" onClick={onClose} className="close-button">Fermer</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
