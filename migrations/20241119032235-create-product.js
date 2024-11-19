'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('product', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      package: {
        type: Sequelize.ENUM('SATUAN', 'DUS', 'KRAT'),
        allowNull: false,
        defaultValue: 'SATUAN'
      },
      totalInPackage: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      image: {
        type: Sequelize.STRING(5000),
        allowNull: true
      },
      size: {
        type: Sequelize.STRING,
        allowNull: true
      },
      harga: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      isReadyStock: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW') 
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW') 
      }
    });
  },

  async down(queryInterface, __Sequelize) {
    await queryInterface.dropTable('product');
  }
};
