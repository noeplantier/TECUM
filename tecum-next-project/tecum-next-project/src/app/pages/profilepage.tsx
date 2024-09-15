"use client";

import React, { useState } from "react";
import './ProfilePage.scss';

const ProfilePage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: 'NomUtilisateur',
    email: 'user@example.com',
    image: '', // Image aléatoire entre ange et démon
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generateRandomImage = () => {
    const random = Math.random() > 0.5 ? 'angel' : 'demon';
    setFormData({ ...formData, image: `./assets/${random}.jpeg` });
  };

  return (
    <div className="profile-page">
      <h2>Profil de {formData.username}</h2>
      <div className="profile-info">
        <img src={formData.image || './assets/default-profile.jpeg'} alt="Profile" className="profile-image" />
        <button onClick={generateRandomImage}>Changer l'image</button>

        <div className="input-field">
          <label>Nom d'utilisateur</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div className="input-field">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
      </div>
      <button className="save-button">Enregistrer les modifications</button>
    </div>
  );
};

export default ProfilePage;
