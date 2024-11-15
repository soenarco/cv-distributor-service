'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING,
      phone: {
        type: DataTypes.STRING,
        unique: true
      },
      role: {
        type: DataTypes.ENUM('SALES', 'SUPERADMIN', 'ADMIN', 'CUSTOMER'),
        defaultValue: 'SALES'
      }
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
