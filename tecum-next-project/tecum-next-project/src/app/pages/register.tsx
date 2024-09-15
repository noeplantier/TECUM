"use client";

import React, { useState } from "react";

const Register: React.FC = () => {
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
    // Logique de validation et envoi des données pour inscription
    console.log("User registered:", formData);
  };

  return (
    <div className="register-container">
      <h2>S'inscrire à TECUM</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label>Nom d'utilisateur</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="input-field">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="input-field">
          <label>Mot de passe</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="input-field">
          <label>Confirmer le mot de passe</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <button type="submit" className="register-button">S'inscrire</button>
      </form>
    </div>
  );
};

export default Register;
