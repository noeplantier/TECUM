"use client";

import React, { useState } from "react";
import './Login.scss';

const Login: React.FC = () => {
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
  };

  return (
    <div className="login-container">
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
      </form>
    </div>
  );
};

export default Login;
