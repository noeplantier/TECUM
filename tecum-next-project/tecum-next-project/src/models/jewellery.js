const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Jewellery = sequelize.define('Jewellery', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  category: {
    type: DataTypes.ENUM('bague', 'collier', 'bracelet', 'accessoire'),
    allowNull: false
  },
  image_url: {
    type: DataTypes.STRING
  }
}, {
  timestamps: true,
  underscored: true
});

module.exports = Jewellery;
