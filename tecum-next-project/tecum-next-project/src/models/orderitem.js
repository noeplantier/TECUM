const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Order = require('./order');
const Jewellery = require('./jewellery');

const OrderItem = sequelize.define('OrderItem', {
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  timestamps: true,
  underscored: true
});

OrderItem.belongsTo(Order, { foreignKey: 'order_id' });
OrderItem.belongsTo(Jewellery, { foreignKey: 'jewellery_id' });

module.exports = OrderItem;
