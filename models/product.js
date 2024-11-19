'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      
    }
  }

  Product.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    package: {
      type: DataTypes.ENUM('SATUAN', 'DUS', 'KRAT'),
      allowNull: false,
      defaultValue: 'SATUAN'
    },
    totalInPackage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    size: {
      type: DataTypes.STRING,
      allowNull: true
    },
    harga: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    isReadyStock: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'product',
    timestamps: true
  });

  return Product;
};
