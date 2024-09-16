'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('jewellery', [
      {
        name: 'Bague de l\'Ange',
        description: 'Bague en argent sertie de diamants.',
        price: 199.99,
        stock: 50,
        category: 'bague',
        image_url: '/images/bague_ange.jpg',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Collier du Démon',
        description: 'Collier en or avec pendentif en rubis.',
        price: 299.99,
        stock: 30,
        category: 'collier',
        image_url: '/images/collier_demon.jpg',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('jewellery', null, {});
  }
};
